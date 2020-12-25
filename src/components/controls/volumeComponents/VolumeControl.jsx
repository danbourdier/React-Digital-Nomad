import React, { useState } from 'react'


const VolumeControl = () => {
  const [ isVisible, changeVisibility ] = useState( false )

  const handleDrag = event => {
    const targetEle = event.target.name

    switch (targetEle) {
      case 'musicPlayer':
        window[targetEle].setVolume(event.target.value)
        break
      case 'locationPlayer':
        window[targetEle].setVolume(event.target.value)
        break
    }
  }

  const handleHover = event => {
    changeVisibility( !isVisible )
  }


  return (
    <div className='music-volume-container'>
      <section className="volume-container-sections">
        <span>Music:</span>
        <input type="range" name="musicPlayer" onChange={ handleDrag } />
      </section >
      
      <section className="volume-container-sections" style={ isVisible ? { visibility: "visible" } : { visibility: "hidden" } }>
        <span>Background Noise:</span>
        <input type="range" name="locationPlayer" onChange={ handleDrag } />
      </section>
    </div>
  )

}


export default VolumeControl