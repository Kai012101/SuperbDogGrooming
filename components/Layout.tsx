import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Facebook, MapPin, Scissors, Calendar } from 'lucide-react';
import { Page } from '../types';
import { PHONE_NUMBER, PHONE_LINK, ADDRESS, INSTAGRAM_LINK, FACEBOOK_LINK } from '../constants';
import BookingModal from './BookingModal';

interface LayoutProps {
  children: React.ReactNode;
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const handleBookClick = () => {
    if (window.innerWidth < 768) {
      window.location.href = PHONE_LINK;
    } else {
      setShowBookingModal(true);
    }
  };

  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Price List', id: 'price-list' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen font-sans text-brand-text bg-brand-cream">
      
      {/* --- MOBILE LAYOUT --- */}
      <div className="md:hidden">
         {/* Top Bar Call CTA */}
        <div className="bg-brand-coral text-white text-center py-2 text-sm font-bold font-display tracking-wide">
          <a href={PHONE_LINK} className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 fill-current" />
            {PHONE_NUMBER}
          </a>
        </div>

        {/* Mobile Header */}
        <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-blue/20">
          <div className="px-4 py-3 flex items-center justify-between">
            <button onClick={() => handleNavClick('home')} className="flex items-center gap-2">
               <span className="font-bubble text-2xl text-slate-800 tracking-tighter">Superb<span className="text-brand-coral">Pet</span></span>
            </button>
            <button 
              className="p-2 text-slate-700 bg-brand-blue/30 rounded-lg hover:bg-brand-blue/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-30 bg-brand-cream pt-24 px-6 animate-in slide-in-from-top-10 flex flex-col items-center">
            <div className="flex flex-col gap-6 text-center w-full max-w-xs">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-2xl font-bubble transform hover:scale-110 transition-transform ${
                    activePage === item.id ? 'text-brand-coral rotate-2' : 'text-slate-700 hover:rotate-2'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  handleBookClick();
                  setIsMenuOpen(false);
                }}
                className="bg-brand-coral text-white py-4 rounded-2xl font-bubble text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all mt-4 border-2 border-black"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* --- DESKTOP LAYOUT (Left Sidebar) --- */}
      <aside className="hidden md:flex flex-col w-64 h-screen fixed top-0 left-0 bg-white border-r border-slate-100 z-50 py-8 px-6 justify-between shadow-2xl shadow-slate-100/50">
        
        {/* Logo Area */}
        <div>
          <button onClick={() => handleNavClick('home')} className="group block mb-12">
            <div className="flex items-center gap-2 mb-1">
               <Scissors className="w-8 h-8 text-brand-coral transform group-hover:rotate-12 transition-transform" />
               <span className="font-bubble text-3xl text-slate-800 tracking-tight">Superb<span className="text-brand-coral">Pet</span></span>
            </div>
            <p className="text-xs font-bold text-slate-400 tracking-widest uppercase pl-10">Dog Grooming</p>
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 pl-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-display font-bold text-lg flex items-center gap-3 transition-all hover:translate-x-2 ${
                  activePage === item.id ? 'text-brand-coral' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${activePage === item.id ? 'bg-brand-coral' : 'bg-transparent'}`}></span>
                {item.label.toUpperCase()}
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="space-y-6">
          <div className="flex gap-4 pl-2">
            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          
          <button
            onClick={handleBookClick}
            className="w-full bg-brand-coral text-white py-3 rounded-xl font-bubble text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all border-2 border-black flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            BOOK NOW
          </button>
          
          <div className="text-xs text-slate-400 pl-2">
            <p className="flex items-start gap-1 mb-2">
              <MapPin className="w-3 h-3 mt-0.5 shrink-0" /> 
              <span>{ADDRESS}</span>
            </p>
            <p className="flex items-center gap-1">
              <Phone className="w-3 h-3" /> 
              {PHONE_NUMBER}
            </p>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="md:ml-64 min-h-screen relative">
        {children}
      </main>

      {/* --- DESKTOP FOOTER (Optional/Minimal as info is in sidebar) --- */}
      <footer className="md:ml-64 border-t border-slate-200 py-8 text-center text-slate-400 text-sm bg-white">
        &copy; {new Date().getFullYear()} Superb Dog Grooming.
      </footer>

      <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} />
    </div>
  );
};

export default Layout;