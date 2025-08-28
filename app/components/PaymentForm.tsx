'use client'

import { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { CheckIcon } from '@heroicons/react/20/solid'

interface PaymentFormProps {
  tier: {
    id: string
    name: string
    price: { monthly: string }
  }
  onSuccess: () => void
}

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#ffffff',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
}

export function PaymentForm({ tier, onSuccess }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)
    setError(null)

    const cardElement = elements.getElement(CardElement)

    if (!cardElement) {
      setError('Card element not found')
      setIsProcessing(false)
      return
    }

    try {
      // Create payment intent on the server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tierId: tier.id,
          amount: tier.price.monthly.replace('$', ''),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create payment intent')
      }

      const { clientSecret } = await response.json()

      // Confirm payment with Stripe
      const { error: paymentError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      })

      if (paymentError) {
        setError(paymentError.message || 'Payment failed')
      } else if (paymentIntent.status === 'succeeded') {
        setSuccess(true)
        // Here you would typically send the license key to the customer
        setTimeout(() => {
          onSuccess()
        }, 2000)
      }
    } catch (err) {
      setError('An unexpected error occurred')
    }

    setIsProcessing(false)
  }

  if (success) {
    return (
      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <h3 className="mt-2 text-sm font-medium text-white">Payment successful!</h3>
        <p className="mt-1 text-sm text-gray-300">
          Your license key will be sent to your email shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="card-element" className="block text-sm font-medium text-white">
          Credit or debit card
        </label>
        <div className="mt-1">
          <CardElement
            id="card-element"
            options={CARD_ELEMENT_OPTIONS}
            className="block w-full rounded-md border-gray-300 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
        </div>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Payment Error</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? 'Processing...' : `Pay ${tier.price.monthly}`}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Your payment is secure and encrypted. We use Stripe for payment processing.
      </p>
    </form>
  )
}

