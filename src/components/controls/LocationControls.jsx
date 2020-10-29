import React, { useContext, useState } from 'react'
import { locationURL } from '../player/Player'

const LocationControls = () => {
  // this slice of state is to track our current index within our cntxt
  const [ index, setIndex ] = useState(0)
  const [ currentCountry, setCountry ] = useState('France')

  // this is our deconstructed React conext of the nearest provider
  const cntxt = Object.entries(useContext(locationURL))

  // this instantiation is to keep our youtube method calls DRY to the respective player
  const loadNext = arg => {window.locationPlayer.loadVideoById(arg)}

  // This is our method to switch to the next location video in our player
  const nextVid = () => {
    let newIdx = index + 1
    setIndex(newIdx) // i need to increment our our curr idx
    console.log(newIdx)
    setCountry(cntxt[newIdx % cntxt.length ][0]) // i need to track our current country
    return cntxt[newIdx % cntxt.length ][1]
  }

  // This is the ooposite of above
  const prevVid = () => {
    let newIdx = index == 0 ? cntxt.length - 1 : index - 1
    setIndex( newIdx )
    console.log(newIdx)
    return cntxt[newIdx][1]
  }

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


