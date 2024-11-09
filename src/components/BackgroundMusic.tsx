import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Create a hidden iframe for YouTube embedding
    if (iframeRef.current) {
      iframeRef.current.style.display = 'none';
    }
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://www.youtube.com/embed/FDzYegv8JHE?autoplay=1&controls=0&loop=1&playlist=FDzYegv8JHE"
      allow="autoplay"
      style={{ display: 'none' }}
      title="Background Music"
    />
  );
}