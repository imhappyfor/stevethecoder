'use client'

import { motion } from 'framer-motion'

interface NavigationProps {
  currentSection: string
  setCurrentSection: (section: string) => void
}

export default function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
  const sections = ['hero', 'about', 'skills', 'projects', 'contact']

  return (
    <motion.div
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="bg-blue-500 p-4 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col space-y-2">
        {sections.map((section) => (
          <motion.button
            key={section}
            onClick={() => setCurrentSection(section)}
            className={`text-white capitalize px-3 py-2 rounded ${
              currentSection === section ? 'bg-yellow-400 text-black font-bold' : 'hover:bg-blue-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

