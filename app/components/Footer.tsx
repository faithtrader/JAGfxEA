export function Footer() {
  return (
    <footer className="bg-gray-900" id="support">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="mailto:support@jagfx.com" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Email</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; 2024 JagFX. All rights reserved. Professional Expert Advisor for MetaTrader 5.
          </p>
          <div className="mt-4 text-center text-xs text-gray-400">
            <p>Risk Warning: Trading forex involves substantial risk of loss and is not suitable for all investors.</p>
            <p className="mt-1">Past performance does not guarantee future results.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

