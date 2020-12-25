import React, { useState } from 'react'


const VolumeControl = () => {
  const [ isVisible, changeVisibility ] = useState( false )



  return (
    <section className='music-volume-container'>
      <span>Music:</span>
      <input type="range" name="musicPlayer" onChange={ handleDrag } />
    </section>
  )
}


export default VolumeControl