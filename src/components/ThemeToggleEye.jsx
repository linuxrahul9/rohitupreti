import React, { useState } from 'react';
import { Eye, EyeOff, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggleEye({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={toggleTheme}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Toggle Cinema Dark / Mountain Light Mode"
        className={`relative p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center group ${
          isDark
            ? 'bg-dark-800 text-amber-400 border-amber-500/30 hover:border-amber-400 hover:bg-dark-700 shadow-lg shadow-amber-500/10'
            : 'bg-amber-50 text-amber-600 border-amber-300 hover:border-amber-500 hover:bg-amber-100 shadow-md shadow-amber-500/10'
        } ${className}`}
      >
        {/* Animated Lens Eye Ring */}
        <div className="relative flex items-center justify-center">
          {isDark ? (
            <Eye className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <EyeOff className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          )}

          {/* Glowing pupil dot in center */}
          <span
            className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              isDark
                ? 'bg-amber-400 shadow-[0_0_8px_#f59e0b] scale-100'
                : 'bg-amber-600 shadow-[0_0_6px_#d97706] scale-75'
            }`}
          />
        </div>

        {/* Pulse ring on hover */}
        <span className="absolute inset-0 rounded-xl border border-amber-400/30 scale-90 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
      </button>

      {/* Floating Tooltip */}
      {showTooltip && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap bg-black/90 dark:bg-white text-white dark:text-black font-mono text-[10px] font-bold px-2.5 py-1 rounded shadow-xl pointer-events-none border border-amber-400/30 animate-fadeIn">
          {isDark ? '👁 Switch to Mountain Light' : '🎬 Switch to Cinema Dark'}
        </div>
      )}
    </div>
  );
}
