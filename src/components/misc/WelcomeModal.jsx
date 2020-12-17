import React from 'react'

const WelcomeModal = () => {

  const targetModal = document.querySelector('#welcome-modal-container')

  const playMedia = () => {
    // window.locationPlayer.playVideo()
    // window.musicPlayer.playVideo()
    console.log('HITT')
  }

  const handleClick = event => {
    event.preventDefault()
    event.stopPropagation()

    playMedia()
    targetModal.style.display = 'none'
  }

  return (
    <figure id="welcome-modal-container" className="modal">
      <section className="modal-content">
        <span id="welcome-modal-message"></span>
        <button id="modal-button" onClick={ handleClick }> Lets Go! </button>
      </section>
    </figure>
  )

}


export default WelcomeModal