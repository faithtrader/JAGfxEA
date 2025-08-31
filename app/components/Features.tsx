'use client'

import { motion } from 'framer-motion'
import {
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'QQE Indicator Integration',
    description: 'Advanced QQE (Quantitative Qualitative Estimation) indicator for precise market trend analysis and momentum detection.',
    icon: ChartBarIcon,
  },
  {
    name: 'Fibonacci Retracements',
    description: 'Smart Fibonacci retracement levels (23.6%, 38.2%, 50%, 61.8%) for optimal entry and exit points.',
    icon: CogIcon,
  },
  {
    name: 'Risk Management',
    description: 'Built-in position sizing, stop-loss protection, and maximum drawdown controls to protect your capital.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Multiple Lot Sizing',
    description: 'Flexible lot sizing options including fixed, percentage of balance/equity, and step-based sizing.',
    icon: CurrencyDollarIcon,
  },
  {
    name: '24/7 Automated Trading',
    description: 'Fully automated trading that works around the clock, monitoring multiple currency pairs simultaneously.',
    icon: ClockIcon,
  },
  {
    name: 'MetaTrader 5 Compatible',
    description: 'Designed specifically for MT5 platform with optimized performance and seamless integration.',
    icon: ComputerDesktopIcon,
  },
]

export function Features() {
  return (
    <div className="py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base font-semibold leading-7 text-blue-400">Advanced Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need for professional trading
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our Expert Advisor combines cutting-edge technical analysis with robust risk management to deliver consistent trading results.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}



