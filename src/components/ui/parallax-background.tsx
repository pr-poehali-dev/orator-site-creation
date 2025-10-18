import { useEffect, useState } from 'react';

interface ParallaxBackgroundProps {
  className?: string;
}

const ParallaxBackground = ({ className = '' }: ParallaxBackgroundProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48"
        style={{
          transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
        }}
      />
      <div
        className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl -bottom-48 -right-48"
        style={{
          transform: `translate3d(0, ${scrollY * -0.2}px, 0)`,
        }}
      />
      <div
        className="absolute w-64 h-64 bg-orange/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(-50%, calc(-50% + ${scrollY * 0.15}px), 0)`,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
