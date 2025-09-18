import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

export async function GET() {
  try {
    // Test KV connection
    const testKey = `test_${Date.now()}`
    const testValue = { message: 'KV connection test', timestamp: new Date().toISOString() }
    
    // Set a test value
    await kv.set(testKey, JSON.stringify(testValue))
    
    // Get the test value back
    const retrieved = await kv.get(testKey)
    
    // Clean up test key
    await kv.del(testKey)
    
    // Test leads list
    const leadsCount = await kv.llen('leads')
    
    return NextResponse.json({
      success: true,
      message: 'KV connection successful',
      test: {
        stored: testValue,
        retrieved: retrieved ? JSON.parse(retrieved as string) : null,
        match: JSON.stringify(testValue) === retrieved
      },
      leads: {
        count: leadsCount || 0
      },
      environment: {
        hasKvUrl: !!process.env.KV_URL,
        hasKvToken: !!process.env.KV_REST_API_TOKEN,
        nodeEnv: process.env.NODE_ENV
      }
    })
    
  } catch (error) {
    console.error('KV test error:', error)
    return NextResponse.json({
      success: false,
      message: 'KV connection failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      environment: {
        hasKvUrl: !!process.env.KV_URL,
        hasKvToken: !!process.env.KV_REST_API_TOKEN,
        nodeEnv: process.env.NODE_ENV
      }
    }, { status: 500 })
  }
}
