import React from 'react'
import LocationControls from '../controls/LocationControls'
import MusicControls from '../controls/MusicControls'

export const locationURL = React.createContext(null)
export const musicURL = React.createContext(null)
const Player = () => {


  return (
    <div id="location-player-container">
      <musicURL.Provider value={{ 'music': ['Zy_KuTFwot4', '4TURpXzrE5k', 'NGcXJ-ypK3I'], 'idx': 0 } }>
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