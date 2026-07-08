import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.25rem 2rem',
        mixBlendMode: 'difference',
      }}
    >
      <a
        href="#inicio"
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: '0.875rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#f4ede0',
          textDecoration: 'none',
        }}
      >
        BARBEARIA
      </a>

      {/* Desktop links */}
      <nav
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }}
        className="hidden md:flex"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              fontWeight: 400,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#f4ede0',
              textDecoration: 'none',
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Hamburger button */}
      <button
        onClick={toggle}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        style={{
          position: 'relative',
          width: 28,
          height: 20,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          zIndex: 110,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 0,
        }}
        className="md:hidden"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
          style={{
            display: 'block',
            width: '100%',
            height: 2,
            backgroundColor: '#f4ede0',
            borderRadius: 2,
            transformOrigin: 'center',
          }}
        />
        <motion.span
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
          style={{
            display: 'block',
            width: '100%',
            height: 2,
            backgroundColor: '#f4ede0',
            borderRadius: 2,
            transformOrigin: 'center',
          }}
        />
        <motion.span
          animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
          style={{
            display: 'block',
            width: '100%',
            height: 2,
            backgroundColor: '#f4ede0',
            borderRadius: 2,
            transformOrigin: 'center',
          }}
        />
      </button>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10, 9, 8, 0.96)',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              backdropFilter: 'blur(8px)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: [0, 0, 0.2, 1] }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 600,
                  color: '#f4ede0',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
