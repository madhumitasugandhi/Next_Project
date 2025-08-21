"use client";

const lights = Array.from({ length: 25 }).map((_, i) => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 5}s`,
}));

export default function FloatingLights() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {lights.map((light, i) => (
        <div
          key={i}
          style={{
            top: light.top,
            left: light.left,
            animationDelay: light.animationDelay,
          }}
          className="absolute bg-yellow-400 rounded-full w-2 h-2 animate-float opacity-70"
        />
      ))}
    </div>
  );
}
