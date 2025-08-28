'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/20/solid'
import { PaymentForm } from './PaymentForm'

const tiers = [
  {
    name: 'Standard License',
    id: 'standard',
    href: '#',
    price: { monthly: '$99' },
    description: 'Perfect for individual traders looking to automate their trading strategy.',
    features: [
      'Full EA functionality',
      'QQE + Fibonacci strategy',
      'Risk management tools',
      'Email support',
      'Free updates for 1 year',
      'MT5 compatible',
    ],
    mostPopular: false,
  },
  {
    name: 'Professional License',
    id: 'professional',
    href: '#',
    price: { monthly: '$199' },
    description: 'Advanced features for serious traders and small trading firms.',
    features: [
      'Everything in Standard',
      'Priority support',
      'Custom parameter optimization',
      'Free updates for 2 years',
      'Multiple account support',
      'Advanced reporting',
    ],
    mostPopular: true,
  },
]

export function Pricing() {
  const [selectedTier, setSelectedTier] = useState(tiers[1]) // Default to Professional
  const [showPayment, setShowPayment] = useState(false)

  return (
    <div className="py-24 sm:py-32" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base font-semibold leading-7 text-blue-400">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Choose your plan
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Get started with our professional Expert Advisor today. All plans include a 30-day money-back guarantee.
            </p>
          </motion.div>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10 ${
                tier.mostPopular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-white">{tier.name}</h3>
                  {tier.mostPopular && (
                    <p className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-400">
                      Most popular
                    </p>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">{tier.price.monthly}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">/one-time</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {
                  setSelectedTier(tier)
                  setShowPayment(true)
                }}
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.mostPopular
                    ? 'bg-blue-500 text-white shadow-sm hover:bg-blue-400 focus-visible:outline-blue-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                }`}
              >
                Get started
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-gray-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div className="absolute right-0 top-0 pr-4 pt-4">
                <button
                  type="button"
                  className="rounded-md bg-gray-900 text-gray-400 hover:text-gray-500"
                  onClick={() => setShowPayment(false)}
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <h3 className="text-base font-semibold leading-6 text-white">
                    Complete Purchase - {selectedTier.name}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-300">
                      Total: {selectedTier.price.monthly} (one-time payment)
                    </p>
                  </div>
                  <div className="mt-4">
                    <PaymentForm tier={selectedTier} onSuccess={() => setShowPayment(false)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

