import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title = 'RAW Flat vs Master Graded',
  software = 'DaVinci Resolve Studio & Lightroom Classic',
  category = 'Color Grading & Retouching',
  highlights = ['Skin-tone balance', 'Shadow dynamic range recovery', 'Film halation', 'LUT color harmony']
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const onMouseDown = () => {
    isDragging.current = true;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Header Info */}
      <div className="p-5 sm:p-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-amber-400 font-mono text-xs uppercase tracking-wider font-semibold">
            {category}
          </span>
          <h4 className="text-lg sm:text-xl font-bold font-display text-white mt-0.5">
            {title}
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Post-Produced in: <span className="text-slate-200">{software}</span>
          </p>
        </div>
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-300 bg-dark-800/80 px-3 py-1.5 rounded-lg border border-white/10 self-start sm:self-auto">
          <Sliders className="w-3.5 h-3.5 text-amber-400" />
          <span>Drag or Slide to Compare</span>
        </div>
      </div>

      {/* Interactive Slider Area */}
      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        className="relative w-full h-[360px] sm:h-[460px] select-none cursor-ew-resize overflow-hidden bg-black"
      >
        {/* After Image (Master Grade - Base layer) */}
        <img
          src={afterImage}
          alt="Master Graded Version"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-amber-500/90 text-black font-mono text-xs font-bold px-3 py-1 rounded shadow-lg backdrop-blur pointer-events-none">
          ROHIT MASTER GRADE
        </div>

        {/* Before Image (RAW / Flat - Clipped layer) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={beforeImage}
            alt="Original Flat RAW"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%', height: '100%' }}
          />
          <div className="absolute top-4 left-4 bg-black/80 text-slate-300 border border-white/20 font-mono text-xs font-bold px-3 py-1 rounded shadow-lg backdrop-blur pointer-events-none">
            FLAT RAW UNGRADED
          </div>
        </div>

        {/* Divider Handle Line */}
        <div
          className="absolute inset-y-0 w-0.5 bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Circular Grabber */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold shadow-xl border-2 border-white ring-4 ring-amber-500/30">
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M8.5 7l-5 5 5 5V7zm7 10l5-5-5-5v10z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Editing Highlights Breakdown */}
      <div className="p-4 sm:p-5 bg-dark-900/60 flex flex-wrap items-center gap-2 border-t border-white/5">
        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mr-2 flex items-center">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 mr-1" /> Key Corrections:
        </span>
        {highlights.map((h, i) => (
          <span
            key={i}
            className="text-xs font-mono bg-dark-800 text-slate-300 px-2.5 py-1 rounded-md border border-white/5"
          >
            ✓ {h}
          </span>
        ))}
      </div>
    </div>
  );
}

