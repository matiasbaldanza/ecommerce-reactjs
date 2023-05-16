import ItemCard from '../ItemCard'

function ItemList ({ products }) {
  return (
    <div
      className='flex flex-wrap justify-center gap-6'
    >
      {products.map((product) => <ItemCard key={product.id} {...product} />)}
    </div>
  )
}

export default ItemList
