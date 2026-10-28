import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Film, Sparkles, MapPin, Phone, Mail, Instagram, Youtube, Heart, ArrowUp } from 'lucide-react';
import SEOBadge from './SEOBadge';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const uttarakhandCities = [
    'Dehradun', 'Rishikesh', 'Mussoorie', 'Nainital', 'Jim Corbett',
    'Haldwani', 'Haridwar', 'Almora', 'Chopta', 'Auli', 'Tehri Garhwal', 'Ranikhet'
  ];

  return (
    <footer className="relative bg-slate-100 dark:bg-dark-900 border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 font-sans pt-16 pb-12 overflow-hidden transition-colors duration-300">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tier: Brand, SEO Badge & Back to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-slate-200 dark:border-white/5">
          <div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black font-display text-slate-900 dark:text-white tracking-tight">
                ROHIT UPRETI
              </h3>
            </div>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
              Cinematic Filmmaker • Master Photographer • Senior Colorist
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <SEOBadge />
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white dark:bg-dark-800 text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:bg-slate-200 dark:hover:bg-dark-700 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-slate-200 dark:border-white/5">
          {/* Col 1: Bio & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-900 dark:text-white font-bold">
              About Rohit Upreti
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Based in the heart of Uttarakhand, Rohit Upreti crafts emotive visual stories across the Indian Himalayas. Specializing in destination weddings in Rishikesh & Mussoorie, high-altitude landscape expeditions, 4K commercial video shooting, and pixel-level DaVinci Resolve color grading.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white dark:bg-dark-800 hover:bg-amber-500/20 hover:text-amber-500 flex items-center justify-center text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white dark:bg-dark-800 hover:bg-red-500/20 hover:text-red-500 flex items-center justify-center text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="tel:+919876543210"
                className="w-9 h-9 rounded-lg bg-white dark:bg-dark-800 hover:bg-emerald-500/20 hover:text-emerald-500 flex items-center justify-center text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@rohitupreti.com"
                className="w-9 h-9 rounded-lg bg-white dark:bg-dark-800 hover:bg-blue-500/20 hover:text-blue-500 flex items-center justify-center text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-900 dark:text-white font-bold">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link to="/" className="hover:text-amber-500 transition-colors">Home Showcase</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-amber-500 transition-colors">Photography Portfolio</Link>
              </li>
              <li>
                <Link to="/films" className="hover:text-amber-500 transition-colors">Films & Video Shooting</Link>
              </li>
              <li>
                <Link to="/editing" className="hover:text-amber-500 transition-colors">Photo & Video Editing</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-500 transition-colors">Services & Pricing</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-500 transition-colors">About Rohit & Gear</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-500 transition-colors font-bold text-amber-500">Hire Me / Book Shoot</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Offered */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-900 dark:text-white font-bold">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-600 dark:text-slate-400">
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Destination Wedding Cinema</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>4K Drone Cinematography</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Pre-Wedding Cinematic Films</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>DaVinci Resolve Color Grading</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Editorial Photo Retouching</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Commercial Resort Ad Films</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Uttarakhand Coverage & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-900 dark:text-white font-bold flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Studio & Locations</span>
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong className="text-slate-900 dark:text-white">Studio Address:</strong><br />
              Rajpur Road, Near Jakhan,<br />
              Dehradun, Uttarakhand - 248001
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              <strong className="text-slate-900 dark:text-white">Phone / WhatsApp:</strong><br />
              <a href="tel:+919876543210" className="text-amber-600 dark:text-amber-400 hover:underline">
                +91 98765 43210
              </a>
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              <strong className="text-slate-900 dark:text-white">Direct Email:</strong><br />
              <a href="mailto:contact@rohitupreti.com" className="text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white">
                contact@rohitupreti.com
              </a>
            </p>
          </div>
        </div>

        {/* Local SEO Cities Tags Bar */}
        <div className="py-6 border-b border-slate-200 dark:border-white/5">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 font-bold">
            Top Search Locations Across Uttarakhand & India:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {uttarakhandCities.map((city, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono bg-white dark:bg-dark-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded border border-slate-200 dark:border-white/5 hover:border-amber-400/50 hover:text-amber-500 transition-colors shadow-sm"
              >
                Photographer in {city}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} Rohit Upreti Photography & Films. All Rights Reserved.
          </p>
          <p className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for the Majestic Himalayas of Uttarakhand</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
