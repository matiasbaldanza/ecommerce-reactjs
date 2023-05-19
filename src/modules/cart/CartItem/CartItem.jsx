import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'

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
          onClick={() => removeItemFromCart(id)}
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
