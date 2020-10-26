import React, { useContext } from 'react'
import { locationURL } from '../player/Player'

const LocationControls = () => {
  const cntxt = useContext(locationURL)  

  const loadNext = arg => {window.locationPlayer.loadVideoById(arg)}

  const nextVid = () => {
    let topic = cntxt.location
    cntxt.idx++
    return topic[cntxt.idx % topic.length ]

  }

  const prevVid = () => {
    cntxt.idx = cntxt.idx == 0 ? cntxt.location.length - 1 : cntxt.idx - 1
    return cntxt.location[cntxt.idx]
  }

  return (
    <div className="location-controls-container">
      <section className="location-controls-flex-wrapper">
        <button className="location-controls-button" onClick={() => { loadNext(prevVid()) }}> { '<<' } </button>
        <button className="location-controls-button" onClick={() => { loadNext(nextVid()) } }> { '>>' } </button>

      </section>
    </div>
  )
}



export default LocationControls