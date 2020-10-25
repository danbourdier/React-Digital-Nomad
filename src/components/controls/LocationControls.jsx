import React, { useContext } from 'react'
import { locationURL } from '../player/Player'

const LocationControls = () => {
  const cntxt = useContext(locationURL)  

  const loadNext = arg => {window.player.loadVideoById(arg)}

  const nextVid = () => { // i want to create a function that returns the next url in an array. In respect to bounds
    let topic = cntxt.location
    cntxt.idx++
    return topic[cntxt.idx % topic.length - 1 ]

  }

  const prevVid = () => {
    let curr = cntxt.idx
    curr = curr == 0 ? cntxt.location.length - 1 : curr - 1

    return cntxt.location[curr]

  }



  return (
    <div className="location-controls-container">
      <section className="location-controls-flex-wrapper">
        <button className="location-controls-button" onClick={() => { loadNext('JGaaU8j-9BI') }}> { '<<' } </button>
        {/* <button className="location-controls-button" onClick={() => { window.player.loadVideoById(cntxt.location[0]) }}> { '>>' } </button> */}
        <button className="location-controls-button" onClick={() => { cntxt.idx++; console.log(cntxt.idx) }}> { '>>' } </button>

      </section>
    </div>
  )
}



export default LocationControls