import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

// Notificaciones
import toast from 'react-hot-toast'

// Componentes
import CartItem from '../CartItem/CartItem'
import Price from '../../item/Price'
import IconCross from '@/modules/ui/Icons/IconCross'
import IconBack from '@/modules/ui/Icons/IconBack'

function Cart () {
  const { cart, clearCart, cartQuantity, cartTotalAmount } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center w-full gap-4 px-4'>
      {
        cartQuantity() === 0 &&
          <div className='flex flex-col items-center justify-center h-96'>
            <h1 className='text-4xl font-bold'>El carrito está vacío</h1>
            <button
              className='flex gap-4 mt-4 btn btn-primary btn-md'
              onClick={() => navigate(-1)}
            >
              <IconBack />
              Volver
            </button>
          </div>
      }
      {
        cartQuantity() > 0 &&
          <>
            <table className='table w-full max-w-4xl table-zebra'>
              {/* head */}
              <thead className='text-center'>
                <tr>
                  <th />
                  <th>Producto</th>
                  <th>Cant.</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => <CartItem key={item.id} {...item} />)}
              </tbody>
              <tfoot>
                <tr>
                  <th />
                  <th />
                  <th className='text-right'><h3>Total: </h3></th>
                  <th className='text-right'><Price className='text-xl text-info ' price={cartTotalAmount()} currency='ARS' /></th>
                </tr>
              </tfoot>
            </table>
            <button
              className='flex gap-4 btn btn-error btn-outline' onClick={() => {
                clearCart()
                toast.success(<p>Carrito eliminado.</p>)
              }}
            >
              <IconCross />
              Limpiar carrito
            </button>
            <Link className='btn btn-primary' to='/checkout'>Finalizar compra</Link>
          </>
    }

    </div>
  )
}

export default Cart
