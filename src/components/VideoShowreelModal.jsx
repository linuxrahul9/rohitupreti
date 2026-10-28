import React from 'react';
import { X, Film, Volume2, Award, Calendar, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VideoShowreelModal({ film, isOpen, onClose }) {
  if (!isOpen || !film) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-dark-900 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl z-10">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-dark-800/80">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <div>
              <span className="text-amber-400 font-mono text-[11px] uppercase tracking-wider block">
                {film.category} • {film.resolution}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                {film.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-dark-700 text-slate-300 hover:text-white hover:bg-dark-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <video
            src={film.previewVideoUrl}
            poster={film.thumbnail}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          >
            Your browser does not support HTML5 video.
          </video>
        </div>

        {/* Video Details & Meta */}
        <div className="p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
            <div className="flex items-center space-x-1.5 text-amber-400">
              <MapPin className="w-4 h-4" />
              <span>{film.location}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Runtime: {film.duration}</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-dark-800 px-3 py-1 rounded border border-white/10">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Directed & Graded by Rohit Upreti</span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {film.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {film.tags && film.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2.5 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-400">
              Want a cinematic visual film for your wedding, brand, or music project?
            </div>
            <Link
              to="/contact"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold font-mono text-xs px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-amber-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Hire Rohit for Video Shoot</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

