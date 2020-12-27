import React, { useState } from 'react'

const LocationIndexItem = props => {
  const [ visible, changeVisibility ] = useState( false )
  const { label, videoId, subLocations, loader } = props
  // need to receive video load method with consideration to major locations

  const handleHover = () => {
    changeVisibility( !visible )
  }

  const subCityIndex = subLocations.map( ( location, idx ) => {
    const { id, name } = location

    return (
      // <li key={ idx } onClick={ () => loader(id, 'locationPlayer') }>
      <li key={ idx } onClick={ () => loader( id, 'locationPlayer', 50 ) }>
        { name }
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

