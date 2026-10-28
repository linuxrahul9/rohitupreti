import React, { useRef, useState, useEffect } from 'react';

export default function TiltCard({
  children,
  className = '',
  maxTilt = 7,
  glare = true,
  showFocusLock = false
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafId = useRef(null);
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    // Disable heavy 3D math on touch-only mobile devices to guarantee 120Hz/60Hz smooth scrolling
    const hasHover = window.matchMedia('(hover: hover)').matches;
    setSupportsHover(hasHover);
  }, []);

  const handleMouseMove = (e) => {
    if (!supportsHover) return;

    if (rafId.current) return; // Throttle to display refresh rate
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTransformStyle(
        `perspective(800px) rotateX(${rotateX.toFixed(1)}deg) rotateY(${rotateY.toFixed(1)}deg) scale3d(1.015, 1.015, 1.015)`
      );

      if (glare) {
        setGlarePos({
          x: (x / rect.width) * 100,
          y: (y / rect.height) * 100,
          opacity: 0.15
        });
      }
    });
  };

  const handleMouseEnter = () => {
    if (supportsHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    setIsHovered(false);
    setTransformStyle('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle || undefined,
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
        willChange: isHovered ? 'transform' : 'auto' // ONLY create GPU layer when hovered!
      }}
      className={`relative group preserve-3d ${className}`}
    >
      {children}

      {/* Dynamic Glare Sheen following cursor */}
      {glare && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-200 z-20"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(245, 158, 11, ${glarePos.opacity}), transparent 60%)`
          }}
        />
      )}

      {/* Camera Viewfinder Focus Lock HUD overlay on hover */}
      {showFocusLock && isHovered && (
        <div className="pointer-events-none absolute top-3 right-3 z-30 flex items-center space-x-1.5 bg-black/85 px-2.5 py-1 rounded-md border border-emerald-400/50 text-[10px] font-mono text-emerald-400 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="font-bold tracking-wider">AF-C LOCKED</span>
        </div>
      )}
    </div>
  );
}
