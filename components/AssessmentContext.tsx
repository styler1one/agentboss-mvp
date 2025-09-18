'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface AssessmentResult {
  solution: string
  title: string
  price: string
  timeline: string
  description: string
  features: string[]
  roi: string
  savings: string
}

interface AssessmentContextType {
  assessmentResult: AssessmentResult | null
  setAssessmentResult: (result: AssessmentResult | null) => void
  selectedIndustry: string | null
  setSelectedIndustry: (industry: string | null) => void
  userProfile: {
    employees: number
    revenue: number
    challenges: string[]
  } | null
  setUserProfile: (profile: { employees: number; revenue: number; challenges: string[] } | null) => void
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined)

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null)
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [userProfile, setUserProfile] = useState<{ employees: number; revenue: number; challenges: string[] } | null>(null)

  return (
    <AssessmentContext.Provider value={{
      assessmentResult,
      setAssessmentResult,
      selectedIndustry,
      setSelectedIndustry,
      userProfile,
      setUserProfile
    }}>
      {children}
    </AssessmentContext.Provider>
  )
}

export function useAssessment() {
  const context = useContext(AssessmentContext)
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider')
  }
  return context
}
