import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const transparent = isHome && !scrolled && !isOpen;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent text-white py-4'
          : 'bg-white text-gray-900 shadow-md py-2'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <NavLink
          to="/"
          className="text-2xl font-serif font-bold tracking-tighter"
          onClick={() => setIsOpen(false)}
        >
          ASM Vitrine Projet
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className="font-medium hover:text-gold-500 transition-colors">
            Accueil
          </NavLink>
          <NavLink to="/about" className="font-medium hover:text-gold-500 transition-colors">
            À propos
          </NavLink>
          <NavLink to="/realisations" className="font-medium hover:text-gold-500 transition-colors">
            Réalisations
          </NavLink>
          <NavLink to="/public" className="font-medium hover:text-gold-500 transition-colors">
            Timeline
          </NavLink>
          <NavLink to="/contact" className="font-medium hover:text-gold-500 transition-colors">
            Contact
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Overlay + Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div
            className="absolute top-16 w-full bg-white shadow-lg rounded-b-md p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className="py-2 text-gray-900 font-medium border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </NavLink>
              <NavLink
                to="/about"
                className="py-2 text-gray-900 font-medium border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </NavLink>
              <NavLink
                to="/realisations"
                className="py-2 text-gray-900 font-medium border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Réalisations
              </NavLink>
              <NavLink
                to="/public"
                className="py-2 text-gray-900 font-medium border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Timeline
              </NavLink>
              <NavLink
                to="/contact"
                className="py-2 text-gray-900 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
