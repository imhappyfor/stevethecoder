'use client'

import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'ltngfilebrowser',
      description: 'A pet project to create a local file browser using Tauri and React (not very useful, but fun to build)',
      link: 'https://github.com/imhappyfor/ltngfilebrowser',
    },
    {
      title: 'Pomodoro Timer',
      description: 'A simple Pomodoro timer built with Vue.js',
      link: 'https://github.com/imhappyfor/pomodoro-timer',
    },
    {
      title: 'DJ-Tweets ',
      description: 'A fun collaboration project for a Hackathon, a program that generates a "melody" based on a twitter User using sentiment analysis',
      link: 'https://github.com/imhappyfor/DJ-Tweets',
    },
  ]

  return (
    <section className="h-full flex items-center justify-center bg-yellow-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 bg-red-500 text-white px-6 py-3 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-600 transition-colors"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

