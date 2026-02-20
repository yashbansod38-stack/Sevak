'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProductCard({ product }) {
  // Calculate discount percentage
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <Link href={`/shop/${product.id}`} className="block group">
      <div className="relative overflow-hidden bg-dharma-black/20 border border-white/5 rounded-sm hover:border-dharma-gold/30 transition-all duration-300">

        {/* Image Container - Aspect Ratio 3:4 */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.badge && (
              <span className="bg-dharma-saffron text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1">
                {product.badge}
              </span>
            )}
            {!product.inStock && (
              <span className="bg-zinc-800 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1">
                Sold Out
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 bg-dharma-black/40 backdrop-blur-sm">
          <h3 className="font-cinzel text-sm text-gray-200 group-hover:text-dharma-gold transition-colors duration-300 truncate">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-dharma-gold font-bold text-sm">₹{product.price}</span>
            {product.mrp > product.price && (
              <span className="text-gray-600 text-xs line-through">₹{product.mrp}</span>
            )}
            {discount > 0 && (
              <span className="text-green-500 text-[10px] ml-auto">
                {discount}% OFF
              </span>
            )}
          </div>

          <p className="text-[10px] text-gray-500 mt-2 line-clamp-1 font-poppins">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
