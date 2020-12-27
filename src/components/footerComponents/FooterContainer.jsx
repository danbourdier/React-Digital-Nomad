import React from 'react'
import MusicContainer from '../controls/musicComponents/MusicContainer'



const FooterContainer = props => {



  return (
    <div className='footer-container'>
      <MusicContainer trackLists={ props.trackLists } loadFunc={ props.mediaLoader } />  
    </div>
  )

}

export default FooterContainer