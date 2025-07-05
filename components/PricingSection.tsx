'use client'

import { motion, useInView } from 'framer-motion'
import { CheckIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '/onboarding',
    price: { monthly: '₹499' },
    description: 'Perfect for small restaurants',
    features: [
      'Basic QR code menu',
      'Up to 50 menu items',
      'Basic analytics',
      'Email support',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '/onboarding',
    price: { monthly: '₹999' },
    description: 'Ideal for established restaurants',
    features: [
      'Advanced QR code menu',
      'Unlimited menu items',
      'Real-time analytics',
      'Priority support',
      'Custom branding',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/onboarding',
    price: { monthly: 'Get Quote' },
    description: 'For restaurant chains',
    features: [
      'Multiple locations',
      'API access',
      'Advanced analytics',
      'Dedicated support',
      'Custom features',
    ],
    featured: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about Zayka QR menu solutions. Can you help me get started?")
    const phoneNumber = "9466444175"
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div id="pricing" className="relative isolate overflow-hidden py-24 sm:py-32 bg-white">
      {/* Background gradient with animation */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.light),white)] opacity-30" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(129, 140, 248, 0.1), transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(129, 140, 248, 0.1), transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(129, 140, 248, 0.1), transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#6366F1] tracking-widest uppercase">Choose your perfect plan</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Choose your perfect plan</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">Each plan is crafted with love for different restaurant needs</p>
        </div>
        {/* Badge Row for md+ screens */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-16 mb-2">
          <div />
          <div className="flex justify-center items-end relative h-8">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#818cf8] to-[#6366F1] text-white text-xs font-semibold shadow-lg z-20 whitespace-nowrap">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.755l6.908-1.004L12 2.5l3.092 6.251L22 9.755l-5.007 4.367 1.179 6.873z"/></svg>
              Most Loved
            </div>
          </div>
          <div />
        </div>
        {/* Pricing Cards */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-y-10 sm:mt-12 md:grid-cols-3 md:gap-x-8">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`relative flex flex-col rounded-3xl border-2 bg-white px-7 py-10 shadow-md transition-all duration-300 h-full
                ${tier.featured ? 'border-[#6366F1] shadow-2xl scale-105 z-10' : 'border-[#818cf8]/20 hover:border-[#6366F1]/40'}
              `}
              style={{ minHeight: 520 }}
            >
              {/* Badge for mobile (inside featured card) */}
              {tier.featured && (
                <div className="md:hidden absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#818cf8] to-[#6366F1] text-white text-xs font-semibold shadow-lg z-20 whitespace-nowrap">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.755l6.908-1.004L12 2.5l3.092 6.251L22 9.755l-5.007 4.367 1.179 6.873z"/></svg>
                  Most Loved
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2 mt-2">{tier.name}</h3>
              <div className="flex justify-center items-end gap-1 mb-2">
                <span className="text-3xl font-extrabold text-[#6366F1]">{tier.price.monthly}</span>
                {tier.price.monthly !== 'Get Quote' && <span className="text-base text-gray-500 font-medium">/month</span>}
              </div>
              <p className="text-center text-gray-600 mb-6 min-h-[48px]">{tier.description}</p>
              <ul className="mb-8 space-y-3 text-base text-gray-700 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#6366F1] align-middle" style={{ verticalAlign: 'middle' }} />
                    <span className="align-middle" style={{ verticalAlign: 'middle' }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                className={`mt-auto block w-full rounded-xl px-4 py-3 text-center text-base font-semibold transition-all duration-200
                  ${tier.featured
                    ? 'bg-gradient-to-r from-[#818cf8] to-[#6366F1] text-white shadow-lg shadow-[#818cf8]/25 hover:shadow-xl'
                    : 'bg-white border-2 border-[#818cf8]/20 text-[#6366F1] hover:bg-[#f5f7ff]'}
                `}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 