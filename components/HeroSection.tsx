'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { QrCodeIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 800], [1, 0.3])
  const scale = useTransform(scrollY, [0, 800], [1, 0.95])
  const y = useTransform(scrollY, [0, 800], [0, 30])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <div className="relative isolate pt-8 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="gradient-bg animate-pulse-soft" />
      </motion.div>
      
      <motion.div
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div 
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#818cf8] to-[#FF6B35] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] max-w-none" 
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </motion.div>
      
      <motion.div
        className="py-16 sm:py-20 lg:pb-32"
        style={{ opacity, y }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 hover-lift interactive-bounce"
            >
              <SparklesIcon className="mr-1.5 h-4 w-4 animate-[pulse_2s_ease-in-out_infinite]" />
              24/7 Customer Support
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Transform Your <span className="text-gradient">Restaurant Menu</span> Into a Digital Experience
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-lg leading-8 text-gray-600"
            >
              Create beautiful, interactive QR menus that delight your customers. Perfect for restaurants, cafes, bars, and food courts.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-y-0 sm:gap-x-6"
            >
             
              <Link
                href="/onboarding"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-x-2 rounded-lg bg-[#FF6B35] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#E85A2C] transition-all duration-200 hover-lift"
              >
                Get a Call Back
              </Link>
              <Link 
                href="/#pricing" 
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-all duration-200 group interactive-bounce"
              >
                Learn more{' '}
                <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-16 flow-root sm:mt-24"
            variants={itemVariants}
          >
            <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 hover-lift">
              <div className="relative w-full max-w-[2432px] mx-auto">
                <Image
                  src="https://res.cloudinary.com/dixjcb4on/image/upload/v1748978394/dishes_image/1.jpg"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-lg shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-500 hover:scale-[1.01] w-full h-auto"
                  priority
                />
              </div>
              <motion.div 
                className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(99, 102, 241, 0)",
                    "0 0 20px rgba(99, 102, 241, 0.3)",
                    "0 0 0 rgba(99, 102, 241, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div 
          className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FF6B35] to-[#818cf8] opacity-20 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] max-w-none" 
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </motion.div>
    </div>
  )
} 