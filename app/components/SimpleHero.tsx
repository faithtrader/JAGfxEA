'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function SimpleHero() {
  const [showLogin, setShowLogin] = useState(false)
  const [showBuyModal, setShowBuyModal] = useState(false)

  return (
    <div className="relative isolate pt-14" id="home">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
             <div className="py-24 sm:py-32 lg:pb-40">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
           <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                 QQE QMP Fibonacci Strategy EA
               </h1>
               <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl lg:text-2xl max-w-4xl mx-auto">
                 Professional Expert Advisor for MetaTrader 5. Advanced QQE indicators with Fibonacci retracements for optimal trading performance.
               </p>
               
               <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                 <button
                   onClick={() => setShowBuyModal(true)}
                   className="w-full sm:w-auto rounded-md bg-blue-600 px-8 py-4 text-lg sm:text-xl font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                 >
                   Buy Now - $99
                 </button>
                 <button
                   onClick={() => setShowLogin(true)}
                   className="w-full sm:w-auto text-lg sm:text-xl font-semibold leading-6 text-white hover:text-blue-400 transition-colors px-8 py-4 border border-white/20 rounded-md hover:bg-white/10"
                 >
                   Login
                 </button>
               </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Buy Modal */}
      {showBuyModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-gray-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div className="absolute right-0 top-0 pr-4 pt-4">
                <button
                  type="button"
                  className="rounded-md bg-gray-900 text-gray-400 hover:text-gray-500"
                  onClick={() => setShowBuyModal(false)}
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
                    Purchase QQE QMP Fibonacci Strategy EA
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-300">
                      Price: $99 (one-time payment)
                    </p>
                    <p className="text-sm text-gray-300 mt-2">
                      Includes: Full EA functionality, QQE + Fibonacci strategy, Risk management tools, Email support, Free updates for 1 year, MT5 compatible
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        // TODO: Implement Stripe payment
                        alert('Payment system will be implemented soon!')
                        setShowBuyModal(false)
                      }}
                      className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Proceed to Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-gray-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div className="absolute right-0 top-0 pr-4 pt-4">
                <button
                  type="button"
                  className="rounded-md bg-gray-900 text-gray-400 hover:text-gray-500"
                  onClick={() => setShowLogin(false)}
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
                    Login to Your Account
                  </h3>
                  <div className="mt-4">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="mt-1 block w-full rounded-md border-gray-300 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="mt-1 block w-full rounded-md border-gray-300 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          placeholder="Enter your password"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Login
                      </button>
                    </form>
                    <div className="mt-4 text-center">
                      <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                        Forgot password?
                      </a>
                    </div>
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
