import React from 'react'

function ItemListContainer ({ ...props }) {
  return (
    <div
      className='flex flex-col items-center w-full h-screen'
    >
      {props.children}
    </div>
  )
}

export default ItemListContainer
