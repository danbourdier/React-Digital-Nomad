import React, { useState } from 'react'

import LocationControls from '../controls/LocationControls'
import MusicControls from '../controls/MusicControls'

const tracks = {
  'HongKong': ['lA0pgGNvmv4', 'gdZLi9oWNZg', 'NGcXJ-ypK3I', 'elRS0ntrEjk', 'gLXNJou6-DQ'],
  'NYC': ['iY5j1fM-9DU', 'lE9KoKgekh4', 'C9yNSHtlg7g', 'QByNsl0SUAI',],
  'Columbia': ['PyQDyI21x6U', 'lHUDw2hSua8', '1xNstpObA7s', 'qKp1f7Vn9dM'],
  'France': ['lEfkziQSmZI', 'Lguwm-zcbTs', 'IFcxEfRO3n4', 'D9znOPZX5MQ'],
  'Germany': ['M9zSFf63hDM', 'FR5co0KKmlE', 'iwGKiDsfXlU', 'UCbmg6yDqww'],
  'India': ['Q48tagwurUw', '_S__Nu_5KSU', 'hJBHSmyqv0Y', 'UCbmg6yDqww'],
  'Italy': ['wwsIGR11YmY', '8wlxTdDol70', 'U7hY7VVm7FQ', 'sNYuwmQCn-s'],
}

const locations = {
  'France': 'u3ayPmL2KN4', 'NYC': 'eZe4Q_58UTU',
  'Columbia': 'FBDLlpg1P_I', 'Germany': 'mlS89Cd176M',
  'HongKong': 'H50az3Aq7x4', 'India': 'XRU9omrRV64',
  'Italy': 'lpo62RjldVA'
}


export const locationURL = React.createContext(null)
export const musicURL = React.createContext(null)


const Player = () => {
  const [ currentCountry, setCountry ] = useState('France')

  const loadNext = ( vidId, playType ) => { 
    try {
      window[playType]?.loadVideoById({ videoId: vidId }) 
    } catch( error ) {
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