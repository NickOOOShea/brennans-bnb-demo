import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import bnbInfo from '@/app/data/bnb-info.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">{bnbInfo.name}</h3>
            <p className="text-slate-400 mb-4 leading-relaxed">
              {bnbInfo.tagline}
            </p>
            <div className="flex items-center gap-3">
              {bnbInfo.contact.facebook && (
                <a
                  href={bnbInfo.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-coastal-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {bnbInfo.contact.instagram && (
                <a
                  href={`https://instagram.com/${bnbInfo.contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-coastal-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#rooms" className="text-slate-400 hover:text-white transition-colors">
                  Our Rooms
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-slate-400 hover:text-white transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#location" className="text-slate-400 hover:text-white transition-colors">
                  Location & Attractions
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-slate-400 hover:text-white transition-colors">
                  Guest Reviews
                </a>
              </li>
              <li>
                <a
                  href={bnbInfo.bookingOptions.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#policies" className="text-slate-400 hover:text-white transition-colors">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#policies" className="text-slate-400 hover:text-white transition-colors">
                  House Rules
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-coastal-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">
                  {bnbInfo.address.street}<br />
                  {bnbInfo.address.village}, {bnbInfo.address.county}<br />
                  {bnbInfo.address.eircode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-coastal-400 flex-shrink-0" />
                <a
                  href={`tel:${bnbInfo.contact.phone}`}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {bnbInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-coastal-400 flex-shrink-0" />
                <a
                  href={`mailto:${bnbInfo.contact.email}`}
                  className="text-slate-400 hover:text-white transition-colors break-all"
                >
                  {bnbInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} {bnbInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span>Fáilte Ireland Approved</span>
              <span>•</span>
              <span>{bnbInfo.starRating} Star B&B</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
