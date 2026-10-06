import React, { useMemo, useRef, useEffect } from 'react';

const Background = () => {
  const containerRef = useRef(null);

  // Generate shapes for a professional "network" feel with depth for parallax
  const shapes = useMemo(() => Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 220 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 24 + 18,
    delay: Math.random() * -20,
    opacity: Math.random() * 0.12 + 0.04,
    depth: (Math.random() * 1.2 - 0.6).toFixed(2) // -0.6 .. 0.6
  })), []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Respect user preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.style.setProperty('--mx', '0px');
      el.style.setProperty('--my', '0px');
      return;
    }

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left; // x within element
      const y = e.clientY - r.top;
      const mx = ((x / r.width) - 0.5) * 40; // -20 .. 20 px
      const my = ((y / r.height) - 0.5) * 40;
      el.style.setProperty('--mx', `${mx}px`);
      el.style.setProperty('--my', `${my}px`);
    };

    const onLeave = () => {
      el.style.setProperty('--mx', `0px`);
      el.style.setProperty('--my', `0px`);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="prof-bg" ref={containerRef} style={{ '--mx': '0px', '--my': '0px' }}>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="bg-shape"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
            opacity: shape.opacity,
            // seed depth as a CSS var for per-shape parallax
            '--depth': shape.depth
          }}
        />
      ))}
      <div className="bg-gradient-overlay"></div>
    </div>
  );
};

export default Background;
