import React from 'react'
import LocationControls from '../controls/LocationControls'
import MusicControls from '../controls/MusicControls'

const Player = () => {


  return (
    <div id="location-player-container">
      <MusicControls />
      <div id="player"></div>
      <LocationControls />
    </div>
  )

}

export default Player