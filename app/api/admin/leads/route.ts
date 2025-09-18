import { NextResponse } from 'next/server'

// Initialize KV with fallback for local development
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let kv: any = null
try {
  if (process.env.KV_URL) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { kv: vercelKv } = require('@vercel/kv')
    kv = vercelKv
  }
} catch {
  console.log('KV not available in development mode')
}

export async function GET() {
  try {
    if (!kv) {
      return NextResponse.json({
        success: false,
        message: 'Database not available',
        leads: []
      })
    }

    // Get all lead IDs from the leads list
    const leadIds = await kv.lrange('leads', 0, -1)
    
    if (!leadIds || leadIds.length === 0) {
      return NextResponse.json({
        success: true,
        leads: [],
        count: 0
      })
    }

    // Fetch all lead data
    const leads = []
    for (const leadId of leadIds) {
      try {
        const leadData = await kv.hgetall(leadId)
        if (leadData && Object.keys(leadData).length > 0) {
          leads.push({
            id: leadId,
            ...leadData
          })
        }
      } catch (error) {
        console.error(`Error fetching lead ${leadId}:`, error)
      }
    }

    // Sort leads by creation date (newest first)
    leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return NextResponse.json({
      success: true,
      leads,
      count: leads.length
    })

  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch leads',
      leads: []
    }, { status: 500 })
  }
}
