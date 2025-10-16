import mongoose from 'mongoose'

export interface IOnboarding extends mongoose.Document {
  userId: mongoose.Types.ObjectId
  name: string
  email: string
  company: string
  industry: string
  aiNeeds: string[]
  projectDescription: string
  budget?: string
  timeline?: string
  status: 'pending' | 'contacted' | 'in-progress' | 'completed'
  createdAt: Date
  updatedAt: Date
}

const OnboardingSchema = new mongoose.Schema<IOnboarding>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false, // Optional - allows anonymous onboarding submissions
    },
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    company: {
      type: String,
      required: [true, 'Please provide a company name'],
      maxlength: [100, 'Company name cannot be more than 100 characters'],
    },
    industry: {
      type: String,
      required: [true, 'Please provide an industry'],
      enum: ['healthcare', 'finance', 'ecommerce', 'education', 'realestate', 'technology', 'other'],
    },
    aiNeeds: {
      type: [String],
      required: [true, 'Please select at least one AI service'],
      validate: {
        validator: function(v: string[]) {
          return v && v.length > 0
        },
        message: 'Please select at least one AI service',
      },
    },
    projectDescription: {
      type: String,
      required: [true, 'Please provide a project description'],
      maxlength: [2000, 'Description cannot be more than 2000 characters'],
    },
    budget: {
      type: String,
      maxlength: [50, 'Budget cannot be more than 50 characters'],
    },
    timeline: {
      type: String,
      maxlength: [50, 'Timeline cannot be more than 50 characters'],
    },
    status: {
      type: String,
      enum: ['pending', 'contacted', 'in-progress', 'completed'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
)

// Create an index on email for faster lookups
OnboardingSchema.index({ email: 1 })
OnboardingSchema.index({ userId: 1 })

export default mongoose.models.Onboarding || mongoose.model<IOnboarding>('Onboarding', OnboardingSchema)

