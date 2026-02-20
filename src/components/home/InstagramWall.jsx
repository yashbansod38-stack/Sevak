'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const INSTA_POSTS = [
    { id: 1, user: '@arjun.yogi', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80', caption: 'Meditation in progress. 🕉️ #DharmaThreads' },
    { id: 2, user: '@shakti.rising', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80', caption: 'Carrying the energy of the goddess. 🔱' },
    { id: 3, user: '@warrior.mode', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', caption: 'Strength is my dharma. wearing the Warrior tee.' },
    { id: 4, user: '@spiritual.seeker', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', caption: 'Varanasi vibes. 🙏' },
]

export default function InstagramWall() {
    return (
        <section className="py-20 bg-dharma-black relative overflow-hidden">
            <div className="text-center mb-12">
                <p className="text-dharma-saffron text-sm tracking-[4px] uppercase font-poppins mb-2">
                    Community
                </p>
                <h2 className="font-cinzel text-3xl md:text-4xl text-white">
                    #WearYourDharma
                </h2>
                <p className="text-gray-400 text-xs mt-3 tracking-wide">
                    Join the tribe. Tag us to be featured.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
                {INSTA_POSTS.map((post) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="group relative aspect-square overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={post.img}
                            alt={post.caption}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                            <i className="fa-brands fa-instagram text-2xl text-white mb-2" />
                            <p className="text-dharma-gold font-cinzel text-sm mb-1">{post.user}</p>
                            <p className="text-gray-300 text-[10px] font-poppins line-clamp-2">
                                {post.caption}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !bg-transparent border border-dharma-gold text-dharma-gold hover:bg-dharma-gold hover:text-black"
                >
                    Follow on Instagram
                </a>
            </div>
        </section>
    )
}
