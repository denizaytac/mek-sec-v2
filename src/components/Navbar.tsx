import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // 4rem oder h-16
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-primary text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/images/mek-security-logo.png"
              alt="MEK Security Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Menü */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-primary-beige">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-primary-beige">Dienstleistungen</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-primary-beige">Über uns</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-primary-beige">Kontakt</button>
          </div>

          {/* Mobile Menü Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary-beige"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menü */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-white hover:text-primary-beige">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-white hover:text-primary-beige">Dienstleistungen</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-white hover:text-primary-beige">Über uns</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-white hover:text-primary-beige">Kontakt</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;