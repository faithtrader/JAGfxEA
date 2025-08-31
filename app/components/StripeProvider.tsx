'use client'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY 
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null

export function StripeProvider({ children }: { children: React.ReactNode }) {
  // If Stripe is not configured, just render children without Stripe
  if (!stripePromise) {
    return <>{children}</>
  }
  
  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  )
}

