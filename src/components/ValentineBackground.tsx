import { useEffect, useRef } from 'react';

export const ValentineBackground = () => {
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

    // Floating hearts - increased density
    const hearts: { x: number; y: number; size: number; speed: number; opacity: number; rotation: number; drift: number; delay: number }[] = [];
    
    const initHearts = () => {
      hearts.length = 0;
      // Responsive heart count based on screen width
      const baseCount = Math.min(35, Math.floor(canvas.width / 50));
      const heartCount = Math.max(20, baseCount);
      
      for (let i = 0; i < heartCount; i++) {
        hearts.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 6 + Math.random() * 14,
          speed: 0.15 + Math.random() * 0.35,
          opacity: 0.06 + Math.random() * 0.12,
          rotation: Math.random() * Math.PI * 2,
          drift: (Math.random() - 0.5) * 0.8, // Horizontal drift
          delay: Math.random() * Math.PI * 2 // Animation phase offset
        });
      }
    };

    initHearts();

    // Organic flowing shapes
    const drawFlowingShape = (
      centerX: number, 
      centerY: number, 
      radius: number, 
      color1: string, 
      color2: string, 
      phase: number
    ) => {
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius
      );
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);

      ctx.beginPath();
      const points = 64;
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const wave1 = Math.sin(angle * 3 + phase) * 0.15;
        const wave2 = Math.sin(angle * 5 - phase * 0.7) * 0.1;
        const r = radius * (1 + wave1 + wave2);
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    // Draw heart shape
    const drawHeart = (x: number, y: number, size: number, rotation: number, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      
      // Left curve
      ctx.bezierCurveTo(
        -size / 2, -topCurveHeight,
        -size, topCurveHeight / 2,
        0, size
      );
      
      // Right curve
      ctx.bezierCurveTo(
        size, topCurveHeight / 2,
        size / 2, -topCurveHeight,
        0, topCurveHeight
      );
      
      ctx.strokeStyle = `rgba(255, 111, 145, ${opacity})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    };

    // Honeycomb with Valentine twist
    const hexSize = 40;
    const hexHeight = hexSize * Math.sqrt(3);
    const hexWidth = hexSize * 2;

    const drawHexagon = (x: number, y: number, size: number, alpha: number, isValentine: boolean) => {
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
      
      if (isValentine) {
        ctx.strokeStyle = `rgba(255, 111, 145, ${alpha * 0.6})`;
      } else {
        ctx.strokeStyle = `rgba(243, 204, 128, ${alpha})`;
      }
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const animate = () => {
      time += 0.006;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Large flowing organic shapes (Valentine gradient)
      drawFlowingShape(
        canvas.width * 0.8 + Math.sin(time * 0.3) * 50,
        canvas.height * 0.3 + Math.cos(time * 0.4) * 30,
        400,
        'rgba(139, 29, 58, 0.15)',
        'rgba(255, 111, 145, 0)',
        time
      );

      drawFlowingShape(
        canvas.width * 0.2 + Math.cos(time * 0.25) * 40,
        canvas.height * 0.7 + Math.sin(time * 0.35) * 35,
        350,
        'rgba(255, 111, 145, 0.1)',
        'rgba(139, 29, 58, 0)',
        -time * 0.8
      );

      drawFlowingShape(
        canvas.width * 0.6 + Math.sin(time * 0.2) * 60,
        canvas.height * 0.5 + Math.cos(time * 0.3) * 40,
        300,
        'rgba(255, 158, 187, 0.08)',
        'rgba(255, 111, 145, 0)',
        time * 0.6
      );

      // Draw honeycomb grid with Valentine accents
      const cols = Math.ceil(canvas.width / (hexWidth * 0.75)) + 2;
      const rows = Math.ceil(canvas.height / hexHeight) + 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * hexWidth * 0.75;
          const y = row * hexHeight + (col % 2 === 1 ? hexHeight / 2 : 0);
          
          const wave = Math.sin(time + x * 0.003 + y * 0.003) * 0.5 + 0.5;
          const alpha = 0.06 + wave * 0.06;
          
          // Some hexagons get Valentine pink accent
          const isValentine = Math.sin(x * 0.01 + y * 0.01 + time * 0.5) > 0.7;
          
          drawHexagon(x, y, hexSize * 0.9, alpha, isValentine);
        }
      }

      // Draw floating hearts with varied animations
      hearts.forEach((heart) => {
        // Smooth floating motion with individual timing
        const timeOffset = time + heart.delay;
        heart.y -= heart.speed;
        heart.x += Math.sin(timeOffset * 0.8) * heart.drift + heart.drift * 0.1;
        heart.rotation += 0.003 + Math.sin(timeOffset) * 0.002;
        
        // Subtle scale pulsing
        const scalePulse = 1 + Math.sin(timeOffset * 1.2) * 0.1;
        
        // Reset when off screen
        if (heart.y < -60) {
          heart.y = canvas.height + 60;
          heart.x = Math.random() * canvas.width;
        }
        // Wrap horizontally
        if (heart.x < -30) heart.x = canvas.width + 30;
        if (heart.x > canvas.width + 30) heart.x = -30;
        
        drawHeart(heart.x, heart.y, heart.size * scalePulse, heart.rotation, heart.opacity);
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
      style={{ opacity: 0.7 }}
    />
  );
};
