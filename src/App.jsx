import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomerEngagementBar from './components/CustomerEngagementBar';
import { ThemeProvider } from './context/ThemeContext';

// Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Films from './pages/Films';
import EditingStudio from './pages/EditingStudio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-dark-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-amber-500 selection:text-black transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/films" element={<Films />} />
              <Route path="/editing" element={<EditingStudio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          {/* Customer Engagement Interactive Live Bar */}
          <CustomerEngagementBar />
        </div>
      </Router>
    </ThemeProvider>
  );
}
