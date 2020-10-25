import React from 'react'
import LocationControls from '../controls/LocationControls'
import MusicControls from '../controls/MusicControls'
// import { locationURL } from '../App'
export const locationURL = React.createContext(null)

const Player = () => {


  return (
    <div id="location-player-container">
      <MusicControls />
      <div id="player"></div>

      <locationURL.Provider value={{'location': 'hello'}}>
        <LocationControls />
      </locationURL.Provider>
    </div>
  )

}

export default Player