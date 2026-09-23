import { useState, useEffect, useRef } from 'react';
import { Menu, X, Bell } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const notificationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Atmosphere', href: '#gallery' },
    { name: 'Reviews', href: '#ratings' },
    { name: 'Reservations', href: '#reservations' },
  ];

  const notifications = [
    { id: 1, text: 'New seasonal tasting menu is now available.', time: '2h ago', unread: true },
    { id: 2, text: 'Your reservation for tonight has been confirmed.', time: '5h ago', unread: false },
    { id: 3, text: 'Experience our new exclusive wine pairing.', time: '1d ago', unread: false },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-100' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter uppercase text-black">
          Aura.
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest font-medium text-gray-500 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <button 
              className="text-black focus:outline-none hover:text-gray-600 transition-colors relative flex items-center justify-center p-1"
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              aria-label="Notifications"
            >
              <Bell size={20} />
              {notifications.some(n => n.unread) && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full border border-white"></span>
              )}
            </button>

            {/* Notifications Popover */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-4 w-72 md:w-80 bg-white border border-gray-100 shadow-2xl z-50 transition-opacity">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-sm uppercase tracking-widest font-semibold text-black">Notifications</h3>
                  <button className="text-xs text-gray-400 font-medium hover:text-black transition-colors">Mark read</button>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors ${notification.unread ? 'bg-gray-50/50' : ''}`}
                    >
                      <p className="text-sm text-gray-800 font-light leading-relaxed">{notification.text}</p>
                      <span className="text-xs text-gray-400 mt-2 block">{notification.time}</span>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center border-t border-gray-100">
                  <a href="#" className="text-xs uppercase tracking-widest font-medium text-black hover:text-gray-500 transition-colors">
                    View All
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-black focus:outline-none p-1 hover:text-gray-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-sm">
          <div className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}