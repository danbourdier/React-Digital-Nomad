import React, { useContext, useState, useEffect } from 'react'
import { musicURL } from '../player/Player'

const MusicControls = props => {
  const [ index, setIndex ] = useState(0)
  const [ currLocale, changeLocale ] = useState('France')

  const loadNext = arg => props.loadFunc(arg, 'musicPlayer')
  
  
  // everytime we detect change in props, i want to load a vid with a respective key
  useEffect(() => {
    // loadNext(prevCntxt[props.currCountr])
    return () => { 
      loadNext(nextVid())
      // loadNext(prevCntxt[props.currLocale])
    }
    // return window.musicPlayer.loadVideoById(prevCntxt[props.currCountr])
  }) 
 
  const prevCntxt = useContext(musicURL)
  let cntxt = prevCntxt[props.currCountr]

  // This is our method to switch to the next location video in our player
  const nextVid = () => {
    let newIdx = index + 1
    changeLocale(props.currCountr)
    setIndex(newIdx) // i need to increment our our curr idx
    // setLocale(cntxt[newIdx % cntxt.length][0]) // i need to track our current country
    return cntxt[newIdx % cntxt.length] // we return the videoId located at the Ith idx at [1]
  }

  // This is the ooposite of above
  const prevVid = () => {
    let newIdx = index == 0 ? cntxt.length - 1 : index - 1
    setIndex(newIdx)
    return cntxt[newIdx]
  }


  return (
    <div className="Music-controls-container">
      <section className="Music-controls-flex-wrapper">
        <button id="Music-controls-button" onClick={() => { loadNext(prevVid()) }}> {'<<'} </button>
        <button id="Music-controls-button" onClick={() => { loadNext(nextVid()) }}> {'>>'} </button>
      </section>
    </div>
  )
}


export default MusicControls 