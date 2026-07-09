import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'var(--color-bg-deep, #0f0d0b)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '8rem 0 5rem',
      overflow: 'hidden',
    }}>
      {/* Noise grain */}
      <div className="noise-overlay animated-grain" />

      {/* Gradient accent stripe top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '40%',
        background: 'linear-gradient(to bottom, rgba(201, 162, 63, 0.06), transparent)',
        zIndex: 0,
      }} />

      {/* Decorative razor blade — large, very subtle */}
      <svg style={{
        position: 'absolute',
        top: '8%',
        right: '3%',
        width: 'clamp(150px, 25vw, 400px)',
        height: 'auto',
        opacity: 0.05,
        zIndex: 0,
        transform: 'rotate(-12deg)',
      }} viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 15 L100 385" stroke="#c9a23f" strokeWidth="1.5" className="razor-stroke" strokeLinecap="round"
          style={{ animationDelay: '0.2s' }} />
        <path d="M55 25 Q100 5 145 25 L132 85 Q100 72 68 85 Z" stroke="#c9a23f" strokeWidth="1.5"
          className="razor-stroke" strokeLinecap="round" style={{ animationDelay: '0.4s' }} />
        <path d="M70 90 L100 400 L130 90 Z" stroke="#c9a23f" strokeWidth="0.8" className="razor-stroke"
          strokeLinecap="round" opacity="0.4" style={{ animationDelay: '0.6s' }} />
      </svg>

      {/* Diagonal razor divider bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '120px',
        zIndex: 3,
        clipPath: 'polygon(0 60px, 100% 0, 100% 100%, 0 100%)',
        background: 'var(--color-surface)',
      }} />

      {/* Hero content */}
      <div className="container-custom" style={{ position: 'relative', zIndex: 2, paddingBottom: '2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0, 0, 0.2, 1] }}
          style={{ maxWidth: '950px' }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="eyebrow"
            style={{ color: 'var(--color-accent-gold)', marginBottom: '2rem' }}
          >
            Barbearia Artesanal — Est. 2018
          </motion.p>

          {/* Main headline — MASSIVE Fraunces italic */}
          <motion.h1
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={isLoaded ? { opacity: 1, clipPath: 'inset(0 0 0% 0)' } : {}}
            transition={{ delay: 0.3, duration: 1.1, ease: [0, 0, 0.2, 1] }}
            className="headline-hero"
            style={{ color: '#f4ede0', marginBottom: '1.5rem' }}
          >
            A Arte do<br />
            <span style={{
              fontFamily: "var(--font-serif)",
              fontStyle: 'italic',
              fontWeight: 700,
              color: 'var(--color-accent-gold)',
            }}>
              Corte Perfeito
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.6875rem, 0.9vw, 0.8125rem)',
              color: 'var(--color-muted)',
              letterSpacing: '0.12em',
              maxWidth: '480px',
              lineHeight: 1.7,
              marginBottom: '3rem',
            }}
          >
            BRUTALIST BARBER — PREMIUM EXPERIENCE — MULTI-LOCALIDADE
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <Link to="/contato" className="btn-gold magnetic-hover">
              Agendar Horário
            </Link>
            <Link to="/servicos" className="btn-outline magnetic-hover" style={{ borderColor: 'rgba(201,162,63,0.4)', color: 'var(--color-accent-gold)' }}>
              Ver Serviços
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          right: '3rem',
          width: 1,
          height: '48px',
          background: 'linear-gradient(to bottom, var(--color-accent-gold), transparent)',
          zIndex: 4,
        }}
      />
    </section>
  );
}
