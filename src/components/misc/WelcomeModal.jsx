import React, { useState } from 'react'

const WelcomeModal = () => {
  const [ visible, changeVisibility ] = useState( true )
  const [ modalPage, changeModalPage ] = useState( 1 )

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
        console.log( modalPage == 1 ? 1 : modalPage - 1 )
        changeModalPage( modalPage == 1 ? 1 : modalPage - 1 )
        return
      case 'next':
        changeModalPage( modalPage == 5 ? 5 : modalPage + 1 )
        console.log(modalPage == 5 ? 5 : modalPage + 1 )
        return
    }

  }



  return (

    <figure id="welcome-modal-container" className="modal" style={ visible ? null : { display: 'none' } }>
      <div className="modal-content">
        <section id="welcome-modal-message">

          <span style={ modalPage === 1 ? { display: 'flex' } : { display: 'none' } } className="hidden-modal-message">
            <span className="modal-initial-caption">
              Main controls disabled until end of intro
            </span> 
             Welcome to Take A Walk! A space where you can visit other countries from the comfort of your home! Click next to continue.</span>
          <span style={ modalPage === 2 ? { display: 'block' } : { display: 'none' } } className="hidden-modal-message"> 
            Change current location by hovering over a destination in the header above and click a sub-region. Click next to continue.
          </span>
          <span style={modalPage === 3 ? { display: 'block' } : { display: 'none' }} className="hidden-modal-message"> 
            Lastly, listen to top local tracks by hovering over the left of the toolbar below and choose a track! If you want a break from it all, just click and drag volume control on your bottom right! Click next to continue.
          </span>


          <button style={ modalPage == 4 ? { display: 'block' } : { display: 'none' }} id="modal-button" onClick={ handleClick }> Take A Walk! </button>
        </section>

        <section className="modal-controls">
          <button name="back" className="modal-controls-button" onClick={ handleModal }>{ 'back' }</button>
          <button name="next" className="modal-controls-button" onClick={ handleModal }>{ 'next' }</button>
        </section>
      </div>
    </figure>

  )

}


export default WelcomeModal