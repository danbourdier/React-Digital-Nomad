import React, { useContext } from 'react'
import { musicURL } from '../player/Player'

const MusicControls = () => {
  const cntxt = useContext(musicURL)

  const loadNext = arg => { window.musicPlayer.loadVideoById(arg) }

  const nextVid = () => {
    let topic = cntxt.music
    cntxt.idx++
    return topic[cntxt.idx % topic.length]
  } 

  const prevVid = () => {
    cntxt.idx = cntxt.idx == 0 ? cntxt.music.length - 1 : cntxt.idx - 1
    return cntxt.music[cntxt.idx]
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