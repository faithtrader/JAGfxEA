import './globals.css'
import { Inter } from 'next/font/google'
import { StripeProvider } from './components/StripeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JAGfx DCA',
  description: 'Advanced multi-strategy Expert Advisor for MetaTrader 5 with intelligent risk management',
  keywords: 'forex, EA, expert advisor, MT5, trading, DCA, multi-strategy',
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
