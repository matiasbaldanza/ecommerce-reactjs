import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'

import { pluralize } from '../../../utils/textUtils'
import clsx from 'clsx'

function CartWidget ({ ...props }) {
  const { cartQuantity } = useContext(CartContext)
  const styles = clsx('dropdown sm:dropdown-end dropdown-start',
    props.className)

  console.log('Items in cart', cartQuantity())

  return (
    <div className={styles}>

      {/* Badge */}
      <label tabIndex={0} className='btn btn-ghost btn-circle'>
        <div className='indicator'>
          <CartIcon />
          {cartQuantity() > 0 &&
            <CartBadge>{cartQuantity()}</CartBadge>}
        </div>
      </label>

      {/* Cart badge menu */}
      {/* <div tabIndex={0} className='mt-3 shadow card card-compact dropdown-content w-52 bg-base-100'>
        <div className='card-body'>
          <span className='text-lg font-bold'>{pluralize(cantItems, 'artículo')}</span>
          <span className='text-info'>Subtotal: $ {subTotal}</span>
          <div className='card-actions'>
            <button className='btn btn-primary btn-block'>Ver carrito</button>
          </div>
        </div>
      </div> */}
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
