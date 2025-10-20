'use client'

import { motion } from 'framer-motion'
import { Heart, Award, Users, Home } from 'lucide-react'
import bnbInfo from '@/app/data/bnb-info.json'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Genuine Hospitality',
      description: 'We treat every guest like family, ensuring you feel welcomed from the moment you arrive.',
    },
    {
      icon: Award,
      title: 'Quality & Comfort',
      description: 'From our award-winning breakfasts to our immaculate rooms, we never compromise on quality.',
    },
    {
      icon: Users,
      title: 'Local Knowledge',
      description: "Born and raised in Doolin, we share insider tips to help you experience the 'real' Ireland.",
    },
    {
      icon: Home,
      title: 'Home Away From Home',
      description: 'We create a warm, relaxed atmosphere where you can truly unwind and recharge.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-coastal-200 via-cream-200 to-sage-200 shadow-lifted overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <Home className="w-20 h-20 text-coastal-500 mx-auto mb-4" />
                  <p className="text-slate-600 font-medium">The Brennan Family</p>
                  <p className="text-sm text-slate-500 mt-2">
                    Welcoming guests since {bnbInfo.established}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-warm-gold-200 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-coastal-200 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-coastal-100 rounded-full mb-6">
              <span className="text-sm font-semibold text-coastal-700 uppercase tracking-wide">
                Our Story
              </span>
            </div>

            <h2 className="section-heading text-left mb-6">
              Welcome to <span className="text-gradient-coastal">Brennan's</span>
            </h2>

            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>{bnbInfo.story}</p>

              <p className="text-slate-600">
                Whether you're here to explore the Cliffs of Moher, experience traditional Irish music in our village pubs, or simply escape the everyday, we're here to make your stay unforgettable.
              </p>
            </div>

            {/* Awards */}
            <div className="mt-8 flex flex-wrap gap-3">
              {bnbInfo.awards.map((award, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-warm-gold-100 rounded-full border border-warm-gold-200"
                >
                  <Award className="w-4 h-4 text-warm-gold-600" />
                  <span className="text-sm font-medium text-warm-gold-700">{award}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-12 text-center">
            What Sets Us Apart
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-coastal-100 to-coastal-200 flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <Icon className="w-8 h-8 text-coastal-600" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-slate-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-cream-100 to-sage-100 rounded-2xl p-8 shadow-soft border border-slate-200">
            <p className="text-lg text-slate-700 mb-4">
              Have questions about your stay or the local area?
            </p>
            <p className="text-slate-600 mb-6">
              Mary, Pat, and Siobhan are always happy to help!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${bnbInfo.contact.phone}`}
                className="btn-primary"
              >
                Call Us
              </a>
              <a
                href={`mailto:${bnbInfo.contact.email}`}
                className="btn-outline"
              >
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
