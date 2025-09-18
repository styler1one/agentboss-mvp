import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function GET() {
  try {
    if (!resend) {
      return NextResponse.json({
        success: false,
        message: 'Resend API key not configured',
        environment: {
          hasApiKey: !!process.env.RESEND_API_KEY,
          nodeEnv: process.env.NODE_ENV
        }
      }, { status: 500 })
    }

    // Test email
    const testEmail = {
      from: 'AgentBoss.nl <noreply@agentboss.nl>', // Now verified!
      to: ['info@agentboss.nl'],
      subject: 'Test Email - AgentBoss.nl',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E40AF;">Email Test - AgentBoss.nl</h2>
          
          <p>Dit is een test email om te controleren of Resend correct werkt.</p>
          
          <div style="background: #F8FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1E3A8A; margin-top: 0;">Test Details:</h3>
            <ul style="color: #475569;">
              <li><strong>Tijd:</strong> ${new Date().toLocaleString('nl-NL')}</li>
              <li><strong>API Key:</strong> ${process.env.RESEND_API_KEY ? 'Configured' : 'Missing'}</li>
              <li><strong>Environment:</strong> ${process.env.NODE_ENV}</li>
            </ul>
          </div>
          
          <p>Als je deze email ontvangt, werkt Resend correct!</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #E2E8F0;">
          
          <p style="color: #64748B; font-size: 14px;">
            Test email van AgentBoss.nl<br>
            <a href="https://www.agentboss.nl">www.agentboss.nl</a>
          </p>
        </div>
      `
    }

    const result = await resend.emails.send(testEmail)

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      emailId: result.data?.id,
      result: result,
      environment: {
        hasApiKey: !!process.env.RESEND_API_KEY,
        nodeEnv: process.env.NODE_ENV
      }
    })

  } catch (error) {
    console.error('Email test error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to send test email',
      error: error instanceof Error ? error.message : 'Unknown error',
      environment: {
        hasApiKey: !!process.env.RESEND_API_KEY,
        nodeEnv: process.env.NODE_ENV
      }
    }, { status: 500 })
  }
}
