import { useState } from 'react'
import { removeNumberInputControls } from '@/styles/styleUtils'
import clsx from 'clsx'

// Componentes
import CartIcon from '@/modules/ui/Icons/CartIcon'
import IconButton from '@/modules/ui/IconButton'

function ItemCount ({ initial, stock, onAdd }) {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if (quantity < stock) setQuantity(prevCount => prevCount + 1)
  }

  const decrement = () => {
    if (quantity > 1) setQuantity(prevCount => prevCount - 1)
  }

  return (
    <div className='relative w-40'>
      {stock === 0 && <p className='text-sm text-center text-gray-500'>Sin stock</p>}
      {stock === 1 && <p className='text-sm text-center text-gray-500'>Última unidad disponible</p>}
      {stock > 1 && (
        <>
          <button
            className='absolute top-0 left-0 w-6 rounded-r-none btn btn-primary'
            onClick={decrement}
          > -
          </button>
          <input
            type='number'
            min={1}
            max={stock}
            step={1}
            className={clsx('w-full px-12 text-center input input-bordered arrow-hide', removeNumberInputControls)}
            value={quantity}
            readOnly
          />
          <button
            className='absolute top-0 right-0 w-6 rounded-l-none btn btn-primary'
            onClick={increment}
          > +
          </button>
        </>
      )}
      {stock > 0 && (
        <IconButton
          className='w-full mt-2 btn-primary btn-sm sm:btn-md'
          icon={<CartIcon />}
          onClick={() => onAdd(quantity, stock)}
        >
          Agregar&nbsp;&nbsp;
        </IconButton>
      )}
    </div>
  )
}

export default ItemCount
