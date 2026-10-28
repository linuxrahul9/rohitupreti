import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Film, Sparkles, Phone, MessageSquare, Menu, X, Compass } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Films & Video', path: '/films' },
    { name: 'Editing Studio', path: '/editing' },
    { name: 'Services', path: '/services' },
    { name: 'About Rohit', path: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/10 shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                <Camera className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black font-display tracking-tight text-white flex items-center gap-1.5">
                ROHIT UPRETI
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 block -mt-1 uppercase">
                Visual Artist • Uttarakhand
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-amber-400 bg-amber-400/10 font-bold border border-amber-400/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Hire Me CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Direct WhatsApp Call */}
            <a
              href="https://wa.me/919876543210?text=Hi%20Rohit,%20I%20saw%20your%20website%20and%20want%20to%20hire%20you%20for%20a%20shoot%20in%20Uttarakhand!"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-800 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 border border-white/10 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Direct Call */}
            <a
              href="tel:+919876543210"
              className="p-2 rounded-lg bg-dark-800 text-slate-300 hover:bg-white/5 hover:text-white border border-white/10 transition-colors"
              title="Direct Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Hire Me Primary Button */}
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold font-mono text-xs px-5 py-2.5 rounded-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              <span>HIRE ROHIT</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <Link
              to="/contact"
              className="bg-amber-500 text-black font-bold font-mono text-[11px] px-3 py-1.5 rounded-md"
            >
              Hire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-800 text-slate-200 border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-900/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-lg text-sm font-mono uppercase tracking-wider flex items-center justify-between ${
                    isActive
                      ? 'text-amber-400 bg-amber-400/10 font-bold border border-amber-400/20'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              to="/contact"
              className="w-full text-center bg-amber-500 text-black font-extrabold font-mono text-sm py-3 rounded-lg shadow-lg shadow-amber-500/20"
            >
              ✦ HIRE ME / GET A QUOTE
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 py-2.5 rounded-lg text-xs font-mono font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center space-x-2 bg-dark-800 border border-white/10 text-slate-200 py-2.5 rounded-lg text-xs font-mono font-bold"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

