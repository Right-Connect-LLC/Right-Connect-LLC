import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import connectDB from '@/lib/mongodb'
import Onboarding from '@/models/Onboarding'

export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    
    const data = await request.json()
    const { name, email, company, industry, aiNeeds, projectDescription, budget, timeline } = data

    // Validate required fields
    if (!name || !email || !company || !industry || !aiNeeds || !projectDescription) {
      return NextResponse.json(
        { error: 'Please provide all required fields' },
        { status: 400 }
      )
    }

    if (!Array.isArray(aiNeeds) || aiNeeds.length === 0) {
      return NextResponse.json(
        { error: 'Please select at least one AI service' },
        { status: 400 }
      )
    }

    // Connect to database
    await connectDB()

    // Create onboarding entry
    const onboarding = await Onboarding.create({
      userId: session?.user?.id || null,
      name,
      email: email.toLowerCase(),
      company,
      industry,
      aiNeeds,
      projectDescription,
      budget: budget || undefined,
      timeline: timeline || undefined,
      status: 'pending',
    })

    return NextResponse.json(
      {
        message: 'Onboarding data saved successfully',
        onboarding: {
          id: onboarding._id,
          name: onboarding.name,
          email: onboarding.email,
          company: onboarding.company,
          status: onboarding.status,
        },
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Onboarding error:', error)
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    await connectDB()

    // Get all onboarding entries for the logged-in user
    const onboardings = await Onboarding.find({ userId: session.user.id })
      .sort({ createdAt: -1 })
      .select('-__v')

    return NextResponse.json({ onboardings }, { status: 200 })
  } catch (error: any) {
    console.error('Get onboarding error:', error)
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    )
  }
}

