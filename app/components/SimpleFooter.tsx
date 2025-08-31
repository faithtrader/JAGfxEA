export function SimpleFooter() {
  return (
    <footer className="bg-gray-800 py-8" id="support">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-gray-400 mb-4">
          &copy; 2024 JagFX. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm">
          Risk Warning: Trading forex involves substantial risk of loss and is not suitable for all investors.
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Past performance does not guarantee future results.
        </p>
        <div className="mt-4">
          <a href="mailto:support@jagfx.com" className="text-blue-400 hover:text-blue-300">
            support@jagfx.com
          </a>
        </div>
      </div>
    </footer>
  )
}


