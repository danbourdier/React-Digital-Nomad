// This script creates an <iframe> (and YouTube player)

  try {
    window.locationPlayer
    window.musicPlayer

    let locationVideoId = 'u3ayPmL2KN4'
    let musicVideoId = 'lEfkziQSmZI'

    const onYouTubeIframeAPIReady = () => {
      window.locationPlayer = new YT.Player('locationPlayer', {
        videoId: locationVideoId,
        playerVars: {
          'iv_load_policy': 3,
          'disablekb': 1,
          'start': 300,
          'autoplay': 1,
          'modestbranding': 1,
          'controls': 0,
          // 'origin': 'https://www.youtube.com/',
          'enablejsapi': 1,
          'rel': 0
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      })

      window.musicPlayer = new YT.Player('musicPlayer', {
        videoId: musicVideoId,
        playerVars: {
          'iv_load_policy': 3,
          'autoplay': 1,
          'modestbranding': 1,
          'controls': 0,
          // 'origin': 'https://www.youtube.com/',
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

    // 4. The API will call this function when the video player is ready.
    const onMusicReady = event => {
      debugger
      event.target.playVideo();
      window.musicPlayer = event.target;
    }

    const onPlayerReady = event => {
      debugger
      event.target.playVideo();
      console.log('YT Video API successfully loaded')
    }

    // 5. The API calls this function when the player's state changes.
    let done = false;
    const onPlayerStateChange = event => {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
      }
    }

  } catch(err) {
    console.log(`Error loading YT Video API, see: ${ err }`)
    
  }
