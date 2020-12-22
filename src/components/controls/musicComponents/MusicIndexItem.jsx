import React from 'react'


const MusicIndexItem = props => {
  const { track: trackId, trackLoader } = props


  const clickHandler = () => {
    // props.clickFunc( event.target... )
    trackLoader( trackId )
  }

  return (
    <article className="music-labels" onClick={ clickHandler }>
      <span> { trackId } </span>
    </article>
  )
}

export default MusicIndexItem