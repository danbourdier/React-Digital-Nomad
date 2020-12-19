import React from 'react'

import LocationControls from '../controls/LocationControls'


const HeaderContainer = props => {


  const { locationURLs, updateCurr, loadFunc } = props

  return (
    <div>
      <LocationControls locationURLs={ locationURLs } updateCurr={ updateCurr } loadFunc={ loadFunc } />
    </div>
  )
}

export default HeaderContainer