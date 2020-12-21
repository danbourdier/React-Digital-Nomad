import React, { useState } from 'react'

const LocationIndexItem = props => {
  const [ visible, changeVisibility ] = useState( false )
  const { label, videoId } = props


  const handleHover = event => {
    changeVisibility( !visible )
  }
  

  return (
    <article onMouseEnter={ handleHover } onMouseLeave={ handleHover } className="city-labels" >
      
      <section className='city-label-sections'> 
        <span> { label } </span>
      </section>

      <section className='city-label-sections' style={ visible ? { visibility: visible } : { visibility: "hidden" } } >
          <ul className="sub-city-list"> 
            <li>123</li>
            <li>2asdfasfasdfasfdasdfasf</li>
            <li>3sdfasdfsadfasf</li>
          </ul>
      </section>

    </article>
  )
}


export default LocationIndexItem

