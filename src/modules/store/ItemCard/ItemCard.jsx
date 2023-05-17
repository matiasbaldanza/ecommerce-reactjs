import { Link } from 'react-router-dom'
import Balancer from 'react-wrap-balancer'
import clsx from 'clsx'

// Componentes
import TextWithLineBreaks from '../../item/TextWithLineBreaks'
import Price from '../../item/Price'
import ItemPreview from '../ItemPreview'

function ItemCard ({ ...props }) {
  const { id, name, category, price, priceCurrency, images } = props
  const styles = clsx(props.className,
                      `mx-4 sm:mx-0 border border-1 border-border card bg-background relative p-1 rounded-2xl
                                        `)

  return (
    <article className={styles}>
      <Link to={`/${id}`}>
        <p className='absolute z-50 text-xs font-bold uppercase text-background badge badge-primary top-2 right-2'>
          {category}
        </p>
        <ItemPreview className='' id={id} images={images} alt={name} />
        <div className='p-4 pt-0 card-body'>
          <h3>
            <Balancer ratio={0.5}>
              <TextWithLineBreaks onlyBreakFirstLine styled>{name}</TextWithLineBreaks>
            </Balancer>
          </h3>
          <Price className='text-xl text-green-500 sm:text-base' price={price} currency={priceCurrency} />
        </div>
      </Link>
    </article>
  )
}

export default ItemCard
