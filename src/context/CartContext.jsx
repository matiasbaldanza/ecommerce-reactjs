import { createContext, useState } from 'react'

export const CartContext = createContext({
  cart: []
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItemToCart = (item) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, item])
    } else {
      const itemInCart = cart.find(i => i.id === item.id)
      itemInCart.quantity += item.quantity
      setCart(prev => prev.filter(i => i.id !== item.id).concat(itemInCart))
    }
  }

  const removeItemFromCart = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId))
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }

  const cartQuantity = () => {
    const cantItems = cart.reduce((acc, item) => acc + item.quantity, 0)
    return cantItems
  }

  const cartTotalAmount = () => {
    const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    return totalAmount
  }

  console.log(cart)

  return (
    <CartContext.Provider value={{
      cart,
      addItemToCart,
      removeItemFromCart,
      clearCart,
      cartQuantity,
      cartTotalAmount
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
