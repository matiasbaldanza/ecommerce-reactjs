import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import Price from '../../item/Price'

// Componentes
import CartItem from '../CartItem/CartItem'

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
    <div className='flex flex-col items-center w-full gap-4 px-4'>
      <table className='table w-full max-w-4xl table-zebra'>
        {/* head */}
        <thead className='text-center'>
          <tr>
            <th>Cant.</th>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>
        {cart.map(item => <CartItem key={item.id} {...item} />)}
        <tbody />
        <tfoot>
          <tr>
            <th />
            <th className='text-right'><h3>Total: </h3></th>
            <th className='text-right'><Price className='text-xl text-info ' price={cartTotalAmount()} currency='ARS' /></th>
          </tr>
        </tfoot>
      </table>

      <button className='flex gap-4 btn btn-error btn-outline' onClick={() => clearCart()}>
        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' /></svg>
        Limpiar carrito
      </button>
      <Link className='btn btn-primary' to='/checkout'>Finalizar compra</Link>
    </div>
  )
}

export default Cart
