import { useState } from 'react'
import './App.css'

// Components
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Greeting from './components/Greeting/Greeting'

import ItemCount from './components/ItemCount/ItemCount'

function App () {
  return (
    <div className='container m-auto max-w-7xl'>
      <NavBar />
      <ItemListContainer>
        <Greeting />
      </ItemListContainer>
      {/* <ItemCount initial={1} stock={10} onAdd={(count) => console.log('Cantidad agregada ', count)} /> */}
    </div>
  )
}

export default App
