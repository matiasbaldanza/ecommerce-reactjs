import { Link } from 'react-router-dom'

// Componentes
import Price from '../Price/Price'
import ProductImage from '../ProductImage/ProductImage'

function Item ({ ...props }) {
  const { id, name, price, priceCurrency, stock, images } = props
  console.log(images[0])
  return (
    <article className='shadow-xl w-72 card bg-base-100'>
      <figure><ProductImage id={id} src={images[0]} alt={name} /></figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <Price price={price} currency={priceCurrency} />
        <p>Stock disponible: {stock}</p>
        <footer className='flex justify-center mt-6 card-actions'>
          <Link
            className='btn btn-primary'
            to={`/${id}`}
          >Ver detalle
          </Link>
        </footer>
      </div>
    </article>
  )
}

export default Item
