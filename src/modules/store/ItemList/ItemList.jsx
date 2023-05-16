import Item from '@/modules/item/Item'

function ItemList ({ products }) {
  return (
    <div
      className='flex flex-wrap justify-center gap-6'
    >
      {products.map((product) => <Item key={product.id} {...product} />)}
    </div>
  )
}

export default ItemList
