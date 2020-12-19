import React from 'react'

const LocationIndexItem = props => {
  const { label, videoId } = props


  return (
    <article className="city-label" >
      <section> { label } </section>
      <section> { videoId } </section>
    </article>
  )
}


export default LocationIndexItem

