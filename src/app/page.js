import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroBanner from '@/components/home/HeroBanner'
import MarqueeBar from '@/components/home/MarqueeBar'
import CategorySection from '@/components/home/CategorySection'
import ProductsSection from '@/components/home/ProductsSection'
import FeaturesStrip from '@/components/home/FeaturesStrip'
import Testimonials from '@/components/home/Testimonials'
import VirtualAltar from '@/components/home/VirtualAltar'
import InstagramWall from '@/components/home/InstagramWall'
import CartPanel from '@/components/ui/CartPanel'
import CheckoutModal from '@/components/ui/CheckoutModal'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <MarqueeBar />
        <CategorySection />
        <ProductsSection />
        <VirtualAltar />
        <FeaturesStrip />
        <Testimonials />
        <InstagramWall />
      </main>
      <Footer />
      <CartPanel />
      <CheckoutModal />
    </>
  )
}
