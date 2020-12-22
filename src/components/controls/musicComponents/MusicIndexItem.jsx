import React, { useState, useEffect } from 'react'


const MusicIndexItem = props => {
  const { track: trackId, trackLoader, trackName } = props


  const clickHandler = () => {
    // props.clickFunc( event.target... )
    trackLoader( trackId )
  }

  return (
    <article className="music-labels" onClick={ clickHandler }>
      <span> { trackName } </span>
    </article>
  )
}

export default MusicIndexItem