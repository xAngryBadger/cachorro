import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router';
const HomePage = lazy(() => import('./components/HomePage').then(m => ({ default: m.HomePage })));
const ServicosPage = lazy(() => import('./components/ServicosPage').then(m => ({ default: m.ServicosPage })));
const GaleriaPage = lazy(() => import('./components/GaleriaPage').then(m => ({ default: m.GaleriaPage })));
const SobrePage = lazy(() => import('./components/SobrePage').then(m => ({ default: m.SobrePage })));
const ContatoPage = lazy(() => import('./components/ContatoPage').then(m => ({ default: m.ContatoPage })));
import { Navbar } from './components/Navbar';
import { FooterSection } from './components/FooterSection';

function PageLoader() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-bg)',
    }}>
      <div style={{
        width: 48,
        height: 48,
        border: '2px solid rgba(201,162,63,0.3)',
        borderTopColor: 'var(--color-accent-gold)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/galeria" element={<GaleriaPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <FooterSection />
      </Suspense>
    </BrowserRouter>
  );
}

export { App };
