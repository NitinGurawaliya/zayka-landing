import Header from "../../components/Header"
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black overflow-x-hidden w-full">
      <Header />
      
      {/* Hero Section */}
      <div className="relative isolate pt-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#818cf8]/10 to-[#FF6B35]/10" />
        <div className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ready to transform your restaurant's menu experience? Contact us today to get started with our digital QR menu solution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-8 py-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Contact Information</h2>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                We're here to help you create the perfect digital menu for your restaurant. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-8 w-8 text-[#818cf8]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">hopesalive.1947@gmail.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-8 w-8 text-[#818cf8]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 9466444175</p>
                  <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM IST</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-[#818cf8]/10 to-[#FF6B35]/10 rounded-2xl p-6 border border-[#818cf8]/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Choose Zayka?</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] mr-2" />
                  Quick setup in under 90 seconds
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] mr-2" />
                  24/7 customer support
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] mr-2" />
                  Free consultation and demo
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] mr-2" />
                  No long-term contracts
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#818cf8] sm:text-sm sm:leading-6 transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#818cf8] sm:text-sm sm:leading-6 transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#818cf8] sm:text-sm sm:leading-6 transition-all duration-200"
                  placeholder="john@restaurant.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#818cf8] sm:text-sm sm:leading-6 transition-all duration-200"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="restaurant-name" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  name="restaurant-name"
                  id="restaurant-name"
                  className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#818cf8] sm:text-sm sm:leading-6 transition-all duration-200"
                  placeholder="Your Restaurant Name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#818cf8] sm:text-sm sm:leading-6 transition-all duration-200"
                  placeholder="Tell us about your restaurant and how we can help..."
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-[#818cf8] to-[#6366F1] px-8 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#818cf8]/25 hover:shadow-xl hover:shadow-[#818cf8]/30 transition-all duration-200 hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
} 