import React from 'react'

const Player = () => {


  return (
    <div>
      <div id="player"></div>
      <button onClick={() => { window.player.loadVideoById('Pca24nzCdu0')} }>Click me</button>
    </div>
  )

}

export default Player