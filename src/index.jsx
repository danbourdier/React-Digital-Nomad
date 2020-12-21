import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/root'
import './stylesheets/header.css'
import './stylesheets/controls.css'
import './stylesheets/player.css'
import './stylesheets/root.css'
import './stylesheets/welcomeModal.css'
import './stylesheets/locationControls.css'
import './stylesheets/musicControls.css'



if ( process.env.NODE_ENV !== 'production' ) {
  console.log('DEV mode')
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById( 'root' )
  
  ReactDOM.render(<Root />, root)
} )



