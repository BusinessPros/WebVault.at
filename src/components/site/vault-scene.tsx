"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function VaultScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0.6, 9.2);

    const group = new THREE.Group();
    scene.add(group);

    const key = new THREE.DirectionalLight(0xffe5ba, 3.1);
    key.position.set(4, 5, 6);
    scene.add(key);

    const fill = new THREE.PointLight(0x78d8ff, 2.4, 18);
    fill.position.set(-4, -1, 4);
    scene.add(fill);

    const slab = new THREE.Mesh(
      new THREE.BoxGeometry(4.1, 5.6, 0.55, 12, 12, 3),
      new THREE.MeshStandardMaterial({
        color: 0x1a1a18,
        roughness: 0.82,
        metalness: 0.18,
      }),
    );
    slab.position.set(0.55, -0.15, -0.8);
    slab.rotation.set(-0.08, -0.34, 0.02);
    group.add(slab);

    const glass = new THREE.Mesh(
      new THREE.BoxGeometry(5.4, 3.3, 0.06),
      new THREE.MeshPhysicalMaterial({
        color: 0xd8f6ff,
        transparent: true,
        opacity: 0.19,
        roughness: 0.08,
        metalness: 0.05,
        transmission: 0.35,
        thickness: 0.45,
      }),
    );
    glass.position.set(0.1, 0.1, 0.35);
    glass.rotation.set(-0.04, -0.16, 0.01);
    group.add(glass);

    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(5.45, 3.35, 0.08)),
      new THREE.LineBasicMaterial({
        color: 0xf0d19a,
        transparent: true,
        opacity: 0.62,
      }),
    );
    wire.position.copy(glass.position);
    wire.rotation.copy(glass.rotation);
    group.add(wire);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.08, 1),
      new THREE.MeshStandardMaterial({
        color: 0x0f1418,
        roughness: 0.42,
        metalness: 0.72,
        emissive: 0x101d20,
        emissiveIntensity: 0.32,
      }),
    );
    core.position.set(0.8, 0.16, 0.72);
    core.rotation.set(0.3, 0.1, -0.2);
    group.add(core);

    const coreWire = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(1.11, 1)),
      new THREE.LineBasicMaterial({
        color: 0x7fe7ff,
        transparent: true,
        opacity: 0.42,
      }),
    );
    coreWire.position.copy(core.position);
    group.add(coreWire);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xf0d19a,
      transparent: true,
      opacity: 0.5,
    });
    for (let i = 0; i < 11; i += 1) {
      const y = -1.55 + i * 0.31;
      const points = [
        new THREE.Vector3(-2.35, y, 0.42),
        new THREE.Vector3(2.55, y + Math.sin(i) * 0.08, 0.48),
      ];
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), lineMaterial);
      line.rotation.copy(glass.rotation);
      group.add(line);
    }

    const particles = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
        color: 0xf4d199,
        size: 0.026,
        transparent: true,
        opacity: 0.62,
      }),
    );
    const positions = new Float32Array(150 * 3);
    for (let i = 0; i < 150; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 7.5;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    particles.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    group.add(particles);

    const pointer = { x: 0, y: 0 };
    const handlePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    let frame = 0;
    let raf = 0;
    const animate = () => {
      frame += 0.01;
      group.rotation.y += (pointer.x * 0.11 - group.rotation.y) * 0.035;
      group.rotation.x += (-pointer.y * 0.055 - group.rotation.x) * 0.035;
      core.rotation.y += 0.008;
      core.rotation.x += 0.004;
      coreWire.rotation.y -= 0.006;
      particles.rotation.y = frame * 0.22;
      particles.rotation.x = Math.sin(frame) * 0.05;
      glass.position.y = 0.1 + Math.sin(frame * 1.4) * 0.035;
      wire.position.y = glass.position.y;
      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", handlePointer);
      observer.disconnect();
      renderer.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments || object instanceof THREE.Points) {
          object.geometry.dispose();
          const material = object.material;
          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose());
          } else {
            material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[0.75rem] border border-white/15 bg-[#080909] shadow-2xl shadow-black/45 sm:min-h-[420px] lg:min-h-[600px]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 size-full"
        aria-label="Interaktive WebVault Systemvisualisierung"
      />
      <div className="pointer-events-none absolute inset-0 vault-grid opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(238,203,142,0.26),transparent_28%),radial-gradient(circle_at_10%_80%,rgba(103,212,238,0.14),transparent_25%)]" />
      <div className="absolute left-4 top-4 w-[74%] rounded-lg border border-white/14 bg-black/35 p-3 text-white shadow-2xl backdrop-blur-md sm:left-8 sm:top-8 sm:w-[58%] sm:p-5">
        <div className="flex items-center justify-between gap-4 border-b border-white/12 pb-3">
          <p className="font-mono text-[0.56rem] uppercase tracking-[0.24em] text-white/62 sm:text-[0.65rem]">
            WebVault OS
          </p>
          <span className="rounded-full border border-vault-gold/35 px-2 py-1 text-[0.55rem] text-vault-gold sm:text-[0.62rem]">
            Live System
          </span>
        </div>
        <p className="mt-4 max-w-xs text-xl font-semibold leading-[1.02] sm:mt-5 sm:text-4xl">
          Mehr Anfragen. Weniger Reibung.
        </p>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {["Website", "Chatbot", "Automation"].map((item, index) => (
            <div key={item} className="border-t border-white/14 pt-2">
              <p className="font-mono text-[0.62rem] text-white/45">0{index + 1}</p>
              <p className="mt-1 text-xs text-white/78">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-4 w-44 rounded-lg border border-vault-gold/20 bg-vault-gold/12 p-3 text-white backdrop-blur-md sm:bottom-5 sm:right-5 sm:w-64 sm:p-4">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-vault-gold">
          Conversion Pulse
        </p>
        <div className="mt-4 flex h-16 items-end gap-2 sm:h-20">
          {[35, 52, 48, 66, 78, 92, 86].map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-vault-gold/55 to-vault-gold"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
