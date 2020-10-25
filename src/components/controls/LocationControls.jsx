import React, { useContext } from 'react'
import { locationURL } from '../player/Player'

const LocationControls = () => {
  const ourContext = useContext(locationURL)  

  return (
    <div className="location-controls-container">
      <section className="location-controls-flex-wrapper">
        <button id="location-controls-button" onClick={() => { window.player.loadVideoById('JGaaU8j-9BI') }}> { '<<' } </button>
        {/* <button id="location-controls-button" onClick={() => { window.player.loadVideoById('JGaaU8j-9BI') }}> { '>>' } </button> */}
        <button id="location-controls-button" onClick={() => { console.log('locationURL.location') }}> { '>>' } </button>
      </section>
    </div>
  )
}



export default LocationControls