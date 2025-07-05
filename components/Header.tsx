'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Flex, Button } from '@/components/ui'
import { navigation } from '@/constants'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 overflow-hidden">
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/5" />
      
      <Container as="nav" className="relative flex items-center justify-between h-[80px] px-2 sm:px-6 lg:px-8" aria-label="Global">
        <Flex className="lg:flex-1">
          <Link href="/" className="-m-1.5 pl-0 sm:p-1.5 group">
            <span className="sr-only">Zayka</span>
            <div className="w-[160px] sm:w-[180px] h-[60px] relative bg-white/50 backdrop-blur-sm rounded-xl p-2 border border-white/30 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:bg-white/70">
              <Image
                src="/zayka-logo2.jpg"
                alt="Zayka Logo"
                width={360}
                height={120}
                className="w-full h-full object-contain"
                priority
                quality={100}
                sizes="(max-width: 640px) 160px, 180px"
              />
            </div>
          </Link>
        </Flex>
        
        <Flex className="lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-600 hover:text-gray-900 bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-5 w-5" />
          </button>
        </Flex>

        <Flex className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="text-base font-medium leading-6 text-gray-700 hover:text-[#818cf8] transition-all duration-200 whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm border border-transparent hover:border-white/30"
            >
              {item.name}
            </Link>
          ))}
        </Flex>

        <Flex className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button href="/onboarding" variant="gradient" size="md">
            Get Started
          </Button>
        </Flex>
      </Container>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            />
            <Dialog.Panel as={motion.div}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/90 backdrop-blur-md px-6 py-6 sm:max-w-sm border-l border-white/20 shadow-2xl"
            >
              <Flex className="items-center justify-end">
                <button
                  type="button"
                  className="-m-2.5 rounded-xl p-2.5 text-gray-600 hover:text-gray-900 bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </Flex>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/20">
                  <Flex direction="col" className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-xl px-3 py-2 text-base font-medium leading-7 text-gray-700 hover:bg-white/50 hover:text-[#818cf8] transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </Flex>
                  <div className="py-6">
                    <Button 
                      href="/onboarding" 
                      variant="gradient" 
                      size="md"
                      className="-mx-3 block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  )
} 