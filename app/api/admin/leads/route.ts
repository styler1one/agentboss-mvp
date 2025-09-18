import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // KV database disabled due to SSL connection issues
    return NextResponse.json({
      success: false,
      message: 'Lead dashboard temporarily unavailable. Leads are being captured via email notifications and logged in Vercel function logs for manual processing.',
      leads: [],
      count: 0,
      debug: {
        kvDisabled: true,
        reason: 'SSL connection issues with Redis',
        alternativeTracking: 'Email notifications + Vercel function logs',
        nodeEnv: process.env.NODE_ENV,
        instructions: [
          'Check Vercel Function Logs for lead data',
          'Email notifications are sent to info@agentboss.nl',
          'Customer confirmations are sent automatically',
          'All forms are fully functional'
        ]
      }
    })

  } catch (error) {
    console.error('Error in admin leads API:', error)
    return NextResponse.json({
      success: false,
      message: 'API error - leads tracked via email notifications',
      leads: [],
      count: 0
    }, { status: 500 })
  }
}
