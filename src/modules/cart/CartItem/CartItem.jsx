import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'

// Notificaciones
import toast from 'react-hot-toast'

// Componentes
import Price from '@/modules/item/Price'
import TextWithLineBreaks from '@/modules/item/TextWithLineBreaks'
import IconCross from '@/modules/ui/Icons/IconCross'

function CartItem ({ id, ...props }) {
  const { name, price, quantity } = props
  const { removeItemFromCart } = useContext(CartContext)

  return (
    <tr>
      <td>
        <button
          className='btn btn-circle btn-outline btn-error btn-sm'
          onClick={() => {
            removeItemFromCart(id)
            toast.success(
              <p>
                <span className='flex gap-1 font-bold flex-column'>
                  {name.split('\n')[0]}
                </span> eliminado del carrito.
              </p>
            )
          }}
        >
          <IconCross />
        </button>
      </td>
      <td className='text-lg'>
        <TextWithLineBreaks onlyBreakFirstLine styled>{name}</TextWithLineBreaks>
      </td>
      <td className='text-lg text-center'>
        {quantity}
      </td>
      <td className='text-xl text-right'>
        <Price price={price} currency='ARS' />
      </td>
    </tr>
  )
}

export default CartItem
