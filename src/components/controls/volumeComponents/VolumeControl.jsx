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

  const handleHover = () => {
    changeVisibility( !isVisible )
  }



  return (
    <div className='music-volume-container' onMouseEnter={ handleHover } onMouseLeave={ handleHover }>
      <section className="volume-container-sections">
        <span>Music:</span>
        <input type="range" name="musicPlayer" onChange={ handleDrag } />
      </section >

      <section className="volume-container-sections hidden-index-section" style={ isVisible ? { visibility: "visible" } : { visibility: "hidden" } }>
        <article className="hidden-index-items volume-article">
          <span>Background:</span>
          <input type="range" name="locationPlayer" onChange={ handleDrag } />
        </article>
      </section>
    </div>
  )

}


export default VolumeControl