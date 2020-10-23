import React from 'react'


const LocationControls = () => (
  <div className="location-controls-container">
    <section className="location-controls-flex-wrapper">
      <button id="location-controls-button" onClick={() => { window.player.loadVideoById('JGaaU8j-9BI') }}> { '<<' } </button>
      <button id="location-controls-button" onClick={() => { window.player.loadVideoById('JGaaU8j-9BI') }}> { '>>' } </button>
    </section>
  </div>
)


export default LocationControls