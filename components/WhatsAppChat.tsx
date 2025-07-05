import { MessageCircle } from 'lucide-react'

export default function WhatsAppChat() {
  const whatsappNumber = '9466444175' // Replace with your actual WhatsApp number
  const message = 'Hi! I would like to know more about digital menu services.'

  return (
    <>
      {/* Mobile Chat Button */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4 md:hidden">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
        >
          <span>CHAT WITH US</span>
        </a>
      </div>

      {/* Desktop Chat Button */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-4">
        <div className="relative group">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            <div className="relative">
              <MessageCircle className="w-8 h-8 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </div>
            </div>
          </a>
          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
            <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap">
              Chat with us on WhatsApp
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 