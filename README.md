# SnusZone - Premium Snus Landing Page

Eine moderne, responsive Landing Page für das SnusZone Online Business. Diese Seite dient als Pre-Order/Anmeldeseite, um Interesse zu generieren und eine E-Mail-Liste aufzubauen, bevor der eigentliche Shop live geht.

## 🚀 Features

- **Moderne UI/UX**: Clean, minimalistisches Design mit Neumorphism-Elementen
- **Responsive Design**: Optimiert für alle Geräte (Desktop, Tablet, Mobile)
- **Smooth Animations**: Framer Motion für natürliche, ansprechende Animationen
- **E-Mail Anmeldung**: Sammelt E-Mail-Adressen für exklusiven Zugang
- **Social Media Integration**: Instagram und TikTok Links
- **SEO Optimiert**: Meta-Tags und strukturierte Daten
- **Performance**: Schnelle Ladezeiten und optimierte Assets

## 🛠️ Technologie-Stack

- **Next.js 14** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Utility-first CSS Framework
- **Framer Motion** - Animation Library
- **Lucide React** - Icon Library

## 📦 Installation

1. **Dependencies installieren:**
   ```bash
   npm install
   ```

2. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```

3. **Browser öffnen:**
   ```
   http://localhost:3000
   ```

## 🏗️ Build & Deployment

**Production Build:**
```bash
npm run build
npm start
```

**Für Vercel Deployment:**
```bash
npm run build
```

## 📱 Anpassungen

### E-Mail Integration
Die E-Mail-Anmeldung ist derzeit simuliert. Für echte E-Mail-Sammlung:

1. **Email Service integrieren** (z.B. Mailchimp, ConvertKit)
2. **API Route erstellen** in `app/api/subscribe/route.ts`
3. **Form Handler anpassen** in `app/page.tsx`

### Social Media Links
Instagram und TikTok Links in `app/page.tsx` anpassen:
```tsx
<a href="https://instagram.com/dein-account">Instagram</a>
<a href="https://tiktok.com/@dein-account">TikTok</a>
```

### Branding
- **Farben**: Anpassen in `tailwind.config.js`
- **Logo**: Ersetzen des Text-Logos durch ein echtes Logo
- **Texte**: Alle Texte in `app/page.tsx` anpassen

## 🎨 Design System

### Farben
- **Primary**: Grau-Blau Palette (neutral, professionell)
- **Accent**: Rot-Orange (energetisch, Aufmerksamkeit)

### Typography
- **Font**: Inter (modern, lesbar)
- **Hierarchy**: Klare Größenunterschiede für bessere UX

### Komponenten
- **Buttons**: Gradient und Neumorphism Stile
- **Cards**: Weiche Schatten und große Rundungen
- **Inputs**: Inset Neumorphism für Tiefe

## 📈 Analytics & Tracking

Für bessere Conversion-Tracking:

1. **Google Analytics** hinzufügen
2. **Facebook Pixel** für Social Media Ads
3. **Heatmap Tools** (Hotjar, Crazy Egg)

## 🔒 Rechtliche Hinweise

- Altersverifikation implementieren
- Datenschutzerklärung hinzufügen
- Impressum erstellen
- Cookie-Banner einrichten

## 🚀 Nächste Schritte

1. **E-Mail Service integrieren**
2. **Domain konfigurieren**
3. **SSL Zertifikat einrichten**
4. **Social Media Accounts verlinken**
5. **Analytics einrichten**
6. **A/B Testing vorbereiten**

## 📞 Support

Bei Fragen oder Problemen:
- GitHub Issues erstellen
- Dokumentation durchsuchen
- Community Support nutzen

---

**SnusZone** - Premium Snus für echte Kenner 🚬