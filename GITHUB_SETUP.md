# GitHub Setup Guide

## Creating a GitHub Repository

1. **Go to GitHub.com** and sign in to your account

2. **Create a new repository**:
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it: `jagfx-website`
   - Make it **Private** (recommended for business)
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Connect your local project**:
   ```bash
   cd "C:\Users\Sam\Documents\Jagfx - site info\website"
   git init
   git add .
   git commit -m "Initial commit - JagFX EA website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/jagfx-website.git
   git push -u origin main
   ```

## Setting up GitHub Actions (Optional)

Create `.github/workflows/deploy.yml` for automatic deployment:

```yaml
name: Deploy to Fly.io

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to Fly.io
      uses: superfly/flyctl-actions/setup-flyctl@master
      
    - name: Deploy app
      run: flyctl deploy --remote-only
      env:
        FLY_API_TOKEN: ${{ secrets.FLY_API_TOKEN }}
```

## Environment Variables in GitHub

1. Go to your repository settings
2. Click "Secrets and variables" → "Actions"
3. Add these secrets:
   - `FLY_API_TOKEN` (get from Fly.io dashboard)
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

## Connecting to Fly.io

1. **Install Fly CLI** (if not already installed):
   ```bash
   # Windows
   # Download from https://fly.io/docs/hands-on/install-flyctl/
   ```

2. **Login to Fly**:
   ```bash
   fly auth login
   ```

3. **Deploy from GitHub**:
   ```bash
   fly launch
   # Follow the prompts
   # Choose "Deploy from GitHub" when asked
   ```

## Repository Structure

Your GitHub repository should look like this:

```
jagfx-website/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── app/
│   ├── api/
│   ├── components/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .gitignore
├── Dockerfile
├── fly.toml
├── next.config.js
├── package.json
├── tailwind.config.js
├── README.md
└── GITHUB_SETUP.md
```

## .gitignore File

Create a `.gitignore` file:

```
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Next.js
.next/
out/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

## Next Steps

1. **Set up Stripe**:
   - Create account at stripe.com
   - Get your API keys
   - Update environment variables

2. **Deploy to Fly.io**:
   - Follow the deployment guide in README.md

3. **Customize the website**:
   - Update content in components
   - Add your branding
   - Test the payment flow

4. **Set up domain** (optional):
   - Buy a domain (e.g., jagfx.com)
   - Configure DNS to point to Fly.io

## Support

If you need help with GitHub setup, check out:
- [GitHub Docs](https://docs.github.com/)
- [Fly.io Docs](https://fly.io/docs/)
- [Next.js Docs](https://nextjs.org/docs)

