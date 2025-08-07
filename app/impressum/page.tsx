'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="card-neumorphism">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8">
              Impressum
            </h1>
            
            <div className="space-y-6 text-primary-700">
              <section>
                <h2 className="text-xl font-semibold text-primary-800 mb-3">Angaben gemäß § 5 TMG</h2>
                <p>
                  <strong>Verantwortlich für den Inhalt:</strong><br />
                  Eric Huber<br />
                  Sonnenhofstrasse 38<br />
                  8132 Egg b. Zürich
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 mb-3">Kontakt</h2>
                <p>
                  <strong>E-Mail:</strong> snuszone.official@gmail.com<br />
                  <strong>Website:</strong> www.snuszone-official.ch
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 mb-3">Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  [DEINE UST-ID]
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 mb-3">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 mb-3">Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 mb-3">Urheberrecht</h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>
            </div>

            <div className="mt-12">
              <Link href="/" className="btn-primary inline-flex items-center space-x-2">
                <ArrowLeft className="w-5 h-5" />
                <span>Zurück zur Startseite</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 