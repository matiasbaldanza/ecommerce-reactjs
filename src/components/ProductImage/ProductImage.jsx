import clsx from 'clsx'

function ProductImage ({ image, alt, ...props }) {
  return (
    <figure className={clsx('w-full', props.className)}>
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
