import React, { useState } from 'react'

const WelcomeModal = () => {
  const [ visible, changeVisibility ] = useState( true )


  const playMedia = () => {
    try {
      window.locationPlayer.playVideo()
      window.musicPlayer.playVideo()
      console.log('HITT')

    } catch( error ) {
      console.log('Error at Modal Component, see:', error)
    }
  }

  const handleClick = event => {
    event.preventDefault()
    event.stopPropagation()

    playMedia()
    changeVisibility( !visible )
  }

  return (
    <figure id="welcome-modal-container" className="modal" style={ visible ? null : {display: 'none' } }>
      <section className="modal-content">
        <span id="welcome-modal-message"></span>
        <button id="modal-button" onClick={ handleClick }> Lets Go! </button>
      </section>
    </figure>
  )

}


export default WelcomeModal