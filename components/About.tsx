'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Sparkles, Target } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Modern Design',
      description: 'Creating beautiful interfaces with attention to detail',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Problem Solving',
      description: 'Turning complex challenges into elegant solutions',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl rotate-6 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary-400 to-pink-400 rounded-2xl -rotate-6 opacity-20"></div>
                
                {/* Main content area */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <span className="text-5xl">👨‍💻</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-semibold">
                      Passionate Developer
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Building Digital Experiences
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and a love for 
                creating seamless user experiences. With expertise in modern web technologies, 
                I bring ideas to life through clean, efficient code.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey in web development has equipped me with a diverse skill set, 
                from crafting pixel-perfect frontends to building robust backend systems. 
                I'm constantly learning and adapting to new technologies to deliver 
                cutting-edge solutions.
              </p>

              {/* Highlights Grid */}
              <div className="grid gap-4 pt-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg text-white flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
