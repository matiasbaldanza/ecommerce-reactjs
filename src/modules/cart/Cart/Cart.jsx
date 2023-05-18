import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import Price from '../../item/Price'

function Cart () {
  const { cart, clearCart, cartQuantity, cartTotalAmount } = useContext(CartContext)
  const navigate = useNavigate()

  if (cartQuantity() === 0) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold'>El carrito está vacío</h1>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    )
  }

  return (
    <>
      {cart.map(item => <CartItem key={item.id} {...item} />)}
      <h3>Total: $<Price className='text-xl text-info ' price={cartTotalAmount} currency='ARS' /></h3>
      <button onClick={() => clearCart()}>Limpiar carrito</button>
      <Link to='/checkout'>Finalizar compra</Link>
    </>
  )
}

export default Cart
