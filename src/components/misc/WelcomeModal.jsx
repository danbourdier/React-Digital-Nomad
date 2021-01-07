import React, { useState } from 'react'

const WelcomeModal = () => {
  const [ visible, changeVisibility ] = useState( true )

  const playMedia = () => {
    try {
      window.locationPlayer.playVideo()
      window.musicPlayer.playVideo()
      window['locationPlayer'].setVolume( 1 )

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
    <figure id="welcome-modal-container" className="modal" style={ visible ? null : { display: 'none' } }>
      <div className="modal-content">

            <h2 className="bold-modal-header">
              Tired of shelter-in-place?
            </h2>
             
             <div className='modal-message-body-wrap'>
              <span className='modal-message-body'>
                Take a walk around one of your favorite cities and hear local music!
              </span>
             </div>
             

          <button id="modal-button" onClick={ handleClick }> Start Now </button>

      </div>
    </figure>
  )

}


export default WelcomeModal
