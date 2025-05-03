import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import WhatIsLunar from './pages/what-is-lunar';
import Interactive from './pages/interactive';
import Buy from './pages/buy';
import Partner from './pages/about-us';
import Contact from './pages/contact';

export default function App() {
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