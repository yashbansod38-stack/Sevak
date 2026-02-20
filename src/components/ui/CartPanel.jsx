'use client'

import Image from 'next/image'
import { useCart } from '@/context/CartContext'

export default function CartPanel() {
  const {
    cartItems, cartTotal, isCartOpen,
    closeCart, openCheckout,
    changeQty, removeItem,
  } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`
          fixed inset-0 bg-black/70 z-[200] transition-opacity duration-300
          ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* Panel */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 w-full max-w-[450px] z-[201]
          flex flex-col border-l border-[var(--border)]
          transition-transform duration-400
          ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ background: 'var(--bg2)' }}
      >
        {/* Head */}
        <div className="flex items-center justify-between px-7 py-6 border-b border-[var(--border)]">
          <h3 className="font-cinzel text-dharma-gold text-lg">🛒 Your Cart</h3>
          <button
            onClick={closeCart}
            className="bg-none border-none text-dharma-muted text-xl cursor-pointer hover:text-dharma-text transition-colors p-1"
            aria-label="Close cart"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-7 py-5">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🪔</div>
              <p className="text-dharma-muted text-sm">
                Your cart is empty.<br />Add some dharmic threads!
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {cartItems.map((item) => (
                <CartItem
                  key={item.key}
                  item={item}
                  onChangeQty={(delta) => changeQty(item.key, delta)}
                  onRemove={() => removeItem(item.key)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-7 py-5 border-t border-[var(--border)]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-dharma-muted text-sm">Total</span>
              <span className="font-cinzel text-dharma-gold text-2xl">
                ₹{cartTotal.toLocaleString('en-IN')}
              </span>
            </div>
            <button onClick={openCheckout} className="btn-primary w-full text-center">
              Proceed to Order 🙏
            </button>
          </div>
        )}
      </div>
    </>
  )
}

function CartItem({ item, onChangeQty, onRemove }) {
  return (
    <div className="flex gap-3.5 pb-5 border-b border-dharma-gold/10 last:border-none last:pb-0">
      <div className="relative w-[72px] h-[88px] flex-shrink-0 rounded-md overflow-hidden border border-[var(--border)]">
        <Image src={item.img} alt={item.name} fill className="object-cover" sizes="72px" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-cinzel text-dharma-text text-[13px] leading-snug mb-0.5 truncate">
          {item.name}
        </p>
        <p className="text-dharma-muted text-[11px] mb-2">
          Size: {item.selectedSize} · {item.collection} Collection
        </p>
        <p className="font-cinzel text-dharma-gold text-[15px]">
          ₹{(item.price * item.qty).toLocaleString('en-IN')}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => onChangeQty(-1)}
            className="w-7 h-7 rounded-sm border border-[var(--border)] bg-transparent text-dharma-text cursor-pointer text-base flex items-center justify-center hover:border-dharma-saffron hover:text-dharma-saffron transition-colors"
          >
            −
          </button>
          <span className="text-sm font-semibold w-5 text-center">{item.qty}</span>
          <button
            onClick={() => onChangeQty(1)}
            className="w-7 h-7 rounded-sm border border-[var(--border)] bg-transparent text-dharma-text cursor-pointer text-base flex items-center justify-center hover:border-dharma-saffron hover:text-dharma-saffron transition-colors"
          >
            +
          </button>
          <button
            onClick={onRemove}
            className="ml-auto bg-none border-none text-dharma-muted cursor-pointer text-sm hover:text-red-500 transition-colors p-1"
            aria-label="Remove item"
          >
            <i className="fa-solid fa-trash" />
          </button>
        </div>
      </div>
    </div>
  )
}
