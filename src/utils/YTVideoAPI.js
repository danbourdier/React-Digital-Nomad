// 3. This function creates an <iframe> (and YouTube player)

window.locationPlayer
window.musicPlayer

let locationVideoId = 'u3ayPmL2KN4'
let musicVideoId = 'lEfkziQSmZI'

function onYouTubeIframeAPIReady() {
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
  });

  let musicObject = new YT.Player('musicPlayer', {
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
  });
}

// 4. The API will call this function when the video player is ready.
function onMusicReady(event) {
  event.target.playVideo();
  window.musicPlayer = event.target;
}

function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}

console.log('YT Video API successfully loaded')