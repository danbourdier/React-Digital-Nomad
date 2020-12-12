import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/root'
import './stylesheets/controls.css'
import './stylesheets/player.css'
import './stylesheets/root.css'

if ( process.env.NODE_ENV === 'production' ) {
  console.log('production mode');
} else {
  console.log(process.env.NODE_ENV)
}

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root')
  ReactDOM.render(<Root />, root)
} )
