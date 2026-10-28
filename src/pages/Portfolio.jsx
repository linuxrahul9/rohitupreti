import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, Sliders, X, Sparkles, Eye, ArrowRight, Download, Filter } from 'lucide-react';
import { PHOTOS, PHOTOGRAPHY_CATEGORIES } from '../data/portfolioData';
import SEOBadge from '../components/SEOBadge';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);

  const filteredPhotos = selectedCategory === 'All'
    ? PHOTOS
    : PHOTOS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Local SEO Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="flex justify-center">
            <SEOBadge />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
            Still Photography <span className="text-gold-gradient">Portfolio</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            A curated showcase of royal destination weddings in Rishikesh, ethereal high-altitude Himalayan mountain landscapes, commercial architecture, and intimate bridal portraits by Rohit Upreti.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {PHOTOGRAPHY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                  isSelected
                    ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-dark-800 text-slate-300 border-white/10 hover:border-amber-400/40 hover:bg-dark-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-dark-800 cursor-pointer glass-card-hover"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-black/30 opacity-70 group-hover:opacity-90 transition-opacity"></div>

                {/* Top Camera Settings Overlay */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-amber-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                  <span className="flex items-center space-x-1">
                    <Camera className="w-3 h-3 text-amber-400" />
                    <span>{photo.camera}</span>
                  </span>
                  <span>{photo.settings}</span>
                </div>

                {/* Center Hover Magnifier */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-amber-500/90 text-black flex items-center justify-center shadow-xl">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block mb-0.5 font-bold">
                    {photo.category}
                  </span>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-300 flex items-center space-x-1 mt-1 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{photo.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-16 p-8 rounded-2xl glass-panel border border-amber-500/20 text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Have a specific aesthetic in mind?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Rohit Upreti creates tailored moodboards and custom lighting setups for every wedding, commercial, or landscape project across Uttarakhand and nationwide.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs px-6 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>REQUEST CUSTOM MOODBOARD & QUOTE</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setActivePhoto(null)} />
          
          <div className="relative max-w-5xl w-full bg-dark-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row max-h-[90vh]">
            {/* Image on Left/Top */}
            <div className="relative lg:w-2/3 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="w-full h-full object-contain max-h-[60vh] lg:max-h-[85vh]"
              />
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-black/70 text-white hover:bg-white/20 transition-colors lg:hidden"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sidebar Details on Right */}
            <div className="lg:w-1/3 p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-dark-800/90 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                    {activePhoto.category}
                  </span>
                  <button
                    onClick={() => setActivePhoto(null)}
                    className="hidden lg:block p-1.5 rounded-lg bg-dark-700 text-slate-300 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-2xl font-bold font-display text-white">
                  {activePhoto.title}
                </h3>

                <p className="text-xs font-mono text-slate-300 flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>{activePhoto.location}</span>
                </p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activePhoto.description}
                </p>

                <div className="bg-dark-900/90 p-4 rounded-xl border border-white/10 space-y-2 text-xs font-mono">
                  <p className="text-amber-400 font-bold uppercase tracking-wider text-[10px]">
                    Technical Metadata
                  </p>
                  <p className="text-slate-300">
                    <span className="text-slate-500">Camera / Lens:</span> {activePhoto.camera}
                  </p>
                  <p className="text-slate-300">
                    <span className="text-slate-500">Settings:</span> {activePhoto.settings}
                  </p>
                  <p className="text-slate-300">
                    <span className="text-slate-500">Color Grading:</span> 16-Bit RAW / DaVinci Node
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 space-y-2">
                <Link
                  to="/contact"
                  onClick={() => setActivePhoto(null)}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>BOOK THIS PHOTOGRAPHY STYLE</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

