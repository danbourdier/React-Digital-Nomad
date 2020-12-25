import React, { useState, useEffect } from 'react'


const MusicIndexItem = props => {
  const { track: trackId, trackLoader, fetchTrackData } = props
  const [ trackName, setTrackName ] = useState('')

  useEffect( () => {
    try {
      const myAsyncFunc = async () => {
        let data = await fetchTrackData(trackId, false)
        setTrackName(data)
      }

      myAsyncFunc()
    } catch( error ) {
      console.log('error fetching track names, try refreshing your page')
    }

  }, [])


  const clickHandler = () => {
    trackLoader( trackId )
  }


  return (
    <article className="hidden-index-items" onClick={ clickHandler }>
      <span>
        { trackName.length ? trackName : 'Loading...' }
      </span>
    </article>
  )
}

export default MusicIndexItem