import { AnimationProps } from '@/types'
import { motion } from 'framer-motion'

export function Animation({ 
  children, 
  animation = 'fadeIn',
  delay = 0,
  duration = 0.5,
  className = ''
}: AnimationProps) {
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration, delay }
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay }
    },
    slideDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay }
    },
    slideLeft: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay }
    },
    slideRight: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration, delay }
    },
    bounce: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { 
        duration, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const animationProps = animations[animation]

  return (
    <motion.div
      className={className}
      initial={animationProps.initial}
      animate={animationProps.animate}
      transition={animationProps.transition}
    >
      {children}
    </motion.div>
  )
} 