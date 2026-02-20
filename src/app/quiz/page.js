'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { motion, AnimatePresence } from 'framer-motion'

const QUESTIONS = [
    {
        id: 1,
        text: "What energy do you seek today?",
        options: [
            { label: "Peace & Meditation", value: "meditation" },
            { label: "Strength & Power", value: "power" },
            { label: "Devotion & Love", value: "devotion" },
        ]
    },
    {
        id: 2,
        text: "Which Element calls to you?",
        options: [
            { label: "Fire (Agni)", value: "fire" },
            { label: "Water (Jal)", value: "water" },
            { label: "Earth (Prithvi)", value: "earth" },
        ]
    },
    {
        id: 3,
        text: "Choose a colour vibe:",
        options: [
            { label: "Saffron & Gold", value: "saffron" },
            { label: "Deep Black & Grey", value: "dark" },
            { label: "Pure White & Blue", value: "light" },
        ]
    }
]

export default function QuizPage() {
    const [currentQ, setCurrentQ] = useState(0)
    const [answers, setAnswers] = useState([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleAnswer = (value) => {
        const newAnswers = [...answers, value]
        setAnswers(newAnswers)

        if (currentQ < QUESTIONS.length - 1) {
            setCurrentQ(currentQ + 1)
        } else {
            finishQuiz(newAnswers)
        }
    }

    const finishQuiz = (finalAnswers) => {
        setLoading(true)
        // Simple logic to determine category
        const [energy, element, color] = finalAnswers
        let category = 'shiva' // default

        if (energy === 'power' || element === 'fire') category = 'warrior'
        if (energy === 'devotion' || element === 'earth') category = 'ram'
        if (energy === 'meditation' || element === 'water') category = 'shiva'

        setTimeout(() => {
            router.push(`/shop?category=${category}`)
        }, 1500)
    }

    return (
        <main className="min-h-screen bg-dharma-black text-white flex flex-col">
            <Navbar />

            <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-dharma-saffron/10 rounded-full blur-[100px]" />

                <div className="relative z-10 w-full max-w-lg text-center">
                    {loading ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="w-16 h-16 border-4 border-dharma-gold border-t-transparent rounded-full animate-spin" />
                            <h2 className="font-cinzel text-xl text-dharma-gold">Finding your path...</h2>
                        </motion.div>
                    ) : (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQ}
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-dharma-muted text-xs tracking-[4px] uppercase mb-4">
                                    Step {currentQ + 1} of {QUESTIONS.length}
                                </p>
                                <h1 className="font-cinzel text-3xl mb-8 leading-snug">
                                    {QUESTIONS[currentQ].text}
                                </h1>

                                <div className="flex flex-col gap-4">
                                    {QUESTIONS[currentQ].options.map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => handleAnswer(opt.value)}
                                            className="p-4 border border-white/10 rounded-sm hover:bg-white/5 hover:border-dharma-gold transition-all duration-300 text-left group"
                                        >
                                            <span className="font-poppins text-sm tracking-wide text-gray-300 group-hover:text-white">
                                                {opt.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>
            </div>
        </main>
    )
}
