'use client'

import { motion, useInView } from 'framer-motion'
import { CheckIcon, SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'
import { Container, Section, Heading, Text, Grid, Card, Badge, Button } from '@/components/ui'
import { pricingTiers } from '@/constants'

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
    <Section id="pricing" background="white" padding="xl">
      {/* Background gradient with animation */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,#818CF8,white)] opacity-30" />
        <div
          className="absolute inset-0"
        />
      </div>
      
      <Container>
        <div 
          className="mx-auto max-w-2xl text-center"
        >
          <Badge variant="primary" className="mb-4 mx-auto">
            Pricing
          </Badge>
          <Heading level="h2" size="4xl" align="center" className="mb-6">
            Choose your perfect plan
          </Heading>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8 mx-auto pt-16 max-w-6xl sm:mt-12 md:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <div key={tier.id} className={tier.featured ? 'relative' : ''}>
              {/* Floating Most Loved badge above featured card on large screens */}
              {tier.featured && (
                <div className="hidden md:block absolute left-1/2 -top-10 -translate-x-1/2 z-20">
                  <Badge 
                    variant="primary" 
                    size="sm"
                    className="whitespace-nowrap px-4 py-2 shadow-lg text-base"
                  >
                    <SparklesIcon className="w-5 h-5 mr-2" />
                    Most Loved
                  </Badge>
                </div>
              )}
              <Card 
                variant={tier.featured ? "elevated" : "default"}
                className={`relative flex flex-col h-full transition-all duration-300
                  ${tier.featured ? 'border-[#6366F1] scale-105 z-10 shadow-xl' : 'border-[#818cf8]/20 hover:border-[#6366F1]/40 hover:shadow-lg'}
                `}
                style={{ minHeight: 520 }}
              >
                {/* Badge for mobile (inside featured card) */}
                {tier.featured && (
                  <Badge 
                    variant="primary" 
                    size="sm"
                    className="md:hidden absolute -top-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap"
                  >
                    <SparklesIcon className="w-4 h-4 mr-1" />
                    Most Loved
                  </Badge>
                )}
                
                <Heading level="h3" size="2xl" align="center" className="mb-2 mt-2">
                  {tier.name}
                </Heading>
                
                <div className="flex justify-center items-end gap-1 mb-2">
                  <span className="text-3xl font-extrabold text-[#6366F1]">
                    {tier.price.monthly}
                  </span>
                  {tier.price.monthly !== 'Get Quote' && (
                    <Text size="md" color="muted" className="font-medium">
                      /month
                    </Text>
                  )}
                </div>
                
                <Text align="center" className="mb-6 min-h-[48px]">
                  {tier.description}
                </Text>
                
                <ul className="mb-8 space-y-2 text-sm font-sans flex-1" style={{ fontFamily: 'Poppins, Inter, Montserrat, sans-serif' }}>
                  {tier.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-2">
                      {feature.included ? (
                        <>
                          <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="align-middle font-semibold text-[#181A2A]">{feature.name}</span>
                        </>
                      ) : (
                        <>
                          <span className="w-4 h-4 inline-block flex-shrink-0" />
                          <span className="align-middle font-normal text-[#181A2A]">{feature.name}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                
                <Button
                  href={tier.href}
                  variant={tier.featured ? "gradient" : "outline"}
                  size="lg"
                  className="mt-auto w-full"
                >
                  Get Started
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
} 