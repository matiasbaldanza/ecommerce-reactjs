import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Greeting from './components/Greeting/Greeting'

// Temp
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App () {
  return (
    <div className='container m-auto max-w-7xl'>
      <NavBar />
      <ItemDetailContainer
        productId={3}
      />
      {/* <ItemListContainer>
        <Greeting />
      </ItemListContainer> */}
    </div>
  )
}

export default App
