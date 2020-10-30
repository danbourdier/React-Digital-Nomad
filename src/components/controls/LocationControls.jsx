import React, { useContext, useEffect, useState } from 'react'
import { locationURL } from '../player/Player'

const LocationControls = props => {
  // this slice of state is to track our current index within our cntxt
  const [ index, setIndex ] = useState(0)
  const [ locale, setLocale ] = useState('France')

  // this is our deconstructed React conext of the nearest provider
  const cntxt = Object.entries(useContext(locationURL))

  // To legibly understand our code we set our parent state update logic in a useEffect
  useEffect(() => {
     // once we update our locale, we bubble up our event
      props.updateCurr(locale) // just our effect to occur and update our parent
      // no cleanup method is needed since we are only updating our props

  }, [locale]) // we re-render only when there is a change to our state

  // This is our method to switch to the next location video in our player
  const nextVid = () => {
    let newIdx = index + 1
    setIndex(newIdx) // i need to increment our our curr idx
    setLocale(cntxt[newIdx % cntxt.length ][0]) // i need to track our current country
    return cntxt[newIdx % cntxt.length ][1] // we return the videoId located at the Ith idx at [1]
  }

  // This is the ooposite of above
  const prevVid = () => {
    let newIdx = index == 0 ? cntxt.length - 1 : index - 1
    setIndex( newIdx )
    setLocale(cntxt[newIdx][0])
    return cntxt[newIdx][1]
  }

  // this instantiation is to keep our youtube method calls DRY to the respective player
  const loadNext = arg => { window.locationPlayer.loadVideoById(arg) }

  return (
    <div className="location-controls-container">
      <section className="location-controls-flex-wrapper">
        <button className="location-controls-button" onClick={() => { loadNext(prevVid()) }}> { '<<' } </button>
        <button className="location-controls-button" onClick={() => { loadNext(nextVid()) } }> { '>>' } </button>

      </section>
    </div>
  )
} 



export default LocationControls


