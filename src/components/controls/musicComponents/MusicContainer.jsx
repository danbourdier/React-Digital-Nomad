import React, { useContext, useState, useEffect } from 'react'
// import { musicURL } from '../playerComp/Player'
import { musicURL } from '../../App'

const MusicContainer = props => {
  const [ index, setIndex ] = useState(0)
  const [ track, setTrack ]  = useState('<< Click to navigate tracks! >>')

  const songAPILoader = props.loadFunc
  
  // I am accessing my track Ids to later pass into API calls requiring these values
  const myContext = useContext( musicURL ) // our context we made use of
  const tracks = props?.trackLists[myContext]  // with a separation of concerns 

  // useEffect(() => { 
  //   try {
  //     songAPILoader( nextTrack(), 'musicPlayer' )
  //   } catch(error) {
  //     null
  //   }

  // }, [ myContext ])  


  // This method loads the next location video in our player
  const nextTrack = () => { 
    let newIdx = index + 1 // because #setState is async, we have to create a new var. To keep our function sync

    setIndex( newIdx ) // i need to increment our our curr idx
    getTrackData( tracks[newIdx % tracks?.length] )
    return tracks[ newIdx % tracks?.length ]  // we return the videoId located at the Ith idx at [1]
  } 

  // This is the ooposite of above
  const prevTrack = () => {
    let newIdx = index == 0 ? tracks?.length - 1 : index - 1

    setIndex( newIdx )
    getTrackData( tracks[ newIdx ] )
    return tracks[ newIdx ] 
  }


  // Our method that utilizes our Google Api(gapi) global imported in the header of our index.html
    // Here we consume our API and call a built-in method to the library.
  const getTrackData = vidId => (
    gapi.client.youtube.videos.list(
      {
        'part': [ // #list requires an object with two required keys
          'snippet' // The returned JSON gives us a key with info containing title
        ],
        'id': 
          `${ vidId }` // To fetch read-only data we need to pass in vidIds
      }
    )
    .then(res => {
      setTrack( res?.result?.items[0]?.snippet?.title )
      return res.result.items[0].snippet.title
    }) 
    .catch(err => console.log(err))
  )

  // const firstClickHandler = () => {
  //   songAPILoader( prevTrack(), 'musicPlayer' )
  // }

  // const secondClickHandler = () => {
  //   songAPILoader( nextTrack(), 'musicPlayer' )
  // }

  // const formattedTrackName = () => {
  //   let dupTrack = track
  //   try {
  //     if (track.length <= 31 ) {
  //       return track
  //    } else {
  //       dupTrack = dupTrack.slice(0, 25) + '...'
  //       return dupTrack
  //     }
  //   } catch( error ) {
  //     null
  //   }
    
  // }

  // const handleDrag = event => {
  //   console.log(event)
  // }

  return (
    <div className="music-controls-container">
      {/* <section className="music-controls-flex-wrapper">

        <button id="Music-controls-button" onClick={ firstClickHandler }> 
          <span>{'<<'}</span>
        </button>

        <figure id="track-name-container">
          <span>{ formattedTrackName() }</span>
        </figure>

        <button id="Music-controls-button" onClick={ secondClickHandler }> 
          <span>{'>>'}</span>
        </button>

      </section> */}

      <input type="range" name="" />
    </div>
  )
}


export default MusicContainer 