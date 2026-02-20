'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { categories } from '@/data/categories'
import SectionHeader from '@/components/ui/SectionHeader'

export default function CategorySection() {
  const router = useRouter()

  const handleCategoryClick = (id) => {
    // Navigate to shop page with category filter
    router.push(`/shop?category=${id}`)
  }

  return (
    <section id="categories" className="py-24 px-5 md:px-10">
      <SectionHeader tag="Shop by Collection" title="Descendants of Dharma" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            onClick={() => handleCategoryClick(cat.id)}
          />
        ))}
      </div>
    </section>
  )
}

function CategoryCard({ category, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        relative overflow-hidden rounded-md cursor-pointer
        group ring-1 ring-white/10
        hover:ring-dharma-gold/50 transition-all duration-500
      "
      style={{ aspectRatio: '4/3' }}
    >
      {/* Background image */}
      <Image
        src={category.img}
        alt={category.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Modern Gradient Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)'
        }}
      />

      {/* Gold hover tint */}
      <div className="absolute inset-0 bg-dharma-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-dharma-gold text-[10px] tracking-[4px] uppercase font-poppins font-bold mb-2">
          {category.label}
        </p>
        <h3 className="font-cinzel font-bold text-white text-3xl md:text-4xl leading-none mb-4">
          {category.title}
        </h3>

        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
          <span className="text-white text-xs tracking-widest uppercase font-poppins">Explore Collection</span>
          <i className="fa-solid fa-arrow-right-long text-dharma-gold" />
        </div>
      </div>
    </div>
  )
}
