import React from 'react';
import { Award, CheckCircle, MapPin, Star } from 'lucide-react';

export default function SEOBadge({ className = '' }) {
  return (
    <div
      className={`inline-flex items-center space-x-2.5 bg-gradient-to-r from-amber-500/15 via-dark-800 to-amber-500/10 border border-amber-500/40 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg shadow-amber-500/5 ${className}`}
    >
      <div className="flex items-center text-amber-400">
        <Star className="w-4 h-4 fill-amber-400" />
      </div>
      <span className="text-xs font-mono font-semibold tracking-wide text-amber-300">
        #1 Rated Visual Storyteller in Uttarakhand
      </span>
      <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-500"></span>
      <span className="hidden sm:inline-flex items-center space-x-1 text-[11px] font-mono text-slate-400">
        <MapPin className="w-3 h-3 text-amber-400" />
        <span>Dehradun • Rishikesh • Nainital</span>
      </span>
      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
    </div>
  );
}

