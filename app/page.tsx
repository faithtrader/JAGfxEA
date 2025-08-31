import { SimpleHeader } from './components/SimpleHeader'
import { SimpleFooter } from './components/SimpleFooter'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <SimpleHeader />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Hybrid-v3.3 Expert Advisor
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Advanced multi-strategy Expert Advisor for MetaTrader 5. Combines multiple technical indicators with intelligent risk management for consistent trading performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Buy Now - $250
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Login
            </button>
          </div>
        </div>
      </main>
      <SimpleFooter />
    </div>
  )
}
