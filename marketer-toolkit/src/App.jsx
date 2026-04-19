import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Tool from './pages/Tool';
import AiConsultant from './pages/AiConsultant';
import AiAssistant from './components/ui/AiAssistant';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform/:id" element={<Platform />} />
          <Route path="/tool/:id" element={<Tool />} />
          <Route path="/consultant" element={<AiConsultant />} />
          <Route path="*" element={
            <div style={{
              minHeight: '100vh', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '1rem',
              paddingTop: '64px',
            }}>
              <span style={{ fontSize: '4rem' }}>🚧</span>
              <h2 className="font-display" style={{ color: 'var(--text-bright)', fontSize: '2rem' }}>
                404 — Page Not Found
              </h2>
              <a href="/" className="btn-premium" style={{ textDecoration: 'none' }}>
                Go Home
              </a>
            </div>
          } />
        </Routes>
      </main>
      <AiAssistant />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
