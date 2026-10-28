import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, Film, Sparkles, Wind, Check, ArrowRight, HelpCircle, 
  Calculator, ChevronDown, ChevronUp, MapPin 
} from 'lucide-react';
import { SERVICES_LIST, FAQ_SEO_DATA, UTTARAKHAND_LOCATIONS } from '../data/servicesData';
import SEOBadge from '../components/SEOBadge';

export default function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  // Dynamic Quote Estimator State
  const [calcService, setCalcService] = useState('wedding');
  const [calcDays, setCalcDays] = useState(2);
  const [includeDrone, setIncludeDrone] = useState(true);
  const [includeFullEditing, setIncludeFullEditing] = useState(true);

  // Calculate dynamic quote estimate
  const calculateTotal = () => {
    let base = 35000;
    if (calcService === 'wedding') base = 65000;
    if (calcService === 'commercial') base = 45000;
    if (calcService === 'prewedding') base = 30000;
    if (calcService === 'editingOnly') base = 15000;

    let total = base * calcDays;
    if (includeDrone && calcService !== 'editingOnly') total += 15000 * Math.min(calcDays, 2);
    if (includeFullEditing) total += 8000;

    return total.toLocaleString('en-IN');
  };

  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center">
            <SEOBadge />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
            Services & Transparent <span className="text-gold-gradient">Packages</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Tailored visual storytelling packages for destination weddings, commercial brands, and post-production editing across Uttarakhand and pan-India.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES_LIST.map((svc) => (
            <div
              key={svc.id}
              className="glass-card rounded-2xl p-7 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full font-bold">
                    {svc.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Est: {svc.turnaround}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-2">
                  {svc.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {svc.shortDesc}
                </p>

                {/* Price Display */}
                <div className="bg-dark-800/80 p-4 rounded-xl border border-white/5 mb-6">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    Starting Investment
                  </span>
                  <div className="flex items-baseline space-x-1.5 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-black font-display text-amber-400">
                      {svc.priceStarting}
                    </span>
                    <span className="text-xs font-mono text-slate-400">+ taxes</span>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    What's Included:
                  </p>
                  {svc.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Card CTA */}
              <div className="pt-4 border-t border-white/5">
                <Link
                  to={`/contact?service=${svc.id}`}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-dark-800 hover:bg-amber-500 hover:text-black text-slate-200 border border-white/10 hover:border-amber-400 font-mono text-xs font-bold py-3 rounded-xl transition-all"
                >
                  <span>Select & Book Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ================= INTERACTIVE QUOTE ESTIMATOR ================= */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-amber-500/20 mb-20 max-w-4xl mx-auto shadow-2xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                Interactive Shoot Cost Estimator
              </h2>
              <p className="text-xs text-slate-400">
                Customize your requirements to get an immediate ballpark estimate for your project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Service Type */}
            <div>
              <label className="text-xs font-mono text-slate-300 uppercase block mb-2 font-bold">
                1. Select Shoot Type
              </label>
              <select
                value={calcService}
                onChange={(e) => setCalcService(e.target.value)}
                className="w-full bg-dark-800 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
              >
                <option value="wedding">Destination Wedding (Photo + Cinema)</option>
                <option value="prewedding">Pre-Wedding Film & Shoot</option>
                <option value="commercial">Commercial / Resort Ad Shoot</option>
                <option value="editingOnly">Studio Photo & Video Editing Only</option>
              </select>
            </div>

            {/* Days Count */}
            <div>
              <label className="text-xs font-mono text-slate-300 uppercase block mb-2 font-bold">
                2. Number of Days / Sessions: ({calcDays} Day{calcDays > 1 ? 's' : ''})
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={calcDays}
                onChange={(e) => setCalcDays(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-dark-800 rounded-lg mt-3"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
                <span>1 Day</span>
                <span>2 Days</span>
                <span>3 Days</span>
                <span>4 Days</span>
                <span>5+ Days</span>
              </div>
            </div>

            {/* Add-on: Drone */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-dark-800/80 border border-white/5">
              <div>
                <p className="text-sm font-bold text-white">DJI Mavic 3 5.1K Drone</p>
                <p className="text-xs text-slate-400">Aerial Himalayan venue coverage</p>
              </div>
              <input
                type="checkbox"
                checked={includeDrone}
                onChange={(e) => setIncludeDrone(e.target.checked)}
                className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
              />
            </div>

            {/* Add-on: Full Editing */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-dark-800/80 border border-white/5">
              <div>
                <p className="text-sm font-bold text-white">DaVinci Colorist Grade</p>
                <p className="text-xs text-slate-400">Full 10-bit cinema look & sound design</p>
              </div>
              <input
                type="checkbox"
                checked={includeFullEditing}
                onChange={(e) => setIncludeFullEditing(e.target.checked)}
                className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Result Calculation Pill */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-dark-800 via-dark-700 to-dark-800 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-amber-400 font-bold block">
                Estimated Project Total
              </span>
              <p className="text-3xl font-black font-display text-white">
                ₹{calculateTotal()}
              </p>
              <p className="text-[11px] font-mono text-slate-400">
                *Approximate estimate. Exact quote confirmed upon schedule check.
              </p>
            </div>

            <Link
              to={`/contact?service=${calcService}&days=${calcDays}&estimate=${calculateTotal()}`}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20"
            >
              <span>Lock This Estimate in Hire Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ================= SEO FAQ ACCORDION ================= */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-10 space-y-2">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              ✦ Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Everything you need to know about booking Rohit Upreti across Uttarakhand and India.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_SEO_DATA.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-dark-800/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                  >
                    <span className="text-sm sm:text-base font-bold text-white font-display">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

