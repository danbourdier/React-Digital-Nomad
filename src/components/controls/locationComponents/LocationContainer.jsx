import React, { useEffect, useState } from 'react'

import LocationIndexItem from './LocationIndexItem.jsx'

const LocationContainer = props => {
  const [ locale, setLocale ] = useState('France')

  const parsedLocationIDs = Object.entries( props.locationURLs )
  const videoAPILoader = props.loadFunc

  useEffect(() => {
      props.updateCurr( locale )
  }, [ locale ])

  const cityIndex = parsedLocationIDs.map( ( city, idx ) => {
    const cityName = city[ 0 ]
    const subLocations = city[ 1 ]
    const defaultId = city[ 1 ][ 0 ].id

    return < LocationIndexItem 
              currMajorCity={ locale }
              changeMajorCity={ setLocale }
              key={ idx } 
              label={ cityName } 
              videoId={ defaultId } 
              subLocations={ subLocations } 
              loader={ videoAPILoader } 
           />
  })



  return (
    <div className="location-controls-container">
      { cityIndex }
    </div>
  )
} 



export default LocationContainer


