function ProductImage ({ image, alt }) {
  return (
    <figure>
      <img
        className='w-full rounded-xl'
        src={image}
        alt={alt}
        title={alt}
      />
    </figure>
  )
}

export default ProductImage
