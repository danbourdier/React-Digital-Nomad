import React, { useContext, useState, useEffect } from 'react'

import { musicURL } from '../../App'
import MusicIndexItem from './MusicIndexItem'

const MusicContainer = props => {

  const [ track, setTrack ]  = useState('<< Click to navigate tracks! >>')
  const [ visible, changeVisibility ] = useState( false )

  // I am accessing my track Ids to later pass into API calls requiring these values
  const myContext = useContext( musicURL ) // our context we made use of
  const tracks = props?.trackLists[ myContext ]  // with a separation of concerns 

  const songAPILoader = props.loadFunc


  useEffect( () => {
    try {
      loadTrack( tracks[ 0 ] )
    } catch( error ) {
      null
    }
  }, [ myContext ] )

  // This method loads the next chosne track for our player
  const loadTrack = trackId => {
    songAPILoader( trackId, 'musicPlayer' ) // loads our track to iframe
    getTrackData( trackId ) // API call to extract title from Id, and set state
  }

  // Here we consume our API and call a built-in method to the library.
  const getTrackData = ( trackId, bool = true ) => (
    gapi.client?.youtube.videos.list(
      {
        'part': [ // #list requires an object with two required keys
          'snippet' // The returned JSON gives us a key with info containing title
        ],
        'id': 
          `${ trackId }` // To fetch read-only data we need to pass in vidIds
      }
    )
    .then(res => {
      // have a condition that evaluates to below when passed as an arg
      if ( bool ) { setTrack( res?.result?.items[0]?.snippet?.title ) }
      return res.result.items[0].snippet.title 
    }) 
    .catch(err => console.log(err))
  )

  // const handleDrag = event => {
  //   console.log(event)
  // }

  const handleHover = () => {
    changeVisibility( !visible )
  }


  // const trackIndex = gapi.client?.youtube ? tracks.map( ( trackId, idx ) => {
  //   let trackName = getTrackData( trackId, 0 )
  //   trackName = trackName.jj

  //   return <MusicIndexItem key={ idx } track={ trackId } trackName={ trackName } trackLoader={ loadTrack } />
  // }) : <span> loading client API... </span>


  return (
    <div className="music-controls-container" >
      < nav className="music-controls-nav" onMouseEnter={ handleHover } onMouseLeave={ handleHover } >

        < section className="current-track-section" >
          < span className="current-track-label" > 
            { track }
          </ span>
        </ section>

        < section className="sub-track-index-section" style={visible ? { visibility: "visible" } : { visibility: "hidden" }}>
          { trackIndex }
        </ section>

      </ nav>
      
    </div>
  )
}


export default MusicContainer 




/* <section className="music-controls-flex-wrapper">

        <button id="Music-controls-button" onClick={ firstClickHandler }> 
          <span>{'<<'}</span>
        </button>

        <figure id="track-name-container">
          <span>{ formattedTrackName() }</span>
        </figure>

        <button id="Music-controls-button" onClick={ secondClickHandler }> 
          <span>{'>>'}</span>
        </button>

      </section> */

        /* <input type="range" name="" /> */