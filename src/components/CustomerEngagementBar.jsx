import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageSquare, Sparkles, X, Calendar, Phone, Award } from 'lucide-react';

export default function CustomerEngagementBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <>
      {/* Floating Bottom Engagement Pill */}
      <div className="fixed bottom-5 right-5 z-40 max-w-sm animate-bounce-subtle">
        <div className="glass-panel dark:bg-dark-900/95 bg-white/95 p-3 sm:p-3.5 rounded-2xl border border-amber-500/40 shadow-2xl flex items-center space-x-3">
          {/* Live Radar Pulse */}
          <div className="relative flex items-center justify-center shrink-0">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative"></span>
          </div>

          <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
            <div className="flex items-center space-x-1.5 text-[11px] font-mono text-amber-500 dark:text-amber-400 font-bold uppercase tracking-wider">
              <MapPin className="w-3 h-3" />
              <span>Live in Uttarakhand</span>
            </div>
            <p className="text-xs font-semibold text-slate-800 dark:text-white line-clamp-1">
              Shooting in Rishikesh & Dehradun
            </p>
          </div>

          <div className="flex items-center space-x-1.5 pl-2 border-l border-slate-200 dark:border-white/10">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-amber-500 hover:bg-amber-400 text-black text-[11px] font-mono font-bold px-3 py-1.5 rounded-lg shadow-md transition-all whitespace-nowrap"
            >
              Book Date
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Consultation Modal Popover */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          <div className="relative w-full max-w-md bg-white dark:bg-dark-900 border border-amber-500/40 rounded-2xl p-6 shadow-2xl z-10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-amber-500 dark:text-amber-400 uppercase">
                  Immediate Shoot Consultation
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                Planning a Wedding or Shoot in Uttarakhand?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Rohit Upreti is currently reserving shoot schedules for Rishikesh, Mussoorie, Dehradun, and Nainital. Only <span className="text-amber-500 font-bold">2 prime weekend dates</span> remain open for the upcoming season!
              </p>
            </div>

            <div className="bg-amber-500/10 dark:bg-dark-800 p-3.5 rounded-xl border border-amber-500/20 text-xs font-mono space-y-1 text-slate-700 dark:text-slate-300">
              <p className="text-amber-600 dark:text-amber-400 font-bold">⚡ Fast-Track WhatsApp Connect:</p>
              <p>Direct chat with Rohit to lock in dates, check resort logistics, and get instant package pricing.</p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href="https://wa.me/919876543210?text=Hi%20Rohit!%20I%20saw%20your%20live%20status%20and%20want%20to%20check%20shoot%20dates%20in%20Uttarakhand."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-1.5 bg-emerald-500 hover:bg-emerald-400 text-black py-3 rounded-xl font-mono text-xs font-bold transition-all shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>WhatsApp Rohit</span>
              </a>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-1.5 bg-amber-500 hover:bg-amber-400 text-black py-3 rounded-xl font-mono text-xs font-bold transition-all shadow-lg shadow-amber-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Fill Hire Form</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
