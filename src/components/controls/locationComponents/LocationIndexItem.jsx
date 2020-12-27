import React, { useState } from 'react'

const LocationIndexItem = props => {
  const [ visible, changeVisibility ] = useState( false )
  const { label, defaultVid, subLocations, loader, currMajorCity, changeMajorCity } = props


  const handleHover = () => {
    changeVisibility( !visible )
  }

  const labelHandleClick = () => {
    loader( defaultVid, 'locationPlayer', 55 )
    if ( currMajorCity !== label ) { changeMajorCity( label ) }
  } 

  const itemHandleClick = id => {
    loader( id, 'locationPlayer', 55 )
    if ( currMajorCity !== label ) { changeMajorCity( label ) }
  }



  const subCityIndex = subLocations.map( ( location, idx ) => {
    const { id, name } = location

    return (
      <li key={ idx } onClick={ () => itemHandleClick(id) }>
        { name }
      </li>
    )
  })


  return (
    <article onMouseEnter={ handleHover } onMouseLeave={ handleHover } className="city-labels" >
      
      <section className='city-label-sections'> 
        <span onClick={ labelHandleClick }> { label } </span>
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

