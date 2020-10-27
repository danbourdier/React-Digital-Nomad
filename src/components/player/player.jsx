import React from 'react'
import LocationControls from '../controls/LocationControls'
import MusicControls from '../controls/MusicControls'

export const locationURL = React.createContext(null)
export const musicURL = React.createContext(null)
const Player = () => {

// i want to structure context so its easier to logically manipulate both at once
  // if we have a japan key in location, i then want to switch to a key in music that matches the location right now.
  return (
    <div id="location-player-container">
      <musicURL.Provider value={{ 'music': ['lA0pgGNvmv4', 'gdZLi9oWNZg', 'NGcXJ-ypK3I'], 'idx': 0 } }>
        <MusicControls />
      </musicURL.Provider>

      <div id="musicPlayer"></div>
      <div id="locationPlayer"></div>

      <locationURL.Provider value={{ 'location': ['yIMDgPKgN1w', '478TeAxm12g', 'BHACKCNDMW8'], 'idx': 0 }}>
        <LocationControls />
      </locationURL.Provider>
    </div>
  )

}

export default Player