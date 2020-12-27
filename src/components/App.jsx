import React, { useEffect, useState } from 'react'

import HeaderContainer from './headerComponents/HeaderContainer'
import FooterContainer from './footerComponents/FooterContainer'
import WelcomeModal from './misc/WelcomeModal'


import { tracks, locations } from './misc/data.js'

export const musicGeoOrigin = React.createContext( null ) 

const importDataAPI = () => import( /* webpackChunkName: "YTDataAPI"  */  '../utils/YTDataAPI.js')
const importMediaAPI = () => import( /* webpackChunkName: "YTMediaAPI"  */   '../utils/YTVideoAPI.js')


const App = () => {
  const [ currentCountry, setCountry ] = useState('France')

  useEffect( () => {
    importDataAPI()
    importMediaAPI()
  }, [])

  // This method calls our API to load a new video
  const mediaAPILoader = ( vidId, player, seconds = 8 ) => {
    try {
      window[player]?.loadVideoById({ videoId: vidId, startSeconds: seconds })
    } catch (error) {
      null
    }
  }
 


  return (
    <div className="player-component-wrapper">
      <div className="player-component-container">

        < HeaderContainer locationURLs={ locations } updateCurr={ setCountry } loadFunc={ mediaAPILoader } />


        < musicGeoOrigin.Provider value={ currentCountry }>
          < FooterContainer trackLists={ tracks } mediaLoader={ mediaAPILoader } />
        </ musicGeoOrigin.Provider>

        <div id="unclickable-overlay"></div>
        <div id="musicPlayer"></div> {/* our music embedded player */}
        <div id="locationPlayer"></div>  {/* our location embedded player */}


        <WelcomeModal />

      </div>
    </div>
  )

}

export default App
