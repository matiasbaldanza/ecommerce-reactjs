import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { Link } from 'react-router-dom'

import { pluralize } from '../../../utils/textUtils'
import clsx from 'clsx'
import toast from 'react-hot-toast'

// Componentes
import Price from '@/modules/item/Price'
import IconButton from '@/modules/ui/IconButton'
import IconCross from '@/modules/ui/Icons/IconCross'
import Badge from '@/modules/ui/Badge/Badge'

// Mock cart
import useCartMock from '@/mocks/useCartMock'
import { LOAD_CART_MOCK } from '@/utils/globalConstants'

function CartWidget ({ ...props }) {
  const { cartQuantity, cartTotalAmount, clearCart } = useContext(CartContext)
  const quantity = cartQuantity()

  // Mock cart
  useCartMock(LOAD_CART_MOCK)

  return (
    <div className={clsx('dropdown dropdown-end', props.className)}>

      {/* Badge */}
      <label tabIndex={0} className='btn btn-ghost btn-circle'>
        <div className='indicator'>
          <CartIcon />
          {quantity > 0 && <Badge>{quantity}</Badge>}
        </div>
      </label>

      {/* Cart badge menu */}
      <div tabIndex={0} className='mt-3 shadow card card-compact dropdown-content w-60 bg-base-100'>
        <div className='text-center card-body'>
          {quantity === 0
            ? <span className='text-lg font-bold'>El carrito está vacío</span>
            : (
              <>
                <span className='text-lg font-bold'>{pluralize(quantity, 'artículo')}</span>
                <Price className='text-lg text-info' price={cartTotalAmount()} currency='ARS' />
                <div className='card-actions'>
                  <IconButton
                    className='w-full mt-0 btn-error btn-outline'
                    icon={<IconCross />}
                    onClick={() => {
                      clearCart()
                      toast.success(<p>Carrito eliminado.</p>)
                    }}
                  >
                    Limpiar carrito
                  </IconButton>
                  <Link
                    to='/cart'
                    className='btn btn-primary btn-block'
                  >Ver carrito
                  </Link>
                </div>
              </>
              )}
        </div>
      </div>

    </div>

  )
}

function CartIcon () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' /></svg>
  )
}

export default CartWidget
