import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../mocks/asyncMock'
import ItemList from '../ItemList/ItemList'

function ItemListContainer ({ ...props }) {
  const [products, setProducts] = useState([])
  // const { categoryId } = useParams()
  const { categoryId } = getProducts // TEMP

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
      .then((response) => { setProducts(response) })
      .catch((error) => { console.log(error) })
  }, [categoryId])

  return (
    <div
      className='flex flex-col items-center w-full gap-4'
    >
      {props.children}
      {products.id ? <ItemList products={products} /> : <p>Cargando...</p>}
    </div>
  )
}

export default ItemListContainer
