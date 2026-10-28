import React from 'react';

export default function ViewfinderOverlay({ children, isRecording = true }) {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-white/10">
      {children}

      {/* Cinematic Viewfinder Corners */}
      <div className="pointer-events-none absolute inset-0 p-4 flex flex-col justify-between">
        {/* Top Viewfinder Bar */}
        <div className="flex items-center justify-between text-[11px] font-mono text-amber-400/90 drop-shadow">
          <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
            {isRecording && (
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
            )}
            <span className="font-bold tracking-widest">● REC</span>
            <span className="text-white">00:24:18:04</span>
          </div>

          <div className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-slate-200">
            RAW 16:9 • 4K
          </div>
        </div>

        {/* Viewfinder Center Crosshair */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 border border-dashed border-amber-400/60 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Camera Technical Indicators */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 drop-shadow">
          <div className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded space-x-3">
            <span>F1.4</span>
            <span>1/250s</span>
            <span className="text-amber-400 font-bold">ISO 200</span>
          </div>

          <div className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-emerald-400 font-semibold">
            BATT 98% 🔋
          </div>
        </div>

        {/* Framing Corner Accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-amber-400 pointer-events-none"></div>
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-amber-400 pointer-events-none"></div>
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-amber-400 pointer-events-none"></div>
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-amber-400 pointer-events-none"></div>
      </div>
    </div>
  );
}

