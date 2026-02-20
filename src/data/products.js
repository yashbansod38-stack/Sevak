/**
 * ============================================================
 *  DHARMA THREADS — PRODUCTS DATA
 *  Edit this file to add, remove, or update your products.
 * ============================================================
 *
 *  FIELD REFERENCE:
 *  ─────────────────────────────────────────────────────────
 *  id          : unique number (increment for each new product)
 *  name        : product name displayed on the card & modal
 *  collection  : category key — must match a category id in categories.js
 *                Options: 'shiva' | 'ram' | 'warrior' | 'symbol'
 *  price       : selling price in ₹ (number, no ₹ sign)
 *  mrp         : original / crossed-out price in ₹ (number)
 *  badge       : optional label shown on image e.g. 'Bestseller', 'New', 'Limited'
 *                Set to '' or null to show no badge
 *  sizes       : array of available sizes
 *  img         : image URL — can be Unsplash or your own hosted URL
 *  description : short 1-2 line description shown in checkout modal
 *  inStock     : true / false — false hides "Add to Cart" button
 * ─────────────────────────────────────────────────────────
 *
 *  HOW TO ADD A PRODUCT:
 *  1. Copy any existing object below
 *  2. Increment the id by 1
 *  3. Fill in the fields
 *  4. Save the file — Next.js will hot-reload automatically
 *
 * ============================================================
 */

export const products = [
  {
    id: 1,
    name: 'Har Har Mahadev Tee',
    collection: 'shiva',
    price: 999,
    mrp: 1499,
    badge: 'Bestseller',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80', // Replaced broken 1534...
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=80',
    ],
    description: '220 GSM combed cotton | Premium screen print | Pre-shrunk fabric',
    inStock: true,
  },
  {
    id: 2,
    name: "Arjuna's Oath Tee",
    collection: 'warrior',
    price: 1099,
    mrp: 1599,
    badge: 'New',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    img: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&q=80',
      'https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?w=600&q=80',
      'https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=600&q=80',
    ],
    description: 'Inspired by the Kurukshetra vow | Oversized drop-shoulder fit',
    inStock: true,
  },
  {
    id: 3,
    name: 'Jai Shri Ram Oversized',
    collection: 'ram',
    price: 1199,
    mrp: 1699,
    badge: 'Trending',
    sizes: ['M', 'L', 'XL', 'XXL'],
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
    ],
    description: 'Bold Devanagari print | 240 GSM heavyweight cotton',
    inStock: true,
  },
  {
    id: 4,
    name: 'Om Namah Shivaya Tee',
    collection: 'shiva',
    price: 899,
    mrp: 1299,
    badge: '',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80',
      'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=600&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80',
    ],
    description: 'Minimalist sacred mantra design | Slim fit | 200 GSM',
    inStock: true,
  },
  {
    id: 5,
    name: 'Sanatan Dharma Warrior',
    collection: 'symbol',
    price: 1299,
    mrp: 1799,
    badge: 'Premium',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    img: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
      'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?w=600&q=80',
    ],
    description: 'Double-sided print | Heritage graphic tee | Vintage wash finish',
    inStock: true,
  },
  {
    id: 6,
    name: 'Kashi Vishwanath Tee',
    collection: 'shiva',
    price: 999,
    mrp: 1399,
    badge: '',
    sizes: ['S', 'M', 'L', 'XL'],
    img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
    ],
    description: 'Hand-drawn temple artwork | Water-based eco ink print',
    inStock: true,
  },
  {
    id: 7,
    name: 'Mahakal Oversized Drop',
    collection: 'shiva',
    price: 1399,
    mrp: 1999,
    badge: 'Limited',
    sizes: ['M', 'L', 'XL', 'XXL'],
    img: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
      'https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?w=600&q=80',
    ],
    description: 'Limited drop — only 50 pieces | Boxy oversized fit | Trishul artwork',
    inStock: true,
  },
  {
    id: 8,
    name: 'Trishul & Lotus Tee',
    collection: 'symbol',
    price: 849,
    mrp: 1199,
    badge: '',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80',
    ],
    description: 'Sacred symbols embroidered chest print | Lightweight summer fabric',
    inStock: true,
  },
  {
    id: 9,
    name: 'Bhagwad Geeta Verse Tee',
    collection: 'warrior',
    price: 1099,
    mrp: 1499,
    badge: 'New',
    sizes: ['S', 'M', 'L', 'XL'],
    img: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80',
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&q=80',
    ],
    description: 'Chapter 2, Verse 47 — Karma Yoga | Sanskrit & English typography',
    inStock: true,
  },
  {
    id: 10,
    name: 'Kshatriya Blood Tee',
    collection: 'warrior',
    price: 1199,
    mrp: 1699,
    badge: '',
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    img: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80',
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80',
      'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=600&q=80',
    ],
    description: 'Bold warrior ethos print | Drop-shoulder | Garment dyed black',
    inStock: true,
  },
  {
    id: 11,
    name: 'Vande Mataram Classic',
    collection: 'symbol',
    price: 799,
    mrp: 1099,
    badge: 'Patriot',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80', // Replaced 1546...
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
    ],
    description: 'Bharat Mata tribute | Devanagari script print | Classic fit',
    inStock: true,
  },
  {
    id: 12,
    name: 'Shakti Rising Tee',
    collection: 'symbol',
    price: 999,
    mrp: 1399,
    badge: '',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    img: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=80', // Replaced 1600...
    images: [
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=80',
    ],
    description: 'Goddess energy artwork | Fitted silhouette | Unisex',
    inStock: true,
  },
]

/**
 * Helper — get products by collection id
 */
export function getProductsByCollection(collectionId) {
  if (!collectionId || collectionId === 'all') return products
  return products.filter((p) => p.collection === collectionId)
}

/**
 * Helper — get single product by id
 */
export function getProductById(id) {
  return products.find((p) => p.id === Number(id))
}
