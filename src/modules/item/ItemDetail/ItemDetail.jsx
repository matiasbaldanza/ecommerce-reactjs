import { useState, useContext } from 'react'
import { CartContext } from '@/context/CartContext'

// Components
import ProductTags from '../ProductTags'
import ProductInfo from '../ProductInfo'
import ProductImage from '../ProductImage'
import ItemCount from '../ItemCount'
import ProductDescription from '../ProductDescription'
import ProductSpecs from '../ProductSpecs'

function ItemDetail ({ ...props }) {
  const [quantityAddedToCart, setQuantityAddedToCart] = useState(0)
  const { addItemToCart } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAddedToCart(quantity)

    const item = {
      id, name, price, quantity
    }

    addItemToCart(item)
  }

  const {
    id, name, category, brand,
    stock, price, priceCurrency,
    images, banner, description, features
  } = { ...props }

  return (
    <article className='container flex flex-col gap-6'>
      <header className='flex flex-col-reverse justify-between gap-6 mx-4 sm:flex-row-reverse'>
        <div className='flex flex-col items-center gap-4 text-xl sm:items-start basis-2/5'>
          <ProductTags {...{ brand, category }} />
          <ProductInfo {...{ name, price, priceCurrency, stock }} />
          <div className='flex flex-col items-center w-full pt-0 sm:pt-10 sm:items-start'>
            {/* TODO: Agregar al carrito */}
            <ItemCount
              initial={1}
              stock={stock}
              onAdd={() => quantityAddedToCart > 0 && handleOnAdd(quantityAddedToCart)}
            />
          </div>
        </div>

        <ProductImage id={id} src={images[0]} alt={name} className='basis-3/5' />
        {/* TODO: Carousel */}
      </header>
      <main className='flex flex-col items-center gap-10 mx-4 card bg-base-100'>
        {
          banner && banner.length > 0 &&
            <ProductImage id={id} src={banner} alt={`Banner del producto ${name}`} />
        }
        <ProductDescription {...{ name, description }} />
        {features && <ProductSpecs features={features} />}
      </main>
    </article>
  )
}

export default ItemDetail
