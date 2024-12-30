'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaBell } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="h-full flex items-center justify-center bg-yellow-100 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 bg-indigo-500 text-white px-6 py-3 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          Get In Touch <FaBell className="inline-block text-3xl text-yellow-500" />
        </motion.h2>
        <div className="flex flex-col items-center space-y-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:functionsteve@gmail.com"
            className="flex items-center text-xl bg-white px-6 py-3 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 transition-colors"
          >
            <FaEnvelope className="mr-2 text-blue-500" />
            functionsteve@gmail.com
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/stevecancode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl bg-white px-6 py-3 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 transition-colors"
          >
            <FaLinkedin className="mr-2 text-blue-500" />
            linkedin.com/in/stevecancode
          </motion.a>
        </div>
      </div>
    </section>
  )
}

