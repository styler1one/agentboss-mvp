import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { kv } from '@vercel/kv'
import { z } from 'zod'

// Initialize Resend with API key from environment
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Naam is verplicht'),
  email: z.string().email('Ongeldig email adres'),
  company: z.string().min(2, 'Bedrijfsnaam is verplicht'),
  phone: z.string().optional(),
  industry: z.string().optional(),
  solution: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Bericht moet minimaal 10 karakters bevatten'),
  urgency: z.string().optional(),
  variant: z.string().default('default'),
  timestamp: z.string(),
  source: z.string()
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = contactSchema.parse(body)
    
    // Generate unique ID for this lead
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    // Store lead data in Redis
    let kvStorageSuccess = false
    try {
      // Try Vercel KV SDK first
      if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
        try {
          await kv.hset(leadId, {
            ...validatedData,
            status: 'new',
            createdAt: new Date().toISOString(),
            ip: request.ip || 'unknown',
            userAgent: request.headers.get('user-agent') || 'unknown'
          })
          
          await kv.lpush('leads', leadId)
          console.log(`Lead ${leadId} stored successfully via KV SDK`)
          kvStorageSuccess = true
        } catch (kvError) {
          console.log('KV SDK failed, trying direct Redis API:', kvError)
          
          // Fallback to direct Redis REST API
          const leadData = {
            ...validatedData,
            status: 'new',
            createdAt: new Date().toISOString(),
            ip: request.ip || 'unknown',
            userAgent: request.headers.get('user-agent') || 'unknown'
          }
          
          // Store lead data
          const storeResponse = await fetch(`${process.env.KV_REST_API_URL}/set/${leadId}`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.KV_REST_API_TOKEN}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ value: JSON.stringify(leadData) })
          })
          
          if (storeResponse.ok) {
            // Add to leads list
            await fetch(`${process.env.KV_REST_API_URL}/lpush/leads`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${process.env.KV_REST_API_TOKEN}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ value: leadId })
            })
            
            console.log(`Lead ${leadId} stored successfully via direct Redis API`)
            kvStorageSuccess = true
          }
        }
      } else {
        console.log('Redis environment variables not configured - skipping storage')
      }
    } catch (storageError) {
      console.error('Lead storage error:', storageError)
      // Continue without storage - email will still work
    }
    
    // Log lead data for manual processing if KV fails
    if (!kvStorageSuccess) {
      console.log('LEAD DATA (KV unavailable):', JSON.stringify({
        leadId,
        ...validatedData,
        status: 'new',
        createdAt: new Date().toISOString(),
        ip: request.ip || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown'
      }, null, 2))
    }
    
    // Determine email template based on variant
    const getEmailTemplate = (variant: string, data: typeof validatedData) => {
      const baseTemplate = {
        from: 'AgentBoss.nl <noreply@agentboss.nl>', // Now verified!
        to: ['info@agentboss.nl'],
        replyTo: data.email,
      }
      
      switch (variant) {
        case 'assessment':
          return {
            ...baseTemplate,
            subject: `🎯 AI Assessment Aanvraag - ${data.company}`,
            html: `
              <h2>Nieuwe AI Assessment Aanvraag</h2>
              <p><strong>Bedrijf:</strong> ${data.company}</p>
              <p><strong>Contact:</strong> ${data.name} (${data.email})</p>
              <p><strong>Telefoon:</strong> ${data.phone || 'Niet opgegeven'}</p>
              <p><strong>Industrie:</strong> ${data.industry || 'Niet opgegeven'}</p>
              <p><strong>Budget:</strong> ${data.budget || 'Niet opgegeven'}</p>
              <p><strong>Urgentie:</strong> ${data.urgency || 'Niet opgegeven'}</p>
              <p><strong>Bericht:</strong></p>
              <p>${data.message}</p>
              <hr>
              <p><strong>Lead ID:</strong> ${leadId}</p>
              <p><strong>Bron:</strong> ${data.source}</p>
              <p><strong>Tijd:</strong> ${new Date(data.timestamp).toLocaleString('nl-NL')}</p>
            `
          }
        
        case 'consultation':
          return {
            ...baseTemplate,
            subject: `📅 Consultatie Aanvraag - ${data.company}`,
            html: `
              <h2>Nieuwe Consultatie Aanvraag</h2>
              <p><strong>Bedrijf:</strong> ${data.company}</p>
              <p><strong>Contact:</strong> ${data.name} (${data.email})</p>
              <p><strong>Telefoon:</strong> ${data.phone || 'Niet opgegeven'}</p>
              <p><strong>Gewenste oplossing:</strong> ${data.solution || 'Niet opgegeven'}</p>
              <p><strong>Industrie:</strong> ${data.industry || 'Niet opgegeven'}</p>
              <p><strong>Budget:</strong> ${data.budget || 'Niet opgegeven'}</p>
              <p><strong>Bericht:</strong></p>
              <p>${data.message}</p>
              <hr>
              <p><strong>Lead ID:</strong> ${leadId}</p>
              <p><strong>Bron:</strong> ${data.source}</p>
              <p><strong>Tijd:</strong> ${new Date(data.timestamp).toLocaleString('nl-NL')}</p>
            `
          }
        
        case 'demo':
          return {
            ...baseTemplate,
            subject: `🚀 Demo Aanvraag - ${data.company}`,
            html: `
              <h2>Nieuwe Demo Aanvraag</h2>
              <p><strong>Bedrijf:</strong> ${data.company}</p>
              <p><strong>Contact:</strong> ${data.name} (${data.email})</p>
              <p><strong>Telefoon:</strong> ${data.phone || 'Niet opgegeven'}</p>
              <p><strong>Interesse in:</strong> ${data.solution || 'Niet opgegeven'}</p>
              <p><strong>Industrie:</strong> ${data.industry || 'Niet opgegeven'}</p>
              <p><strong>Bericht:</strong></p>
              <p>${data.message}</p>
              <hr>
              <p><strong>Lead ID:</strong> ${leadId}</p>
              <p><strong>Bron:</strong> ${data.source}</p>
              <p><strong>Tijd:</strong> ${new Date(data.timestamp).toLocaleString('nl-NL')}</p>
            `
          }
        
        default:
          return {
            ...baseTemplate,
            subject: `💼 Nieuwe Contact Aanvraag - ${data.company}`,
            html: `
              <h2>Nieuwe Contact Aanvraag</h2>
              <p><strong>Bedrijf:</strong> ${data.company}</p>
              <p><strong>Contact:</strong> ${data.name} (${data.email})</p>
              <p><strong>Telefoon:</strong> ${data.phone || 'Niet opgegeven'}</p>
              <p><strong>Industrie:</strong> ${data.industry || 'Niet opgegeven'}</p>
              <p><strong>Bericht:</strong></p>
              <p>${data.message}</p>
              <hr>
              <p><strong>Lead ID:</strong> ${leadId}</p>
              <p><strong>Bron:</strong> ${data.source}</p>
              <p><strong>Tijd:</strong> ${new Date(data.timestamp).toLocaleString('nl-NL')}</p>
            `
          }
      }
    }
    
    // Send email notification
    if (resend) {
      try {
        const emailTemplate = getEmailTemplate(validatedData.variant, validatedData)
        const emailResult = await resend.emails.send(emailTemplate)
        console.log('Sales email sent:', emailResult.data?.id)
      } catch (emailError) {
        console.error('Sales email error:', emailError)
      }
    } else {
      console.log('Resend not configured - skipping sales email')
    }
    
    // Send confirmation email to user
    const confirmationEmail = {
      from: 'AgentBoss.nl <noreply@agentboss.nl>', // Now verified!
      to: [validatedData.email],
      subject: 'Bevestiging: Je aanvraag is ontvangen - AgentBoss.nl',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E40AF;">Bedankt voor je interesse, ${validatedData.name}!</h2>
          
          <p>We hebben je aanvraag ontvangen en een van onze AI-experts neemt binnen 24 uur contact met je op.</p>
          
          <div style="background: #F8FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1E3A8A; margin-top: 0;">Wat gebeurt er nu?</h3>
            <ul style="color: #475569;">
              <li><strong>Binnen 2 uur:</strong> Je ontvangt een bevestiging met je persoonlijke contactpersoon</li>
              <li><strong>Binnen 24 uur:</strong> Een AI-expert belt je voor een eerste gesprek</li>
              <li><strong>Binnen 48 uur:</strong> Je krijgt een gepersonaliseerd voorstel met ROI berekening</li>
            </ul>
          </div>
          
          <p><strong>Referentienummer:</strong> ${leadId}</p>
          
          <p>Heb je nog vragen? Bel ons direct op <a href="tel:+31201234567">+31 20 123 4567</a></p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #E2E8F0;">
          
          <p style="color: #64748B; font-size: 14px;">
            Met vriendelijke groet,<br>
            Het AgentBoss.nl Team<br>
            <a href="https://www.agentboss.nl">www.agentboss.nl</a>
          </p>
        </div>
      `
    }
    
    if (resend) {
      try {
        const confirmationResult = await resend.emails.send(confirmationEmail)
        console.log('Confirmation email sent:', confirmationResult.data?.id)
      } catch (confirmationError) {
        console.error('Confirmation email error:', confirmationError)
      }
    }
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Je aanvraag is succesvol verzonden!',
      leadId: leadId
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Ongeldige gegevens',
        errors: error.errors
      }, { status: 400 })
    }
    
    // Log detailed error for debugging
    console.error('Detailed error:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString()
    })
    
    return NextResponse.json({
      success: false,
      message: 'Er ging iets mis bij het versturen van je bericht. Probeer het opnieuw.',
      debug: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined
    }, { status: 500 })
  }
}
