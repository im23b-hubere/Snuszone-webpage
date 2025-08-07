import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    console.log('API Route wurde aufgerufen!')
    const { email } = await request.json()
    console.log('E-Mail erhalten:', email)

    // E-Mail Validierung
    if (!email || !email.includes('@')) {
      console.log('E-Mail Validierung fehlgeschlagen')
      return NextResponse.json(
        { error: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      )
    }

    // MailerLite Integration
    console.log('Environment Variables:')
    console.log('API Key vorhanden:', !!process.env.MAILERLITE_API_KEY)
    console.log('Group ID vorhanden:', !!process.env.MAILERLITE_GROUP_ID)
    
    if (process.env.MAILERLITE_API_KEY && process.env.MAILERLITE_GROUP_ID) {
      console.log('Sende E-Mail an MailerLite...')
      
      try {
        // Subscriber zur Gruppe hinzufügen
        const response = await fetch(`https://connect.mailerlite.com/api/subscribers`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            groups: [process.env.MAILERLITE_GROUP_ID],
            status: 'active'
          }),
        })

        console.log('MailerLite Response Status:', response.status)
        
        const responseText = await response.text()
        console.log('MailerLite Response Text:', responseText)
        
        if (!response.ok) {
          console.error('MailerLite API Error:', responseText)
          return NextResponse.json(
            { error: `Fehler beim Hinzufügen zur E-Mail-Liste. Status: ${response.status}` },
            { status: 500 }
          )
        }
        
        // Versuche JSON zu parsen, falls es JSON ist
        let responseData
        try {
          responseData = JSON.parse(responseText)
          console.log('MailerLite Response Data:', responseData)
        } catch (e) {
          console.log('Response ist kein JSON:', responseText)
        }
        
        console.log('E-Mail erfolgreich an MailerLite gesendet!')
        console.log('Hinweis: Bestätigungs-E-Mail wird über MailerLite Automation gesendet')
        
      } catch (fetchError) {
        console.error('Fetch Error:', fetchError)
        return NextResponse.json(
          { error: 'Netzwerkfehler beim Verbinden mit MailerLite.' },
          { status: 500 }
        )
      }
    } else {
      console.log('Environment Variables fehlen!')
      console.log('Benötigte Variablen:')
      console.log('- MAILERLITE_API_KEY')
      console.log('- MAILERLITE_GROUP_ID')
      console.log('Verfügbare Environment Variables:')
      console.log(Object.keys(process.env).filter(key => key.includes('MAILERLITE')))
    }

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