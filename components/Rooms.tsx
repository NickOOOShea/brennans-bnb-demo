'use client'

import { motion } from 'framer-motion'
import { Users, Maximize2, Eye, Star } from 'lucide-react'
import rooms from '@/app/data/rooms.json'
import { formatCurrency, getCurrentSeason } from '@/lib/utils'

export default function Rooms() {
  const currentSeason = getCurrentSeason()

  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Our <span className="text-gradient-coastal">Rooms</span>
          </h2>
          <p className="section-subheading">
            Comfortable, clean, and beautifully appointed rooms with stunning views
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-room"
            >
              {/* Room Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-coastal-100 via-cream-100 to-sage-100 flex items-center justify-center">
                {room.featured && (
                  <div className="absolute top-4 right-4 px-4 py-2 bg-warm-gold-500 text-white rounded-full text-sm font-semibold shadow-lg">
                    Featured
                  </div>
                )}
                {room.popular && !room.featured && (
                  <div className="absolute top-4 right-4 px-4 py-2 bg-coastal-500 text-white rounded-full text-sm font-semibold shadow-lg">
                    Popular
                  </div>
                )}
                <div className="text-center">
                  <Eye className="w-16 h-16 text-coastal-400 mx-auto mb-2" />
                  <p className="text-slate-600 font-medium">{room.view} View</p>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                  {room.name}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {room.description}
                </p>

                {/* Room Info */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Users className="w-4 h-4 text-coastal-600" />
                    <span>Up to {room.occupancy.max} guests</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Maximize2 className="w-4 h-4 text-sage-600" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Eye className="w-4 h-4 text-warm-gold-600" />
                    <span>{room.view} View</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                    {room.features.slice(0, 6).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-coastal-500 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & Book Button */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div>
                    <div className="text-sm text-slate-600 mb-1">From</div>
                    <div className="text-3xl font-display font-bold text-coastal-600">
                      {formatCurrency(room.pricing[currentSeason])}
                    </div>
                    <div className="text-sm text-slate-600">per night</div>
                  </div>
                  <a
                    href="#contact"
                    className="bg-coastal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-coastal-600 transition-all shadow-soft hover:shadow-coastal hover:scale-105"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Season Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-600">
            <strong>Current season pricing shown.</strong> Prices vary by season.
            Book direct for our best rate guarantee and complimentary room upgrade (subject to availability).
          </p>
        </motion.div>
      </div>
    </section>
  )
}
