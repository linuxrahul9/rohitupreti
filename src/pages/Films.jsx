import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film, Play, Sparkles, MapPin, Calendar, Clock, Video, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { FILMS_DATA } from '../data/portfolioData';
import VideoShowreelModal from '../components/VideoShowreelModal';
import SEOBadge from '../components/SEOBadge';
import ViewfinderOverlay from '../components/ViewfinderOverlay';
import TiltCard from '../components/TiltCard';

export default function Films() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-900 text-slate-900 dark:text-slate-100 pt-28 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex justify-center">
            <SEOBadge />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Uttarakhand Cinema & <span className="text-gold-gradient">Video Shooting</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Crafted on Sony FX3 Cinema Line in 4K 120FPS with 10-Bit S-Log3 color science and 5.1K Apple ProRes mountain drones. Documenting royal wedding ceremonies by the holy Ganges in Rishikesh, ridge walks in Mussoorie, high alpine vistas in Chopta, and resort commercials in Jim Corbett.
          </p>
        </div>

        {/* Video Production Reel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {FILMS_DATA.map((film) => (
            <TiltCard key={film.id} maxTilt={6}>
              <div className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-amber-400/50 transition-all flex flex-col justify-between h-full shadow-xl">
                <div>
                  {/* Viewfinder Video Card */}
                  <ViewfinderOverlay>
                    <div className="relative aspect-video overflow-hidden group">
                      <img
                        src={film.thumbnail}
                        alt={film.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent"></div>

                      {/* Big Center Play Button */}
                      <button
                        onClick={() => setSelectedFilm(film)}
                        className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                        aria-label={`Play ${film.title}`}
                      >
                        <div className="w-16 h-16 rounded-full bg-amber-500/95 text-black flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-amber-400 transition-all ring-4 ring-amber-500/30">
                          <Play className="w-7 h-7 fill-black ml-1" />
                        </div>
                      </button>

                      {/* Resolution pill */}
                      <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-mono text-amber-400 border border-amber-500/30">
                        {film.resolution}
                      </div>

                      <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-mono text-slate-300 border border-white/10 flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>{film.duration}</span>
                      </div>
                    </div>
                  </ViewfinderOverlay>

                  {/* Details Section */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-mono text-amber-500 dark:text-amber-400">
                      <MapPin className="w-4 h-4" />
                      <span>{film.location}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-700 dark:text-slate-300 font-semibold">{film.category}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                      {film.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {film.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {film.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono bg-slate-100 dark:bg-dark-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/5"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="px-6 py-4 bg-slate-100/80 dark:bg-dark-900/80 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Client: {film.client}</span>
                  <button
                    onClick={() => setSelectedFilm(film)}
                    className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 inline-flex items-center space-x-1"
                  >
                    <span>Watch Trailer</span>
                    <Play className="w-3 h-3 fill-current ml-1" />
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Video Production Equipment Rig Section */}
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-slate-200 dark:border-white/10 mb-20 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-amber-500 dark:text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              ✦ Cinema Grade Gear
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white">
              The Gear Behind Uttarakhand's #1 Video Shoots
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              We never compromise on optics or stabilization. Every project is recorded on cinema-standard dual native ISO sensors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TiltCard maxTilt={8}>
              <div className="bg-slate-100 dark:bg-dark-800/80 p-5 rounded-xl border border-slate-200 dark:border-white/5 h-full">
                <span className="text-amber-500 dark:text-amber-400 font-mono text-xs font-bold block mb-1">CAMERA RIG</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Sony FX3 Cinema Line</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  Netflix-approved cinema camera shooting 4K 120fps with full-frame sensor and 15+ stops dynamic range.
                </p>
              </div>
            </TiltCard>

            <TiltCard maxTilt={8}>
              <div className="bg-slate-100 dark:bg-dark-800/80 p-5 rounded-xl border border-slate-200 dark:border-white/5 h-full">
                <span className="text-amber-500 dark:text-amber-400 font-mono text-xs font-bold block mb-1">AERIAL CINE</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">DJI Mavic 3 Pro Cine</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  Triple optical camera drone recording 5.1K Apple ProRes 422 HQ over mountain valleys and rivers.
                </p>
              </div>
            </TiltCard>

            <TiltCard maxTilt={8}>
              <div className="bg-slate-100 dark:bg-dark-800/80 p-5 rounded-xl border border-slate-200 dark:border-white/5 h-full">
                <span className="text-amber-500 dark:text-amber-400 font-mono text-xs font-bold block mb-1">STABILIZATION</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">DJI Ronin RS3 Pro</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  Carbon fiber gimbal with automated axis locks for ultra-smooth running and tracking shots.
                </p>
              </div>
            </TiltCard>

            <TiltCard maxTilt={8}>
              <div className="bg-slate-100 dark:bg-dark-800/80 p-5 rounded-xl border border-slate-200 dark:border-white/5 h-full">
                <span className="text-amber-500 dark:text-amber-400 font-mono text-xs font-bold block mb-1">AUDIO SUITE</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Sennheiser 32-Bit Float</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  Broadcast wireless lavs & shotgun mics ensuring zero audio clipping during vows and speeches.
                </p>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Video Shoot Booking Banner */}
        <div className="text-center bg-gradient-to-r from-amber-500/15 via-white dark:via-dark-800 to-amber-500/15 border border-amber-500/40 rounded-2xl p-8 sm:p-12 space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white">
            Commission a Video Shoot in Uttarakhand
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            From luxury wedding films in Rishikesh to commercial tourism ad campaigns across Uttarakhand — Rohit Upreti handles direction, shooting, and final delivery.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-amber-500/20"
            >
              <Video className="w-4 h-4 fill-black" />
              <span>HIRE ROHIT FOR VIDEO SHOOT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      {/* Video Showreel Modal */}
      <VideoShowreelModal
        film={selectedFilm}
        isOpen={Boolean(selectedFilm)}
        onClose={() => setSelectedFilm(null)}
      />
    </div>
  );
}
