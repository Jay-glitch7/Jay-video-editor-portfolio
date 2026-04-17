import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

interface AshParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
}

export const LaserCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const points = useRef<Point[]>([]);
  const sparks = useRef<Spark[]>([]);
  const ash = useRef<AshParticle[]>([]);
  const isMoving = useRef(false);
  const idleTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const dx = clientX - mousePos.current.x;
      const dy = clientY - mousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      isMoving.current = true;
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => {
        isMoving.current = false;
      }, 100);

      // Create sparks if moving fast
      if (dist > 15) {
        for (let i = 0; i < 3; i++) {
          sparks.current.push({
            x: clientX,
            y: clientY,
            vx: (Math.random() - 0.5) * 5,
            vy: (Math.random() - 0.5) * 5,
            life: 1.0
          });
        }
      }

      mousePos.current = { x: clientX, y: clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Generate Ash when idle
      if (!isMoving.current && Math.random() > 0.7) {
        ash.current.push({
          x: mousePos.current.x + (Math.random() - 0.5) * 20,
          y: mousePos.current.y + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -Math.random() * 2 - 0.5, // Float up
          life: 1.0,
          size: Math.random() * 3 + 1,
          color: Math.random() > 0.5 ? '#E10600' : '#FFD700' // Red or Gold
        });
      }

      // Update and Draw Ash
      ash.current = ash.current.filter(a => a.life > 0.01);
      ash.current.forEach(a => {
        a.x += a.vx;
        a.y += a.vy;
        // Fade faster when moving
        a.life *= isMoving.current ? 0.92 : 0.98;
        
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.size, 0, Math.PI * 2);
        const opacity = a.life * (Math.random() * 0.5 + 0.5); // Add flicker
        ctx.fillStyle = a.color === '#E10600' ? `rgba(225, 6, 0, ${opacity})` : `rgba(255, 215, 0, ${opacity})`;
        ctx.shadowBlur = 10 * a.life;
        ctx.shadowColor = a.color;
        ctx.fill();
      });

      // Add mouse position to trail
      if (isMoving.current) {
        points.current.push({ ...mousePos.current });
      }
      if (points.current.length > 25 || (!isMoving.current && points.current.length > 0)) {
        points.current.shift();
      }

      // Draw sparks
      sparks.current = sparks.current.filter(s => s.life > 0.1);
      sparks.current.forEach(s => {
        s.x += s.vx;
        s.y += s.vy;
        s.life *= 0.95;
        
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(225, 6, 0, ${s.life})`;
        ctx.shadowBlur = 10 * s.life;
        ctx.shadowColor = '#E10600';
        ctx.fill();
      });

      // Draw Laser Trail
      if (points.current.length > 2) {
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        
        // Pass 1: Outer glow
        ctx.beginPath();
        ctx.moveTo(points.current[0].x, points.current[0].y);
        for (let i = 1; i < points.current.length; i++) {
          const point = points.current[i];
          ctx.lineTo(point.x, point.y);
        }
        ctx.strokeStyle = '#E10600';
        ctx.lineWidth = 4;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#E10600';
        ctx.globalAlpha = 0.4 * (points.current.length / 25);
        ctx.stroke();

        // Pass 2: Main trail
        ctx.beginPath();
        ctx.moveTo(points.current[0].x, points.current[0].y);
        for (let i = 1; i < points.current.length; i++) {
          ctx.lineTo(points.current[i].x, points.current[i].y);
        }
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#E10600';
        ctx.globalAlpha = 1.0 * (points.current.length / 25);
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    const requestId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
