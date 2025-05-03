import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import WhatIsLunar from './pages/what-is-lunar';
import Interactive from './pages/interactive';
import Buy from './pages/buy';
import Partner from './pages/about-us';
import Contact from './pages/contact';
import Loading from './components/loading';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(Date.now()); // record when loading started

  useEffect(() => {
    let animationFrameId;

    // Smoothly update progress based on elapsed time.
    const updateProgress = () => {
      if (loading) {
        const elapsed = Date.now() - startTimeRef.current;
        // We'll target a maximum of 90% in 1 second (adjust as needed)
        const newProgress = Math.min((elapsed / 1000) * 90, 90);
        setProgress(newProgress);
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();

    const handleLoad = () => {
      cancelAnimationFrame(animationFrameId);
      setProgress(100);
      const elapsed = Date.now() - startTimeRef.current;
      const delay = elapsed < 1000 ? 1000 - elapsed : 0; // ensure at least 1 second
      setTimeout(() => setLoading(false), delay);
    };

    window.addEventListener('load', handleLoad);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('load', handleLoad);
    };
  }, [loading]);

  if (loading) {
    return <Loading progress={progress} />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/what-is-lunar"  element={<WhatIsLunar />} />
        <Route path="/interactive"    element={<Interactive />} />
        <Route path="/buy"            element={<Buy />} />
        <Route path="/about-us"       element={<Partner />} />
        <Route path="/contact"        element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
