const targetModal = document.querySelector( '#welcome-modal-container' )
const shinyButton = document.querySelector( '#modal-button' )


const playMedia = () => {
  // window.locationPlayer.playVideo()
  // window.musicPlayer.playVideo()
  console.log('HITT')
}

shinyButton?.addEventListener( 'click', event => {
  event.preventDefault()
  event.stopPropagation()

  playMedia()
  targetModal.style.display = 'none'
})


