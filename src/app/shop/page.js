'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { categories } from '@/data/categories'

export default function ShopPage() {
    return (
        <main className="min-h-screen bg-dharma-black text-white">
            <Navbar />
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
                <ShopContent />
            </Suspense>
            <Footer />
        </main>
    )
}

function ShopContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const initialCategory = searchParams.get('category') || 'all'
    const [activeCategory, setActiveCategory] = useState(initialCategory)

    // Sync state with URL
    useEffect(() => {
        setActiveCategory(searchParams.get('category') || 'all')
    }, [searchParams])

    const handleFilter = (catId) => {
        setActiveCategory(catId)
        // Update URL without reloading
        const newParams = new URLSearchParams(searchParams)
        if (catId === 'all') {
            newParams.delete('category')
        } else {
            newParams.set('category', catId)
        }
        router.replace(`/shop?${newParams.toString()}`)
    }

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.collection === activeCategory)

    return (
        <div className="pt-24 pb-20 px-5 md:px-10 max-w-7xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-dharma-saffron text-sm tracking-[4px] uppercase font-poppins mb-2">
                    Sanatan Streetwear
                </p>
                <h1 className="font-cinzel font-bold text-4xl md:text-5xl text-white">
                    The Collection
                </h1>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                <FilterButton
                    label="All"
                    active={activeCategory === 'all'}
                    onClick={() => handleFilter('all')}
                />
                {categories.map(cat => (
                    <FilterButton
                        key={cat.id}
                        label={cat.title}
                        active={activeCategory === cat.id}
                        onClick={() => handleFilter(cat.id)}
                    />
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-gray-500 font-poppins">
                    No products found in this category.
                </div>
            )}
        </div>
    )
}

function FilterButton({ label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`
        px-6 py-2 rounded-full text-xs font-poppins tracking-widest uppercase transition-all duration-300
        ${active
                    ? 'bg-dharma-gold text-black font-bold shadow-lg shadow-dharma-gold/20'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                }
      `}
        >
            {label}
        </button>
    )
}
