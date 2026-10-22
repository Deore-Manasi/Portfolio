import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const AmbientBackground: React.FC = () => {
  const { x, y, isTouch } = useMousePosition();
  const prefersReducedMotion = useReducedMotion();

  // If touch or reduced motion, render a subtle static ambient radial glow
  if (isTouch || prefersReducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-sky-950/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-cyan-950/20 rounded-full blur-[140px]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Cursor Spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-sky-500/[0.08] blur-[120px] transition-transform duration-300 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${x}px`,
          top: `${y}px`,
        }}
      />

      {/* Static Atmospheric Depth Layers */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-950/25 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-10 w-[450px] h-[450px] bg-blue-950/25 rounded-full blur-[130px]" />
    </div>
  );
};
