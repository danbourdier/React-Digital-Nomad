import React, { useContext, useState, useEffect } from 'react'
import { musicURL } from '../player/Player'

const MusicControls = props => {
  const [ index, setIndex ] = useState(0)

  // As soon as our component detects a change in our props with our compared values
  useEffect(() => {
    // cntxt = useContext(musicURL)[props.currCountr]
    // console.log(props.currCountr);
    return () => ( loadNext(nextVid()) ) // we call our function to queue our next vid in that new playlist!
  }, [props.currCountr])

  let cntxt = useContext(musicURL)[props.currCountr]

  const loadNext = arg => { window.musicPlayer.loadVideoById(arg) }
  
  // this use of #useEffect enables us to to run this in a #componentDidMount method
  // useEffect(() => { 
  //   return () => {loadNext(nextVid())}
  // }, []) // this is possible due to use of an empty array to compare against a stale value, therefore executing our method only once!


  // This is our method to switch to the next location video in our player
  const nextVid = () => {
    console.log(props.currCountr)
    let newIdx = index + 1
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