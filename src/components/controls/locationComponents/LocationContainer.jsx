import React, { useEffect, useState } from 'react'

import LocationIndexItem from './LocationIndexItem.jsx'

const LocationContainer = props => {
  // const [ index, setIndex ] = useState(0)
  const [ locale, setLocale ] = useState('France')

  const videoAPILoader = props.loadFunc
  // this is our deconstructed React conext of the nearest provider
  const parsedLocationIDs = Object.entries( props.locationURLs )

  // To legibly understand our code we set our parent state update logic in a useEffect
  useEffect(() => {
     // once we update our locale, we bubble up our event
      props.updateCurr( locale )
  }, [ locale ]) // we re-render only when there is a change to our state

  // // This is our method to switch to the next location video in our player
  // const nextVideo = () => {
  //   let newIdx = index + 1

  //   setIndex( newIdx ) // i need to increment our our curr idx
  //   setLocale( parsedLocationIDs[ newIdx % parsedLocationIDs.length ][0]) // to track our current country
  //   return parsedLocationIDs[ newIdx % parsedLocationIDs.length ][1] // we return the videoId located at the Ith idx at [1]
  // }

  // // This is the ooposite of above
  // const prevVideo = () => {
  //   let newIdx = index == 0 ? parsedLocationIDs.length - 1 : index - 1

  //   setIndex( newIdx )
  //   setLocale( parsedLocationIDs[ newIdx ][0] ) 
  //   return parsedLocationIDs[ newIdx ][1] 
  // } 


  // // Our click handlers
  // const firstClickHandler = () => {
  //   videoAPILoader( prevVideo(), 'locationPlayer' )
  // }

  // const secondClickHandler = () => {
  //   videoAPILoader( nextVideo(), 'locationPlayer' )
  // }

  const cityIndex = parsedLocationIDs.map( ( city, idx ) => {
    const cityName = city[ 0 ]
    const locationVidId = city[ 1 ]


    return <LocationIndexItem key={idx} label={cityName} videoId={locationVidId } />
  })

  return (
    <div className="location-controls-container">
      {/* <section className="location-controls-flex-wrapper">

        <button className="location-controls-button" onClick={ firstClickHandler }>
           <span>{'<<'}</span>
        </button>

        <figure id="location-name-container">
          <span>{ locale }</span> 
        </figure>

        <button className="location-controls-button" onClick={ secondClickHandler }>
          <span>{'>>'}</span>
        </button>

      </section> */}

      { cityIndex }

    </div>
  )
} 



export default LocationContainer

