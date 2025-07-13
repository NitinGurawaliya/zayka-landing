'use client'

import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import PricingSection from "../components/PricingSection"
import ReasonsToLoveSection from "../components/ReasonsToLoveSection"
import BusinessTypeSelector from '../components/BusinessTypeSelector'
import { useEffect, useState } from 'react'
import { Flex, Section, Container, Heading, Text, Button, Animation } from '@/components/ui'
import { contactInfo } from '@/constants'

export default function Home() {
  const [showInstagram, setShowInstagram] = useState(false)
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      if (params.get('showInstagram') === '1') {
        setShowInstagram(true)
        // Remove the param from the URL after showing
        window.history.replaceState({}, document.title, window.location.pathname)
      }
    }
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about Zayka QR menu solutions. Can you help me get started?")
    const phoneNumber = contactInfo.whatsapp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-black overflow-x-hidden w-full">
      <Header />
    

      <HeroSection />
      <BusinessTypeSelector />
      <PricingSection />

      


      <ReasonsToLoveSection />
      
      {/* Guest Registration for Marketing Section */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Mobile Image Placeholder */}
            <div className="flex justify-center">
              <div className="w-64 h-128 max-w-xs rounded-3xl shadow-lg flex items-center justify-center  overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dixjcb4on/image/upload/v1752428985/dishes_image/guest_reg_ss.jpg"
                  alt="Mobile Guest Registration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Right: Responsive Text */}
            <div className="flex flex-col items-start">
              <Heading level="h2" size="3xl" className="mb-4 text-gray-900 font-extrabold sm:text-2xl sm:mb-2">
                Guest Registration for Smart Marketing
              </Heading>
              <Text size="xl" className="mb-4 text-gray-700 sm:text-base sm:mb-2">
                Collect your guests' names and phone numbers easily when they scan your QR menu. Build a valuable customer list for future marketing campaigns and personalized offers.
              </Text>
              <Text size="lg" className="mb-6 text-gray-600 sm:text-sm sm:mb-3">
                Use this data to remind your guests about special events, new menu launches, or simply to let them know you exist—bringing them back to your restaurant again and again!
              </Text>
              <div className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium sm:text-xs sm:px-2 sm:py-1">
                <svg className="w-5 h-5 mr-2 text-green-500 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                Build your own customer database—no extra cost!
              </div>
            </div>
          </div>
        </Container>
      </Section>

      
      {/* Call to Action Section */}
      <Section background="gradient" padding="lg">
        <Container>
          <Flex direction="col" align="center" className="text-center">
            <Heading level="h2" size="3xl" align="center" className="mb-4">
              Ready to Transform Your Restaurant?
            </Heading>
            <Text size="lg" align="center" className="mb-8 max-w-2xl">
              Join hundreds of restaurants already using Zayka QR menus. Complete our quick 3-step onboarding and we'll visit your restaurant within 48 hours.
            </Text>
            <Flex direction="col" gap="4" className="sm:flex-row justify-center items-center">
              <Button
                href="/onboarding"
                variant="gradient"
                size="xl"
                icon={({ className }) => (
                  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                )}
                iconPosition="right"
              >
                Start 3-Step Onboarding
              </Button>
              <Button
                onClick={handleWhatsAppClick}
                variant="secondary"
                size="xl"
                icon={({ className }) => (
                  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                )}
                iconPosition="right"
              >
                Chat on WhatsApp
              </Button>
            </Flex>
            <Text size="sm" color="muted" className="mt-4">
              📞 {contactInfo.phone} | ⚡ Setup in 90 seconds
            </Text>
          </Flex>
        </Container>
      </Section>

      {showInstagram && (
        <Animation animation="fadeIn" className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold"
              onClick={() => setShowInstagram(false)}
              aria-label="Close"
            >
              ×
            </button>
            <Flex direction="col" align="center" gap="4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="url(#ig-gradient)"/>
                <defs>
                  <linearGradient id="ig-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f58529"/>
                    <stop offset="0.5" stopColor="#dd2a7b"/>
                    <stop offset="1" stopColor="#515bd4"/>
                  </linearGradient>
                </defs>
                <circle cx="24" cy="24" r="12" fill="white"/>
                <circle cx="24" cy="24" r="7" fill="url(#ig-gradient)"/>
                <circle cx="32" cy="16" r="2" fill="url(#ig-gradient)"/>
              </svg>
              <Heading level="h2" size="2xl" className="mb-2">
                Let's Connect on Instagram!
              </Heading>
              <Text className="mb-4">
                Follow us for updates, tips, and more restaurant inspiration.
              </Text>
              <Button
                href="https://instagram.com/zayka.app"
                variant="gradient"
                size="lg"
                className="inline-block bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4]"
              >
                Follow @zayka.app
              </Button>
            </Flex>
          </div>
        </Animation>
      )}
    </div>
  )
}
