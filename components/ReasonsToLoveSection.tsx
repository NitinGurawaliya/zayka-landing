'use client'

import { motion } from 'framer-motion'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Easy Updates',
    description: 'Update your menu instantly through our user-friendly dashboard. No technical skills required.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Mobile Responsive',
    description: 'Your menu looks perfect on any device, from smartphones to tablets.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Secure Platform',
    description: 'Your menu data is protected with enterprise-grade security and regular backups.',
    icon: LockClosedIcon,
  },
  {
    name: 'Analytics & Insights',
    description: 'Track views, popular items, and customer behavior to optimize your menu.',
    icon: ChartBarIcon,
  },
  {
    name: 'Reliable Infrastructure',
    description: '99.9% uptime guarantee ensures your menu is always accessible.',
    icon: ServerIcon,
  },
  {
    name: 'Cost Effective',
    description: 'Save money on printing costs and make updates without reprinting menus.',
    icon: CurrencyDollarIcon,
  },
]

export default function ReasonsToLoveSection() {
  return (
    <div id="features" className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            className="text-base font-semibold leading-7 text-indigo-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Everything you need to manage your digital menu
          </motion.p>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our platform provides all the tools and features you need to create, manage, and optimize your restaurant's digital menu experience.
          </motion.p>
        </div>
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
} 