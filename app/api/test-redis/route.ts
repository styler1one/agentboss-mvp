import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Test direct Redis connection via REST API
    let redisUrl = process.env.KV_REST_API_URL
    const redisToken = process.env.KV_REST_API_TOKEN
    
    if (!redisUrl || !redisToken) {
      return NextResponse.json({
        success: false,
        message: 'Redis REST API credentials missing',
        environment: {
          hasUrl: !!redisUrl,
          hasToken: !!redisToken,
          kvRestApiUrl: process.env.KV_REST_API_URL,
          availableVars: Object.keys(process.env).filter(key => 
            key.includes('KV') || key.includes('REDIS')
          )
        }
      })
    }

    // Ensure URL has https:// prefix and correct format
    if (!redisUrl.startsWith('http')) {
      redisUrl = `https://${redisUrl}`
    }
    
    // Remove any trailing slashes
    redisUrl = redisUrl.replace(/\/$/, '')

    // Test SET operation
    const testKey = `test_${Date.now()}`
    const testValue = JSON.stringify({ 
      message: 'Direct Redis test', 
      timestamp: new Date().toISOString() 
    })

    const setResponse = await fetch(`${redisUrl}/set/${testKey}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${redisToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: testValue })
    })

    if (!setResponse.ok) {
      throw new Error(`SET failed: ${setResponse.status} ${setResponse.statusText}`)
    }

    // Test GET operation
    const getResponse = await fetch(`${redisUrl}/get/${testKey}`, {
      headers: {
        'Authorization': `Bearer ${redisToken}`
      }
    })

    if (!getResponse.ok) {
      throw new Error(`GET failed: ${getResponse.status} ${getResponse.statusText}`)
    }

    const retrievedData = await getResponse.json()

    // Clean up test key
    await fetch(`${redisUrl}/del/${testKey}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${redisToken}`
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Direct Redis connection successful',
      test: {
        stored: testValue,
        retrieved: retrievedData.result,
        match: testValue === retrievedData.result
      },
      environment: {
        redisUrl: redisUrl,
        hasToken: !!redisToken,
        nodeEnv: process.env.NODE_ENV
      }
    })

  } catch (error) {
    console.error('Direct Redis test error:', error)
    return NextResponse.json({
      success: false,
      message: 'Direct Redis connection failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      environment: {
        hasUrl: !!process.env.KV_REST_API_URL,
        hasToken: !!process.env.KV_REST_API_TOKEN,
        nodeEnv: process.env.NODE_ENV
      }
    }, { status: 500 })
  }
}
