'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function DatenschutzPage() {
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
              Datenschutzerklärung
            </h1>
            
            <div className="space-y-6 text-primary-700">
              <section>
                <h2 className="text-xl font-semibold text-primary-800 mb-3">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 mb-3">2. Datenerfassung auf dieser Website</h2>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Wer ist verantwortlich für die Datenerfassung?</h3>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 mb-3">3. E-Mail-Newsletter</h2>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Newsletter-Daten</h3>
                <p>
                  Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind (sog. "Double-Opt-In").
                </p>
                <p className="mt-2">
                  <strong>Verwendete Dienste:</strong><br />
                  • MailerLite (E-Mail-Marketing-Service)<br />
                  • Datenspeicherung: MailerLite Server (EU-konform)<br />
                  • Zweck: Newsletter-Versand und E-Mail-Marketing
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 mb-3">4. Ihre Rechte</h2>
                <p>
                  Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Recht auf Auskunft über gespeicherte Daten</li>
                  <li>Recht auf Berichtigung falscher Daten</li>
                  <li>Recht auf Löschung Ihrer Daten</li>
                  <li>Recht auf Einschränkung der Datenverarbeitung</li>
                  <li>Recht auf Datenübertragbarkeit</li>
                  <li>Widerspruchsrecht gegen die Datenverarbeitung</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 mb-3">5. Kontakt</h2>
                <p>
                  Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden Sie sich bitte an:
                </p>
                <p className="mt-2">
                  <strong>E-Mail:</strong> snuszone.official@gmail.ch<br />
                  <strong>Website:</strong> www.snuszone-official.ch
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 mb-3">6. Cookies</h2>
                <p>
                  Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, unsere Website benutzerfreundlicher, effektiver und sicherer zu machen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 mb-3">7. Änderungen</h2>
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-primary-800 mb-3">8. Stand der Datenschutzerklärung</h2>
                <p>
                  Diese Datenschutzerklärung wurde zuletzt am 07.08.2024 aktualisiert.
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