import { useEffect, useState } from 'react';

const colors = [
  'rgb(255, 68, 153)', // Neon Pink
  'rgb(111, 0, 255)',  // Electric Purple
  'rgb(0, 234, 255)',  // Cyan
  'rgb(255, 102, 0)',  // Neon Orange
];

export default function ColorShift({ children }: { children: React.ReactNode }) {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ 
      color: colors[colorIndex],
      transition: 'color 1.5s ease-in-out'
    }}>
      {children}
    </span>
  );
}