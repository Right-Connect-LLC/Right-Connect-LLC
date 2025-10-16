# Authentication & Database Setup Guide

This guide will help you set up the authentication system and database for the Right Connect LLC application.

## Prerequisites

- Node.js 18+ installed
- MongoDB database (MongoDB Atlas recommended for cloud hosting)
- pnpm package manager

## Step 1: Install Dependencies

Dependencies are already installed. If you need to reinstall them:

```bash
pnpm install
```

## Step 2: Set Up MongoDB Database

### Option A: MongoDB Atlas (Recommended for Production)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or log in
3. Create a new cluster
4. Click "Connect" and select "Connect your application"
5. Copy the connection string

### Option B: Local MongoDB

1. Install MongoDB on your machine
2. Start MongoDB service
3. Your connection string will be: `mongodb://localhost:27017/rightconnect`

## Step 3: Configure Environment Variables

1. Copy the `env.template` file to `.env.local`:

```bash
cp env.template .env.local
```

2. Edit `.env.local` and fill in your values:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/rightconnect?retryWrites=true&w=majority

# NextAuth Secret (generate with: openssl rand -base64 32)
NEXTAUTH_SECRET=your_generated_secret_here

# NextAuth URL
NEXTAUTH_URL=http://localhost:3000
```

### Generate NEXTAUTH_SECRET

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

Copy the output and paste it as your `NEXTAUTH_SECRET` value.

## Step 4: Start the Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Features

### Authentication

- **Sign Up**: `/signup` - Create a new account
- **Login**: `/login` - Sign in to existing account
- **Session Management**: Automatic session handling with NextAuth.js

### Onboarding

- **Onboarding Flow**: `/onboarding` - 5-step guided onboarding
- **Data Storage**: All onboarding submissions are saved to MongoDB
- **Guest Access**: Users can complete onboarding without logging in

### API Endpoints

#### Authentication

- `POST /api/auth/register` - Register a new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "secure_password",
    "company": "Company Name"
  }
  ```

- `POST /api/auth/[...nextauth]` - NextAuth endpoints (login, logout, session)

#### Onboarding

- `POST /api/onboarding` - Submit onboarding data
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Company Name",
    "industry": "technology",
    "aiNeeds": ["ai-agent-builder", "rag-systems"],
    "projectDescription": "We need AI solutions...",
    "budget": "$50k - $100k",
    "timeline": "3-6 months"
  }
  ```

- `GET /api/onboarding` - Get user's onboarding submissions (requires authentication)

## Database Models

### User Model

```typescript
{
  name: string
  email: string (unique)
  password: string (hashed)
  company?: string
  createdAt: Date
  updatedAt: Date
}
```

### Onboarding Model

```typescript
{
  userId?: ObjectId (optional - links to User if logged in)
  name: string
  email: string
  company: string
  industry: 'healthcare' | 'finance' | 'ecommerce' | 'education' | 'realestate' | 'technology' | 'other'
  aiNeeds: string[]
  projectDescription: string
  budget?: string
  timeline?: string
  status: 'pending' | 'contacted' | 'in-progress' | 'completed'
  createdAt: Date
  updatedAt: Date
}
```

## Security Features

- Password hashing with bcryptjs (12 salt rounds)
- JWT-based sessions with NextAuth.js
- Environment variable protection
- Input validation on all API endpoints
- MongoDB connection caching for performance

## User Flow

1. **New User**: Clicks "Sign Up" → Creates account → Redirected to login → Logs in → Can access onboarding
2. **Existing User**: Clicks "Login" → Enters credentials → Redirected to onboarding/dashboard
3. **Guest User**: Clicks "Get Started" → Goes directly to onboarding → Can submit without account

## Troubleshooting

### MongoDB Connection Issues

- Ensure your IP address is whitelisted in MongoDB Atlas
- Check that your connection string includes the database name
- Verify username and password are correct

### NextAuth Errors

- Make sure `NEXTAUTH_SECRET` is set and is a strong random string
- Verify `NEXTAUTH_URL` matches your application URL
- Check that all environment variables are in `.env.local` (not `.env`)

### Build Errors

If you encounter webpack or build errors:

```bash
# Clean the build cache
rm -rf .next

# Restart the dev server
pnpm dev
```

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Set environment variables in your hosting platform
2. Update `NEXTAUTH_URL` to your production domain
3. Ensure MongoDB Atlas allows connections from your hosting platform's IP ranges
4. Consider setting up MongoDB indexes for better performance

## Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

## Support

For questions or issues, contact the development team or open an issue in the repository.

