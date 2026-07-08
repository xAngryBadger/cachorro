import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--color-bg)',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '6rem 2rem 4rem',
        overflow: 'hidden',
      }}
    >
      {/* Noise grain texture */}
      <div
        className="noise-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Gradient accent stripe */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '30%',
          background: 'linear-gradient(to bottom, rgba(201, 162, 63, 0.04), transparent)',
          zIndex: 0,
        }}
      />

      {/* Decorative razor SVG */}
      <svg
        style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: 'clamp(120px, 20vw, 300px)',
          height: 'auto',
          opacity: 0.08,
          zIndex: 0,
          transform: 'rotate(-15deg)',
        }}
        viewBox="0 0 200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 20 L100 380"
          stroke="#c9a23f"
          strokeWidth="2"
          className="razor-stroke"
          strokeLinecap="round"
        />
        <path
          d="M60 30 Q100 15 140 30 L130 80 Q100 70 70 80 Z"
          stroke="#c9a23f"
          strokeWidth="1.5"
          className="razor-stroke"
          strokeLinecap="round"
          style={{ animationDelay: '0.3s' }}
        />
      </svg>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          marginLeft: 'max(5%, 2rem)',
        }}
        className="clip-reveal-up"
      >
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-label)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
            marginBottom: '1.5rem',
            lineHeight: 1,
          }}
        >
          Barbearia Artesanal — Est. 2018
        </p>

        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 300,
            fontSize: 'var(--text-h1)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#f4ede0',
            marginBottom: '1.5rem',
          }}
        >
          A Arte do{' '}
          <span
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: 'italic',
              fontWeight: 700,
              color: 'var(--color-accent-gold)',
            }}
          >
            Corte Perfeito
          </span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
            color: 'var(--color-muted)',
            letterSpacing: '0.05em',
            maxWidth: '450px',
            lineHeight: 1.6,
            marginBottom: '3rem',
          }}
        >
          TRADITIONAL BARBER — PREMIUM EXPERIENCE — MULTI-LOCALIDADE
        </p>

        <a
          href="#contato"
          className="magnetic-hover"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#1a1614',
            background: 'var(--color-accent-gold)',
            padding: '1rem 2.5rem',
            textDecoration: 'none',
            borderRadius: 0,
            cursor: 'pointer',
          }}
        >
          Agendar
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          width: 1,
          height: '40px',
          background: 'linear-gradient(to bottom, var(--color-accent-gold), transparent)',
          zIndex: 2,
        }}
      />
    </section>
  );
}
