import './globals.css'
import { Inter } from 'next/font/google'
import { StripeProvider } from './components/StripeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JagFX - QQE QMP Fibonacci Strategy EA',
  description: 'Professional Expert Advisor for MetaTrader 5 with advanced QQE and Fibonacci strategies',
  keywords: 'forex, EA, expert advisor, MT5, trading, QQE, fibonacci',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StripeProvider>
          {children}
        </StripeProvider>
      </body>
    </html>
  )
}

