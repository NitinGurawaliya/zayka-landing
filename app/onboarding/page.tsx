'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BuildingStorefrontIcon, 
  CreditCardIcon, 
  CalendarIcon,
  CheckIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  SparklesIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import Header from "../../components/Header"
import PricingCard from '@/components/PricingCard'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import React from 'react'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹499',
    description: 'Perfect for small restaurants',
    features: ['Basic QR code menu', 'Up to 50 menu items', 'Basic analytics', 'Email support'],
    color: 'from-blue-400 to-indigo-500'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '₹999',
    description: 'Ideal for established restaurants',
    features: ['Advanced QR code menu', 'Unlimited menu items', 'Real-time analytics', 'Priority support', 'Custom branding'],
    popular: true,
    color: 'from-[#818cf8] to-[#6366F1]'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Get Quote',
    description: 'For restaurant chains',
    features: ['Multiple locations', 'API access', 'Advanced analytics', 'Dedicated support', 'Custom features'],
    color: 'from-indigo-400 to-purple-500'
  }
]

const timeSlots = [
  '9:00 AM - 11:00 AM',
  '11:00 AM - 1:00 PM', 
  '2:00 PM - 4:00 PM',
  '4:00 PM - 6:00 PM',
  '6:00 PM - 8:00 PM'
]

