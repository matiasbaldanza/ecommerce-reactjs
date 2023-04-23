import Balancer from 'react-wrap-balancer'

// Components
import ProductTags from '../ProductTags/ProductTags'
import ProductInfo from '../ProductInfo/ProductInfo'
import ProductImage from '../ProductImage/ProductImage'
import ItemCount from '../ItemCount/ItemCount'
import ProductDescription from '../ProductDescription/ProductDescription'
import ProductSpecs from '../ProductSpecs/ProductSpecs'

function ItemDetail ({ ...props }) {
  const {
    id, name, category, brand,
    stock, price, priceCurrency,
    images, banner, description, features
  } = { ...props }

  return (
    <article className='container flex flex-col gap-6'>
      <header className='flex flex-row-reverse justify-between gap-6'>
        <div className='flex flex-col gap-4 text-xl basis-2/5 '>
          <ProductTags {...{ brand, category }} />
          <ProductInfo {...{ name, price, priceCurrency, stock }} />
          <div className='flex flex-col items-center w-full pt-10'>
            <ItemCount initial={1} stock={stock} onAdd={(count) => console.log('Cantidad agregada ', count)} />
          </div>
        </div>

        <ProductImage id={id} src={images[0]} alt={name} className='basis-3/5' />
        {/* TODO: Carousel */}
        {/* <div
          className='w-1/2 carousel'
        >
          {images.map((image, index) => (
            <figure
              key={index}
              id={`slide${index}`} className='relative w-full carousel-item'
            >
              <img src={image} className='w-full rounded-xl' />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href={`slide${index - 1}`} className='btn btn-circle'>❮</a>
                <a href={`slide${index + 1}`} className='btn btn-circle'>❯</a>
              </div>
            </figure>
          ))}
        </div> */}
      </header>
      <main className='flex flex-col items-center gap-10 card bg-base-100'>
        <ProductImage id={id} src={banner} alt={`Banner del producto ${name}`} />
        <ProductDescription {...{ name, description }} />
        <ProductSpecs features={features} />
      </main>
    </article>
  )
}

export default ItemDetail
