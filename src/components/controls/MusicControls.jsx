import React, { useContext, useState, useEffect } from 'react'
import { musicURL } from '../player/Player'

const MusicControls = props => {
  const [ index, setIndex ] = useState(0)
  const [ track, setTrack]  = useState('<< Click to navigate tracks! >>')

  const loadNext = arg => props.loadFunc(arg, 'musicPlayer')
  
  // useEffect(() => { 
  //   // a non-*cleanup* effect alone would cause my application to break because the YT player
  //     // is not constructed in initial render. Therefore using its API calls would throw a TypeError
  //   return () => { 
  //     loadNext(nextVid());
  //   }
  // // }, [props])
  // }, [ index ])
  // debugger
  console.log('music Controls re-rendered')


// I am accessing array with track ids in these below
  const cntxt = useContext( musicURL ) // our context we made use of
  const tracks = props.trackLists[ cntxt ]  // with a separation of concerns

  // const preCntxt = useContext( musicURL ) // our context we made use of
  // let cntxt = preCntxt[ props.currCountr ]  // with a separation of concerns


  // This is our method to switch to the next location video in our player
  const nextVid = () => { 
    let newIdx = index + 1 // because #setState is async, we have to create a new var. To keep our function sync

    setIndex( newIdx ) // i need to increment our our curr idx
    getVideoData( tracks[newIdx % tracks.length] )
    return tracks[ newIdx % tracks.length]  // we return the videoId located at the Ith idx at [1]
    // return tracks[ newIdx % tracks.length]  // we return the videoId located at the Ith idx at [1]
  } 


  // This is the ooposite of above
  const prevVid = () => {
    let newIdx = index == 0 ? tracks.length - 1 : index - 1


    setIndex( newIdx )
    getVideoData( tracks[newIdx] )
    return tracks[ newIdx ] 
  }


  // Our method that utilizes our Google Api(gapi) global imported in the header of our index.html
    // Here we consume our API and call a built-in method to the library.
  const getVideoData = vidId => (
    gapi.client.youtube.videos.list({
      'part': [ // #list requires an object with two required keys
        'snippet' // The returned JSON gives us a key with info containing title
      ],
      'id': 
        `${vidId}` // To fetch read-only data we need to pass in vidIds
    }).then(res => {
      setTrack(res?.result?.items[0]?.snippet?.title)
      return res.result.items[0].snippet.title
    }) 
      .catch(err => console.log(err))

  )

  const firstClickHandler = () => {
    loadNext( prevVid() )
  }

  const secondClickHandler = () => {
    loadNext( nextVid() )
  }


  return (
    <div className="Music-controls-container">
      <section className="Music-controls-flex-wrapper">

        <button id="Music-controls-button" onClick={ firstClickHandler }> 
          <span>{'<<'}</span>
        </button>

        <figure id="track-name-container">
          <span>{ track }</span>
        </figure>

        <button id="Music-controls-button" onClick={  }> 
          <span>{'>>'}</span>
        </button>

      </section>
    </div>
  )
}


export default MusicControls 