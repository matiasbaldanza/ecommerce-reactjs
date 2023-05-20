import clsx from 'clsx'
import IconShoppingBag from '@/modules/ui/Icons/IconShoppingBag'
import Tooltip from '@/modules/ui/Tooltip'

// Componentes
import Badge from '@/modules/ui/Badge'

function QuickAddToCart (props) {
  return (
    <Tooltip className='tooltip-primary' text='Agregar al carrito'>
      <button
        tabIndex={0}
        className={clsx('btn', props.className)}
        {...props}
      >
        <IconShoppingBag />
      </button>
    </Tooltip>
  )
}

export default QuickAddToCart
