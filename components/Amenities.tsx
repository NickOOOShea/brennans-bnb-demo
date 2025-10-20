'use client'

import { motion } from 'framer-motion'
import {
  Wifi,
  ParkingCircle,
  Flower2,
  Bike,
  Droplet,
  Wind,
  Utensils,
  Leaf,
  Egg,
  WheatOff,
  Croissant,
  Bath,
  Bed,
  Tv,
  Coffee,
  Shirt,
  Map,
  UtensilsCrossed,
  Sandwich,
  Clock,
  Luggage,
  Plane,
} from 'lucide-react'
import amenities from '@/app/data/amenities.json'

// Icon mapping
const iconMap: { [key: string]: any } = {
  wifi: Wifi,
  'parking-circle': ParkingCircle,
  'flower-2': Flower2,
  bike: Bike,
  'washing-machine': Droplet,
  wind: Wind,
  utensils: Utensils,
  leaf: Leaf,
  egg: Egg,
  'wheat-off': WheatOff,
  croissant: Croissant,
  bath: Bath,
  bed: Bed,
  tv: Tv,
  coffee: Coffee,
  shirt: Shirt,
  map: Map,
  'utensils-crossed': UtensilsCrossed,
  sandwich: Sandwich,
  clock: Clock,
  luggage: Luggage,
  plane: Plane,
}

export default function Amenities() {
  const categories = [
    { key: 'property', title: 'Property Features', color: 'coastal' },
    { key: 'breakfast', title: 'Award-Winning Breakfast', color: 'warm-gold' },
    { key: 'rooms', title: 'In Every Room', color: 'sage' },
    { key: 'services', title: 'Guest Services', color: 'cream' },
  ]

  return (
    <section id="amenities" className="py-24 bg-gradient-to-b from-white to-coastal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="text-gradient-coastal">Amenities</span> & Services
          </h2>
          <p className="section-subheading">
            Everything you need for a comfortable and memorable stay
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, catIndex) => {
            const categoryAmenities = amenities[category.key as keyof typeof amenities]

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-8 text-center">
                  {category.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryAmenities.map((amenity: any, index: number) => {
                    const Icon = iconMap[amenity.icon] || Wifi

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="card group"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${category.color}-100 to-${category.color}-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <Icon className={`w-6 h-6 text-${category.color}-600`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-900 mb-1">
                              {amenity.name}
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {amenity.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-2xl shadow-soft border border-coastal-200 p-8">
            <p className="text-lg text-slate-700 mb-4">
              <strong className="text-coastal-600">Need something special?</strong>
              <br />
              We're happy to accommodate special requests. Just let us know!
            </p>
            <a
              href="#contact"
              className="inline-block bg-coastal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-coastal-600 transition-all shadow-soft hover:shadow-coastal hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
