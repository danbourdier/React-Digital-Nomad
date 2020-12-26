import React, { useState } from 'react'

const LocationIndexItem = props => {
  const [ visible, changeVisibility ] = useState( false )
  const { label, videoId, subLocations } = props
  // need to receive video load method with consideration to major locations

  const handleHover = event => {
    changeVisibility( !visible )
  }

  const subCityIndex = subLocations.map( ( location, idx ) => {

    return (
      <li key={ idx }>
        Sub City
      </li>
    )
  })


  return (
    <article onMouseEnter={ handleHover } onMouseLeave={ handleHover } className="city-labels" >
      
      <section className='city-label-sections'> 
        <span> { label } </span>
      </section>

      <section className='city-label-sections' style={ visible ? { visibility: visible } : { visibility: "hidden" } } >
          <ul className="sub-city-list"> 
            { subCityIndex }
          </ul>
      </section>

    </article>
  )

}


export default LocationIndexItem

