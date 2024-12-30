'use client'

import { motion } from 'framer-motion'
import { FaLaptopCode, FaCoffee, FaGuitar } from 'react-icons/fa'
import { GiMountainClimbing } from "react-icons/gi";


export default function About() {
  const items = [
    { icon: FaLaptopCode, title: 'Passionate Coder', description: 'I\'m a self taught develoeper who eats, sleeps, and breathes code. Always learning, sometimes growing 🤙' },
    { icon: FaCoffee, title: 'Caffeine Enthusiast', description: 'Fueled by coffee and the thrill of solving complex problems.' },
    { icon: FaGuitar, title: 'Music Lover', description: 'When I\'m not coding, you\'ll find me strumming my guitar. ' },
      { icon: GiMountainClimbing, title: 'Rock Climber', description: 'Climbing is a love not a sport, mostly indoor but always up for the real thing. ' },
  ]

  return (
    <section className="h-full flex items-center justify-center bg-yellow-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 bg-purple-500 text-white px-6 py-3 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <item.icon className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

