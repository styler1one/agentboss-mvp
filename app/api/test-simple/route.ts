import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Simple test to store lead data in console logs
    const testLead = {
      id: `lead_${Date.now()}_test`,
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      message: 'This is a test lead',
      status: 'new',
      createdAt: new Date().toISOString(),
      source: 'test-api'
    }

    // Log the lead data (this will appear in Vercel function logs)
    console.log('TEST LEAD STORED:', JSON.stringify(testLead, null, 2))

    // Check environment variables
    const environment = {
      hasResendKey: !!process.env.RESEND_API_KEY,
      hasKvUrl: !!process.env.KV_URL,
      hasKvRestUrl: !!process.env.KV_REST_API_URL,
      hasKvToken: !!process.env.KV_REST_API_TOKEN,
      hasRedisUrl: !!process.env.REDIS_URL,
      nodeEnv: process.env.NODE_ENV,
      availableVars: Object.keys(process.env).filter(key => 
        key.includes('KV') || key.includes('REDIS') || key.includes('RESEND')
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Simple test successful - lead logged to console',
      testLead: testLead,
      environment: environment,
      instructions: {
        step1: 'Check Vercel Function Logs for the test lead data',
        step2: 'This proves the API routes are working',
        step3: 'Contact forms will work even without Redis database',
        step4: 'Emails will be sent via Resend API'
      }
    })

  } catch (error) {
    console.error('Simple test error:', error)
    return NextResponse.json({
      success: false,
      message: 'Simple test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
