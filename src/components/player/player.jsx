import React from 'react'


const Player = () => {

  // let tag = document.createElement('script'); // this creates our element

  // tag.src = "https://www.youtube.com/iframe_api"; // this modifies its src attr

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  let player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  let done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }

  onYouTubeIframeAPIReady()
  return (
    <div id="player-container">
      {/* <iframe 
      src="https://www.youtube.com/embed/Et7O5-CzJZg?controls=0&amp;start=264" 
      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
        
      </iframe> */}

      <div id="player"></div>
    </div>
  )

}

export default Player