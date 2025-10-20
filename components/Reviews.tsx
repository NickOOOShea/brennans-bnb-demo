'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import reviews from '@/app/data/reviews.json'
import { formatDate, getStarArray } from '@/lib/utils'

export default function Reviews() {
  const featuredReviews = reviews.filter((r) => r.featured)

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-coastal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Guest <span className="text-gradient-coastal">Reviews</span>
          </h2>
          <p className="section-subheading">
            See what our guests have to say about their stay at Brennan's
          </p>

          {/* Average Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-lifted border border-coastal-200 mt-8"
          >
            <div>
              <div className="text-5xl font-display font-bold text-coastal-600">5.0</div>
              <div className="text-sm text-slate-600">Average Rating</div>
            </div>
            <div className="w-px h-16 bg-slate-300" />
            <div>
              <div className="flex gap-1 mb-2">
                {getStarArray(5).map((filled, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-warm-gold-500 text-warm-gold-500"
                  />
                ))}
              </div>
              <div className="text-sm text-slate-600">
                Based on {reviews.length} reviews
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredReviews.map((review, index) => {
            const stars = getStarArray(review.rating)

            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-testimonial relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-coastal-600" />
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {stars.map((filled, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        filled
                          ? 'fill-warm-gold-500 text-warm-gold-500'
                          : 'text-slate-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Title */}
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                  {review.title}
                </h3>

                {/* Review Text */}
                <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                  "{review.review}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div>
                    <div className="font-semibold text-slate-900">{review.guestName}</div>
                    <div className="text-sm text-slate-600">{review.country}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-600">{review.tripType}</div>
                    <div className="text-xs text-slate-500">{formatDate(review.date)}</div>
                  </div>
                </div>

                {/* Room Type Badge */}
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-coastal-100 text-coastal-700 rounded-full text-xs font-medium">
                    {review.roomType}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Other Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 text-center">
            More Guest Reviews
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.filter((r) => !r.featured).map((review, index) => {
              const stars = getStarArray(review.rating)

              return (
                <div
                  key={review.id}
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lifted transition-all border border-slate-100"
                >
                  <div className="flex gap-1 mb-3">
                    {stars.map((filled, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-warm-gold-500 text-warm-gold-500"
                      />
                    ))}
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{review.title}</h4>
                  <p className="text-sm text-slate-700 mb-4 leading-relaxed line-clamp-3">
                    "{review.review}"
                  </p>
                  <div className="text-sm">
                    <div className="font-medium text-slate-900">{review.guestName}</div>
                    <div className="text-xs text-slate-600">{review.country}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-coastal-500 to-sage-500 rounded-2xl p-8 shadow-lifted text-white">
            <h3 className="text-2xl font-display font-bold mb-3">
              Ready to Experience Brennan's Hospitality?
            </h3>
            <p className="mb-6 text-coastal-50">
              Join hundreds of happy guests who've made Brennan's their home away from home
            </p>
            <a
              href="#rooms"
              className="inline-block bg-white text-coastal-600 px-8 py-3 rounded-xl font-semibold hover:bg-cream-50 transition-all shadow-soft hover:shadow-lifted hover:scale-105"
            >
              View Our Rooms
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
