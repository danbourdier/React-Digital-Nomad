import React from 'react'
import LocationContainer from '../controls/locationComponents/LocationContainer'


const HeaderContainer = props => {
  const { locationURLs, updateCurr, loadFunc } = props



  return (
    <div className="header-container">
      <figure className="header-logo-container"> 
        <span>OUR LOGO</span>
      </figure>

      <LocationContainer locationURLs={ locationURLs } updateCurr={ updateCurr } loadFunc={ loadFunc } />
    </div>
  )
}

export default HeaderContainer