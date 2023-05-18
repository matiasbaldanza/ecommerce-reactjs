import Price from '@/modules/item/Price'
import TextWithLineBreaks from '@/modules/item/TextWithLineBreaks'

function CartItem ({ id, ...props }) {
  const { name, price, quantity } = props
  return (

    <tr>
      <td className='text-lg text-center'>
        {quantity}
      </td>
      <td className='text-lg'>
        <TextWithLineBreaks onlyBreakFirstLine styled>{name}</TextWithLineBreaks>
      </td>
      <td className='text-xl text-right'>
        <Price price={price} currency='ARS' />
      </td>
    </tr>
  )
}

export default CartItem
