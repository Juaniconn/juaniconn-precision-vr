import { useEffect, useRef } from 'react';

export const HoneycombBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Honeycomb parameters
    const hexSize = 40;
    const hexHeight = hexSize * Math.sqrt(3);
    const hexWidth = hexSize * 2;

    // Node connection points (tracking sensor positions)
    const nodes: { x: number; y: number; pulse: number; speed: number }[] = [];

    const initNodes = () => {
      nodes.length = 0;
      const cols = Math.ceil(canvas.width / (hexWidth * 0.75)) + 2;
      const rows = Math.ceil(canvas.height / hexHeight) + 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * hexWidth * 0.75;
          const y = row * hexHeight + (col % 2 === 1 ? hexHeight / 2 : 0);
          
          // Only add some nodes for a cleaner look
          if (Math.random() > 0.7) {
            nodes.push({
              x,
              y,
              pulse: Math.random() * Math.PI * 2,
              speed: 0.5 + Math.random() * 1.5
            });
          }
        }
      }
    };

    initNodes();

    const drawHexagon = (x: number, y: number, size: number, alpha: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(hx, hy);
        } else {
          ctx.lineTo(hx, hy);
        }
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(243, 204, 128, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const drawConnection = (x1: number, y1: number, x2: number, y2: number, alpha: number) => {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, `rgba(243, 204, 128, 0)`);
      gradient.addColorStop(0.5, `rgba(243, 204, 128, ${alpha})`);
      gradient.addColorStop(1, `rgba(243, 204, 128, 0)`);
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const drawNode = (x: number, y: number, pulsePhase: number) => {
      const pulseSize = 3 + Math.sin(pulsePhase) * 2;
      const alpha = 0.3 + Math.sin(pulsePhase) * 0.2;
      
      // Glow effect
      const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, pulseSize * 4);
      glowGradient.addColorStop(0, `rgba(243, 204, 128, ${alpha * 0.5})`);
      glowGradient.addColorStop(1, 'rgba(243, 204, 128, 0)');
      
      ctx.beginPath();
      ctx.arc(x, y, pulseSize * 4, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();
      
      // Core dot
      ctx.beginPath();
      ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(243, 204, 128, ${alpha + 0.3})`;
      ctx.fill();
    };

    const animate = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw honeycomb grid
      const cols = Math.ceil(canvas.width / (hexWidth * 0.75)) + 2;
      const rows = Math.ceil(canvas.height / hexHeight) + 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * hexWidth * 0.75;
          const y = row * hexHeight + (col % 2 === 1 ? hexHeight / 2 : 0);
          
          // Wave effect for alpha
          const wave = Math.sin(time + x * 0.003 + y * 0.003) * 0.5 + 0.5;
          const alpha = 0.08 + wave * 0.07;
          
          drawHexagon(x, y, hexSize * 0.9, alpha);
        }
      }

      // Draw connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < hexWidth * 2.5) {
            const connectionAlpha = (1 - dist / (hexWidth * 2.5)) * 0.15;
            const pulse = Math.sin(time * 2 + i * 0.5) * 0.5 + 0.5;
            drawConnection(
              nodes[i].x, nodes[i].y,
              nodes[j].x, nodes[j].y,
              connectionAlpha * pulse
            );
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        const pulsePhase = time * node.speed + node.pulse;
        drawNode(node.x, node.y, pulsePhase);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};
