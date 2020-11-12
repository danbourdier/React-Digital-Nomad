import React, { useContext, useState, useEffect } from 'react'
import { musicURL } from '../player/Player'

const MusicControls = props => {
  const [ index, setIndex ] = useState(0)

  const loadNext = arg => props.loadFunc(arg, 'musicPlayer')
  
  // everytime theres change (state or props), i want to load a vid with a respective key
  useEffect(() => { 
    // a non-*cleanup* effect alone would cause my application to break because the YT player
      // is not constructed in initial render. Therefore using its API calls would throw a TypeError
    return () => { 
      loadNext(nextVid())
    } // under the hood, #useEffect makes use of currying to call this function in a #componentDidUnmount fashion
    // this might lead to performance issues on a bigger application due to causing a 
      // re-render everytime we skip a track. (our state changes every call to #nextVid)
  })
 
  const preCntxt = useContext(musicURL) // our context we made use of
  let cntxt = preCntxt[props.currCountr]  // with a separation of concerns

  // This is our method to switch to the next location video in our player
  const nextVid = () => {
    let newIdx = index + 1 // because #setState is async, we have to create a new var. To keep our function sync
    setIndex(newIdx) // i need to increment our our curr idx
    return cntxt[newIdx % cntxt.length] // we return the videoId located at the Ith idx at [1]
  }

  // This is the ooposite of above
  const prevVid = () => {
    let newIdx = index == 0 ? cntxt.length - 1 : index - 1
    setIndex(newIdx)
    return cntxt[newIdx] 
  }

  // Our method that utilizes our Google Api(gapi) global imported in the header of our index.html
    // Here we consume our API and call a built-in method to the library.
  const getVideoData = vidId => (
    gapi.client.youtube.videos.list({
      'part': [
        'snippet'
      ],
      'id': 
        `${vidId[index]}`
      
    }).then(res => {
      return console.log('Success, the response is:', res)
    }) 

  )

  return (
    <div className="Music-controls-container">
      <section className="Music-controls-flex-wrapper">

        <button id="Music-controls-button" onClick={() => { getVideoData(cntxt) } }> 
          <span>{'<<'}</span>
        </button>
        {/* <button id="Music-controls-button" onClick={() => { loadNext(prevVid()) }}> 
          <span>{'<<'}</span>
        </button> */}

        <figure id="track-name-container">
          <span>Blehh!!!</span>
        </figure>

        <button id="Music-controls-button" onClick={() => { loadNext(nextVid()) }}> 
          <span>{'>>'}</span>
        </button>

      </section>
    </div>
  )
}


export default MusicControls 