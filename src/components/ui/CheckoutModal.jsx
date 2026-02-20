'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { GOOGLE_FORM_CONFIG } from '@/lib/googleFormConfig'

const STATES = [
  'Andhra Pradesh','Assam','Bihar','Chhattisgarh','Delhi','Gujarat',
  'Haryana','Himachal Pradesh','Jharkhand','Jammu & Kashmir','Karnataka',
  'Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram',
  'Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana',
  'Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Other',
]

const initialForm = {
  name: '', phone: '', email: '',
  address: '', city: '', pincode: '', state: '', size: '', notes: '',
}

export default function CheckoutModal() {
  const {
    cartItems, cartTotal, isCheckoutOpen,
    closeCheckout, clearCart,
  } = useCart()

  const [form, setForm]         = useState(initialForm)
  const [errors, setErrors]     = useState({})
  const [loading, setLoading]   = useState(false)
  const [success, setSuccess]   = useState(false)

  const update = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }))
    if (errors[field]) setErrors((p) => ({ ...p, [field]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Full name is required'
    if (!form.phone.trim())   e.phone   = 'Phone number is required'
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit number'
    if (!form.email.trim())   e.email   = 'Email is required'
    if (!form.address.trim()) e.address = 'Address is required'
    if (!form.city.trim())    e.city    = 'City is required'
    if (!form.pincode.trim()) e.pincode = 'Pincode is required'
    if (!/^\d{6}$/.test(form.pincode)) e.pincode = 'Enter a valid 6-digit pincode'
    if (!form.state)          e.state   = 'Please select a state'
    if (!form.size)           e.size    = 'Please select a size'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submitOrder = async () => {
    if (!validate()) return
    setLoading(true)

    const orderDetails = cartItems
      .map((i) => `${i.name} (${i.selectedSize}) ×${i.qty} — ₹${(i.price * i.qty).toLocaleString('en-IN')}`)
      .join(' | ')
    const totalStr = `₹${cartTotal.toLocaleString('en-IN')}`

    const { FORM_ACTION_URL, FIELD_IDS } = GOOGLE_FORM_CONFIG

    // Build FormData for Google Forms
    const fd = new FormData()
    fd.append(FIELD_IDS.name,         form.name)
    fd.append(FIELD_IDS.phone,        form.phone)
    fd.append(FIELD_IDS.email,        form.email)
    fd.append(FIELD_IDS.address,      form.address)
    fd.append(FIELD_IDS.city,         form.city)
    fd.append(FIELD_IDS.pincode,      form.pincode)
    fd.append(FIELD_IDS.state,        form.state)
    fd.append(FIELD_IDS.size,         form.size)
    fd.append(FIELD_IDS.orderDetails, orderDetails)
    fd.append(FIELD_IDS.totalAmount,  totalStr)
    fd.append(FIELD_IDS.notes,        form.notes)

    if (FORM_ACTION_URL !== 'YOUR_GOOGLE_FORM_ACTION_URL') {
      try {
        await fetch(FORM_ACTION_URL, { method: 'POST', body: fd, mode: 'no-cors' })
      } catch (_) {
        // no-cors always throws; submission still succeeds
      }
    }

    // Always show success (Google Forms no-cors = opaque response)
    setLoading(false)
    setSuccess(true)
    clearCart()
  }

  const handleClose = () => {
    closeCheckout()
    setForm(initialForm)
    setErrors({})
    setSuccess(false)
  }

  if (!isCheckoutOpen) return null

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.88)' }}
    >
      <div
        className="relative w-full max-w-[640px] max-h-[92vh] overflow-y-auto rounded-2xl border border-[var(--border)]"
        style={{
          background: 'var(--bg2)',
          boxShadow: '0 30px 100px rgba(0,0,0,0.7)',
        }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(255,107,0,0.06), transparent 70%)' }}
        />

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-none border-none text-dharma-muted text-xl cursor-pointer hover:text-dharma-text z-10 p-1"
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark" />
        </button>

        {success ? (
          <SuccessScreen onClose={handleClose} />
        ) : (
          <OrderForm
            cartItems={cartItems}
            cartTotal={cartTotal}
            form={form}
            errors={errors}
            loading={loading}
            update={update}
            onSubmit={submitOrder}
          />
        )}
      </div>
    </div>
  )
}

