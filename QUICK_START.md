# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp env.template .env.local
```

Then edit `.env.local` with your values:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key_here
NEXTAUTH_URL=http://localhost:3000
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

**Get MongoDB URI:**
- Free MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Or use local MongoDB: `mongodb://localhost:27017/rightconnect`

### 2. Install Dependencies (if not already done)

```bash
pnpm install
```

### 3. Start the Development Server

```bash
pnpm dev
```

Visit `http://localhost:3000` 🎉

## 📱 Available Pages

- **Home**: `/` - Main landing page
- **Sign Up**: `/signup` - Create new account
- **Login**: `/login` - Sign in to your account
- **Onboarding**: `/onboarding` - 5-step onboarding flow
- **Services**: `/services` - View AI services
- **About**: `/about` - About the company
- **Contact**: `/contact` - Contact information

## 🔑 Key Features

### ✅ Authentication System
- User registration with password hashing
- Secure login with NextAuth.js
- JWT-based session management
- Protected routes (optional)

### ✅ Onboarding Flow
- 5-step guided process
- Industry selection
- AI services selection
- Project details collection
- Data saved to MongoDB
- Works with or without login

### ✅ Database Integration
- MongoDB with Mongoose
- User model with validation
- Onboarding data model
- Automatic timestamps
- Connection caching

## 🎯 User Flows

### New User Journey
```
Home → Sign Up → Login → Onboarding → Submit
```

### Guest User Journey
```
Home → Get Started → Onboarding → Submit (no account needed)
```

### Returning User Journey
```
Home → Login → Dashboard/Onboarding
```

## 📊 What Data is Collected?

### User Account
- Name
- Email (unique)
- Password (hashed)
- Company (optional)

### Onboarding Submission
- Contact information
- Company details
- Industry type
- AI services of interest
- Project description
- Budget estimate (optional)
- Timeline (optional)
- Status tracking

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Authentication**: NextAuth.js v5 (beta)
- **Database**: MongoDB with Mongoose
- **UI**: Tailwind CSS + shadcn/ui
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Password Hashing**: bcryptjs

## 📝 Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `NEXTAUTH_SECRET` | Secret for JWT encryption | Random 32+ char string |
| `NEXTAUTH_URL` | Your app URL | `http://localhost:3000` |

## 🔒 Security Features

- ✅ Password hashing (bcryptjs with 12 salt rounds)
- ✅ JWT session tokens
- ✅ Environment variable protection
- ✅ Input validation on all endpoints
- ✅ Email validation
- ✅ Password strength requirements (min 6 chars)

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/signin` - Login user
- `POST /api/auth/signout` - Logout user
- `GET /api/auth/session` - Get current session

### Onboarding
- `POST /api/onboarding` - Submit onboarding data
- `GET /api/onboarding` - Get user's submissions (auth required)

## 🐛 Troubleshooting

### "Module not found" errors
```bash
pnpm install
```

### Webpack errors after adding 'use client'
```bash
rm -rf .next
pnpm dev
```

### MongoDB connection fails
- Check your IP is whitelisted in MongoDB Atlas
- Verify connection string is correct
- Ensure database user has proper permissions

### NextAuth errors
- Ensure `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your domain
- Verify environment variables are in `.env.local`

## 📖 Detailed Documentation

For detailed setup instructions, see [AUTHENTICATION_SETUP.md](./AUTHENTICATION_SETUP.md)

## 🎉 You're Ready!

The complete authentication and onboarding system is now set up. Users can:
- Sign up and login
- Complete onboarding with or without an account
- Have their data securely stored in MongoDB
- Receive notifications via toast messages

Happy coding! 🚀

