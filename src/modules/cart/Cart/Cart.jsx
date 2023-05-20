import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

// Notificaciones
import toast from 'react-hot-toast'

// Componentes
import CartItem from '../CartItem/CartItem'
import Price from '../../item/Price'
import CrossIcon from '@/modules/ui/Icons/CrossIcon'
import BackIcon from '@/modules/ui/Icons/BackIcon'
import IconButton from '@/modules/ui/IconButton'
import CartIcon from '@/modules/ui/Icons/CartIcon'

function Cart () {
  const { cart, clearCart, cartQuantity, cartTotalAmount } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center w-full gap-4 px-4'>
      {
        cartQuantity() === 0 &&
          <div className='flex flex-col items-center justify-center h-96'>
            <h1 className='text-4xl font-bold'>El carrito está vacío</h1>
            <IconButton
              className='mt-4 btn-primary btn-md'
              icon={<BackIcon />}
              onClick={() => navigate(-1)}
            >
              Volver
            </IconButton>
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
                  <th>Subtotal</th>
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

            {/* Acciones del carrito */}
            <div className='flex flex-col justify-between w-full max-w-4xl gap-2 sm:flex-row'>
              <IconButton
                className='mr-auto btn-primary btn-outline btn-md'
                icon={<BackIcon />}
              >
                <Link to='/'>Seguir comprando</Link>
              </IconButton>

              <IconButton
                className='btn-error btn-outline'
                icon={<CrossIcon />}
                onClick={() => {
                  clearCart()
                  toast.success(<p>Carrito eliminado.</p>)
                }}
              >
                Limpiar carrito
              </IconButton>
              <IconButton
                className='btn-primary'
                icon={<CartIcon />}
              >
                <Link to='/checkout'>Finalizar compra</Link>
              </IconButton>
            </div>
          </>
    }

    </div>
  )
}

export default Cart
