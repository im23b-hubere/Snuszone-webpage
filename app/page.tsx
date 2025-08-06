'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, ArrowRight, CheckCircle, Star, Video } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        // Erfolgreich - zur Success-Seite weiterleiten
        window.location.href = '/success'
      } else {
        // Fehler anzeigen
        alert(data.error || 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.')
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Fehler beim Senden der E-Mail:', error)
      alert('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-accent-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-black gradient-text mb-4">
                SnusZone
              </h1>
              <p className="text-xl md:text-2xl text-primary-600 font-medium">
                Premium Snus • Exklusiver Zugang
              </p>
            </motion.div>

            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary-800 mb-6">
                Sei dabei, wenn wir{' '}
                <span className="gradient-text">live gehen!</span>
              </h2>
              <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
                Sichere dir exklusiven Zugang zu Premium Snus Produkten zu unschlagbaren Preisen. 
                Melde dich jetzt an und erhalte als Erster Bescheid, wenn unser Shop online geht!
              </p>
            </motion.div>

            {/* Email Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-md mx-auto mb-12"
            >
                           <form onSubmit={handleSubmit} className="space-y-4">
               <div className="relative">
                 <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400 w-5 h-5" />
                 <input
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="Deine E-Mail Adresse"
                   required
                   className="input-field pl-12 pr-4"
                 />
               </div>
               <button
                 type="submit"
                 disabled={isLoading}
                 className="btn-primary w-full flex items-center justify-center space-x-2"
               >
                 {isLoading ? (
                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                 ) : (
                   <>
                     <span>Exklusiven Zugang sichern</span>
                     <ArrowRight className="w-5 h-5" />
                   </>
                 )}
               </button>
             </form>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              {[
                {
                  icon: Star,
                  title: "Exklusiver Zugang",
                  description: "Sei der Erste, der von neuen Produkten und Angeboten erfährt"
                },
                {
                  icon: CheckCircle,
                  title: "Premium Qualität",
                  description: "Nur die besten Snus Produkte zu fairen Preisen"
                },
                {
                  icon: Mail,
                  title: "Früher Zugang",
                  description: "Erhalte 24h vor dem offiziellen Launch Zugang zum Shop"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="card-neumorphism text-center"
                >
                  <benefit.icon className="w-12 h-12 text-accent-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-600 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8">
              Folge uns für Updates
            </h2>
            <p className="text-lg text-primary-600 mb-12 max-w-2xl mx-auto">
              Bleibe auf dem Laufenden mit unseren neuesten Produkten, Angeboten und exklusiven Inhalten
            </p>
            
            <div className="flex justify-center space-x-8">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 btn-secondary"
              >
                <Instagram className="w-6 h-6" />
                <span>Instagram</span>
              </motion.a>
              
                             <motion.a
                 href="#"
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                 className="flex items-center space-x-3 btn-secondary"
               >
                 <Video className="w-6 h-6" />
                 <span>TikTok</span>
               </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">SnusZone</h3>
          <p className="text-primary-200 mb-6">
            Premium Snus für echte Kenner
          </p>
          <div className="text-sm text-primary-300">
            <p>&copy; 2024 SnusZone. Alle Rechte vorbehalten.</p>
            <p className="mt-2">
              Nur für Personen ab 18 Jahren. Konsumiere verantwortungsvoll.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 