import { useState } from 'react'
import './App.css'

// Components
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Greeting from './components/Greeting/Greeting'

function App () {
  return (
    <div className='container m-auto max-w-7xl'>
      <NavBar />
      <ItemListContainer>
        <Greeting />
      </ItemListContainer>
    </div>
  )
}

export default App
