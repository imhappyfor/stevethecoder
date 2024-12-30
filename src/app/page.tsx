'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('hero')

  return (
    <div className="h-screen w-screen overflow-hidden bg-yellow-100 text-gray-800 relative font-mono">
      <Header />
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full pt-16"
        >
          {currentSection === 'hero' && <Hero />}
          {currentSection === 'about' && <About />}
          {currentSection === 'skills' && <Skills />}
          {currentSection === 'projects' && <Projects />}
          {currentSection === 'contact' && <Contact />} 
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

