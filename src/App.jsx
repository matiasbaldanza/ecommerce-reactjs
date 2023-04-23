import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import NavBar from './components/NavBar/NavBar'
import Greeting from './components/Greeting/Greeting'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

// Temp

function App () {
  return (
    <div className='container m-auto max-w-7xl'>
      {/*       <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 - NO ENCONTRADO</h1>} />
        </Routes>
      </BrowserRouter> */}

      {/* TEST ItemListCointainer */}
      {/*       <ItemListContainer>
        <Greeting />
      </ItemListContainer> */}

      {/* TEST ItemDetailContainer */}
      {/* <ItemDetailContainer productId='alienware-m15-r7-240hz-core-i7-12700h-16gb-512gb-rtx-3070ti' /> */}
      {/* <ItemDetailContainer productId='msi-pulse-gl76-17-3-144hz-i7-12th-gen-16gb-512gb-rtx-3070-8gb' /> */}
      <ItemDetailContainer productId='lenovo-ideapad-gaming-3-120hz-ryzen-5-8gb-256gb-rtx-3050ti' />

    </div>
  )
}

export default App
