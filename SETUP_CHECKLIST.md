# Setup Checklist ✅

Follow these steps to get your authentication system running:

## Step 1: MongoDB Setup
- [ ] Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [ ] Create a free account
- [ ] Create a new cluster
- [ ] Click "Connect" → "Connect your application"
- [ ] Copy your connection string
- [ ] Whitelist your IP address (or allow from anywhere for development)

## Step 2: Environment Variables
- [ ] Copy `env.template` to `.env.local`:
  ```bash
  cp env.template .env.local
  ```
- [ ] Generate a secret key:
  ```bash
  openssl rand -base64 32
  ```
- [ ] Edit `.env.local` and add:
  - [ ] Your MongoDB connection string
  - [ ] Your generated secret key
  - [ ] Your app URL (http://localhost:3000 for dev)

## Step 3: Start the Application
- [ ] Make sure dependencies are installed:
  ```bash
  pnpm install
  ```
- [ ] Start the development server:
  ```bash
  pnpm dev
  ```
- [ ] Open http://localhost:3000

## Step 4: Test the System

### Test Registration
- [ ] Go to http://localhost:3000/signup
- [ ] Fill in the form
- [ ] Click "Create Account"
- [ ] Should redirect to login page
- [ ] Check MongoDB - user should be created

### Test Login
- [ ] Go to http://localhost:3000/login
- [ ] Enter your credentials
- [ ] Click "Login"
- [ ] Should redirect to onboarding page

### Test Onboarding (Logged In)
- [ ] Go to http://localhost:3000/onboarding
- [ ] Complete all 5 steps
- [ ] Click "Complete Onboarding"
- [ ] Should see success toast
- [ ] Check MongoDB - onboarding entry should exist

### Test Onboarding (Guest)
- [ ] Logout (or use incognito window)
- [ ] Go to http://localhost:3000/onboarding
- [ ] Complete all 5 steps
- [ ] Click "Complete Onboarding"
- [ ] Should see success toast
- [ ] Check MongoDB - onboarding entry should exist (no userId)

## Your .env.local should look like this:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/rightconnect?retryWrites=true&w=majority
NEXTAUTH_SECRET=your_generated_32_character_secret_here
NEXTAUTH_URL=http://localhost:3000
```

## Troubleshooting

### Can't connect to MongoDB?
- Check your IP is whitelisted
- Verify connection string is correct
- Make sure database user has read/write permissions

### NextAuth errors?
- Ensure NEXTAUTH_SECRET is set
- Verify NEXTAUTH_URL matches your domain
- Restart dev server after changing .env.local

### Build errors?
```bash
rm -rf .next
pnpm dev
```

## ✅ You're Done!

Once all checkboxes are complete, your authentication system is fully operational!

## Need Help?

- Read [QUICK_START.md](./QUICK_START.md) for quick setup
- Read [AUTHENTICATION_SETUP.md](./AUTHENTICATION_SETUP.md) for detailed guide
- Read [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) for technical details

