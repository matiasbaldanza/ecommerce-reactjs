import ItemCount from '../ItemCount/ItemCount'
import Balancer from 'react-wrap-balancer'

// Components
import ProductTags from '../ProductTags/ProductTags'
import ProductInfo from '../ProductInfo/ProductInfo'
import ProductImage from '../ProductImage/ProductImage'
import ProductDescription from '../ProductDescription/ProductDescription'

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
        </div>

        <ProductImage image={images[0]} alt={name} />
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
        <ProductImage image={banner} alt={`Banner del producto ${name}`} />
        <ProductDescription {...{ name, description }} />
        <section className='flex flex-col items-center gap-4'>
          <h2 className='text-2xl card-title'>
            Especificaciones
          </h2>
          <div className='grid grid-cols-4 gap-6'>
            {
              Object.entries(features).map(([key, value]) => {
                return (
                  <div
                    key={key}
                    className='relative flex flex-row gap-2 p-6 pt-16 card bg-slate-100'
                  >
                    <div
                      className='absolute w-16 rounded-lg top-1 right-1 aspect-square'
                    >
                      <img
                        src={`/public/feature-icons/${key}.png`} alt='cpu-icon'
                      />
                    </div>
                    <div>
                      <h3 className='pb-2 text-xl card-title text-primary'>
                        <Balancer>{value.title}</Balancer>
                      </h3>
                      <p
                        className='text-sm'
                      >
                        <Balancer>
                          {value.text.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}
                        </Balancer>
                      </p>
                    </div>
                  </div>
                )
              }
              )
}
          </div>
        </section>
      </main>
    </article>
  )
}

export default ItemDetail
