'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import SectionHeader from '@/components/ui/SectionHeader'

export default function ProductsSection() {
  const scrollContainerRef = useRef(null)

  return (
    <section
      id="products"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%)' }}
    >
      <div className="px-5 md:px-10 mb-10 flex flex-col items-center justify-center gap-6 text-center">
        <SectionHeader tag="Our T-Shirts" title="Crafted for the Dharmic Soul" icon="🔱" />

        <Link
          href="/shop"
          className="
            hidden md:inline-flex items-center gap-2 
            text-dharma-gold border border-dharma-gold/30 
            px-6 py-2.5 rounded-full uppercase tracking-widest text-xs font-bold
            hover:bg-dharma-gold hover:text-dharma-black transition-all duration-300
          "
        >
          View Complete Collection <i className="fa-solid fa-arrow-right" />
        </Link>
      </div>

      {/* 
        2-Row Horizontal Scroll Grid 
        - grid-rows-2: Forces 2 rows
        - grid-flow-col: Fills vertically first, then new columns
        - auto-cols: Sets width of each column. 
          - Mobile: 70% width (1 mostly visible)
          - Desktop: 40% width (2 full columns + peek) -> User asked for "2 cards on screen" (big)
      */}
      <div
        ref={scrollContainerRef}
        className="
          grid grid-rows-2 grid-flow-col gap-8
          auto-cols-[85vw] md:auto-cols-[45vw] lg:auto-cols-[35vw] 
          overflow-x-auto pb-12 px-5 md:px-10
          snap-x snap-mandatory hide-scrollbar
        "
      >
        {products.map((product) => (
          <div key={product.id} className="snap-center h-full">
            <ProductCard product={product} />
          </div>
        ))}

        {/* 'See More' Card at the end */}
        <Link
          href="/shop"
          className="
            snap-start bg-dharma-black border border-white/10 rounded-sm
            flex flex-col items-center justify-center gap-4
            group hover:border-dharma-gold/50 transition-colors
            row-span-2 min-w-[200px]
          "
        >
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-dharma-gold group-hover:text-black transition-colors">
            <i className="fa-solid fa-arrow-right text-xl" />
          </div>
          <span className="font-cinzel text-dharma-text text-lg">View All</span>
        </Link>
      </div>

      <div className="px-5 md:px-10 mt-6 md:hidden">
        <Link
          href="/shop"
          className="
            w-full flex items-center justify-center gap-2 
            bg-white/5 border border-white/10
            px-6 py-4 rounded-sm uppercase tracking-widest text-xs font-bold
            hover:bg-white/10 transition-all
          "
        >
          View All Products
        </Link>
      </div>
    </section>
  )
}
