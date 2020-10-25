import React from 'react'

import Player from './player/Player'
//  music: { 'Tokyo': {'urls': [], 'idx': 0}, 'NYC': [], 'France': [], 'SanFrancisco': [], 'Instanbul': [], 'Shanghai': [], 'Delhi': [], 'Moscow': [], 'Toronto': []  }
export const locationURLs = React.createContext({ 'location': { urls: ['rAeN7TdGq4o', 'yIMDgPKgN1w'], 'idx': 0 }, })

const App = () => {

  return (
    <div>
      <Player />
    </div>
    
  )
  

}

export default App
