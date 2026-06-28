'use client';

import React, { useState, useEffect } from 'react';
import DisclaimerModal from './DisclaimerModal';
import LoadingScreen from './LoadingScreen';

export default function IntroManager() {
  const [stage, setStage] = useState<'checking' | 'disclaimer' | 'loading' | 'done'>('checking');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accepted = localStorage.getItem('arventis_disclaimer_accepted');
      if (accepted === 'true') {
        setStage('loading');
      } else {
        setStage('disclaimer');
      }
    }
  }, []);

  if (stage === 'checking') {
    return <div className="fixed inset-0 bg-[#081226] z-[99999]" />;
  }

  if (stage === 'done') {
    return null;
  }

  return (
    <>
      {stage === 'disclaimer' && (
        <DisclaimerModal onAccept={() => setStage('loading')} />
      )}
      {stage === 'loading' && (
        <LoadingScreen onComplete={() => setStage('done')} />
      )}
    </>
  );
}
