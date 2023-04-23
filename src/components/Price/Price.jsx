import clsx from 'clsx'

function Price ({ price, currency, ...props }) {
  return (
    <p className={clsx('font-bold text-md', props.className)}>
      {new Intl.NumberFormat('es-AR', { style: 'currency', currency }).format(price)}
    </p>
  )
}

export default Price
