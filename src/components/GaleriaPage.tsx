import { motion } from 'motion/react';
import { ImagePlaceholder } from './ImagePlaceholder';

const galleryItems = [
  { label: 'Corte Degradê', bg: '#3a2e20', pattern: 'razor' },
  { label: 'Barba Modelada', bg: '#2e2520', pattern: 'cross' },
  { label: 'Combo Premium', bg: '#242e2a', pattern: 'dots' },
  { label: 'Ambiente Loft', bg: '#282420', pattern: 'grid' },
  { label: 'Navalha Trad.', bg: '#3a2e28', pattern: 'razor' },
  { label: 'Clube VIP', bg: '#2e2a24', pattern: 'cross' },
  { label: 'Fade Afro', bg: '#25302a', pattern: 'dots' },
  { label: 'Pompadour', bg: '#2a2825', pattern: 'grid' },
  { label: 'Barba Completa', bg: '#322e28', pattern: 'razor' },
];

const columnHeights = [
  '280px', '360px', '300px', '340px', '260px', '320px', '380px', '270px', '350px',
];

export function GaleriaPage() {
  return (
    <div>
      {/* ==================== PAGE HERO ==================== */}
      <section className="section-dark-deep" style={{
        position: 'relative',
        padding: '7rem 0 3rem',
        background: 'linear-gradient(180deg, #080706 0%, var(--color-bg) 100%)',
      }}>
        <div className="noise-overlay animated-grain" />
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0, 0, 0.2, 1] }}
          >
            <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Galeria</p>
            <h1 className="headline-hero" style={{ color: '#f4ede0', marginBottom: '2rem', maxWidth: '900px' }}>
              Nosso<br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700,
                color: 'var(--color-accent-gold)' }}>
                trabalho.
              </span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
              color: 'var(--color-muted)', maxWidth: '480px', lineHeight: 1.7,
            }}>
              Cada imagem é um reflexo da precisão que entregamos. Resultado fiel, toda vez.
            </p>
          </motion.div>
        </div>
        {/* Diagonal slash */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
          zIndex: 3, clipPath: 'polygon(0 0, 100% 30px, 100% 100%, 0 100%)',
          background: 'var(--color-bg)',
        }} />
      </section>

      {/* ==================== MASONRY GALLERY ==================== */}
      <section className="section-dark" style={{
        padding: '2rem 0 6rem',
        background: 'linear-gradient(180deg, var(--color-bg) 0%, var(--color-surface) 100%)',
      }}>
        <div className="noise-overlay" />
        <div className="container-custom">
          <div style={{
            columns: 'repeat(3, 1fr)',
            columnGap: '1rem',
          }}>
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0, 0, 0.2, 1] }}
                style={{
                  breakInside: 'avoid',
                  marginBottom: '1rem',
                }}
              >
                <ImagePlaceholder label={item.label} bg={item.bg} pattern={item.pattern as 'razor'}
                  style={{ aspectRatio: 'auto', height: columnHeights[i] }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== QUOTE BANNER ==================== */}
      <section style={{
        position: 'relative',
        padding: '5rem 0',
        background: 'var(--color-surface)',
        clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)',
      }}>
        <div className="noise-overlay-light" />
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <svg width="48" height="36" viewBox="0 0 48 36" style={{ marginBottom: '1.5rem', opacity: 0.4 }}>
              <path d="M0 36V18c0-7.2 3.6-11.4 9-12L8 0c8.4 1.2 14 7.8 14 16.4 0 7.8-4.8 12.6-11.4 13.8L20 36H0zM24 36V18c0-7.2 3.6-11.4 9-12l-1-6c8.4 1.2 14 7.8 14 16.4 0 7.8-4.8 12.6-11.4 13.8L34 36H24z"
                fill="var(--color-accent-gold)" />
            </svg>
            <p style={{
              fontFamily: "var(--font-serif)", fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              color: 'var(--color-text-on-dark)', lineHeight: 1.3,
              maxWidth: '750px', margin: '0 auto 2rem',
            }}>
              "O Cachorro não é uma barbearia. É um ritual. Você sai de lá outra pessoa."
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)',
              color: 'var(--color-accent-warm)', letterSpacing: '0.1em' }}>
              — CLIENTE VIP, 3ªUNIDADE
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
