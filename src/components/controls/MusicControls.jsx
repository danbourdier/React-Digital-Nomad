import React from 'react'


const MusicControls = () => (
  <div className="Music-controls-container">
    <section className="Music-controls-flex-wrapper">
      <button id="Music-controls-button" onClick={() => { window.player.loadVideoById('JGaaU8j-9BI') }}> {'<<'} </button>
      <button id="Music-controls-button" onClick={() => { window.player.loadVideoById('JGaaU8j-9BI') }}> {'>>'} </button>
    </section>
  </div>
)


export default MusicControls