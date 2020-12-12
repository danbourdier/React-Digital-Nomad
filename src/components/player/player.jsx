import React, { useEffect, useState } from 'react'

import LocationControls from '../controls/LocationControls'
import MusicControls from '../controls/MusicControls'

import { tracks, locations } from '../misc/data.js'

const importDataAPI = () => import('../../utils/YTDataAPI.js')
const importMediaAPI = () => import('../../utils/YTVideoAPI.js')

export const locationURL = React.createContext(null)
export const musicURL = React.createContext(null)


const Player = () => {
  const [ currentCountry, setCountry ] = useState('France')

  useEffect( () => {
    importDataAPI()
    importMediaAPI()
  }, [])

  // This method calls our API to load a new video
  const mediaAPILoader = ( vidId, player ) => { 
    try {
      window[ player ]?.loadVideoById({ videoId: vidId }) 
    } catch( error ) {
      console.log( `The following error has occured ${ error }. Restarting application. ` )
      window.history.go()
    }
  } 


  return (
    <div className="player-component-container">

      <musicURL.Provider value={ currentCountry }>
        <MusicControls trackLists={ tracks } loadFunc={ mediaAPILoader } />
      </musicURL.Provider>

      <div id="unclickable-overlay"></div>
      <div id="musicPlayer"></div> {/* our music embedded player */}
      <div id="locationPlayer"></div>  {/* our location embedded player */}

      <LocationControls locationURLs={ locations } updateCurr={ setCountry } loadFunc={ mediaAPILoader } />

    </div>
  ) 

}

export default Player