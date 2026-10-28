import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Film, Sparkles, MapPin, Award, CheckCircle, ArrowRight, Heart, HardDrive, Cpu } from 'lucide-react';
import { GEAR_ITEMS } from '../data/portfolioData';
import SEOBadge from '../components/SEOBadge';

export default function About() {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center">
            <SEOBadge />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
            The Story Behind <span className="text-gold-gradient">Rohit Upreti</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Photographer. Cinematographer. Colorist. Mountaineer at heart. Based in Dehradun, documenting the sacred light and emotions of Uttarakhand and beyond.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Visual Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop"
                alt="Rohit Upreti on Mountain Shoot"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>

              {/* Founder Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-dark-900/80 backdrop-blur-md border border-white/10">
                <p className="text-lg font-bold font-display text-white">Rohit Upreti</p>
                <p className="text-xs font-mono text-amber-400">Lead Director & Senior Colorist</p>
                <p className="text-[11px] font-mono text-slate-400 mt-1 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Dehradun, Uttarakhand, India</span>
                </p>
              </div>
            </div>
          </div>

          {/* Biography Text */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              ✦ Himalayan Visual Heritage
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-white leading-tight">
              "I believe photography is not just recording a moment — it is preserving an emotion forever."
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Growing up amidst the mist-shrouded valleys of Uttarakhand, I developed an instinctual understanding of mountain light. The way morning sun pierces through pine trees in Nainital, the electric twilight over the sacred Ganges in Rishikesh, and the golden glow illuminating Himalayan peaks like Nanda Devi and Trishul.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Over the last <strong className="text-white">8+ years</strong>, I have photographed over <strong className="text-amber-400">150+ destination weddings</strong>, directed commercial campaigns for luxury resorts, and post-produced films for international travelers.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Unlike many creators who outsource their editing, I personally direct the color grading in <strong className="text-white">DaVinci Resolve Studio</strong>. That guarantees every frame carries our signature warm cinematic soul.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
              <div className="bg-dark-800/80 p-3 rounded-lg border border-white/5">
                <span className="text-amber-400 font-bold block text-base">150+</span>
                <span className="text-slate-400">Weddings Documented</span>
              </div>
              <div className="bg-dark-800/80 p-3 rounded-lg border border-white/5">
                <span className="text-amber-400 font-bold block text-base">500+</span>
                <span className="text-slate-400">Hours of 4K Footage</span>
              </div>
              <div className="bg-dark-800/80 p-3 rounded-lg border border-white/5">
                <span className="text-amber-400 font-bold block text-base">100%</span>
                <span className="text-slate-400">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Gear Arsenal Section */}
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-white/10 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              ✦ The Professional Arsenal
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
              Hardware & Software Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              High-end optical glass, dual native ISO sensors, and color-calibrated post-production monitors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GEAR_ITEMS.map((gear, i) => (
              <div
                key={i}
                className="bg-dark-800/80 p-4 rounded-xl border border-white/5 flex items-start space-x-3"
              >
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">{gear.name}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{gear.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Post Production Workstation */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-dark-800 to-dark-700 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center space-x-3">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>
                <strong className="text-white">Post Suite:</strong> Apple M3 Max • 64GB Unified Memory • Calibrated Pro Display XDR (100% DCI-P3)
              </span>
            </div>
            <span className="text-amber-400 font-bold">DaVinci Resolve Studio Licensed ✓</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold font-display text-white">
            Let’s plan your dream shoot in Uttarakhand
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Get in touch to check Rohit's availability for your wedding, brand film, or video editing project.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-amber-500/20"
            >
              <span>CONNECT WITH ROHIT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

