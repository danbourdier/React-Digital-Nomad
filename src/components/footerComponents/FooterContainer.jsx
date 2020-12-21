import React from 'react'
import MusicContainer from '../controls/musicComponents/MusicContainer'



const FooterContainer = props => {



  return (
    <div className='footer-container'>
      <MusicContainer trackLists={ props.trackLists } loadFunc={ props.loadFunc } />  
    </div>
  )

}

export default FooterContainer