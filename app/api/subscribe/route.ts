import { NextRequest, NextResponse } from 'next/server'

// In einer echten Anwendung würdest du hier einen E-Mail Service wie Mailchimp, ConvertKit oder Resend verwenden
// Für jetzt speichern wir die E-Mails in einer JSON Datei (nur für Demo-Zwecke)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // E-Mail Validierung
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      )
    }

    // Hier würdest du normalerweise die E-Mail an deinen Service senden
    // Beispiel für verschiedene Services:

    // Mailchimp:
    // const response = await fetch('https://us1.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email_address: email,
    //     status: 'subscribed',
    //   }),
    // })

    // ConvertKit:
    // const response = await fetch(`https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     api_key: process.env.CONVERTKIT_API_KEY,
    //     email: email,
    //   }),
    // })

    // Resend (für E-Mail-Benachrichtigungen):
    // const response = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'noreply@snuszone.com',
    //     to: email,
    //     subject: 'Willkommen bei SnusZone!',
    //     html: '<h1>Willkommen bei SnusZone!</h1><p>Du bist jetzt auf unserer exklusiven Liste.</p>',
    //   }),
    // })

    // Für Demo-Zwecke: Log der E-Mail (in Produktion entfernen)
    console.log('Neue E-Mail-Anmeldung:', email)

    // Erfolgreiche Antwort
    return NextResponse.json(
      { 
        success: true, 
        message: 'E-Mail erfolgreich hinzugefügt!',
        email: email 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Fehler beim Hinzufügen der E-Mail:', error)
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.' },
      { status: 500 }
    )
  }
} 