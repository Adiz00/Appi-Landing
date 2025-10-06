// import React, { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonial', href: '#testimonial' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/src/assets/images/Logo.png" alt="Appicoders Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-black">ppicoders Inc.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:text-appicoders-red transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <button className="flex items-center space-x-3 bg-white border-2 border-appicoders-red text-appicoders-red px-6 py-3 rounded-lg hover:bg-appicoders-red hover:text-white transition-all duration-200">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+1 (800) 826-8018</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-black hover:text-appicoders-red transition-colors duration-200 font-medium py-2 uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="flex items-center justify-center space-x-3 bg-white border-2 border-appicoders-red text-appicoders-red px-6 py-3 rounded-lg hover:bg-appicoders-red hover:text-white transition-all duration-200 w-full mt-4">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">+1 (800) 826-8018</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
