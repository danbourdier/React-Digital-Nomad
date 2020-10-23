import React from 'react'


const LocationControls = () => (
  <div className="location-controls-container">
    <section className="location-controls-flex-wrapper">
      <button id="location-controls-button" onClick={() => { window.player.loadVideoById('Pca24nzCdu0') }}>Previous</button>
      <button id="location-controls-button">Next</button>
    </section>
  </div>
)


export default LocationControls