'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Loader2, Lock, Mail, User, Building } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useToast } from "@/hooks/use-toast"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      })
      return
    }

    if (formData.password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          company: formData.company,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed')
      }

      toast({
        title: "Success!",
        description: "Account created successfully. Please login.",
      })

      router.push('/login')
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-md">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="text-center">
              <Badge variant="outline" className="border-amber-600 text-amber-400 w-fit mx-auto mb-4">
                Join Us
              </Badge>
              <CardTitle className="text-3xl text-white">Create Your Account</CardTitle>
              <CardDescription className="text-slate-300 text-lg">
                Get started with AI solutions for your business
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-slate-200">Full Name</Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-slate-900 border-slate-700 text-white pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-200">Email Address</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="bg-slate-900 border-slate-700 text-white pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-slate-200">Company Name (Optional)</Label>
                  <div className="relative mt-2">
                    <Building className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Inc."
                      className="bg-slate-900 border-slate-700 text-white pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-slate-200">Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="bg-slate-900 border-slate-700 text-white pl-10"
                      required
                    />
                  </div>
                  <p className="text-slate-400 text-xs mt-1">Must be at least 6 characters</p>
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-slate-200">Confirm Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="bg-slate-900 border-slate-700 text-white pl-10"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-slate-400">
                  Already have an account?{' '}
                  <Link href="/login" className="text-amber-400 hover:text-amber-300 font-semibold">
                    Login
                  </Link>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700 text-center">
                <p className="text-slate-400 text-sm">
                  Want to skip registration?{' '}
                  <Link href="/onboarding" className="text-amber-400 hover:text-amber-300">
                    Continue as guest
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

