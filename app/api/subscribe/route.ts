import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend('re_fZ66GYHG_KjqjPKsqT2HmVKYLhbBaaxs5')

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'E-Mail ist erforderlich' }, { status: 400 })
    }

    // Fester Rabattcode
    const discountCode = 'WELCOME10'
    
    // Sende Willkommens-E-Mail mit Rabattcode
    const emailResult = await resend.emails.send({
      from: 'SnusZone <noreply@snuszone-official.ch>',
      to: [email], // Jetzt an die eingegebene E-Mail-Adresse
      subject: '🎉 Willkommen bei SnusZone - Dein exklusiver Rabattcode!',
      html: generateWelcomeEmailHTML(discountCode),
      text: generateWelcomeEmailText(discountCode),
    })

    if (emailResult.error) {
      console.error('Fehler beim Senden der E-Mail:', emailResult.error)
      return NextResponse.json({ error: 'Fehler beim Senden der E-Mail' }, { status: 500 })
    }

    console.log('Willkommens-E-Mail erfolgreich gesendet:', email)
    return NextResponse.json({ success: true, discountCode })

  } catch (error) {
    console.error('Server-Fehler:', error)
    return NextResponse.json({ error: 'Interner Server-Fehler' }, { status: 500 })
  }
}

// Funktion nicht mehr benötigt - fester Code verwendet

function generateWelcomeEmailHTML(discountCode: string): string {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Willkommen bei SnusZone</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f9fa;
        }
        .container {
          background: white;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 2.5rem;
          font-weight: 900;
          color: #D72638;
          margin-bottom: 10px;
        }
        .discount-box {
          background: #D72638;
          color: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          margin: 30px 0;
        }
        .discount-code {
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: 2px;
          background: rgba(255, 255, 255, 0.2);
          padding: 15px;
          border-radius: 8px;
          margin: 15px 0;
          display: inline-block;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #eee;
          color: #666;
          font-size: 0.9rem;
        }
        .social-links {
          margin: 20px 0;
        }
        .social-links a {
          display: inline-block;
          margin: 0 10px;
          color: #D72638;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">SnusZone</div>
          <h1>🎉 Willkommen bei SnusZone!</h1>
        </div>
        
        <p>Hallo!</p>
        
        <p>Vielen Dank, dass du dich für SnusZone angemeldet hast! Du bist jetzt Teil unserer exklusiven Community und wirst als Erster erfahren, wenn unser Premium Snus Shop live geht.</p>
        
        <div class="discount-box">
          <h2>🎁 Dein exklusiver Rabattcode</h2>
          <p>Als Willkommensgeschenk bekommst du einen exklusiven Rabattcode für deinen ersten Einkauf:</p>
          <div class="discount-code">${discountCode}</div>
          <p><strong>10% Rabatt auf deine erste Bestellung!</strong></p>
        </div>
        
        <h3>Was dich erwartet:</h3>
        <ul>
          <li>✅ Exklusiver Zugang zu Premium Snus Produkten</li>
          <li>✅ Unschlagbare Preise und regelmäßige Angebote</li>
          <li>✅ Schneller und diskreter Versand</li>
          <li>✅ Nur die beste Qualität für echte Kenner</li>
        </ul>
        
        <p>Wir arbeiten hart daran, dir die beste Auswahl an Premium Snus Produkten zu bieten. Sobald unser Shop online ist, wirst du sofort eine E-Mail erhalten!</p>
        
        <div class="social-links">
          <p>Folge uns für Updates und exklusive Inhalte:</p>
          <a href="https://instagram.com/snuszone.official">📸 Instagram</a>
          <a href="https://tiktok.com/@snuszone.official">🎵 TikTok</a>
          <a href="https://www.snuszone-official.ch">🌐 Website</a>
        </div>
        
        <div class="footer">
          <p><strong>SnusZone</strong> - Premium Snus für echte Kenner</p>
          <p>Nur für Personen ab 18 Jahren. Konsumiere verantwortungsvoll.</p>
          <p>Du kannst dich jederzeit <a href="#" style="color: #D72638;">abmelden</a>, wenn du keine weiteren E-Mails erhalten möchtest.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

function generateWelcomeEmailText(discountCode: string): string {
  return `
Willkommen bei SnusZone! 🎉

Vielen Dank, dass du dich für SnusZone angemeldet hast! Du bist jetzt Teil unserer exklusiven Community und wirst als Erster erfahren, wenn unser Premium Snus Shop live geht.

🎁 DEIN EXKLUSIVER RABATTCODE:
${discountCode}

Du erhältst 10% Rabatt auf deine erste Bestellung!

Was dich erwartet:
✅ Exklusiver Zugang zu Premium Snus Produkten
✅ Unschlagbare Preise und regelmäßige Angebote
✅ Schneller und diskreter Versand
✅ Nur die beste Qualität für echte Kenner

Wir arbeiten hart daran, dir die beste Auswahl an Premium Snus Produkten zu bieten. Sobald unser Shop online ist, wirst du sofort eine E-Mail erhalten!

Folge uns für Updates:
📸 Instagram: https://instagram.com/snuszone.official
🎵 TikTok: https://tiktok.com/@snuszone.official
🌐 Website: https://www.snuszone-official.ch

SnusZone - Premium Snus für echte Kenner
Nur für Personen ab 18 Jahren. Konsumiere verantwortungsvoll.
  `
} 