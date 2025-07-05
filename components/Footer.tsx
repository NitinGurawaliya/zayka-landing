'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

const quickLinks = [
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Sample Menus', href: '/#menu' },
  { name: 'Features', href: '/#features' },
  { name: 'Support', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
]

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Refunds & Cancellations', href: '/refunds' },
  { name: 'Contact Us', href: '/contact' },
]

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/zaykaqr', icon: Instagram },
  { name: 'Facebook', href: 'https://facebook.com/zaykaqr', icon: Facebook },
  { name: 'Twitter', href: 'https://twitter.com/zaykaqr', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/zaykaqr', icon: Linkedin },
]

export default function Footer() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about Zayka QR menu solutions. Can you help me get started?")
    const phoneNumber = "9466444175"
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/zayka-logo2.jpg"
                alt="Zayka Logo"
                width={180}
                height={60}
                className="mx-auto mb-4 object-contain"
                priority
              />
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Transform your restaurant menu into a digital experience with QR codes. 
              Create beautiful, interactive menus that delight your customers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact & Support</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm">Email:</p>
                <a 
                  href="mailto:contact@zayka-qr.com" 
                  className="text-white hover:text-[#818cf8] transition-colors duration-200"
                >
                  contact@zayka-qr.com
                </a>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Phone:</p>
                <a 
                  href="tel:+919466444175" 
                  className="text-white hover:text-[#818cf8] transition-colors duration-200"
                >
                  +91 9466444175
                </a>
              </div>
              <div>
                <p className="text-gray-300 text-sm">WhatsApp:</p>
                <button
                  onClick={handleWhatsAppClick}
                  className="text-white hover:text-green-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© 2024 Zayka QR Menu Solutions. All rights reserved.</p>
              <p className="mt-1">Transforming restaurant menus into digital experiences.</p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Made with ❤️ in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}