import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Galeria', href: '/galeria' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const close = () => setOpen(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.25rem 2rem',
      backdropFilter: 'blur(0px)',
      transition: 'backdrop-filter 0.3s ease',
    }}>
      <Link to="/" onClick={close} style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: '0.875rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#f4ede0',
        textDecoration: 'none',
        position: 'relative',
        zIndex: 110,
      }}>
        CACHORRO<span style={{ color: 'var(--color-accent-gold)' }}>.</span>
      </Link>

      {/* Desktop links */}
      <nav className="hidden md:flex" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: pathname === link.href ? 700 : 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: pathname === link.href ? 'var(--color-accent-gold)' : '#f4ede0',
              textDecoration: 'none',
              position: 'relative',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              if (pathname !== link.href) (e.currentTarget as HTMLElement).style.color = 'var(--color-accent-gold)';
            }}
            onMouseLeave={(e) => {
              if (pathname !== link.href) (e.currentTarget as HTMLElement).style.color = '#f4ede0';
            }}
          >
            {link.label}
            {pathname === link.href && (
              <motion.span
                layoutId="nav-indicator"
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  right: 0,
                  height: 1,
                  background: 'var(--color-accent-gold)',
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </nav>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        className="md:hidden"
        style={{
          position: 'relative',
          width: 30,
          height: 22,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          zIndex: 110,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 0,
        }}
      >
        <motion.span
          animate={open ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
          style={{ display: 'block', width: '100%', height: 2, backgroundColor: '#f4ede0', borderRadius: 1, transformOrigin: 'center' }}
        />
        <motion.span
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
          style={{ display: 'block', width: '100%', height: 2, backgroundColor: '#f4ede0', borderRadius: 1, transformOrigin: 'center' }}
        />
        <motion.span
          animate={open ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
          style={{ display: 'block', width: '100%', height: 2, backgroundColor: '#f4ede0', borderRadius: 1, transformOrigin: 'center' }}
        />
      </button>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10, 9, 8, 0.97)',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '6rem 4rem 4rem',
              backdropFilter: 'blur(20px)',
            }}
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={close}
                style={{ textDecoration: 'none' }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: [0, 0, 0.2, 1] }}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: pathname === link.href ? 'var(--color-accent-gold)' : '#f4ede0',
                    lineHeight: 1.05,
                    letterSpacing: '-0.02em',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== link.href) (e.currentTarget as HTMLElement).style.color = 'var(--color-accent-gold)';
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== link.href) (e.currentTarget as HTMLElement).style.color = '#f4ede0';
                  }}
                >
                  {link.label}
                </motion.div>
              </Link>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{
                position: 'absolute',
                bottom: '3rem',
                left: '4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-label)',
                color: 'var(--color-muted)',
                letterSpacing: '0.1em',
              }}
            >
              BARBEARIA ARTESANAL — EST. 2018
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
