'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function VirtualAltar() {
    const [lit, setLit] = useState(false)
    const [playing, setPlaying] = useState(false)
    const audioRef = useRef(null)

    const toggleFlame = () => {
        setLit(!lit)
    }

    const toggleChant = () => {
        if (!audioRef.current) return
        if (playing) {
            audioRef.current.pause()
        } else {
            audioRef.current.play().catch(e => console.log('Audio play failed', e))
        }
        setPlaying(!playing)
    }

    return (
        <section className="py-24 relative bg-[url('https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?w=1600&q=80')] bg-cover bg-fixed bg-center">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-10"
                >
                    <span className="text-dharma-gold text-5xl md:text-7xl block mb-4" style={{ filter: 'drop-shadow(0 0 15px #FFD700)' }}>
                        ॐ
                    </span>
                    <h2 className="font-cinzel text-3xl md:text-5xl text-white mb-4">
                        Sanctuary of Peace
                    </h2>
                    <p className="text-gray-300 font-poppins max-w-xl mx-auto">
                        Take a moment to center yourself. Light the diya and listen to the eternal sound.
                    </p>
                </motion.div>

                {/* Diya Interaction */}
                <div className="flex flex-col items-center gap-8">
                    <button
                        onClick={toggleFlame}
                        className="relative group transition-transform active:scale-95"
                    >
                        {/* Diya Base */}
                        <div className="w-24 h-12 bg-gradient-to-r from-orange-700 to-yellow-900 rounded-b-full relative border-t-4 border-yellow-600 shadow-lg">
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-yellow-800/50 rounded-[50%]" />
                        </div>

                        {/* Flame */}
                        <div
                            className={`
                absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full rounded-tr-none -rotate-45
                bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500
                blur-[2px] opacity-0 transition-opacity duration-700
                ${lit ? 'opacity-100 animate-pulse' : ''}
              `}
                            style={{
                                boxShadow: lit ? '0 0 20px 5px rgba(255, 165, 0, 0.6), 0 0 40px 10px rgba(255, 69, 0, 0.4)' : 'none'
                            }}
                        />
                        {lit && (
                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-1 h-4 bg-blue-400 blur-[1px] opacity-50" />
                        )}

                        <p className="mt-6 text-xs text-dharma-gold uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                            {lit ? 'The Light is Within' : 'Tap to Light Diya'}
                        </p>
                    </button>

                    {/* Audio Control */}
                    <button
                        onClick={toggleChant}
                        className={`
              flex items-center gap-3 border border-white/20 px-6 py-3 rounded-full
              transition-all duration-300 hover:border-dharma-gold/50 hover:bg-white/5
              ${playing ? 'text-dharma-gold border-dharma-gold/50' : 'text-gray-400'}
            `}
                    >
                        <i className={`fa-solid ${playing ? 'fa-volume-high' : 'fa-volume-xmark'}`} />
                        <span className="text-xs font-poppins tracking-widest uppercase">
                            {playing ? 'Pause Chant' : 'Play Om Chant'}
                        </span>
                    </button>

                    <audio
                        ref={audioRef}
                        loop
                        preload="auto"
                        src="/om-chant.mp3"
                    />
                </div>
            </div>
        </section>
    )
}
