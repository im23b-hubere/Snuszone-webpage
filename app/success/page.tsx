'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Mail, ArrowLeft, Star, Instagram, Video } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="relative">
              <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-green-500 rounded-full opacity-20"
              />
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary-800 mb-6">
              Willkommen bei{' '}
              <span className="gradient-text">SnusZone!</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 mb-8">
              Du bist jetzt auf unserer exklusiven Liste!
            </p>
          </motion.div>

          {/* What happens next */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card-neumorphism mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-6">
              Was passiert als nächstes?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Mail className="w-12 h-12 text-accent-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary-800 mb-2">
                  Willkommens-E-Mail
                </h3>
                <p className="text-primary-600 text-sm">
                  Du erhältst in den nächsten Minuten eine Willkommens-E-Mail mit deinem exklusiven Rabattcode
                </p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 text-accent-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary-800 mb-2">
                  Exklusive Updates
                </h3>
                <p className="text-primary-600 text-sm">
                  Wir informieren dich als Erster über neue Produkte und Angebote
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-accent-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary-800 mb-2">
                  Früher Zugang
                </h3>
                <p className="text-primary-600 text-sm">
                  24h vor dem offiziellen Launch erhältst du exklusiven Zugang
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-6">
              Folge uns für Updates
            </h2>
            <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
              Bleibe auf dem Laufenden mit unseren neuesten Produkten, Angeboten und exklusiven Inhalten
            </p>
            
            <div className="flex justify-center space-x-8">
              <motion.a
                href="https://instagram.com/snuszone.official"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 btn-secondary"
              >
                <Instagram className="w-6 h-6" />
                <span>Instagram</span>
              </motion.a>
              
              <motion.a
                href="https://tiktok.com/@snuszone.official"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 btn-secondary"
              >
                <Video className="w-6 h-6" />
                <span>TikTok</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Back to home */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <Link href="/" className="btn-primary inline-flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Zurück zur Startseite</span>
            </Link>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center space-x-6 text-sm text-primary-600"
          >
            <Link href="/impressum" className="hover:text-primary-800 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-primary-800 transition-colors">
              Datenschutz
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 