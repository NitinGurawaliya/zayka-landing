import Link from 'next/link'
import { StarIcon, TrophyIcon, SparklesIcon } from '@heroicons/react/24/outline'

const menuTiers = [
  {
    icon: StarIcon,
    title: 'Tier 1\nMenu',
    description: 'Basic digital menu with essential features',
    href: 'https://dine-inn.vercel.app/menu/home/4',
    features: ['Up to 50 items', 'Basic categories', 'Simple design']
  },
  {
    icon: TrophyIcon,
    title: 'Tier 2\nMenu',
    description: 'Professional menu with advanced features',
    href: 'https://hillpoint.dineinn.shop',
    features: ['Unlimited items', 'Advanced categories', 'Custom branding']
  },
  {
    icon: SparklesIcon,
    title: 'Tier 3\nMenu',
    description: 'Premium menu with all features',
    href: '/onboarding',
    features: ['Multi-language', 'Analytics', 'Premium design']
  }
]

export default function BusinessTypeSelector() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#000080] mb-4">
            View Sample Menus
            <span className="block h-1 w-24 bg-[#90EE90] mx-auto mt-2"></span>
          </h2>
          <p className="text-xl text-[#000080]">
            Explore our different menu tiers and choose what fits your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuTiers.map((tier, index) => (
            <Link
              key={index}
              href={tier.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-[#818cf8] to-[#6366F1] rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <tier.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-center text-gray-800 font-bold text-xl mb-2 whitespace-pre-line">
                {tier.title}
              </h3>
              <p className="text-center text-gray-600 text-sm mb-4">
                {tier.description}
              </p>
              <ul className="text-center text-gray-500 text-xs space-y-1 mb-4">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-2 h-0.5 w-12 bg-[#FF6B35] group-hover:w-16 transition-all duration-200"></div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-[#000080] to-[#818cf8] rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
} 