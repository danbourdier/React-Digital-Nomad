import React, { useContext } from 'react'
import { musicURL } from '../player/Player'

const MusicControls = () => {
  // const cntxt = useContext(musicURL)

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  //     'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  //   }
  // }

  // const header = new Headers(options)
  // fetch('https://spotifycharts.com/viral/jp/daily/latest', options)
  //   .then(res => console.log(res))


  return (
    <div className="Music-controls-container">
      <section className="Music-controls-flex-wrapper">
        <button id="Music-controls-button" onClick={() => { window.musicPlayer.loadVideoById('JGaaU8j-9BI') }}> {'<<'} </button>
        <button id="Music-controls-button" onClick={() => { window.musicPlayer.loadVideoById('JGaaU8j-9BI') }}> {'>>'} </button>
      </section>
    </div>
  )
}


export default MusicControls