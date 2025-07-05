import { NavigationItem, PricingTier, BusinessType } from '@/types'
import { 
  QrCodeIcon, 
  SparklesIcon, 
  BuildingStorefrontIcon,
  CakeIcon,
  FireIcon,
  TruckIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'


export const navigation: NavigationItem[] = [
  { name: 'Home', href: '#' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Menu', href: '#menu' },
  { name: 'Features', href: '#features' },
  { name: 'Contact', href: '/contact' },
]

export const pricingTiers: PricingTier[] = [
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

export const businessTypes: BusinessType[] = [
  {
    id: 'restaurant',
    name: 'Restaurant',
    description: 'Full-service dining establishments',
    icon: BuildingStorefrontIcon,
    features: ['Multi-course menus', 'Table service', 'Reservations', 'Wine lists']
  },
  {
    id: 'cafe',
    name: 'Cafe',
    description: 'Casual coffee and light meals',
    icon: BuildingStorefrontIcon,
    features: ['Coffee & tea', 'Pastries', 'Light meals', 'Quick service']
  },
  {
    id: 'bakery',
    name: 'Bakery',
    description: 'Fresh breads and pastries',
    icon: CakeIcon,
    features: ['Fresh breads', 'Pastries', 'Custom cakes', 'Coffee']
  },
  {
    id: 'pizzeria',
    name: 'Pizzeria',
    description: 'Pizza and Italian cuisine',
    icon: FireIcon,
    features: ['Pizza varieties', 'Italian dishes', 'Delivery', 'Takeout']
  },
  {
    id: 'food-truck',
    name: 'Food Truck',
    description: 'Mobile food service',
    icon: TruckIcon,
    features: ['Mobile menu', 'Location updates', 'Quick service', 'Events']
  },
  {
    id: 'retail',
    name: 'Retail Store',
    description: 'Food and beverage retail',
    icon: ShoppingBagIcon,
    features: ['Product catalog', 'Inventory', 'Special offers', 'Loyalty program']
  }
]

export const contactInfo = {
  phone: '+91 9466444175',
  email: 'hello@zayka.app',
  whatsapp: '9466444175',
  address: 'Mumbai, Maharashtra, India'
}

export const socialLinks = {
  instagram: 'https://instagram.com/zayka.app',
  facebook: 'https://facebook.com/zayka.app',
  twitter: 'https://twitter.com/zayka_app'
}

export const features = [
  {
    title: 'Easy Setup',
    description: 'Get your QR menu live in under 90 seconds',
    icon: SparklesIcon
  },
  {
    title: 'Real-time Updates',
    description: 'Update your menu instantly from anywhere',
    icon: QrCodeIcon
  },
  {
    title: 'Analytics',
    description: 'Track customer engagement and popular items',
    icon: SparklesIcon
  }
] 