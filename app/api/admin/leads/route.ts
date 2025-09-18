import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

export async function GET() {
  try {
    // Check if KV environment variables are available
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      return NextResponse.json({
        success: false,
        message: 'KV database not configured. Please set up environment variables in Vercel.',
        leads: [],
        count: 0,
        debug: {
          hasKvUrl: !!process.env.KV_REST_API_URL,
          hasKvToken: !!process.env.KV_REST_API_TOKEN,
          nodeEnv: process.env.NODE_ENV
        }
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    leads.sort((a: any, b: any) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0
      return dateB - dateA
    })

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
