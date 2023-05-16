import { Link } from 'react-router-dom'
import Balancer from 'react-wrap-balancer'
import clsx from 'clsx'

// Componentes
import TextWithLineBreaks from '../../item/TextWithLineBreaks'
import Price from '../../item/Price'
import ProductPreview from '../ItemPreview'

function ItemCard ({ ...props }) {
  const { id, name, price, priceCurrency, stock, images } = props
  const styles = clsx(props.className, `border border-2 border-border card bg-background
                                        `)

  return (
    <article className={styles}>
      <ProductPreview id={id} images={images} alt={name} />
      <div className='card-body'>
        <h2 className='card-title'>
          <Balancer>
            <TextWithLineBreaks>{name}</TextWithLineBreaks>
          </Balancer>
        </h2>
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

export default ItemCard
