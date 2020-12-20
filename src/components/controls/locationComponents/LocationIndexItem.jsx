import React from 'react'

const LocationIndexItem = props => {
  const { label, videoId } = props


  return (
    <article className="city-labels" >
      <section className='city-label-sections'> 
        <span> { label } </span>
      </section>
      {/* <section className='city-label-sections'> { videoId } </section> */}
    </article>
  )
}


export default LocationIndexItem

