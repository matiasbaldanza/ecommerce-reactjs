import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { Link } from 'react-router-dom'

import { pluralize } from '../../../utils/textUtils'
import clsx from 'clsx'

// Componentes
import Price from '@/modules/item/Price'

function CartWidget ({ ...props }) {
  const { cartQuantity, cartTotalAmount } = useContext(CartContext)
  const quantity = cartQuantity()

  return (
    <div className={clsx('dropdown sm:dropdown-end dropdown-start', props.className)}>

      {/* Badge */}
      <label tabIndex={0} className='btn btn-ghost btn-circle'>
        <div className='indicator'>
          <CartIcon />
          {quantity > 0 && <CartBadge>{quantity}</CartBadge>}
        </div>
      </label>

      {/* Cart badge menu */}
      <div tabIndex={0} className='mt-3 shadow card card-compact dropdown-content w-52 bg-base-100'>
        <div className='text-center card-body'>
          {quantity === 0
            ? <span className='text-lg font-bold'>El carrito está vacío</span>
            : (
              <>
                <span className='text-lg font-bold'>{pluralize(quantity, 'artículo')}</span>
                <span className='text-lg text-info'>
                  <Price price={cartTotalAmount()} currency='ARS' />
                </span>
                <div className='card-actions'>
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

function CartBadge ({ children }) {
  return (
    <span
      className={`font-extrabold border-0 text-brand bg-background badge badge-sm indicator-item
                  sm:text-background sm:bg-foreground`}
    >
      {children}
    </span>
  )
}

export default CartWidget
