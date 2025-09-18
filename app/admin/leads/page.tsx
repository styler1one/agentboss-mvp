'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RefreshCw, Mail, Phone, Building, Calendar, Euro } from "lucide-react"

interface Lead {
  id: string
  name: string
  email: string
  company: string
  phone?: string
  industry?: string
  solution?: string
  budget?: string
  message: string
  urgency?: string
  variant: string
  status: string
  createdAt: string
  source: string
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchLeads = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/admin/leads')
      if (!response.ok) throw new Error('Failed to fetch leads')
      const data = await response.json()
      
      if (data.success === false && data.message?.includes('Redis')) {
        // Redis not available, show helpful message
        setError('Redis database not available. Leads are being captured via email notifications and Vercel function logs.')
        setLeads([])
      } else {
        setLeads(data.leads || [])
      }
    } catch {
      setError('Database connection unavailable. Leads are being captured via email notifications and logged in Vercel function logs for manual processing.')
      setLeads([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  const getVariantColor = (variant: string) => {
    switch (variant) {
      case 'assessment': return 'bg-blue-100 text-blue-800'
      case 'consultation': return 'bg-green-100 text-green-800'
      case 'demo': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getBudgetIcon = (budget?: string) => {
    if (!budget) return null
    if (budget.includes('250k+')) return '💎'
    if (budget.includes('100k')) return '🏆'
    if (budget.includes('50k')) return '⭐'
    return '💰'
  }

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <RefreshCw className="w-8 h-8 animate-spin text-agent-blue" />
          <span className="ml-2 text-lg">Loading leads...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-agent-navy">Lead Dashboard</h1>
          <p className="text-gray-600 mt-2">Overzicht van alle potentiële klanten</p>
        </div>
        <Button onClick={fetchLeads} variant="outline">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      {error && (
        <Card className="mb-6 border-red-200 bg-red-50">
          <CardContent className="p-4">
            <p className="text-red-700">{error}</p>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Building className="w-8 h-8 text-blue-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-600">Total Leads</p>
                  <p className="text-2xl font-bold text-gray-900">{leads.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-green-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-600">Today</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {leads.filter(lead => 
                      new Date(lead.createdAt).toDateString() === new Date().toDateString()
                    ).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Euro className="w-8 h-8 text-yellow-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-600">High Value</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {leads.filter(lead => 
                      lead.budget?.includes('250k+') || lead.budget?.includes('100k')
                    ).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Mail className="w-8 h-8 text-purple-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-600">Assessments</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {leads.filter(lead => lead.variant === 'assessment').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        {leads.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nog geen leads</h3>
              <p className="text-gray-600">Zodra iemand een formulier invult, verschijnen ze hier.</p>
            </CardContent>
          </Card>
        ) : (
          leads.map((lead) => (
            <Card key={lead.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-agent-navy flex items-center">
                      <Building className="w-5 h-5 mr-2" />
                      {lead.company}
                      {getBudgetIcon(lead.budget) && (
                        <span className="ml-2 text-2xl">{getBudgetIcon(lead.budget)}</span>
                      )}
                    </CardTitle>
                    <p className="text-gray-600 mt-1">{lead.name}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className={getVariantColor(lead.variant)}>
                      {lead.variant === 'assessment' ? 'Assessment' :
                       lead.variant === 'consultation' ? 'Consultatie' :
                       lead.variant === 'demo' ? 'Demo' : 'Contact'}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {new Date(lead.createdAt).toLocaleDateString('nl-NL', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 mr-2 text-gray-500" />
                      <a href={`mailto:${lead.email}`} className="text-agent-blue hover:underline">
                        {lead.email}
                      </a>
                    </div>
                    {lead.phone && (
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 mr-2 text-gray-500" />
                        <a href={`tel:${lead.phone}`} className="text-agent-blue hover:underline">
                          {lead.phone}
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    {lead.industry && (
                      <div><strong>Industrie:</strong> {lead.industry}</div>
                    )}
                    {lead.solution && (
                      <div><strong>Interesse:</strong> {lead.solution}</div>
                    )}
                    {lead.budget && (
                      <div><strong>Budget:</strong> {lead.budget}</div>
                    )}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm"><strong>Bericht:</strong></p>
                  <p className="text-sm text-gray-700 mt-1">{lead.message}</p>
                </div>
                
                <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                  <span>Bron: {lead.source}</span>
                  <span>ID: {lead.id}</span>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
