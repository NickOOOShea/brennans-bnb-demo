'use client'

import { motion } from 'framer-motion'
import {
  Mountain,
  Trees,
  Gem,
  Ship,
  Anchor,
  Music,
  MountainSnow,
  Waves,
  Footprints,
  Music2,
  Bike,
  Bird,
  Fish,
  PawPrint,
  MapPin,
  Star,
} from 'lucide-react'
import localArea from '@/app/data/local-area.json'

// Icon mapping
const iconMap: { [key: string]: any } = {
  mountain: Mountain,
  trees: Trees,
  gem: Gem,
  ship: Ship,
  anchor: Anchor,
  music: Music,
  'mountain-snow': MountainSnow,
  waves: Waves,
  footprints: Footprints,
  'music-note': Music2,
  bike: Bike,
  bird: Bird,
  fish: Fish,
  horse: PawPrint,
}

export default function LocalArea() {
  const highlightedAttractions = localArea.attractions.filter((a) => a.highlight)

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Explore <span className="text-gradient-coastal">The Wild Atlantic Way</span>
          </h2>
          <p className="section-subheading">
            Doolin is your gateway to Ireland's most spectacular natural wonders
          </p>
        </motion.div>

        {/* Highlighted Attractions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlightedAttractions.map((attraction, index) => {
            const Icon = iconMap[attraction.icon] || MapPin

            return (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-coastal-100 to-coastal-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-coastal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                      {attraction.name}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {attraction.distance} • {attraction.duration}
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {attraction.description}
                </p>
                <div className="inline-flex items-center px-3 py-1.5 bg-coastal-100 text-coastal-700 rounded-full text-sm font-medium">
                  {attraction.category}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* All Attractions List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-cream-50 to-coastal-50 rounded-3xl p-8 md:p-12 shadow-soft border border-slate-200"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-8 text-center">
            More Nearby Attractions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localArea.attractions.filter(a => !a.highlight).map((attraction, index) => {
              const Icon = iconMap[attraction.icon] || MapPin

              return (
                <div
                  key={attraction.name}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-soft hover:shadow-lifted transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-sage-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {attraction.name}
                    </h4>
                    <p className="text-sm text-slate-600 mb-2">
                      {attraction.description}
                    </p>
                    <p className="text-xs text-slate-500">
                      {attraction.distance} away
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-8 text-center">
            Things To Do
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {localArea.activities.map((activity, index) => {
              const Icon = iconMap[activity.icon] || Footprints

              return (
                <motion.div
                  key={activity.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lifted hover:scale-105 transition-all text-center border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-warm-gold-100 to-warm-gold-200 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-warm-gold-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">
                    {activity.name}
                  </h4>
                  <p className="text-xs text-slate-600">{activity.type}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Dining */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-8 text-center">
            Local Dining
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localArea.dining.map((restaurant, index) => (
              <div
                key={restaurant.name}
                className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lifted transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-slate-900">{restaurant.name}</h4>
                  <span className="text-warm-gold-600 font-medium">{restaurant.priceRange}</span>
                </div>
                <p className="text-sm text-slate-600 mb-2">{restaurant.cuisine}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{restaurant.type}</span>
                  <span>{restaurant.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600">
            <strong>Need recommendations?</strong> We're locals and love sharing our favorite spots.
            Ask us anything about the area!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
