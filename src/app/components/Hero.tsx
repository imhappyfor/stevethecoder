'use client'

import { motion, useAnimation } from 'framer-motion'
import { FaLinkedin, FaGithub, FaHardHat } from 'react-icons/fa'
import { useEffect } from 'react'

export default function Hero() {
  const badgeControls = useAnimation()

  useEffect(() => {
    const animateBadge = async () => {
      // 1) Initial: put the badge in place, scaled down a bit
      await badgeControls.start({
        rotate: 0,
        scale: 1,
        y: 0,
        transition: { duration: 0 },
      })

      // Scale up to normal
      await badgeControls.start({
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
      })

      // Small pause before "snap"
      await new Promise((resolve) => setTimeout(resolve, 400))

      // 2) Quick snap/break effect
      // await badgeControls.start({
        // rotate: [0, 35, -15, 0],
        // y: [0, 0, 2, 0],
        // transition: { duration: 0.7, ease: 'easeInOut' },
      // })

      // 3) Indefinite swinging
      await badgeControls.start({
        rotate: [0, 115, 15, 100, 20, 95, 25, 0], // a pendulum-like pattern
        y: [0, 2, -2, 2, -2, 1, -1, 0],         // small up/down bob for realism
        transition: {
          duration: 3,          // length of one full swing cycle
          ease: 'easeInOut',    // smooth motion
          repeat: Infinity,     // keep swinging forever
        },
      })
    }

    animateBadge()
  }, [badgeControls])

  return (
    <section className="h-full flex items-center justify-center bg-yellow-100 relative">
      <div className="text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4 bg-blue-500 text-white px-6 py-3 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
        >
          Steve The Coder

          <motion.div
            animate={badgeControls}
            style={{ originX: 0, originY: 0 }}
              className="
    absolute -top-3 -right-28
    bg-[repeating-linear-gradient(45deg,#000_0_8px,#FFD700_8px_16px)]
    bg-cover
    text-white px-4 py-1 text-sm font-bold
    border-2 border-black
    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
    flex items-center space-x-1
  "
>
  <span className="text-black bg-white"> 
  <FaHardHat className="inline-block mr-1 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)] " />
  <span className="bg-white text-black drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]">SELF TAUGHT</span>
  </span>
          </motion.div>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl mb-8 bg-green-400 px-4 py-2 rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          Turning Coffee into Code Since 2009
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/stevecancode"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white p-3 rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/imhappyfor"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-3 rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <FaGithub size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

