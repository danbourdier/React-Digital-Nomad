// This script creates an <iframe> (and YouTube player)

  try {

    window.locationPlayer
    window.musicPlayer

    let locationVideoId = 'n493bDy2W-U'
    let musicVideoId = 'iY5j1fM-9DU'


    const onMusicReady = event => {
      window.musicPlayer = event.target
      document.dispatchEvent( new CustomEvent('MusicReady'))
    }

    const onLocationReady = event => {
      window.locationPlayer = event.target
      document.dispatchEvent(new CustomEvent('LocationReady'))
    }


    const onYouTubeIframeAPIReady = () => {
      window.locationPlayer = new YT.Player('locationPlayer', {
        videoId: locationVideoId,
        playerVars: {
          'iv_load_policy': 3,
          'disablekb': 1,
          'start': 180,
          // 'autoplay': 1,
          'modestbranding': 1,
          'controls': 0,
          'origin': 'https://digital-nomad.netlify.app/',
          'enablejsapi': 1,
          'rel': 0
        },
        events: {
          'onReady': onLocationReady,
          'onStateChange': onPlayerStateChange
        }
      })

      window.musicPlayer = new YT.Player('musicPlayer', {
        videoId: musicVideoId,
        playerVars: {
          'iv_load_policy': 3,
          // 'autoplay': 1,
          'modestbranding': 1,
          'start': 10,
          'controls': 0,
          'origin': 'https://digital-nomad.netlify.app/',
          'enablejsapi': 1,
          'rel': 0
        },
        events: {
          'onReady': onMusicReady,
          'onStateChange': onPlayerStateChange
        }
      })
    }
    onYouTubeIframeAPIReady()


    // The API calls this function when the player's state changes.
    let done = false;
    const onPlayerStateChange = event => {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
      }
    }
    // document.dispatchEvent( new CustomEvent('YTMediaAPILoaded') 

  } catch(err) {
    console.log(`Error loading YT Video API, see:`, err)
    
  }
