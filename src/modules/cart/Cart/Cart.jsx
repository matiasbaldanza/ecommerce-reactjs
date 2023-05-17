import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { Link } from 'react-router-dom'

function Cart () {
  const { cart, removeItemFromCart, clearCart } = useContext(CartContext)

  return <div />
}

export default Cart
