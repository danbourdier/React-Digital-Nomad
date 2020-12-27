import React, { useState, useEffect } from 'react'

const MusicIndexItem = props => {
  const { track, trackLoader, fetchTrackData } = props
  const [ trackName, setTrackName ] = useState('')


  const myAsyncFunc = async() => {
    let data = await fetchTrackData(track, false)
    setTrackName(data)
  }

  useEffect( () => {
    try {
      myAsyncFunc()
    } catch( error ) {
      console.log('error fetching track names, try refreshing your page')
    } 

  }, [])

  useEffect( () => {
    try {
      myAsyncFunc()
    } catch (error) {
      console.log('error fetching track names, try refreshing your page')
    } 

  }, [ track ])


  const clickHandler = () => {
    trackLoader( track )
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