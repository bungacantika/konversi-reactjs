import React from 'react'
import Biner from './convert/biner'
import Desimal from './convert/desimal'
import Hexadesimal from './convert/hexadesimal'
import Oktal from './convert/oktal'

function App() {
  return (
    <div className="App-header">
    <div>
      <div className='pt-3 pb-3'>
        <Biner />
      </div>
      <div className='pt-3 pb-3'>
        <Desimal />
      </div>
      <div className='pt-3 pb-3'>
        <Oktal />
      </div>
      <div className='pt-3 pb-3'>
        <Hexadesimal />
      </div>
    </div>
    </div>
  )
}

export default App