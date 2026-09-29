import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

export interface AkshatuluCanvasHandle {
  showerBlessings: (count?: number) => void;
  showerRoseWaterMist: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  color: string;
  type: 'rice' | 'petal' | 'mist';
  alpha: number;
  decay?: number;
}

export const AkshatuluCanvas = forwardRef<AkshatuluCanvasHandle, { active?: boolean }>(
  ({ active = true }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animIdRef = useRef<number | null>(null);

    const triggerBlessings = (burstCount: number = 80) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const width = canvas.width;
      const height = canvas.height;

      // Add golden turmeric rice particles & rose petals
      for (let i = 0; i < burstCount; i++) {
        const isRice = Math.random() > 0.4;
        const startX = Math.random() * width;
        const startY = -20 - Math.random() * 50;

        if (isRice) {
          // Turmeric yellow / vermilion red sacred akshata rice grain
          particlesRef.current.push({
            x: startX,
            y: startY,
            vx: (Math.random() - 0.5) * 2,
            vy: 2.5 + Math.random() * 3.5,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.1,
            size: 2.5 + Math.random() * 2,
            color: Math.random() > 0.25 ? '#F7D02C' : '#D9381E', // Turmeric yellow or kumkuma red
            type: 'rice',
            alpha: 1,
          });
        } else {
          // Fresh pink & crimson fragrant rose petal
          particlesRef.current.push({
            x: startX,
            y: startY,
            vx: (Math.random() - 0.5) * 3,
            vy: 1.8 + Math.random() * 2.5,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.05,
            size: 8 + Math.random() * 8,
            color: Math.random() > 0.3 ? '#E63946' : '#FF758F',
            type: 'petal',
            alpha: 0.95,
          });
        }
      }
    };

    const triggerRoseWaterMist = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const width = canvas.width;
      const height = canvas.height;

      // Sparkling glistening rose water droplets
      for (let i = 0; i < 90; i++) {
        particlesRef.current.push({
          x: width * 0.2 + Math.random() * (width * 0.6),
          y: height * 0.3 + Math.random() * (height * 0.4),
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          rotation: 0,
          rotationSpeed: 0,
          size: 2 + Math.random() * 3.5,
          color: Math.random() > 0.5 ? '#E0F2FE' : '#FFEDD5',
          type: 'mist',
          alpha: 1,
          decay: 0.015 + Math.random() * 0.02,
        });
      }
    };

    useImperativeHandle(ref, () => ({
      showerBlessings: triggerBlessings,
      showerRoseWaterMist: triggerRoseWaterMist,
    }));

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      // Render loop
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let lastTime = performance.now();

      const render = (time: number) => {
        const dt = (time - lastTime) / 1000;
        lastTime = time;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update & draw particles
        for (let i = particlesRef.current.length - 1; i >= 0; i--) {
          const p = particlesRef.current[i];
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.rotationSpeed;

          if (p.decay) {
            p.alpha -= p.decay;
          }

          if (p.y > canvas.height + 20 || p.alpha <= 0) {
            particlesRef.current.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.globalAlpha = Math.max(0, p.alpha);

          if (p.type === 'rice') {
            // Draw realistic elongated rice grain
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.ellipse(0, 0, p.size * 0.6, p.size * 1.8, 0, 0, Math.PI * 2);
            ctx.fill();
            // Tiny sheen
            ctx.fillStyle = 'rgba(255,255,255,0.4)';
            ctx.beginPath();
            ctx.ellipse(-0.5, -0.5, p.size * 0.2, p.size * 0.6, 0, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.type === 'petal') {
            // Draw gentle rose petal
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.moveTo(0, -p.size);
            ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.8, p.size, p.size * 0.3, 0, p.size);
            ctx.bezierCurveTo(-p.size, p.size * 0.3, -p.size * 0.8, -p.size * 0.8, 0, -p.size);
            ctx.fill();
          } else if (p.type === 'mist') {
            // Sparkling droplet
            const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
            grad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
            grad.addColorStop(0.5, 'rgba(244, 219, 142, 0.6)');
            grad.addColorStop(1, 'rgba(212, 175, 55, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        }

        animIdRef.current = requestAnimationFrame(render);
      };

      animIdRef.current = requestAnimationFrame(render);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
      };
    }, []);

    if (!active) return null;

    return (
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      />
    );
  }
);

AkshatuluCanvas.displayName = 'AkshatuluCanvas';
