import { useState, useEffect } from 'react'
import { getProducts } from '../../mocks/asyncMock'
import ItemList from '../ItemList/ItemList'

function ItemListContainer ({ ...props }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then((response) => { setProducts(response) })
      .catch((error) => { console.log(error) })
  }, [])

  return (
    <div
      className='flex flex-col items-center w-full gap-4'
    >
      {props.children}
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
