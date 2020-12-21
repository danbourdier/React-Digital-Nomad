import React from 'react'
import MusicContainer from '../controls/musicComponents/MusicContainer'



const FooterContainer = props => {



  return (
    <section className='footer-container'>
      <MusicContainer trackLists={ props.trackLists } loadFunc={ props.loadFunc } />  

    </section>
  )

}

export default FooterContainer