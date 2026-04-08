import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CaseStudyDetail from './pages/CaseStudyDetail';
import AboutUs from './pages/AboutUs';

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen bg-bg-peach flex flex-col">
        <div className="w-full max-w-[1440px] mx-auto relative overflow-x-hidden flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-study/:id" element={<CaseStudyDetail />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}