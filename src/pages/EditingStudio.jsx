import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Sliders, Film, Layers, CheckCircle, ArrowRight, Upload, Clock, HardDrive } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { EDITING_COMPARISONS } from '../data/portfolioData';
import SEOBadge from '../components/SEOBadge';

export default function EditingStudio() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex justify-center">
            <SEOBadge />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
            Photo Retouching & <span className="text-gold-gradient">Video Editing Studio</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            A masterclass in post-production. From flat camera RAWs to magazine-grade color grading in DaVinci Resolve Studio & Adobe Lightroom Classic. We accept projects globally via cloud drive.
          </p>
        </div>

        {/* Tab Selection for Interactive Comparison Sliders */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-dark-800 p-1.5 rounded-2xl border border-white/10 gap-1 overflow-x-auto max-w-full">
            {EDITING_COMPARISONS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Case 0{index + 1}: {item.category}
              </button>
            ))}
          </div>
        </div>

        {/* Active Before / After Slider Showcase */}
        <div className="max-w-4xl mx-auto mb-20">
          <BeforeAfterSlider
            beforeImage={EDITING_COMPARISONS[activeTab].beforeImage}
            afterImage={EDITING_COMPARISONS[activeTab].afterImage}
            title={EDITING_COMPARISONS[activeTab].title}
            software={EDITING_COMPARISONS[activeTab].software}
            category={EDITING_COMPARISONS[activeTab].category}
            highlights={EDITING_COMPARISONS[activeTab].highlights}
          />
        </div>

        {/* DaVinci Resolve 6-Node Colorist Pipeline */}
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-white/10 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              ✦ The DaVinci Resolve Science
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
              Rohit’s 6-Stage Color Grading Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Why our wedding films and brand campaigns look like Netflix cinema instead of amateur video.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-dark-800/70 p-5 rounded-xl border border-white/5 relative">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">NODE 01</span>
              <h4 className="text-base font-bold text-white">Color Space Transform (CST)</h4>
              <p className="text-xs text-slate-400 mt-2">
                Converts camera-native S-Log3 / D-Log into DaVinci Wide Gamut for maximum 32-bit floating-point math fidelity without clipping.
              </p>
            </div>

            <div className="bg-dark-800/70 p-5 rounded-xl border border-white/5 relative">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">NODE 02</span>
              <h4 className="text-base font-bold text-white">Exposure & Primary Balance</h4>
              <p className="text-xs text-slate-400 mt-2">
                Standardizing white balance across shifting Himalayan mountain light, recovering blown highlights and lifted shadows.
              </p>
            </div>

            <div className="bg-dark-800/70 p-5 rounded-xl border border-white/5 relative">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">NODE 03</span>
              <h4 className="text-base font-bold text-white">Skin Tone Isolation (Qualifier)</h4>
              <p className="text-xs text-slate-400 mt-2">
                Preserves warm, glowing Indian bridal skin tones along the precise vectorscope line while grading surroundings independently.
              </p>
            </div>

            <div className="bg-dark-800/70 p-5 rounded-xl border border-white/5 relative">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">NODE 04</span>
              <h4 className="text-base font-bold text-white">Subtle Film Print Emulation</h4>
              <p className="text-xs text-slate-400 mt-2">
                Applies organic 35mm Kodak 2383 color contrast curves to eliminate harsh digital video sharpness and yield velvety blacks.
              </p>
            </div>

            <div className="bg-dark-800/70 p-5 rounded-xl border border-white/5 relative">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">NODE 05</span>
              <h4 className="text-base font-bold text-white">Halation & 35mm Grain</h4>
              <p className="text-xs text-slate-400 mt-2">
                Simulates real photochemical red flare around lamp lights and candlelight highlights for that authentic analog cinema glow.
              </p>
            </div>

            <div className="bg-dark-800/70 p-5 rounded-xl border border-white/5 relative">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">NODE 06</span>
              <h4 className="text-base font-bold text-white">Delivery Mastering (-14 LUFS)</h4>
              <p className="text-xs text-slate-400 mt-2">
                Final master renders for YouTube 4K, Instagram 9:16 vertical, and cinematic DCP projection with standardized loudness.
              </p>
            </div>
          </div>
        </div>

        {/* Remote Editing Studio Workflow */}
        <div className="glass-card rounded-2xl p-8 sm:p-10 border border-amber-500/20 mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
                ✦ Pan-India & Global Remote Editing
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                Already shot your footage? Hire Rohit to edit it!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Photographers, wedding filmmakers, and brand agencies from Delhi, Mumbai, Bangalore, and overseas send us RAW footage and Lightroom catalogs. We deliver pristine color grades, reels, and master cuts within 3-5 days.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <Upload className="w-4 h-4 text-amber-400" />
                  <span>Google Drive / Dropbox / Frame.io</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>48-72 Hr Express Delivery Available</span>
                </span>
              </div>
            </div>

            <div className="w-full lg:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs px-8 py-4 rounded-xl shadow-xl shadow-amber-500/25 transition-all"
              >
                <Sliders className="w-4 h-4 fill-black" />
                <span>HIRE FOR PHOTO / VIDEO EDITING</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

