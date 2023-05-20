import clsx from 'clsx'

function Price ({ price, currency, ...props }) {
  return (
    <span className={clsx('font-bold text-md', props.className)}>
      {new Intl
        .NumberFormat('es-AR', {
          style: 'currency',
          currency,
          maximumFractionDigits: 0,
          currencyDisplay: 'symbol'
        })
        .format(price)
        .concat(` (${currency})`)}
    </span>
  )
}

export default Price
