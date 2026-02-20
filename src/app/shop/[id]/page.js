'use client'

import { useState } from 'react'
import { products, getProductById } from '@/data/products'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CheckoutModal from '@/components/ui/CheckoutModal'
import { notFound } from 'next/navigation'
import { useCart } from '@/context/CartContext'

export default function ProductPage({ params }) {
    const product = getProductById(params.id)

    if (!product) {
        notFound()
    }

    const [mainImage, setMainImage] = useState(product.img)
    const [selectedSize, setSelectedSize] = useState('')
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

    // Cart context to populate the "buy now" flow properly if needed,
    // or we can pass directly to modal. The modal uses the cart context usually,
    // so let's reuse that or adapt the modal.
    // The current CheckoutModal reads from CartContext. 
    // To support "Buy Now", we might need to add this single item to cart 
    // and open modal, OR modify modal to accept a single product.
    // For simplicity and speed: Add to cart (clear previous?) -> Open Modal.

    const { addToCart, cart, clearCart } = useCart()

    const handleBuyNow = () => {
        if (!selectedSize) {
            alert('Please select a size')
            return
        }
        // Setup for "Buy Now" - we can either just add to cart or clear cart then add.
        // Let's add to cart and open modal.
        addToCart(product, selectedSize)
        setIsCheckoutOpen(true)
    }

    return (
        <main className="min-h-screen bg-dharma-black text-white">
            <Navbar />

            <div className="pt-28 pb-20 px-5 md:px-10 max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-poppins uppercase tracking-wider">
                    <Link href="/" className="hover:text-dharma-gold">Home</Link>
                    <span>/</span>
                    <Link href="/shop" className="hover:text-dharma-gold">Shop</Link>
                    <span>/</span>
                    <span className="text-white">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left: Gallery */}
                    <div className="flex flex-col-reverse md:flex-row gap-4">
                        {/* Thumbnails */}
                        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible no-scrollbar p-1">
                            {product.images?.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setMainImage(img)}
                                    className={`relative w-20 h-24 flex-shrink-0 border transition-all duration-300 ${mainImage === img ? 'border-dharma-gold' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <Image src={img} alt="thumb" fill className="object-cover" />
                                </button>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="relative flex-1 aspect-[3/4] md:aspect-auto md:h-[600px] border border-white/5 bg-white/5">
                            <Image
                                src={mainImage}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute top-4 right-4">
                                {/* Share button or similar could go here */}
                            </div>
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="flex flex-col h-full">
                        <h1 className="font-cinzel font-bold text-3xl md:text-4xl text-white leading-tight mb-2">
                            {product.name}
                        </h1>
                        <p className="text-dharma-saffron text-xs font-bold tracking-[3px] uppercase font-poppins mb-6">
                            {product.collection} Collection
                        </p>

                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="text-3xl font-poppins font-semibold text-dharma-gold">
                                ₹{product.price}
                            </span>
                            {product.mrp > product.price && (
                                <span className="text-gray-500 line-through text-lg">
                                    ₹{product.mrp}
                                </span>
                            )}
                            <span className="bg-green-600/20 text-green-500 text-[10px] font-bold px-2 py-1 rounded">
                                Inclusive of all taxes
                            </span>
                        </div>

                        <div className="h-px bg-white/10 w-full mb-8" />

                        {/* Description */}
                        <div className="mb-8">
                            <h3 className="tex-sm font-bold uppercase tracking-widest mb-3 text-gray-300">Description</h3>
                            <p className="text-gray-400 leading-relaxed font-poppins text-sm">
                                {product.description}
                                <br /><br />
                                Embrace the spirit of {product.collection} with this premium quality tee.
                                Designed for the modern devotee, crafted for comfort, and built to last.
                            </p>
                        </div>

                        {/* Size Select */}
                        <div className="mb-10">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300">Select Size</h3>
                                <button className="text-[10px] text-dharma-gold underline decoration-dharma-gold/50 underline-offset-4">Size Chart</button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`
                      w-12 h-12 flex items-center justify-center border font-poppins font-medium transition-all duration-200
                      ${selectedSize === size
                                                ? 'bg-dharma-gold text-black border-dharma-gold'
                                                : 'border-white/20 text-gray-400 hover:border-white/60 hover:text-white'
                                            }
                    `}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-auto">
                            <button
                                onClick={handleBuyNow}
                                disabled={!product.inStock}
                                className={`
                  w-full py-4 text-center text-sm font-bold uppercase tracking-[3px] font-poppins transition-all duration-300
                  ${product.inStock
                                        ? 'bg-gradient-to-r from-dharma-saffron to-orange-600 text-white hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]'
                                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                    }
                `}
                            >
                                {product.inStock ? 'Buy Now - COD' : 'Out of Stock'}
                            </button>
                            <p className="text-center text-[10px] text-gray-500 mt-3">
                                <i className="fa-solid fa-lock mr-2"></i>Secure Checkout via Google Form
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
                            <Feature icon="fa-solid fa-shirt" title="100% Cotton" desc="220 GSM Bio-washed" />
                            <Feature icon="fa-solid fa-truck-fast" title="Fast Shipping" desc="Dispatched in 24 hrs" />
                            <Feature icon="fa-solid fa-rotate-left" title="Easy Returns" desc="7 Days Policy" />
                            <Feature icon="fa-solid fa-shield-halved" title="Secure" desc="Safe Payment" />
                        </div>

                    </div>
                </div>
            </div>

            <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
            <Footer />
        </main>
    )
}

function Feature({ icon, title, desc }) {
    return (
        <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <i className={`${icon} text-dharma-gold text-xs`}></i>
            </div>
            <div>
                <h4 className="text-xs font-bold text-gray-200 uppercase">{title}</h4>
                <p className="text-[10px] text-gray-500">{desc}</p>
            </div>
        </div>
    )
}

