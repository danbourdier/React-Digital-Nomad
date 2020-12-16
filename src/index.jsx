import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/root'
import './stylesheets/controls.css'
import './stylesheets/player.css'
import './stylesheets/root.css'

const domMutationImport = () => import('./utils/listeners')

if ( process.env.NODE_ENV !== 'production' ) {
  console.log('DEV mode')
}



document.addEventListener('DOMContentLoaded', () => {
  domMutationImport()

  const root = document.getElementById('root')
  ReactDOM.render(<Root />, root)
} )
