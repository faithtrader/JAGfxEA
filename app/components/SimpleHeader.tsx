import Image from 'next/image'

export function SimpleHeader() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/dca lOGO.png" 
            alt="DCA Logo" 
            width={182} 
            height={65} 
            className="h-16 w-auto"
          />
        </div>
        <div className="flex gap-6">
          <a href="#home" className="text-white hover:text-blue-400">Home</a>
          <a href="#support" className="text-white hover:text-blue-400">Support</a>
        </div>
      </div>
    </header>
  )
}