function Confetti() {
  const ref = useRef<HTMLCanvasElement>(null)
  React.useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement | null
    if (!canvas) return
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D | null
    if (!ctx) return
    const W = window.innerWidth
    const H = window.innerHeight
    canvas.width = W
    canvas.height = H
    let particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H - H,
      r: Math.random() * 6 + 4,
      d: Math.random() * 120 + 10,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      tilt: Math.random() * 10 - 10,
      tiltAngle: 0,
      tiltAngleIncremental: Math.random() * 0.07 + 0.05,
    }))
    let angle = 0
    let animationFrameId: number
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H)
      angle += 0.01
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i]
        p.tiltAngle += p.tiltAngleIncremental
        p.y += (Math.cos(angle + p.d) + 3 + p.r / 2) / 2
        p.x += Math.sin(angle)
        p.tilt = Math.sin(p.tiltAngle) * 15
        ctx.beginPath()
        ctx.lineWidth = p.r
        ctx.strokeStyle = p.color
        ctx.moveTo(p.x + p.tilt + p.r / 3, p.y)
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r)
        ctx.stroke()
      }
      animationFrameId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animationFrameId)
  }, [])
  return <canvas ref={ref} className="fixed inset-0 pointer-events-none z-[9999]" style={{ width: '100vw', height: '100vh' }} />
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Restaurant Details
    restaurantName: '',
    restaurantType: '',
    location: '',
    phoneNumber: '',
    email: '',
    
    // Step 2: Plan Selection
    selectedPlan: '',
    
    // Step 3: Visit Schedule
    preferredDate: '',
    preferredTime: '',
    additionalNotes: ''
  })
  const [showConfetti, setShowConfetti] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const router = useRouter()

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setShowToast(true)
      setShowConfetti(true)
      setTimeout(() => {
        setShowToast(false)
        setShowConfetti(false)
        router.push('/?showInstagram=1')
      }, 2000)
    } catch (err) {
      // Optionally show error toast
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.restaurantName && formData.restaurantType && formData.location && formData.phoneNumber && formData.email
      case 2:
        return formData.selectedPlan
      case 3:
        return formData.preferredDate && formData.preferredTime
      default:
        return false
    }
  }

  const steps = [
    { id: 1, title: 'Restaurant Details', icon: BuildingStorefrontIcon, color: 'from-blue-400 to-indigo-500' },
    { id: 2, title: 'Choose Plan', icon: CreditCardIcon, color: 'from-[#818cf8] to-[#6366F1]' },
    { id: 3, title: 'Schedule Visit', icon: CalendarIcon, color: 'from-indigo-400 to-purple-500' }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white text-black overflow-x-hidden w-full">
      <Header />
      
      {/* Hero Section */}
      <div className="relative isolate pt-8 overflow-hidden">
        <div className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#818cf8] to-[#6366F1] rounded-full shadow-lg">
                  <HeartIcon className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              >
                Let's Create Something <span className="bg-gradient-to-r from-[#818cf8] to-[#6366F1] bg-clip-text text-transparent">Beautiful</span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 text-lg leading-8 text-gray-600"
              >
                Join the family of restaurants that have transformed their dining experience with our handcrafted QR menu solution.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Handcrafted Progress Indicator - restored to original position below hero section */}
      <div className="w-full max-w-none px-0 py-8 sticky top-0 z-30 bg-white bg-opacity-90 backdrop-blur-md">
        <div className="relative w-full">
          {/* Organic progress line */}
          <div className="absolute md:top-6 top-8 left-0 right-0 h-1 bg-gradient-to-r from-[#818cf8]/20 to-[#6366F1]/20 rounded-full md:block hidden w-full">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#818cf8] to-[#6366F1] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(currentStep / 3) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-between relative z-10 gap-6 md:gap-0 w-full">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id} 
                className="flex flex-col items-center flex-1 w-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`relative w-12 h-12 rounded-full border-4 transition-all duration-500 mx-auto ${
                  currentStep >= step.id 
                    ? `bg-gradient-to-br ${step.color} border-transparent shadow-lg` 
                    : 'bg-white border-[#818cf8]/30 shadow-md'
                }`}>
                  {currentStep > step.id ? (
                    <CheckIcon className="absolute inset-0 m-auto w-6 h-6 text-white" />
                  ) : (
                    <step.icon className={`absolute inset-0 m-auto w-6 h-6 ${
                      currentStep >= step.id ? 'text-white' : 'text-[#818cf8]'
                    }`} />
                  )}
                </div>
                <div className="mt-2 text-center w-full">
                  <p className={`text-sm font-medium transition-colors duration-300 break-words ${
                    currentStep >= step.id ? 'text-[#818cf8]' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {/* Progress line for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-1 h-8 bg-gradient-to-b from-[#818cf8]/20 to-[#6366F1]/20 mx-auto" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Organic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#818cf8]/20 to-[#6366F1]/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-xl animate-pulse delay-2000" />
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-[#818cf8]/20 to-[#6366F1]/20 rounded-full blur-xl animate-pulse delay-1500" />
        
        {/* Hand-drawn style lines */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 Q25,15 50,20 T100,20" stroke="url(#gradient1)" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M0,80 Q25,85 50,80 T100,80" stroke="url(#gradient2)" strokeWidth="0.5" fill="none" opacity="0.3" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Form Container */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 pb-16">
        <motion.div 
          className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-[#818cf8]/20 shadow-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#818cf8] to-[#6366F1] rounded-full opacity-80" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-60" />
          <div className="absolute -bottom-3 -left-2 w-5 h-5 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-70" />
          
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mb-4 shadow-lg">
                    <BuildingStorefrontIcon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Tell us about your restaurant</h2>
                  <p className="text-gray-600 mt-3">We love hearing stories about amazing restaurants like yours</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-900 mb-3 group-hover:text-[#818cf8] transition-colors">
                      Restaurant Name *
                    </label>
                    <input
                      type="text"
                      value={formData.restaurantName}
                      onChange={(e) => updateFormData('restaurantName', e.target.value)}
                      className="block w-full rounded-2xl border-2 border-[#818cf8]/20 px-4 py-4 text-gray-900 bg-white/50 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#818cf8] focus:border-[#818cf8] transition-all duration-300 group-hover:border-[#818cf8]/40"
                      placeholder="Your beautiful restaurant name"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-900 mb-3 group-hover:text-[#818cf8] transition-colors">
                      Restaurant Type *
                    </label>
                    <select
                      value={formData.restaurantType}
                      onChange={(e) => updateFormData('restaurantType', e.target.value)}
                      className="block w-full rounded-2xl border-2 border-[#818cf8]/20 px-4 py-4 text-gray-900 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-[#818cf8] focus:border-[#818cf8] transition-all duration-300 group-hover:border-[#818cf8]/40"
                    >
                      <option value="">What type of restaurant?</option>
                      <option value="fine-dining">Fine Dining</option>
                      <option value="casual-dining">Casual Dining</option>
                      <option value="fast-food">Fast Food</option>
                      <option value="cafe">Café</option>
                      <option value="pizzeria">Pizzeria</option>
                      <option value="barbecue">Barbecue</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-900 mb-3 group-hover:text-[#818cf8] transition-colors">
                      Location/Address *
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => updateFormData('location', e.target.value)}
                      className="block w-full rounded-2xl border-2 border-[#818cf8]/20 px-4 py-4 text-gray-900 bg-white/50 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#818cf8] focus:border-[#818cf8] transition-all duration-300 group-hover:border-[#818cf8]/40"
                      placeholder="Where can we find you?"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-900 mb-3 group-hover:text-[#818cf8] transition-colors">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => updateFormData('phoneNumber', e.target.value)}
                      className="block w-full rounded-2xl border-2 border-[#818cf8]/20 px-4 py-4 text-gray-900 bg-white/50 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#818cf8] focus:border-[#818cf8] transition-all duration-300 group-hover:border-[#818cf8]/40"
                      placeholder="+91 9466444175"
                    />
                  </div>

                  <div className="md:col-span-2 group">
                    <label className="block text-sm font-semibold text-gray-900 mb-3 group-hover:text-[#818cf8] transition-colors">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="block w-full rounded-2xl border-2 border-[#818cf8]/20 px-4 py-4 text-gray-900 bg-white/50 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#818cf8] focus:border-[#818cf8] transition-all duration-300 group-hover:border-[#818cf8]/40"
                      placeholder="owner@yourrestaurant.com"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#818cf8] to-[#6366F1] rounded-full mb-4 shadow-lg">
                    <CreditCardIcon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Choose your perfect plan</h2>
                  <p className="text-gray-600 mt-3">Each plan is crafted with love for different restaurant needs</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {plans.map((plan) => (
                    <PricingCard
                      key={plan.id}
                      name={plan.name}
                      price={plan.price}
                      description={plan.description}
                      features={plan.features}
                      featured={plan.popular}
                      selected={formData.selectedPlan === plan.id}
                      onClick={() => updateFormData('selectedPlan', plan.id)}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mb-4 shadow-lg">
                    <CalendarIcon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Let's meet at your restaurant</h2>
                  <p className="text-gray-600 mt-3">We're excited to visit and understand your unique setup</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-900 mb-3 group-hover:text-[#818cf8] transition-colors">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => updateFormData('preferredDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="block w-full rounded-2xl border-2 border-[#818cf8]/20 px-4 py-4 text-gray-900 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-[#818cf8] focus:border-[#818cf8] transition-all duration-300 group-hover:border-[#818cf8]/40"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-900 mb-3 group-hover:text-[#818cf8] transition-colors">
                      Preferred Time *
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => updateFormData('preferredTime', e.target.value)}
                      className="block w-full rounded-2xl border-2 border-[#818cf8]/20 px-4 py-4 text-gray-900 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-[#818cf8] focus:border-[#818cf8] transition-all duration-300 group-hover:border-[#818cf8]/40"
                    >
                      <option value="">When works best for you?</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2 group">
                    <label className="block text-sm font-semibold text-gray-900 mb-3 group-hover:text-[#818cf8] transition-colors">
                      Tell us more about your restaurant
                    </label>
                    <textarea
                      value={formData.additionalNotes}
                      onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                      rows={4}
                      className="block w-full rounded-2xl border-2 border-[#818cf8]/20 px-4 py-4 text-gray-900 bg-white/50 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#818cf8] focus:border-[#818cf8] transition-all duration-300 group-hover:border-[#818cf8]/40"
                      placeholder="What makes your restaurant special? Any specific requirements or questions..."
                    />
                  </div>
                </div>

                <motion.div 
                  className="bg-gradient-to-br from-[#818cf8]/5 to-[#6366F1]/5 rounded-3xl p-8 border-2 border-[#818cf8]/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <SparklesIcon className="w-6 h-6 text-[#818cf8] mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">What happens next?</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-[#818cf8] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>We'll call you within 24 hours to confirm your visit</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-[#818cf8] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Our team will visit to understand your unique setup</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-[#818cf8] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>We'll craft a personalized QR menu solution</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-[#818cf8] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Your menu goes live in just 90 seconds!</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-[#818cf8]/20 gap-4">
            <motion.button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`w-full sm:w-auto flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:text-[#818cf8] hover:bg-[#818cf8]/5 border-2 border-[#818cf8]/20 hover:border-[#818cf8]/40'
              }`}
              whileHover={currentStep > 1 ? { scale: 1.05 } : {}}
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Previous
            </motion.button>

            {currentStep < 3 ? (
              <motion.button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`w-full sm:w-auto flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  isStepValid()
                    ? 'bg-gradient-to-r from-[#818cf8] to-[#6366F1] text-white shadow-lg shadow-[#818cf8]/25 hover:shadow-xl hover:shadow-[#818cf8]/30'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                whileHover={isStepValid() ? { scale: 1.05 } : {}}
              >
                Next
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </motion.button>
            ) : (
              <motion.button
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className={`w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 mt-2 sm:mt-0 ${
                  isStepValid()
                    ? 'bg-gradient-to-r from-[#818cf8] to-[#6366F1] text-white shadow-lg shadow-[#818cf8]/25 hover:shadow-xl hover:shadow-[#818cf8]/30'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                whileHover={isStepValid() ? { scale: 1.05 } : {}}
              >
                <HeartIcon className="w-5 h-5 mr-2" />
                Send Our Love
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
      {showToast && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[10000] bg-gradient-to-r from-[#818cf8] to-[#6366F1] text-white px-6 py-3 rounded-xl shadow-lg text-lg font-semibold animate-fade-in">
          Details onboarded! We will contact you ASAP.
        </div>
      )}
      {showConfetti && <Confetti />}
    </div>
  )
} 