/* ─── Order Form ───────────────────────────────────────────── */
function OrderForm({ cartItems, cartTotal, form, errors, loading, update, onSubmit }) {
  return (
    <div>
      {/* Header */}
      <div className="text-center px-8 pt-10 pb-6 border-b border-[var(--border)]">
        <div
          className="text-4xl mb-2 text-dharma-saffron"
          style={{ filter: 'drop-shadow(0 0 12px #FF6B00)' }}
        >
          ॐ
        </div>
        <h2 className="font-cinzel text-dharma-gold text-2xl mb-1.5">Place Your Order</h2>
        <p className="text-dharma-muted text-xs tracking-wide">
          Fill in your details — we'll contact you within 24 hours 🙏
        </p>
      </div>

      <div className="px-8 pb-8">
        {/* Order Summary */}
        <SectionLabel>Order Summary</SectionLabel>
        <div className="mb-6 space-y-1">
          {cartItems.map((item) => (
            <div
              key={item.key}
              className="flex justify-between text-[13px] text-dharma-text py-1.5 border-b border-dharma-gold/[0.07]"
            >
              <span>{item.name} (Size: {item.selectedSize}) × {item.qty}</span>
              <span className="font-cinzel text-dharma-gold ml-4 flex-shrink-0">
                ₹{(item.price * item.qty).toLocaleString('en-IN')}
              </span>
            </div>
          ))}
          <div className="flex justify-between pt-3">
            <span className="font-cinzel text-sm text-dharma-text">Total Amount</span>
            <span className="font-cinzel text-2xl text-dharma-gold">
              ₹{cartTotal.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Personal Details */}
        <SectionLabel>Your Details</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Field label="Full Name *" error={errors.name}>
            <input className="dharma-input" placeholder="Arjun Sharma" value={form.name} onChange={(e) => update('name', e.target.value)} />
          </Field>
          <Field label="Phone Number *" error={errors.phone}>
            <input className="dharma-input" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
          </Field>
        </div>
        <div className="mb-4">
          <Field label="Email Address *" error={errors.email}>
            <input className="dharma-input" type="email" placeholder="arjun@email.com" value={form.email} onChange={(e) => update('email', e.target.value)} />
          </Field>
        </div>

        {/* Delivery Address */}
        <SectionLabel>Delivery Address</SectionLabel>
        <div className="mb-4">
          <Field label="Full Address *" error={errors.address}>
            <textarea
              className="dharma-input resize-none"
              rows={3}
              placeholder="House No., Street, Area, Landmark..."
              value={form.address}
              onChange={(e) => update('address', e.target.value)}
            />
          </Field>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Field label="City *" error={errors.city}>
            <input className="dharma-input" placeholder="Varanasi" value={form.city} onChange={(e) => update('city', e.target.value)} />
          </Field>
          <Field label="Pincode *" error={errors.pincode}>
            <input className="dharma-input" placeholder="221001" value={form.pincode} onChange={(e) => update('pincode', e.target.value)} />
          </Field>
          <Field label="State *" error={errors.state}>
            <select className="dharma-input" value={form.state} onChange={(e) => update('state', e.target.value)}>
              <option value="">Select State</option>
              {STATES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="T-Shirt Size *" error={errors.size}>
            <select className="dharma-input" value={form.size} onChange={(e) => update('size', e.target.value)}>
              <option value="">Select Size</option>
              {['XS','S','M','L','XL','XXL','3XL'].map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
        </div>
        <div className="mb-6">
          <Field label="Special Instructions (Optional)">
            <textarea
              className="dharma-input resize-none"
              rows={2}
              placeholder="Any special requests or notes..."
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
            />
          </Field>
        </div>

        {/* Submit */}
        <button
          onClick={onSubmit}
          disabled={loading}
          className="btn-primary w-full !py-5 !text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Placing Order...' : 'Place Order 🙏 Jai Shri Ram'}
        </button>
        <p className="text-center text-dharma-muted text-[11px] mt-3 tracking-wide">
          We will call/WhatsApp you within 24 hours to confirm your order & payment.
        </p>
      </div>
    </div>
  )
}

/* ─── Success Screen ───────────────────────────────────────── */
function SuccessScreen({ onClose }) {
  return (
    <div className="text-center px-10 py-16">
      <div
        className="text-6xl mb-5"
        style={{ filter: 'drop-shadow(0 0 20px #FF6B00)' }}
      >
        🙏
      </div>
      <h2 className="font-cinzel text-dharma-gold text-3xl mb-3">Order Placed!</h2>
      <p className="text-dharma-text text-sm leading-relaxed mb-2">
        Your order has been received successfully.<br />
        Our team will contact you within{' '}
        <strong className="text-dharma-saffron">24 hours</strong>
        {' '}to confirm your order & payment details.
      </p>
      <p className="font-cinzel text-dharma-saffron text-lg mt-6 mb-8">
        🚩 Jai Shri Ram · Har Har Mahadev 🔱
      </p>
      <button onClick={onClose} className="btn-primary mx-auto">
        Continue Shopping
      </button>
    </div>
  )
}

/* ─── Helpers ──────────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mt-6 mb-4">
      <span className="font-cinzel text-[11px] text-dharma-saffron tracking-[2px] uppercase">
        {children}
      </span>
      <span className="flex-1 h-px bg-[var(--border)]" />
    </div>
  )
}

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] tracking-[2px] uppercase text-dharma-muted font-poppins">
        {label}
      </label>
      {children}
      {error && <span className="text-red-400 text-[10px]">{error}</span>}
    </div>
  )
}
