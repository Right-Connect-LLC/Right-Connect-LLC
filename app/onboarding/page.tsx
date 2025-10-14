'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Bot, 
  Brain, 
  MessageSquare, 
  Search,
  Building,
  ShoppingCart,
  Heart,
  Landmark,
  GraduationCap,
  Home,
  Briefcase
} from "lucide-react"
import { useRouter } from 'next/navigation'
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    aiNeeds: [] as string[],
    projectDescription: '',
    budget: '',
    timeline: ''
  })
  const router = useRouter()

  const industries = [
    { value: 'healthcare', label: 'Healthcare', icon: <Heart className="h-5 w-5" /> },
    { value: 'finance', label: 'Finance & Banking', icon: <Landmark className="h-5 w-5" /> },
    { value: 'ecommerce', label: 'E-commerce', icon: <ShoppingCart className="h-5 w-5" /> },
    { value: 'education', label: 'Education', icon: <GraduationCap className="h-5 w-5" /> },
    { value: 'realestate', label: 'Real Estate', icon: <Home className="h-5 w-5" /> },
    { value: 'technology', label: 'Technology', icon: <Building className="h-5 w-5" /> },
    { value: 'other', label: 'Other', icon: <Briefcase className="h-5 w-5" /> }
  ]

  const aiServices = [
    {
      value: 'ai-agent-builder',
      label: 'Natural Language AI Agent Builder',
      icon: <Bot className="h-6 w-6" />,
      description: 'Build AI agents using natural language - no coding required'
    },
    {
      value: 'rag-systems',
      label: 'RAG Systems',
      icon: <Brain className="h-6 w-6" />,
      description: 'Retrieval-Augmented Generation for enhanced AI accuracy'
    },
    {
      value: 'chatbots',
      label: 'Chatbots',
      icon: <MessageSquare className="h-6 w-6" />,
      description: 'Intelligent conversational AI for customer engagement'
    },
    {
      value: 'nl-search',
      label: 'Natural Language Search',
      icon: <Search className="h-6 w-6" />,
      description: 'Advanced search that understands natural language'
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleIndustrySelect = (industry: string) => {
    setFormData(prev => ({ ...prev, industry }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      aiNeeds: prev.aiNeeds.includes(service)
        ? prev.aiNeeds.filter(s => s !== service)
        : [...prev.aiNeeds, service]
    }))
  }

  const nextStep = () => {
    if (step < 5) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    // Here you would typically send this data to your backend
    console.log('Form Data:', formData)
    // Redirect to contact page or thank you page
    router.push('/contact?source=onboarding')
  }

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.company
      case 2:
        return formData.industry
      case 3:
        return formData.aiNeeds.length > 0
      case 4:
        return formData.projectDescription
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-slate-400">Step {step} of 5</span>
              <span className="text-sm text-slate-400">{Math.round((step / 5) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div 
                className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <Badge variant="outline" className="border-amber-600 text-amber-400 w-fit mb-2">
                Getting Started
              </Badge>
              <CardTitle className="text-3xl text-white">
                {step === 1 && "Let's Get to Know You"}
                {step === 2 && "What's Your Industry?"}
                {step === 3 && "What AI Solutions Interest You?"}
                {step === 4 && "Tell Us About Your Project"}
                {step === 5 && "Almost Done!"}
              </CardTitle>
              <CardDescription className="text-slate-300 text-lg">
                {step === 1 && "Help us understand your business so we can provide the best AI solutions"}
                {step === 2 && "Select the industry that best describes your business"}
                {step === 3 && "Choose the AI services you're interested in (select all that apply)"}
                {step === 4 && "Share some details about what you're looking to achieve"}
                {step === 5 && "Review your selections and let's schedule a consultation"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-200">Your Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="John Doe"
                      className="bg-slate-900 border-slate-700 text-white mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-200">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@company.com"
                      className="bg-slate-900 border-slate-700 text-white mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-slate-200">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your Company Inc."
                      className="bg-slate-900 border-slate-700 text-white mt-2"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Industry Selection */}
              {step === 2 && (
                <div className="grid md:grid-cols-2 gap-4">
                  {industries.map((industry) => (
                    <button
                      key={industry.value}
                      onClick={() => handleIndustrySelect(industry.value)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        formData.industry === industry.value
                          ? 'border-amber-600 bg-amber-600/10'
                          : 'border-slate-700 bg-slate-900 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`${formData.industry === industry.value ? 'text-amber-400' : 'text-slate-400'}`}>
                          {industry.icon}
                        </div>
                        <span className="text-white font-medium">{industry.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 3: AI Services Selection */}
              {step === 3 && (
                <div className="space-y-4">
                  {aiServices.map((service) => (
                    <button
                      key={service.value}
                      onClick={() => handleServiceToggle(service.value)}
                      className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        formData.aiNeeds.includes(service.value)
                          ? 'border-amber-600 bg-amber-600/10'
                          : 'border-slate-700 bg-slate-900 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`mt-1 ${formData.aiNeeds.includes(service.value) ? 'text-amber-400' : 'text-slate-400'}`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-white font-semibold">{service.label}</h3>
                            {formData.aiNeeds.includes(service.value) && (
                              <CheckCircle className="h-5 w-5 text-amber-400" />
                            )}
                          </div>
                          <p className="text-slate-400 text-sm mt-1">{service.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 4: Project Details */}
              {step === 4 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="description" className="text-slate-200">Project Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      placeholder="Tell us about your project goals, challenges, and what you hope to achieve with AI..."
                      rows={6}
                      className="bg-slate-900 border-slate-700 text-white mt-2"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="timeline" className="text-slate-200">Expected Timeline</Label>
                      <Input
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        placeholder="e.g., 3-6 months"
                        className="bg-slate-900 border-slate-700 text-white mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="budget" className="text-slate-200">Budget Range</Label>
                      <Input
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        placeholder="e.g., $50k - $100k"
                        className="bg-slate-900 border-slate-700 text-white mt-2"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Summary */}
              {step === 5 && (
                <div className="space-y-6">
                  <div className="bg-slate-900 p-6 rounded-lg space-y-4">
                    <div>
                      <h3 className="text-amber-400 text-sm font-semibold mb-2">Contact Information</h3>
                      <p className="text-white">{formData.name}</p>
                      <p className="text-slate-400">{formData.email}</p>
                      <p className="text-slate-400">{formData.company}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-amber-400 text-sm font-semibold mb-2">Industry</h3>
                      <p className="text-white capitalize">
                        {industries.find(i => i.value === formData.industry)?.label}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-amber-400 text-sm font-semibold mb-2">Services of Interest</h3>
                      <div className="flex flex-wrap gap-2">
                        {formData.aiNeeds.map(need => (
                          <Badge key={need} variant="outline" className="border-slate-600 text-slate-300">
                            {aiServices.find(s => s.value === need)?.label}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-amber-400 text-sm font-semibold mb-2">Project Description</h3>
                      <p className="text-slate-300 text-sm">{formData.projectDescription}</p>
                    </div>

                    {(formData.timeline || formData.budget) && (
                      <div className="grid md:grid-cols-2 gap-4">
                        {formData.timeline && (
                          <div>
                            <h3 className="text-amber-400 text-sm font-semibold mb-2">Timeline</h3>
                            <p className="text-slate-300">{formData.timeline}</p>
                          </div>
                        )}
                        {formData.budget && (
                          <div>
                            <h3 className="text-amber-400 text-sm font-semibold mb-2">Budget</h3>
                            <p className="text-slate-300">{formData.budget}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="bg-amber-600/10 border border-amber-600/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-2">What's Next?</h3>
                    <p className="text-slate-300 mb-4">
                      Our team will review your information and reach out within 24 hours to schedule a consultation call. 
                      We'll discuss your project in detail and provide tailored recommendations.
                    </p>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-amber-400 mr-2" />
                        Free 30-minute consultation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-amber-400 mr-2" />
                        Custom solution proposal
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-amber-400 mr-2" />
                        No obligation or commitment required
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t border-slate-700">
                <Button
                  onClick={prevStep}
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                  disabled={step === 1}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>

                {step < 5 ? (
                  <Button
                    onClick={nextStep}
                    className="bg-amber-600 hover:bg-amber-700"
                    disabled={!isStepValid()}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    Complete Onboarding
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

