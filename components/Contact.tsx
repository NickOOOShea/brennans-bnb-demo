'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import bnbInfo from '@/app/data/bnb-info.json'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-coastal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Get in <span className="text-gradient-coastal">Touch</span>
          </h2>
          <p className="section-subheading">
            Ready to book your stay? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coastal-100 to-coastal-200 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-coastal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <a
                      href={`tel:${bnbInfo.contact.phone}`}
                      className="text-coastal-600 hover:text-coastal-700 font-medium text-lg"
                    >
                      {bnbInfo.contact.phone}
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Call us to book or inquire</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <a
                      href={`mailto:${bnbInfo.contact.bookingEmail}`}
                      className="text-coastal-600 hover:text-coastal-700 font-medium break-all"
                    >
                      {bnbInfo.contact.bookingEmail}
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Send us a booking inquiry</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warm-gold-100 to-warm-gold-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-warm-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                    <p className="text-slate-700">
                      {bnbInfo.address.street}<br />
                      {bnbInfo.address.village}, {bnbInfo.address.county}<br />
                      {bnbInfo.address.eircode}
                    </p>
                  </div>
                </div>

                {/* Check-in/out */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cream-100 to-cream-200 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-cream-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Check-in / Check-out</h4>
                    <p className="text-slate-700">
                      <strong>Check-in:</strong> {bnbInfo.quickFacts.checkIn}<br />
                      <strong>Check-out:</strong> {bnbInfo.quickFacts.checkOut}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-gradient-to-br from-coastal-500 to-sage-500 rounded-3xl p-8 md:p-12 shadow-lifted text-white">
              <h3 className="text-3xl font-display font-bold mb-4">
                Ready to Book Your Stay?
              </h3>
              <p className="text-coastal-50 mb-8 text-lg leading-relaxed">
                Experience the warmth of Irish hospitality at Brennan's Seaside B&B.
                We're here to make your visit unforgettable.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${bnbInfo.contact.phone}`}
                  className="block w-full text-center bg-white text-coastal-600 px-8 py-4 rounded-xl font-semibold hover:bg-cream-50 transition-all shadow-soft hover:shadow-lifted hover:scale-105"
                >
                  <Phone className="inline-block w-5 h-5 mr-2 -mt-1" />
                  Call to Book
                </a>
                <a
                  href={`mailto:${bnbInfo.contact.bookingEmail}`}
                  className="block w-full text-center bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all border-2 border-white/30 hover:scale-105"
                >
                  <Mail className="inline-block w-5 h-5 mr-2 -mt-1" />
                  Email Inquiry
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/30">
                <p className="text-sm text-coastal-50">
                  <strong className="text-white">Book Direct Benefits:</strong>
                </p>
                <ul className="mt-3 space-y-2 text-sm text-coastal-50">
                  {bnbInfo.bookingOptions.directBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-warm-gold-300">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
