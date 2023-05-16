import React from 'react'

// Data
import { CATEGORIES } from '../../utils/globalConstants'

// Componentes
import SiteLogo from '../SiteLogo/SiteLogo'
import CartWidget from '../CartWidget/CartWidget'
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu'

const cart = {
  cantItems: 2,
  items: [
    {
      id: 1,
      title: 'Celular 1',
      price: 429,
      quantity: 1
    },
    {
      id: 2,
      title: 'Celular 2',
      price: 570,
      quantity: 1
    }
  ],
  subTotal: 999
}

function NavBar () {
  return (
    <div className='navbar bg-base-100'>
      <SiteLogo />
      {/* Menu */}
      <div className='justify-between flex-1'>
        <div />
        <CategoriesMenu menuItems={CATEGORIES} />
        <CartWidget cart={cart} />
      </div>
    </div>
  )
}

export default NavBar
