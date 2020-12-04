import React, { useState } from 'react'

import LocationControls from '../controls/LocationControls'
import MusicControls from '../controls/MusicControls'

import { tracks, locations } from '../misc/data.js'


export const locationURL = React.createContext(null)
export const musicURL = React.createContext(null)


const Player = () => {
  const [ currentCountry, setCountry ] = useState('France')

  const loadNext = ( vidId, playType ) => { 
    try {
      window[playType]?.loadVideoById({ videoId: vidId }) 
    } catch( error ) {
      console.log( `The following error has occured ${ error }. Restarting application. ` )
      window.history.go()
    }

  } 
  // our dynamic API caller passed to respective players ^

  return (
    <div id="location-player-container">
      <musicURL.Provider value={ currentCountry }>
        <MusicControls trackLists={ tracks } loadFunc={ loadNext } />
      </musicURL.Provider>

      <div id="unclickable-overlay"></div>
      <div id="musicPlayer"></div> {/* our first embed player */}
      <div id="locationPlayer"></div>  {/* our location embed player */}

      <locationURL.Provider value={ locations }>
        <LocationControls updateCurr={ setCountry } loadFunc={ loadNext } />
      </locationURL.Provider>
    </div>
  ) 

}

export default Player