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
      1000
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    currentMount.appendChild(renderer.domElement);

    // Group for the entire 3D camera
    const cameraRig = new THREE.Group();
    scene.add(cameraRig);

    // Camera Body (Matte Black with Chamfered Feel)
    const bodyGeo = new THREE.BoxGeometry(2.4, 1.6, 1.1, 4, 4, 4);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x111622,
      roughness: 0.35,
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
    const tallyGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const tallyMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });
    const tally = new THREE.Mesh(tallyGeo, tallyMat);
    tally.position.set(0.9, 0.6, 0.56);
    cameraRig.add(tally);

    // Viewfinder hump / Pentaprism
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
    const shutterGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.14, 24);
    const goldAccentMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.2,
      metalness: 0.95,
      emissive: 0xd97706,
      emissiveIntensity: 0.2,
    });
    const shutter = new THREE.Mesh(shutterGeo, goldAccentMat);
    shutter.position.set(1.1, 0.82, 0.4);
    cameraRig.add(shutter);

    // Mode dial
    const dialGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.15, 24);
    const dial = new THREE.Mesh(dialGeo, hotshoeMat);
    dial.position.set(-0.7, 0.86, 0);
    cameraRig.add(dial);

    // Lens Barrel assembly (cylinders)
    const lensGroup = new THREE.Group();
    lensGroup.position.set(0, 0, 0.55);

    // Outer Mount Ring (Gold Anodized Ring)
    const mountRingGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.12, 48);
    mountRingGeo.rotateX(Math.PI / 2);
    const mountRing = new THREE.Mesh(mountRingGeo, goldAccentMat);
    mountRing.position.set(0, 0, 0.06);
    lensGroup.add(mountRing);

    // Main barrel
    const barrelGeo = new THREE.CylinderGeometry(0.85, 0.88, 1.2, 48);
    barrelGeo.rotateX(Math.PI / 2);
    const barrelMat = new THREE.MeshStandardMaterial({
      color: 0x141824,
      roughness: 0.35,
      metalness: 0.75,
    });
    const barrel = new THREE.Mesh(barrelGeo, barrelMat);
    barrel.position.set(0, 0, 0.65);
    lensGroup.add(barrel);

    // Focus Ribbed Ring
    const ribGeo = new THREE.TorusGeometry(0.86, 0.04, 16, 64);
    const ribMat = new THREE.MeshStandardMaterial({
      color: 0x222a3a,
      roughness: 0.8,
    });
    for (let i = 0; i < 4; i++) {
      const rib = new THREE.Mesh(ribGeo, ribMat);
      rib.position.set(0, 0, 0.4 + i * 0.18);
      lensGroup.add(rib);
    }

    // Front Glass Element (Iridescent / Anti-reflective Coating)
    const glassGeo = new THREE.SphereGeometry(0.72, 32, 16, 0, Math.PI * 2, 0, Math.PI / 3);
    glassGeo.rotateX(Math.PI / 2);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x10b981,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.25,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.6,
      ior: 1.52,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.position.set(0, 0, 1.15);
    lensGroup.add(glass);

    // Inner aperture ring glow
    const apertureRingGeo = new THREE.RingGeometry(0.25, 0.35, 32);
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

    // Orbiting Floating 3D Golden Bokeh Particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 8 - 1;
      scales[i / 3] = Math.random() * 0.8 + 0.3;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xfbbf24,
      size: 0.12,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 3D Viewfinder Guide Lines (Holographic HUD)
    const hudGroup = new THREE.Group();
    const hudMat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.35,
    });

    const createCrosshair = (x, y, z, size) => {
      const points = [];
      points.push(new THREE.Vector3(x - size, y, z));
      points.push(new THREE.Vector3(x + size, y, z));
      points.push(new THREE.Vector3(x, y - size, z));
      points.push(new THREE.Vector3(x, y + size, z));
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      return new THREE.LineSegments(geom, hudMat);
    };

    const cross1 = createCrosshair(-1.5, 1.0, 1.5, 0.2);
    const cross2 = createCrosshair(1.5, 1.0, 1.5, 0.2);
    const cross3 = createCrosshair(-1.5, -1.0, 1.5, 0.2);
    const cross4 = createCrosshair(1.5, -1.0, 1.5, 0.2);
    hudGroup.add(cross1, cross2, cross3, cross4);
    scene.add(hudGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xf59e0b, 3.2);
    goldKeyLight.position.set(5, 5, 4);
    scene.add(goldKeyLight);

    const cyanRimLight = new THREE.DirectionalLight(0x06b6d4, 2.5);
    cyanRimLight.position.set(-6, -3, -3);
    scene.add(cyanRimLight);

    const softFill = new THREE.PointLight(0xffffff, 1.2, 10);
    softFill.position.set(0, 3, 4);
    scene.add(softFill);

    // Interactive Mouse Tracking with Damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / rect.width) * 2 - 1;
      mouse.targetY = -(clientY / rect.height) * 2 + 1;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = currentMount.getBoundingClientRect();
        const clientX = touch.clientX - rect.left;
        const clientY = touch.clientY - rect.top;
        mouse.targetX = (clientX / rect.width) * 2 - 1;
        mouse.targetY = -(clientY / rect.height) * 2 + 1;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Handle Resize
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Camera Rig Rotation & Float
      cameraRig.rotation.y = mouse.x * 0.6 + Math.sin(elapsedTime * 0.5) * 0.08;
      cameraRig.rotation.x = -mouse.y * 0.4 + Math.cos(elapsedTime * 0.7) * 0.05;
      cameraRig.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

      // Lens inner ring pulse
      innerRing.rotation.z = elapsedTime * 0.4;
      const pulse = 1 + Math.sin(elapsedTime * 3) * 0.05;
      innerRing.scale.set(pulse, pulse, 1);

      // Tally light blink (simulates video recording)
      tallyMat.color.setHex((Math.sin(elapsedTime * 4) > 0) ? 0xef4444 : 0x450a0a);

      // Rotate bokeh particles
      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = elapsedTime * 0.02;

      // HUD subtle breathing
      hudGroup.rotation.z = Math.sin(elapsedTime * 0.3) * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
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
    <div className="relative w-full h-[480px] sm:h-[550px] lg:h-[650px] flex items-center justify-center">
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating HUD Badges surrounding the 3D Camera */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4 sm:p-8">
        {/* Top Badges */}
        <div className="flex justify-between items-center text-xs font-mono text-amber-400/80">
          <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/20">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span>4K CINEMA • 120FPS</span>
          </div>
          <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700 text-slate-300">
            <span>S-LOG3 • 10-BIT 4:2:2</span>
          </div>
        </div>

        {/* Bottom Specs HUD */}
        <div className="flex flex-wrap justify-between items-end gap-3 text-xs font-mono">
          <div className="bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-slate-300">
            <p className="text-amber-400 font-semibold text-[11px] uppercase tracking-wider">Aperture</p>
            <p className="text-sm font-bold text-white">f/1.2 G-Master</p>
          </div>
          <div className="bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-slate-300">
            <p className="text-amber-400 font-semibold text-[11px] uppercase tracking-wider">Dynamic Range</p>
            <p className="text-sm font-bold text-white">15+ Stops RAW</p>
          </div>
          <div className="bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-amber-500/30 text-amber-300">
            <p className="text-[10px] uppercase tracking-wider text-amber-400">Interaction</p>
            <p className="text-xs font-medium">Move mouse / drag in 3D ↺</p>
          </div>
        </div>
      </div>
    </div>
  );
}

