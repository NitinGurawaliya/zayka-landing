'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { QrCodeIcon } from '@heroicons/react/24/outline'

const sampleMenuItems = [
  {
    name: 'Margherita Pizza',
    description: 'Fresh tomatoes, mozzarella, basil, and olive oil',
    price: '$14.99',
    category: 'Main Course',
    image: '/menu/pizza.jpg',
  },
  {
    name: 'Caesar Salad',
    description: 'Romaine lettuce, croutons, parmesan cheese with caesar dressing',
    price: '$9.99',
    category: 'Starters',
    image: '/menu/salad.jpg',
  },
  {
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten chocolate center',
    price: '$8.99',
    category: 'Desserts',
    image: '/menu/dessert.jpg',
  },
]

export default function SampleMenuSection() {
  return (
    <div id="menu" className="relative isolate bg-gray-50 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            className="text-base font-semibold leading-7 text-[#FF6B35]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Interactive Demo
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See it in action
          </motion.p>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience how your customers will interact with your digital menu
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Video Demo */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[9/16] w-full max-w-sm mx-auto">
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/menu-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 rounded-2xl" />
          </motion.div>

          {/* Right side - QR Code Stand */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                <span className="inline-flex items-center rounded-full bg-[#818cf8] px-4 py-1 text-xs font-semibold text-white">
                  Scan Me
                </span>
              </div>
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/qr-stand.png"
                  alt="QR Code Stand"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  Elegant Table Presentation
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Professional QR code stands that complement your restaurant's decor
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] mr-2" />
                    Durable acrylic material
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] mr-2" />
                    Custom branding available
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] mr-2" />
                    Weather-resistant
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 