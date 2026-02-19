import { useEffect, useRef, useCallback } from 'react';

export const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    // Hex grid params
    const hexSize = 40;
    const hexH = hexSize * Math.sqrt(3);
    const hexW = hexSize * 2;

    // Golden pulsing nodes
    interface Node {
      x: number; y: number; phase: number; speed: number;
    }
    const nodes: Node[] = [];

    // Micro particles
    interface Particle {
      x: number; y: number; speed: number; opacity: number; size: number;
    }
    const particles: Particle[] = [];

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;

    const initNodes = () => {
      nodes.length = 0;
      const cols = Math.ceil(canvas.width / (hexW * 0.75)) + 2;
      const rows = Math.ceil(canvas.height / hexH) + 2;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (Math.random() > 0.75) {
            nodes.push({
              x: col * hexW * 0.75,
              y: row * hexH + (col % 2 === 1 ? hexH / 2 : 0),
              phase: Math.random() * Math.PI * 2,
              speed: 0.3 + Math.random() * 0.7,
            });
          }
        }
      }
    };

    const initParticles = () => {
      particles.length = 0;
      if (isMobile) return; // No particles on mobile
      const count = isTablet ? 15 : 25;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: 0.1 + Math.random() * 0.25,
          opacity: 0.08 + Math.random() * 0.12,
          size: 1 + Math.random() * 1.5,
        });
      }
    };

    initNodes();
    initParticles();

    const drawHex = (x: number, y: number, size: number, alpha: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const px = x + size * Math.cos(a);
        const py = y + size * Math.sin(a);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(243, 204, 128, ${alpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    };

    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Parallax offset (subtle)
      const px = (mx - 0.5) * 15;
      const py = (my - 0.5) * 10;

      // Layer 1: Hex grid with slow drift
      const drift = time * 8; // Very slow horizontal drift
      const cols = Math.ceil(canvas.width / (hexW * 0.75)) + 3;
      const rows = Math.ceil(canvas.height / hexH) + 3;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * hexW * 0.75 - (drift % (hexW * 0.75)) + px;
          const y = row * hexH + (col % 2 === 1 ? hexH / 2 : 0) + py;
          const wave = Math.sin(time * 0.8 + x * 0.002 + y * 0.002) * 0.5 + 0.5;
          const alpha = 0.04 + wave * 0.05;
          drawHex(x, y, hexSize * 0.9, alpha);
        }
      }

      // Layer 2: Golden node pulses with connections
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = Math.sin(time * n.speed * 2 + n.phase);
        const alpha = 0.1 + (pulse * 0.5 + 0.5) * 0.15;
        const r = 2.5 + (pulse * 0.5 + 0.5) * 2;

        const nx = n.x + px * 0.5;
        const ny = n.y + py * 0.5;

        // Glow
        const glow = ctx.createRadialGradient(nx, ny, 0, nx, ny, r * 5);
        glow.addColorStop(0, `rgba(243, 204, 128, ${alpha * 0.4})`);
        glow.addColorStop(1, 'rgba(243, 204, 128, 0)');
        ctx.beginPath();
        ctx.arc(nx, ny, r * 5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(nx, ny, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(243, 204, 128, ${alpha + 0.15})`;
        ctx.fill();

        // Connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < hexW * 2.5) {
            const connAlpha = (1 - dist / (hexW * 2.5)) * 0.12 * (pulse * 0.3 + 0.7);
            const grad = ctx.createLinearGradient(nx, ny, m.x + px * 0.5, m.y + py * 0.5);
            grad.addColorStop(0, `rgba(243, 204, 128, 0)`);
            grad.addColorStop(0.5, `rgba(243, 204, 128, ${connAlpha})`);
            grad.addColorStop(1, `rgba(243, 204, 128, 0)`);
            ctx.beginPath();
            ctx.moveTo(nx, ny);
            ctx.lineTo(m.x + px * 0.5, m.y + py * 0.5);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Layer 3: Radial glow behind product area (right side)
      const glowX = canvas.width * 0.7 + px * 2;
      const glowY = canvas.height * 0.45 + py * 2;
      const glowPulse = 0.85 + Math.sin(time * 0.6) * 0.15;
      const radialGlow = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, 400 * glowPulse);
      radialGlow.addColorStop(0, 'rgba(243, 204, 128, 0.08)');
      radialGlow.addColorStop(0.5, 'rgba(243, 204, 128, 0.03)');
      radialGlow.addColorStop(1, 'rgba(243, 204, 128, 0)');
      ctx.beginPath();
      ctx.arc(glowX, glowY, 400 * glowPulse, 0, Math.PI * 2);
      ctx.fillStyle = radialGlow;
      ctx.fill();

      // Layer 4: Micro particles (warm upward drift)
      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += Math.sin(time + p.y * 0.01) * 0.15;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(p.x + px * 0.3, p.y + py * 0.3, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(243, 204, 128, ${p.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};
