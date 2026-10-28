import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sliders, Sparkles, Info } from 'lucide-react';

const APERTURE_STOPS = [
  { f: 'f/1.2', value: 1.2, irisScale: 1.0, blur: 16, dof: 'Razor Thin (0.5cm)', use: 'Dreamy Creamy Portraits' },
  { f: 'f/1.8', value: 1.8, irisScale: 0.85, blur: 12, dof: 'Shallow (2cm)', use: 'Cinematic Wedding Moments' },
  { f: 'f/2.8', value: 2.8, irisScale: 0.65, blur: 8, dof: 'Medium (6cm)', use: 'Subject Isolation with Context' },
  { f: 'f/5.6', value: 5.6, irisScale: 0.45, blur: 4, dof: 'Deep (30cm)', use: 'Commercial & Group Portraits' },
  { f: 'f/11', value: 11, irisScale: 0.28, blur: 1, dof: 'Very Deep (2m)', use: 'Himalayan Ridge Panoramas' },
  { f: 'f/16', value: 16, irisScale: 0.16, blur: 0, dof: 'Infinite Focus', use: 'Sunstar & Deep Landscape' },
];

export default function Lens3DViewer() {
  const mountRef = useRef(null);
  const [activeStop, setActiveStop] = useState(APERTURE_STOPS[0]);
  const irisBladesRef = useRef([]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 50);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    container.appendChild(renderer.domElement);

    // Lens Barrel Outer Frame
    const barrelGeo = new THREE.CylinderGeometry(1.6, 1.6, 1.8, 32, 1, true);
    barrelGeo.rotateX(Math.PI / 2);
    const barrelMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.4,
      metalness: 0.8,
      side: THREE.DoubleSide
    });
    const barrel = new THREE.Mesh(barrelGeo, barrelMat);
    scene.add(barrel);

    // Golden Front Element Ring
    const goldRingGeo = new THREE.TorusGeometry(1.58, 0.05, 12, 36);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.2
    });
    const goldRing = new THREE.Mesh(goldRingGeo, goldMat);
    goldRing.position.z = 0.9;
    scene.add(goldRing);

    // Front Glass Element (Standard transparent material - GPU light)
    const glassGeo = new THREE.SphereGeometry(1.5, 20, 10, 0, Math.PI * 2, 0, Math.PI / 4);
    glassGeo.rotateX(Math.PI / 2);
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.4,
      roughness: 0.1,
      metalness: 0.7,
    });
    const frontGlass = new THREE.Mesh(glassGeo, glassMat);
    frontGlass.position.z = 0.8;
    scene.add(frontGlass);

    // 9 Iris Aperture Blades
    const bladeGroup = new THREE.Group();
    scene.add(bladeGroup);
    const blades = [];
    const bladeCount = 9;

    const bladeShape = new THREE.Shape();
    bladeShape.moveTo(0, 0);
    bladeShape.lineTo(0.9, 0.45);
    bladeShape.lineTo(0.65, 1.1);
    bladeShape.lineTo(-0.25, 0.8);
    bladeShape.closePath();

    const bladeGeo = new THREE.ShapeGeometry(bladeShape);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.35,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < bladeCount; i++) {
      const angle = (i / bladeCount) * Math.PI * 2;
      const bladeMesh = new THREE.Mesh(bladeGeo, bladeMat);
      bladeMesh.position.set(Math.cos(angle) * 0.9, Math.sin(angle) * 0.9, 0);
      bladeMesh.rotation.z = angle + 0.6;
      bladeGroup.add(bladeMesh);
      blades.push({ mesh: bladeMesh, baseAngle: angle });
    }
    irisBladesRef.current = blades;

    // Interior Gold Glow
    const interiorLight = new THREE.PointLight(0xf59e0b, 2.0, 5);
    interiorLight.position.set(0, 0, -0.8);
    scene.add(interiorLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(3, 4, 5);
    scene.add(dirLight);

    // IntersectionObserver to avoid background CPU/GPU load
    let isVisible = true;
    let animId = null;
    let clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) return;
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Subtle float tilt
      barrel.rotation.z = Math.sin(time * 0.4) * 0.05;
      barrel.rotation.x = Math.cos(time * 0.5) * 0.04;
      goldRing.rotation.z = barrel.rotation.z;

      renderer.render(scene, camera);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              isVisible = true;
              clock.start();
              animate();
            }
          } else {
            isVisible = false;
            if (animId) {
              cancelAnimationFrame(animId);
              animId = null;
            }
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      isVisible = false;
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      barrelGeo.dispose();
      barrelMat.dispose();
      bladeGeo.dispose();
      bladeMat.dispose();
    };
  }, []);

  // Update 3D blades whenever activeStop changes
  const handleApertureChange = (stop) => {
    setActiveStop(stop);
    if (!irisBladesRef.current) return;

    irisBladesRef.current.forEach(({ mesh, baseAngle }) => {
      const scale = stop.irisScale;
      mesh.position.x = Math.cos(baseAngle) * (0.35 + scale * 0.6);
      mesh.position.y = Math.sin(baseAngle) * (0.35 + scale * 0.6);
      mesh.rotation.z = baseAngle + (1 - scale) * 0.8 + 0.6;
      mesh.scale.set(0.7 + scale * 0.3, 0.7 + scale * 0.3, 1);
    });
  };

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-amber-500 dark:text-amber-400 font-mono text-xs uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Interactive 3D Optics Lab</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
            Sony G-Master 3D Aperture Simulator
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-xl">
            Test how Rohit Upreti crafts creamy cinematic bokeh versus razor-sharp Himalayan landscapes by controlling the 9-blade 3D iris mechanism in real time.
          </p>
        </div>

        {/* Selected aperture highlight pill */}
        <div className="bg-amber-500/10 border border-amber-500/30 px-5 py-3 rounded-xl text-center min-w-[140px]">
          <span className="text-2xl sm:text-3xl font-black font-display text-amber-500 dark:text-amber-400">
            {activeStop.f}
          </span>
          <p className="text-[11px] font-mono text-slate-700 dark:text-slate-300 uppercase tracking-wider mt-0.5">
            Iris Opening: {Math.round(activeStop.irisScale * 100)}%
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* 3D Canvas Box */}
        <div className="lg:col-span-6 relative h-[300px] sm:h-[340px] bg-slate-900 dark:bg-black rounded-xl border border-slate-200 dark:border-white/5 overflow-hidden flex items-center justify-center">
          <div ref={mountRef} className="w-full h-full cursor-pointer" />
          
          <div className="absolute top-4 left-4 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-slate-200 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>DOF: {activeStop.dof}</span>
          </div>

          <div className="absolute bottom-4 inset-x-4 flex justify-between items-center text-[11px] font-mono text-slate-400 bg-black/70 px-3 py-2 rounded-lg border border-white/10">
            <span>9-Blade Circular Diaphragm</span>
            <span className="text-amber-400">Interactive 3D WebGL</span>
          </div>
        </div>

        {/* Controls & Bokeh Live Preview */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div>
            <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-3 flex items-center space-x-2 font-bold">
              <Sliders className="w-3.5 h-3.5 text-amber-500" />
              <span>Select Aperture F-Stop</span>
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {APERTURE_STOPS.map((stop) => {
                const isSelected = activeStop.f === stop.f;
                return (
                  <button
                    key={stop.f}
                    onClick={() => handleApertureChange(stop)}
                    className={`py-2.5 px-3 rounded-lg text-sm font-bold font-mono transition-all duration-200 border ${
                      isSelected
                        ? 'bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/25 scale-105'
                        : 'bg-white dark:bg-dark-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-amber-400/50'
                    }`}
                  >
                    {stop.f}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Real-time Bokeh Preview Simulation Box */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 h-32">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=700&auto=format&fit=crop"
              alt="Taj Rishikesh Wedding Bokeh Simulation"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
              style={{ filter: `blur(${activeStop.blur}px)` }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-end p-3">
              <div className="flex items-center justify-between text-white">
                <div>
                  <p className="text-[10px] font-mono text-amber-400 uppercase tracking-wide">
                    Simulated Optical Blur
                  </p>
                  <p className="text-xs font-bold">{activeStop.use}</p>
                </div>
                <div className="bg-black/80 px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 border border-white/10">
                  Blur: {activeStop.blur}px
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-dark-800/80 p-3.5 rounded-xl border border-slate-200 dark:border-white/5 flex items-start space-x-3 text-xs text-slate-600 dark:text-slate-400">
            <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p>
              Rohit Upreti shoots wide-open at <span className="text-amber-600 dark:text-amber-300 font-semibold">f/1.2 & f/1.4</span> with Sony G-Master prime lenses to create creamy dreamlike wedding portraits that isolate the bride and groom from background distractions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
