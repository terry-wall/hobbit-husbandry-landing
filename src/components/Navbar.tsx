export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-hobbit-green/20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🏡</span>
            <span className="text-xl font-bold text-hobbit-brown">Hobbit Husbandry</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-hobbit-green hover:text-hobbit-brown transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-hobbit-green hover:text-hobbit-brown transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-hobbit-green hover:text-hobbit-brown transition-colors font-medium">
              About
            </a>
            <a href="#resources" className="text-hobbit-green hover:text-hobbit-brown transition-colors font-medium">
              Resources
            </a>
            <button className="bg-hobbit-green text-white px-4 py-2 rounded-full hover:bg-hobbit-brown transition-colors">
              Get Started
            </button>
          </div>
          
          <div className="md:hidden">
            <button className="text-hobbit-green hover:text-hobbit-brown transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
