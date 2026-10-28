import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, Film, Sparkles, ArrowRight, Play, Star, MapPin, 
  CheckCircle, Sliders, ShieldCheck, Heart, Award, Eye, Calendar
} from 'lucide-react';

import Hero3DCamera from '../components/3d/Hero3DCamera';
import Lens3DViewer from '../components/3d/Lens3DViewer';
import ParticleField from '../components/3d/ParticleField';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import VideoShowreelModal from '../components/VideoShowreelModal';
import SEOBadge from '../components/SEOBadge';
import ViewfinderOverlay from '../components/ViewfinderOverlay';
import { PHOTOS, FILMS_DATA, EDITING_COMPARISONS, CLIENT_REVIEWS, GEAR_ITEMS } from '../data/portfolioData';

export default function Home() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [activePhotoCategory, setActivePhotoCategory] = useState('All');

  const featuredPhotos = PHOTOS.slice(0, 6);
  const featuredFilm = FILMS_DATA[0];

  return (
    <div className="relative min-h-screen bg-dark-900 text-slate-100 overflow-hidden">
      {/* 3D Ambient Dust Particles in background */}
      <ParticleField count={60} color={0xf59e0b} />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headline, Bio & Primary CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Local SEO Verified Badge */}
              <div className="flex justify-center lg:justify-start">
                <SEOBadge />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.1]">
                Capturing Souls in <br className="hidden sm:inline" />
                <span className="text-gold-gradient">
                  4K Cinema & RAW
                </span>
                <br />
                Across Uttarakhand.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
                I am <span className="text-white font-bold underline decoration-amber-500 underline-offset-4">Rohit Upreti</span> — Uttarakhand’s premier destination wedding photographer, cinematic videographer, and high-end photo/video editor. Transforming Himalayan light into timeless cinematic heirlooms.
              </p>

              {/* Specialization Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1 font-mono text-xs">
                <span className="bg-dark-800/90 text-amber-300 border border-amber-500/30 px-3 py-1.5 rounded-lg flex items-center space-x-1.5">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Destination Weddings</span>
                </span>
                <span className="bg-dark-800/90 text-slate-300 border border-white/10 px-3 py-1.5 rounded-lg flex items-center space-x-1.5">
                  <Film className="w-3.5 h-3.5 text-red-400" />
                  <span>4K Video Shooting</span>
                </span>
                <span className="bg-dark-800/90 text-slate-300 border border-white/10 px-3 py-1.5 rounded-lg flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DaVinci Colorist</span>
                </span>
                <span className="bg-dark-800/90 text-slate-300 border border-white/10 px-3 py-1.5 rounded-lg flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Dehradun • Rishikesh</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold font-mono text-sm px-8 py-4 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <Sparkles className="w-4 h-4 fill-black" />
                  <span>HIRE ROHIT FOR SHOOT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => setSelectedFilm(featuredFilm)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-dark-800/80 hover:bg-dark-700 text-slate-200 border border-white/15 font-mono text-sm px-6 py-4 rounded-xl hover:border-amber-400/50 transition-all group"
                >
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>Watch 2026 Showreel</span>
                </button>
              </div>

              {/* Key Trust Stats Counter */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-left">
                <div>
                  <p className="text-2xl sm:text-3xl font-black font-display text-white">150+</p>
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Weddings & Films</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black font-display text-amber-400">8+ Yrs</p>
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Himalayan Mastery</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black font-display text-emerald-400">5.0 ★</p>
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Google Top Rated</p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive 3D Camera Canvas */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-amber-500/20 via-transparent to-white/5 border border-white/10 shadow-2xl">
                <Hero3DCamera />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3D OPTICS LAB DEMO ================= */}
      <section className="py-16 sm:py-20 relative bg-dark-900/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Lens3DViewer />
        </div>
      </section>

      {/* ================= SKILLS MATRIX (PHOTO / VIDEO / EDIT) ================= */}
      <section className="py-20 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              ✦ The Full Production Powerhouse
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              Photographer. Filmmaker. Senior Editor.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Most clients struggle juggling multiple agencies. Rohit Upreti handles the entire pipeline — from on-location shooting in Uttarakhand’s tough mountain terrains to high-end DaVinci color grading and album finishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Photography */}
            <div className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  Photography
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Candid wedding emotion, editorial bridal portraits, high-altitude Himalayan landscapes, and commercial architecture.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <Link to="/portfolio" className="text-xs font-mono text-amber-400 hover:text-amber-300 font-bold inline-flex items-center space-x-1">
                  <span>View Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Video Shooting */}
            <div className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-5">
                  <Film className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  Video Shooting & Direction
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Shot on Sony FX3 Cinema Line in 4K 120fps with 10-bit S-Log3, Ronin RS3 Pro stabilization, and wireless cinema audio.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <Link to="/films" className="text-xs font-mono text-red-400 hover:text-red-300 font-bold inline-flex items-center space-x-1">
                  <span>Watch Cinema Films</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Photo Editing */}
            <div className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  Photo Retouching & Color
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Frequency separation, high-end skin texture retention, sky replacement, dodging/burning, and custom film emulation.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <Link to="/editing" className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center space-x-1">
                  <span>Test Before/After Slider</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 4: Video Editing */}
            <div className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  Video Editing & Colorist
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  DaVinci Resolve Studio color grading, film grain, LUT craft, dynamic sound design, speed ramping, and social media master cuts.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <Link to="/editing" className="text-xs font-mono text-purple-400 hover:text-purple-300 font-bold inline-flex items-center space-x-1">
                  <span>Explore Editing Suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED FILMS SHOWCASE ================= */}
      <section className="py-20 relative bg-dark-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                ✦ Cinema Reel
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white mt-1">
                Featured 4K Video Productions
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Shot on location across Uttarakhand with Sony FX3 & DJI Mavic 3 Pro Cine.
              </p>
            </div>
            <Link
              to="/films"
              className="inline-flex items-center space-x-2 text-xs font-mono text-amber-400 hover:text-amber-300 font-bold group"
            >
              <span>View All 15+ Films</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FILMS_DATA.slice(0, 2).map((film) => (
              <div
                key={film.id}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-dark-800 transition-all hover:border-amber-400/40"
              >
                {/* Viewfinder Wrapped Film Card */}
                <ViewfinderOverlay>
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={film.thumbnail}
                      alt={film.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent"></div>

                    {/* Play Button Overlay */}
                    <button
                      onClick={() => setSelectedFilm(film)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                      aria-label={`Play ${film.title}`}
                    >
                      <div className="w-16 h-16 rounded-full bg-amber-500/90 text-black flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-amber-400 transition-all">
                        <Play className="w-7 h-7 fill-black ml-1" />
                      </div>
                    </button>

                    {/* Tag badge */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-3 py-1 rounded text-[11px] font-mono text-amber-400 border border-amber-500/30">
                      {film.category}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <p className="text-xs font-mono text-slate-300 flex items-center space-x-1 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        <span>{film.location}</span>
                        <span>•</span>
                        <span>{film.duration}</span>
                      </p>
                      <h3 className="text-xl font-bold font-display text-white">
                        {film.title}
                      </h3>
                    </div>
                  </div>
                </ViewfinderOverlay>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BEFORE / AFTER EDITING SECTION ================= */}
      <section className="py-20 relative bg-dark-900/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              ✦ Precision Color Science
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              Raw S-Log3 vs Rohit's Master Color Grade
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Slide back and forth below to inspect the transformation from a flat camera RAW file into rich, organic skin tones and warm golden Himalayan lighting.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage={EDITING_COMPARISONS[0].beforeImage}
              afterImage={EDITING_COMPARISONS[0].afterImage}
              title={EDITING_COMPARISONS[0].title}
              software={EDITING_COMPARISONS[0].software}
              category={EDITING_COMPARISONS[0].category}
              highlights={EDITING_COMPARISONS[0].highlights}
            />
          </div>

          <div className="text-center mt-8">
            <Link
              to="/editing"
              className="inline-flex items-center space-x-2 text-xs font-mono text-amber-400 hover:text-amber-300 font-bold"
            >
              <span>Explore More Editing Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PHOTOGRAPHY GALLERY ================= */}
      <section className="py-20 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                ✦ High-Resolution Still Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white mt-1">
                Curated Himalayan Moments
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Sony A7IV 33-Megapixel RAW photography with G-Master optics.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 text-xs font-mono text-amber-400 hover:text-amber-300 font-bold group"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-dark-800 glass-card-hover"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                  {/* Camera settings HUD */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-amber-300 bg-black/60 backdrop-blur px-2.5 py-1 rounded border border-white/10">
                    <span>{photo.camera}</span>
                    <span>{photo.settings}</span>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block mb-0.5">
                      {photo.category}
                    </span>
                    <h3 className="text-lg font-bold font-display text-white">
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
        </div>
      </section>

      {/* ================= UTTARAKHAND LOCAL AUTHORITY SECTION ================= */}
      <section className="py-20 relative bg-dark-900/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Devbhoomi Uttarakhand Specialist</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
                Why Hiring a Local Uttarakhand Creator Changes Everything
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                The Himalayas are unpredictable. Golden hours in Mussoorie and Nainital shift within minutes due to mountain mist; river acoustics at Rishikesh require specialist wind-shielded microphones; high-altitude wedding shoots at Chopta and Auli demand cold-resistant batteries and DGCA-compliant mountain drone piloting.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Zero Travel Surcharge in Dehradun & Rishikesh:</strong> We are based right here with immediate venue familiarity.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Mountain Weather & Lighting Mastery:</strong> We know exactly when the sun breaks over Trishul, Nanda Devi, and the Doon Valley.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Cultural Heritage Sensitivity:</strong> Expert in Kumaoni, Garhwali, Punjabi, and destination royal wedding rituals.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black font-bold font-mono text-xs px-6 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20"
                >
                  <span>Book Uttarakhand Shoot</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Uttarakhand Interactive Destination Hub Card */}
            <div className="lg:col-span-6">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-amber-500/20 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="text-lg font-bold font-display text-white">
                    Primary Shoot Hubs in Uttarakhand
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded">
                    Active On-Location
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark-800/80 p-3.5 rounded-xl border border-white/5">
                    <span className="text-xs font-bold text-amber-400 font-mono">01. Dehradun</span>
                    <p className="text-xs text-slate-300 mt-1">Headquarters Studio, Commercial Shoots & Banquets</p>
                  </div>
                  <div className="bg-dark-800/80 p-3.5 rounded-xl border border-white/5">
                    <span className="text-xs font-bold text-amber-400 font-mono">02. Rishikesh</span>
                    <p className="text-xs text-slate-300 mt-1">Ganga Ghats, Taj & Luxury Riverside Weddings</p>
                  </div>
                  <div className="bg-dark-800/80 p-3.5 rounded-xl border border-white/5">
                    <span className="text-xs font-bold text-amber-400 font-mono">03. Mussoorie</span>
                    <p className="text-xs text-slate-300 mt-1">JW Marriott, Savoy, George Everest Pre-Weddings</p>
                  </div>
                  <div className="bg-dark-800/80 p-3.5 rounded-xl border border-white/5">
                    <span className="text-xs font-bold text-amber-400 font-mono">04. Nainital</span>
                    <p className="text-xs text-slate-300 mt-1">Naini Lake, Heritage Villas, Kumaon Hills</p>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-300">Traveling across India for Destination Shoots?</span>
                  <span className="text-white font-bold">Yes, Nationwide ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENT REVIEWS ================= */}
      <section className="py-20 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              ✦ Verified Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              Loved by Brides, Brands & Travelers
            </h2>
            <div className="flex items-center justify-center space-x-1 text-amber-400 pt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <span className="text-xs font-mono text-slate-300 ml-2 font-bold">5.0 / 5.0 (80+ Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-white/10"
              >
                <div>
                  <div className="flex items-center space-x-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="pt-5 border-t border-white/5 mt-5">
                  <p className="text-sm font-bold font-display text-white">{rev.client}</p>
                  <p className="text-[11px] font-mono text-amber-400">{rev.event}</p>
                  <p className="text-[10px] font-mono text-slate-500 mt-0.5">{rev.location} • {rev.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION BANNER ================= */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-dark-900 via-dark-800 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold inline-block bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
            ✦ Limited Booking Dates For 2026 Season
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Ready to Create Something <br />
            <span className="text-gold-gradient">Unforgettable With Rohit?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Whether it’s a royal destination wedding in Rishikesh, a brand commercial in Dehradun, or high-end video color grading — let’s bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold font-mono text-sm px-8 py-4 rounded-xl shadow-xl shadow-amber-500/30 transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4 fill-black" />
              <span>FILL HIRE ME FORM</span>
            </Link>

            <a
              href="https://wa.me/919876543210?text=Hi%20Rohit,%20I%20am%20interested%20in%20hiring%20you!"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-400 font-bold font-mono text-sm px-6 py-4 rounded-xl transition-all"
            >
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal Trigger */}
      <VideoShowreelModal
        film={selectedFilm}
        isOpen={Boolean(selectedFilm)}
        onClose={() => setSelectedFilm(null)}
      />
    </div>
  );
}

