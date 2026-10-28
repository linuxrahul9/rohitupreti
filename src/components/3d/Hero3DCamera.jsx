import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCamera() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    // Optimized WebGLRenderer with capped pixel ratio (1.5 max) for high FPS
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    currentMount.appendChild(renderer.domElement);

    // Group for the entire 3D camera
    const cameraRig = new THREE.Group();
    scene.add(cameraRig);

    // Camera Body (Standard material - ultra fast GPU rendering)
    const bodyGeo = new THREE.BoxGeometry(2.4, 1.6, 1.1);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x111622,
      roughness: 0.4,
      metalness: 0.8,
    });
    const cameraBody = new THREE.Mesh(bodyGeo, bodyMat);
    cameraRig.add(cameraBody);

    // Grip on right side
    const gripGeo = new THREE.BoxGeometry(0.5, 1.5, 1.3);
    const gripMat = new THREE.MeshStandardMaterial({
      color: 0x0a0d14,
      roughness: 0.7,
      metalness: 0.3,
    });
    const grip = new THREE.Mesh(gripGeo, gripMat);
    grip.position.set(1.15, -0.05, 0.1);
    cameraRig.add(grip);

    // Red recording tally lamp
    const tallyGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const tallyMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });
    const tally = new THREE.Mesh(tallyGeo, tallyMat);
    tally.position.set(0.9, 0.6, 0.56);
    cameraRig.add(tally);

    // Viewfinder hump
    const prismGeo = new THREE.CylinderGeometry(0.65, 0.8, 0.5, 4);
    const prismMat = new THREE.MeshStandardMaterial({
      color: 0x181e2b,
      roughness: 0.3,
      metalness: 0.85,
    });
    const prism = new THREE.Mesh(prismGeo, prismMat);
    prism.rotation.y = Math.PI / 4;
    prism.position.set(0, 0.95, 0);
    cameraRig.add(prism);

    // Hot shoe mount
    const hotshoeGeo = new THREE.BoxGeometry(0.4, 0.08, 0.4);
    const hotshoeMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.2,
      metalness: 0.9,
    });
    const hotshoe = new THREE.Mesh(hotshoeGeo, hotshoeMat);
    hotshoe.position.set(0, 1.24, 0);
    cameraRig.add(hotshoe);

    // Shutter button (Golden metallic accent)
    const shutterGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.14, 16);
    const goldAccentMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.25,
      metalness: 0.9,
    });
    const shutter = new THREE.Mesh(shutterGeo, goldAccentMat);
    shutter.position.set(1.1, 0.82, 0.4);
    cameraRig.add(shutter);

    // Mode dial
    const dialGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.15, 16);
    const dial = new THREE.Mesh(dialGeo, hotshoeMat);
    dial.position.set(-0.7, 0.86, 0);
    cameraRig.add(dial);

    // Lens Barrel assembly
    const lensGroup = new THREE.Group();
    lensGroup.position.set(0, 0, 0.55);

    // Mount Ring
    const mountRingGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.12, 24);
    mountRingGeo.rotateX(Math.PI / 2);
    const mountRing = new THREE.Mesh(mountRingGeo, goldAccentMat);
    mountRing.position.set(0, 0, 0.06);
    lensGroup.add(mountRing);

    // Main barrel
    const barrelGeo = new THREE.CylinderGeometry(0.85, 0.88, 1.2, 24);
    barrelGeo.rotateX(Math.PI / 2);
    const barrelMat = new THREE.MeshStandardMaterial({
      color: 0x141824,
      roughness: 0.35,
      metalness: 0.75,
    });
    const barrel = new THREE.Mesh(barrelGeo, barrelMat);
    barrel.position.set(0, 0, 0.65);
    lensGroup.add(barrel);

    // Focus Ribbed Rings (optimized count to 3)
    const ribGeo = new THREE.TorusGeometry(0.86, 0.04, 8, 24);
    const ribMat = new THREE.MeshStandardMaterial({ color: 0x222a3a, roughness: 0.8 });
    for (let i = 0; i < 3; i++) {
      const rib = new THREE.Mesh(ribGeo, ribMat);
      rib.position.set(0, 0, 0.45 + i * 0.22);
      lensGroup.add(rib);
    }

    // Front Glass Element (Optimized Standard material instead of heavy Physical material)
    const glassGeo = new THREE.SphereGeometry(0.72, 20, 10, 0, Math.PI * 2, 0, Math.PI / 3);
    glassGeo.rotateX(Math.PI / 2);
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.2,
      roughness: 0.1,
      metalness: 0.7,
      transparent: true,
      opacity: 0.65,
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.position.set(0, 0, 1.15);
    lensGroup.add(glass);

    // Inner aperture ring
    const apertureRingGeo = new THREE.RingGeometry(0.25, 0.35, 20);
    const apertureRingMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const innerRing = new THREE.Mesh(apertureRingGeo, apertureRingMat);
    innerRing.position.set(0, 0, 1.0);
    lensGroup.add(innerRing);

    cameraRig.add(lensGroup);

    // Optimized Bokeh Particles (reduced count to 45)
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 7;
      positions[i + 2] = (Math.random() - 0.5) * 6 - 1;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xfbbf24,
      size: 0.15,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lights (Balanced and efficient)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xf59e0b, 2.5);
    goldKeyLight.position.set(4, 4, 3);
    scene.add(goldKeyLight);

    const cyanRimLight = new THREE.DirectionalLight(0x06b6d4, 2.0);
    cyanRimLight.position.set(-5, -2, -2);
    scene.add(cyanRimLight);

    // Interactive Mouse Tracking with Damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / rect.width) * 2 - 1;
      mouse.targetY = -(clientY / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // INTERSECTION OBSERVER: Pause rendering when scrolled out of view!
    let isVisible = true;
    let animationFrameId = null;
    let clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) return;

      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Camera Rig Rotation & Float
      cameraRig.rotation.y = mouse.x * 0.5 + Math.sin(elapsedTime * 0.5) * 0.06;
      cameraRig.rotation.x = -mouse.y * 0.35 + Math.cos(elapsedTime * 0.7) * 0.04;
      cameraRig.position.y = Math.sin(elapsedTime * 1.2) * 0.1;

      // Rotate particles subtly
      particles.rotation.y = elapsedTime * 0.03;

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
            if (animationFrameId) {
              cancelAnimationFrame(animationFrameId);
              animationFrameId = null;
            }
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(currentMount);
    animate();

    return () => {
      isVisible = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      bodyGeo.dispose();
      bodyMat.dispose();
      barrelGeo.dispose();
      barrelMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[580px] flex items-center justify-center">
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating HUD Badges surrounding the 3D Camera */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
        {/* Top Badges */}
        <div className="flex justify-between items-center text-xs font-mono text-amber-500 dark:text-amber-400/90">
          <div className="flex items-center space-x-2 bg-white/90 dark:bg-black/60 px-3 py-1.5 rounded-full border border-slate-200 dark:border-amber-500/20 shadow-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span className="font-bold">4K CINEMA • 120FPS</span>
          </div>
          <div className="bg-white/90 dark:bg-black/60 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-md">
            <span>S-LOG3 • 10-BIT</span>
          </div>
        </div>

        {/* Bottom Specs HUD */}
        <div className="flex flex-wrap justify-between items-end gap-3 text-xs font-mono">
          <div className="bg-white/95 dark:bg-black/70 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-md">
            <p className="text-amber-500 dark:text-amber-400 font-semibold text-[10px] uppercase tracking-wider">Aperture</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white">f/1.2 G-Master</p>
          </div>
          <div className="bg-white/95 dark:bg-black/70 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-md">
            <p className="text-amber-500 dark:text-amber-400 font-semibold text-[10px] uppercase tracking-wider">Sensor Range</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white">15+ Stops RAW</p>
          </div>
          <div className="bg-white/95 dark:bg-black/70 px-4 py-2 rounded-xl border border-amber-500/30 text-amber-600 dark:text-amber-300 shadow-md">
            <p className="text-[10px] uppercase tracking-wider text-amber-500 dark:text-amber-400">Interaction</p>
            <p className="text-xs font-medium">3D Cursor Parallax ↺</p>
          </div>
        </div>
      </div>
    </div>
  );
}
