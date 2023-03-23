import React from 'react'

function ItemListContainer ({ ...props }) {
  return (
    <div
      className='flex flex-col items-center w-full gap-4'
    >
      {props.children}
    </div>
  )
}

export default ItemListContainer
