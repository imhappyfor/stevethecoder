'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaPhp, FaVuejs} from 'react-icons/fa'
import dynamic from 'next/dynamic'
import { SiTypescript, SiJavascript , SiAwslambda} from "react-icons/si";
import useSound from 'use-sound';



const Confetti = dynamic(() => import('react-confetti'), { ssr: false })

export default function Skills() {
  const [play] = useSound('/sfx/PartyHorn.mp3');
  const [showConfetti, setShowConfetti] = useState(false)

  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'Javascript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Python', icon: FaPython, color: 'text-yellow-400 ' },
    { name: 'Databases', icon: FaDatabase, color: 'text-red-500' },
    { name: 'Php', icon: FaPhp, color: 'text-purple-500' },
    { name: 'Vue', icon: FaVuejs, color: 'text-green-500' },
    { name: 'AWS', icon: SiAwslambda, color: 'text-orange-400' },
  ]

  const jumpVariants = {
    initial: { y: 0 },
    animate: { y: -10 },
  }

  const handleConfettiClick = () => {
    
    play();
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000) // Stop confetti after 5 seconds
  }

  return (
    <section className="h-full flex items-center justify-center bg-yellow-100 p-8 relative overflow-hidden">
      {showConfetti && (
        <Confetti
          width={typeof window !== 'undefined' ? window.innerWidth : 300}
          height={typeof window !== 'undefined' ? window.innerHeight : 200}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 bg-green-500 text-white px-6 py-3 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={jumpVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: index/2, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="bg-white p-6 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center"
            >
              <skill.icon className={`text-6xl ${skill.color} mx-auto mb-4`} />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
        <motion.button
          onClick={handleConfettiClick}
          initial={{ rotate: -10, scale: 0 }}
          animate={{ rotate: -10, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mx-auto w-48 h-48 bg-yellow-400 rounded-full flex items-center justify-center transform -rotate-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
        >
          <div className="text-center text-2xl font-bold text-black" style={{ transform: "rotate(10deg)" }}>
            Coding<br />is Fun!
            <p className="text-sm">...shh don&apos;t press</p>
          </div>
        </motion.button>
      </div>
    </section>
  )
}

