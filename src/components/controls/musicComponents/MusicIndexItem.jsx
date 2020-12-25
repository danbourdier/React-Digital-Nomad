import React, { useState, useEffect } from 'react'


const MusicIndexItem = props => {
  const { track: trackId, trackLoader, fetchTrackData } = props
  const [ trackName, setTrackName ] = useState('')

  useEffect( () => {
    const myAsyncFunc = async() => {
      let data = await fetchTrackData(trackId, false)
      setTrackName( data )
    }
    
    myAsyncFunc()
  }, [])


  const clickHandler = () => {
    trackLoader( trackId )
  }


  return (
    <article className="music-labels" onClick={ clickHandler }>
      <span>
        { trackName.length ? trackName : 'Loading...' }
      </span>
    </article>
  )
}

export default MusicIndexItem