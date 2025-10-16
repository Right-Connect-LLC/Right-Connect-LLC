import mongoose from 'mongoose'

export interface IUser extends mongoose.Document {
  name: string
  email: string
  password: string
  company?: string
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [6, 'Password must be at least 6 characters'],
    },
    company: {
      type: String,
      maxlength: [100, 'Company name cannot be more than 100 characters'],
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema)

