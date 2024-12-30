'use client'

import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-white fixed w-full z-10 border-b-4 border-black"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2"
        >
          <FaCode className="text-blue-500 text-2xl" />
          <span className="font-bold text-xl">SteveTheCoder</span>
        </motion.div>
      </div>
    </motion.header>
  )
}

