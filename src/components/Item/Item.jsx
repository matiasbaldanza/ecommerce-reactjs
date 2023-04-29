import React from 'react'
import Price from '../Price/Price'

function Item ({ ...props }) {
  const { name, price, priceCurrency, stock, images } = props
  return (
    <article className='shadow-xl card w-96 bg-base-100'>
      <figure><img src={images[0]} alt='Shoes' /></figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <Price price={price} currency={priceCurrency} />
        <p>Stock disponible: {stock}</p>
        <footer className='flex justify-center justify-end mt-6 card-actions'>
          <button
            className='btn btn-primary'
          >Ver detalle
          </button>
        </footer>
      </div>
    </article>
  )
}

export default Item
