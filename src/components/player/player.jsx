import React, { useState } from 'react'

import LocationControls from '../controls/LocationControls'
import MusicControls from '../controls/MusicControls'

import { tracks, locations } from '../misc/data.js'


export const locationURL = React.createContext(null)
export const musicURL = React.createContext(null)


const Player = () => {
  const [ currentCountry, setCountry ] = useState('France')

  const mediaAPILoader = ( vidId, player ) => { 
    try {
      window[ player ]?.loadVideoById({ videoId: vidId }) 

    } catch( error ) {
      console.log( `The following error has occured ${ error }. Restarting application. ` )
      window.history.go()
    }
  } 

  return (
    <div id="location-player-container">
      <musicURL.Provider value={ currentCountry }>
        <MusicControls trackLists={ tracks } loadFunc={ mediaAPILoader } />
      </musicURL.Provider>

      <div id="unclickable-overlay"></div>
      <div id="musicPlayer"></div> {/* our first embed player */}
      <div id="locationPlayer"></div>  {/* our location embed player */}

      {/* <locationURL.Provider value={ locations }> */}
        <LocationControls locationURLs={ locations } updateCurr={ setCountry } loadFunc={ mediaAPILoader } />
      {/* </locationURL.Provider> */}
    </div>
  ) 

}

export default Player