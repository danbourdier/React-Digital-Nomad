import React from 'react'
import LocationControls from '../controls/LocationControls'
import MusicControls from '../controls/MusicControls'
// import { locationURL } from '../App'
export const locationURL = React.createContext({'location': 'hello'})

const Player = () => {


  return (
    <div id="location-player-container">
      <MusicControls />
      <div id="player"></div>

      <locationURL.Provider >
        <LocationControls />
      </locationURL.Provider>
    </div>
  )

}

export default Player