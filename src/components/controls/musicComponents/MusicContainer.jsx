import React, { useContext, useState, useEffect } from 'react'

import { musicGeoOrigin } from '../../App'
import MusicIndexItem from './MusicIndexItem'
import VolumeControl from '../volumeComponents/VolumeControl'

const MusicContainer = props => {
  const [ track, setTrack ]  = useState('Hover over me to choose a track!')
  const [ visible, changeVisibility ] = useState( false )

  // I am accessing my track Ids to later pass into API calls requiring these values
  const myContext = useContext( musicGeoOrigin ) // our context we made use of
  const trackCollection = props?.trackLists[ myContext ]  // with a separation of concerns 

  const songAPILoader = props.loadFunc


  useEffect( () => {
    try {
      loadTrack( trackCollection[ 0 ] )
    } catch( error ) {
      null
    }
  }, [ myContext ] )

  const handleHover = () => {
    changeVisibility( !visible )
  }


  const loadTrack = trackId => {
    songAPILoader( trackId, 'musicPlayer' ) // loads our track to iframe
    getTrackData( trackId ) // API call to extract title from Id, and set state
  }

  // Here we consume our API and call a built-in method to the library involved.
  const getTrackData = ( trackId, bool = true ) => (
    gapi.client?.youtube.videos.list(
      {
        'part': [ 'snippet' ],
        'id': `${ trackId }` // To fetch read-only data we need to pass in vidIds
      }
    ) .then(res => {
        if ( bool ) { setTrack( res?.result?.items[0]?.snippet?.title ) }
        return res.result.items[0].snippet.title 
      }) 
      .catch(err => console.log(err))
     
  )


  const trackIndex = gapi.client?.youtube ? trackCollection.map( ( trackId, idx ) => {
    console.log(trackCollection)
    return <MusicIndexItem key={ idx } track={ trackId } fetchTrackData={ getTrackData } trackLoader={ loadTrack } />
 
  }) : null



  return (
    < div className="music-controls-container" >
      < nav className="music-controls-nav" onMouseEnter={ handleHover } onMouseLeave={ handleHover } >
        < section className="current-track-section" >
          < span className="current-track-label" > 
            { track }
          </ span>
        </ section>

        < section className="hidden-index-section" style={ visible ? { visibility: "visible" } : { visibility: "hidden" } }>
          { trackIndex }
        </ section>
      </ nav>
      
      < VolumeControl  />
    </ div>
  )
}


export default MusicContainer 