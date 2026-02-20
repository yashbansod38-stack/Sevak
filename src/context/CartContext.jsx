'use client'

import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems]           = useState([])
  const [isCartOpen, setIsCartOpen]         = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  // ── Add item to cart ──────────────────────────────────────────
  const addToCart = useCallback((product, selectedSize) => {
    const key = `${product.id}-${selectedSize}`
    setCartItems((prev) => {
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) => i.key === key ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...product, selectedSize, qty: 1, key }]
    })
    setIsCartOpen(true)
  }, [])

  // ── Change qty (+/-) ──────────────────────────────────────────
  const changeQty = useCallback((key, delta) => {
    setCartItems((prev) =>
      prev
        .map((i) => i.key === key ? { ...i, qty: i.qty + delta } : i)
        .filter((i) => i.qty > 0)
    )
  }, [])

  // ── Remove item ───────────────────────────────────────────────
  const removeItem = useCallback((key) => {
    setCartItems((prev) => prev.filter((i) => i.key !== key))
  }, [])

  // ── Clear cart ────────────────────────────────────────────────
  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  // ── Computed values ───────────────────────────────────────────
  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0)
  const cartTotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0)

  // ── Toggles ───────────────────────────────────────────────────
  const openCart     = () => setIsCartOpen(true)
  const closeCart    = () => setIsCartOpen(false)
  const openCheckout = () => { setIsCartOpen(false); setIsCheckoutOpen(true) }
  const closeCheckout = () => setIsCheckoutOpen(false)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        isCartOpen,
        isCheckoutOpen,
        addToCart,
        changeQty,
        removeItem,
        clearCart,
        openCart,
        closeCart,
        openCheckout,
        closeCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>')
  return ctx
}
