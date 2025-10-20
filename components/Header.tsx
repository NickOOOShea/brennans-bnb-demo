'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'
import bnbInfo from '@/app/data/bnb-info.json'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location', href: '#location' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-coastal-500 to-sage-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">B</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-xl text-slate-900">
                  {bnbInfo.name.split(' ')[0]}'s
                </div>
                <div className="text-xs text-slate-600 -mt-1">Seaside B&B</div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link py-2"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact & Book Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${bnbInfo.contact.phone}`}
              className="text-coastal-600 hover:text-coastal-700 transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={bnbInfo.bookingOptions.bookingUrl}
              className="bg-coastal-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-coastal-600 transition-all shadow-soft hover:shadow-coastal hover:scale-105"
            >
              Call to Book
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-coastal-600 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-slate-200 bg-white"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-medium text-slate-700 hover:text-coastal-600 transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <a
                  href={`tel:${bnbInfo.contact.phone}`}
                  className="flex items-center gap-3 text-slate-700 hover:text-coastal-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {bnbInfo.contact.phone}
                </a>
                <a
                  href={bnbInfo.bookingOptions.bookingUrl}
                  className="block w-full text-center bg-coastal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-coastal-600 transition-all"
                >
                  Call to Book
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
