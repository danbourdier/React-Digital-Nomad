import React, { useState } from 'react'

const WelcomeModal = () => {
  const [ visible, changeVisibility ] = useState( true )
  const [ page, changePage ] = useState( 0 )

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

  const modalMessageChange = () => {

  }

  const handleModal = event => {
    event.stopPropagation()

    switch( event.target.name ) {
      case 'back':
        console.log('back button')
      break;
      case 'next':
        console.log('forward button')
      break;
    }

  }



  return (

    <figure id="welcome-modal-container" className="modal" style={ visible ? null : { display: 'none' } }>
      <div className="modal-content">
        <section id="welcome-modal-message">

          <span style={ page == 1 ? { display: 'visible' } : { display: 'none' } } className="hidden-modal-message"> Welcome to Take A Walk! A space where you can visit other countries from the comfort of your home! Click next below to continue.</span>
          <span style={ page == 2 ? { display: 'visible' } : { display: 'none' } } className="hidden-modal-message"> Change your current location by hovering over destination in the header above and clicking a sub-region. Click next below to continue.</span>
          <span style={ page == 3 ? { display: 'visible' } : { display: 'none' } } className="hidden-modal-message"> Lastly, listen to top local tracks by hovering over the left of the toolbar below and choose a track! If you just want a break from it all, just turn down music to take in the background noise! </span>
          <span style={ page == 4 ? { display: 'visible' } : { display: 'none' } } className="hidden-modal-message"> If you are ready, just click the 'Lets Walk' button! </span>

          <button style={ page == 5 ? { display: 'visible' } : { display: 'none' }} id="modal-button" onClick={ handleClick }> Lets Walk </button>
        </section>

        <section>
          <button name="back" onClick={ handleModal }>{ 'back' }</button>
          <button name="next" onClick={ handleModal }>{ 'next' }</button>
        </section>
      </div>
    </figure>

  )

}


export default WelcomeModal