function Price ({ price, currency }) {
  return (
    <p className='font-bold text-md'>
      {new Intl.NumberFormat('es-AR', { style: 'currency', currency }).format(price)}
    </p>
  )
}

export default Price
