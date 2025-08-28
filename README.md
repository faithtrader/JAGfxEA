# JagFX EA Website

Professional website for the QQE QMP Fibonacci Strategy Expert Advisor with integrated Stripe payments.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 💳 Integrated Stripe payment processing
- 📱 Mobile-first design
- ⚡ Fast performance with Next.js
- 🚀 Easy deployment to Fly.io

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Payments**: Stripe
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Fly.io

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account
- Fly.io account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd jagfx-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Update `.env.local` with your Stripe keys:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Update your environment variables with the keys
4. Test payments using Stripe's test card numbers

## Deployment to Fly.io

1. Install Fly CLI:
```bash
# macOS
brew install flyctl

# Windows
# Download from https://fly.io/docs/hands-on/install-flyctl/
```

2. Login to Fly:
```bash
fly auth login
```

3. Deploy the app:
```bash
fly deploy
```

4. Set environment variables:
```bash
fly secrets set STRIPE_SECRET_KEY=sk_live_your_key_here
fly secrets set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
```

## Project Structure

```
website/
├── app/
│   ├── api/
│   │   └── create-payment-intent/
│   │       └── route.ts
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── PaymentForm.tsx
│   │   ├── Footer.tsx
│   │   └── StripeProvider.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── Dockerfile
├── fly.toml
├── next.config.js
├── package.json
├── tailwind.config.js
└── README.md
```

## Customization

### Updating Content

- **Hero Section**: Edit `app/components/Hero.tsx`
- **Features**: Modify `app/components/Features.tsx`
- **Pricing**: Update `app/components/Pricing.tsx`
- **Styling**: Customize `tailwind.config.js`

### Adding New Pages

1. Create a new file in `app/` directory
2. Export a default React component
3. Add navigation links in `Header.tsx`

## License Management

The website integrates with your existing license system:

1. When a payment is successful, you'll receive a webhook from Stripe
2. Manually assign a license key from your `license_keys.txt` file
3. Send the license key to the customer via email

## Support

For support, email: support@jagfx.com

## License

This project is proprietary software. All rights reserved.

