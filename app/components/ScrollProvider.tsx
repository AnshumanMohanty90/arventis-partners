'use client';

import React, { useEffect } from 'react';

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let scrollInstance: any;

    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        // Locomotive Scroll v5 wraps Lenis scroll globally on the document
        scrollInstance = new LocomotiveScroll({
          lenisOptions: {
            lerp: 0.08,
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: false,
          } as any
        });
      } catch (error) {
        console.error('Locomotive Scroll failed to initialize:', error);
      }
    };

    initScroll();

    return () => {
      if (scrollInstance) {
        scrollInstance.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
