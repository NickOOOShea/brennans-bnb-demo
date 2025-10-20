'use client'

import { motion } from 'framer-motion'
import { Star, MapPin, Award, Phone, Mail } from 'lucide-react'
import bnbInfo from '@/app/data/bnb-info.json'
import { getStarArray } from '@/lib/utils'

export default function Hero() {
  const stars = getStarArray(bnbInfo.starRating)

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-pattern">
      {/* Floating background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-coastal-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-sage-300/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-warm-gold-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Location & Star Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            {/* Location */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-soft border border-slate-200">
              <MapPin className="w-4 h-4 text-coastal-600" />
              <span className="text-sm font-medium text-slate-700">
                {bnbInfo.location.village}, {bnbInfo.location.county}
              </span>
            </div>

            {/* Star Rating */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-soft border border-warm-gold-200">
              {stars.map((filled, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    filled ? 'fill-warm-gold-500 text-warm-gold-500' : 'text-slate-300'
                  }`}
                />
              ))}
              <span className="text-sm font-semibold text-slate-700">
                {bnbInfo.starRating} Star
              </span>
            </div>

            {/* Awards */}
            {bnbInfo.awards && bnbInfo.awards.length > 0 && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-soft border border-coastal-200">
                <Award className="w-4 h-4 text-coastal-600" />
                <span className="text-sm font-medium text-slate-700">
                  Fáilte Ireland Approved
                </span>
              </div>
            )}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-slate-900"
          >
            <span className="text-gradient-coastal">
              {bnbInfo.name}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-slate-600 mb-8 max-w-3xl mx-auto"
          >
            {bnbInfo.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {bnbInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#rooms" className="btn-primary">
              View Our Rooms
            </a>
            <a
              href={`tel:${bnbInfo.contact.phone}`}
              className="btn-outline inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {bnbInfo.contact.phone}
            </a>
          </motion.div>

          {/* Quick Info Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6"
          >
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-coastal-600">
                {bnbInfo.quickFacts.rooms}
              </div>
              <div className="text-sm text-slate-600 font-medium">Rooms</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-300" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-sage-600">
                {bnbInfo.quickFacts.ensuites}
              </div>
              <div className="text-sm text-slate-600 font-medium">Ensuite Bathrooms</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-300" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-warm-gold-600">
                {bnbInfo.established}
              </div>
              <div className="text-sm text-slate-600 font-medium">Established</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-coastal-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-coastal-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
