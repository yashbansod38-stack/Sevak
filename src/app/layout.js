import './globals.css'
import { CartProvider } from '@/context/CartContext'

export const metadata = {
  title: 'Dharma Threads — Wear Your Dharma',
  description: 'Premium Sanatan Hindu Dharma inspired T-shirts. Ancient wisdom, modern streetwear. Born from Bharat.',
  keywords: 'dharma threads, sanatan tshirts, hindu tshirts, mahadev tee, spiritual streetwear',
  openGraph: {
    title: 'Dharma Threads — Wear Your Dharma',
    description: 'Premium Sanatan Hindu Dharma inspired T-shirts. Born from Bharat.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="bg-dharma-black text-dharma-text font-poppins overflow-x-hidden">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
