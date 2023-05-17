import { createContext, useState } from 'react'

export const CartContext = createContext({
  cart: []
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItemToCart = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }])
    } else {
      console.error('El item ya está en el carrito')
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
