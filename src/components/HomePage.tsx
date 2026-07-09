import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { TestimonialSection } from './TestimonialSection';

export function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    window.scrollTo(0, 0);
    return () => clearTimeout(t);
  }, []);

  const services = [
    { name: 'Degradê', price: 'R$ 55' },
    { name: 'Barba', price: 'R$ 40' },
    { name: 'Cabelo + Barba', price: 'R$ 80' },
    { name: 'Completo VIP', price: 'R$ 120' },
  ];

  return (
    <div>
      {/* ======================== HERO ======================== */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--color-bg-deep)',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '0 0 4rem',
        overflow: 'hidden',
      }}>
        <div className="noise-overlay animated-grain" />

        {/* Top gold gradient */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '40%',
          background: 'linear-gradient(to bottom, rgba(201,162,63,0.06), transparent)', zIndex: 0,
        }} />

        {/* Razor blade decorative SVG */}
        <svg style={{
          position: 'absolute', top: '6%', right: '2%',
          width: 'clamp(140px, 22vw, 360px)', opacity: 0.05, zIndex: 0,
          transform: 'rotate(-14deg)',
        }} viewBox="0 0 200 400" fill="none">
          <path d="M100 15 L100 385" stroke="#c9a23f" strokeWidth="1.5" className="razor-stroke" strokeLinecap="round" />
          <path d="M55 25 Q100 5 145 25 L132 85 Q100 72 68 85 Z" stroke="#c9a23f" strokeWidth="1.5"
            className="razor-stroke" strokeLinecap="round" />
          <path d="M70 90 L100 400 L130 90 Z" stroke="#c9a23f" strokeWidth="0.8" className="razor-stroke"
            strokeLinecap="round" opacity="0.3" />
        </svg>

        {/* Diagonal transition to cream */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px',
          zIndex: 3, clipPath: 'polygon(0 60px, 100% 0, 100% 100%, 0 100%)',
          background: 'var(--color-surface)',
        }} />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2, paddingBottom: '2rem' }}>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0, 0, 0.2, 1] }} style={{ maxWidth: '900px' }}>

            <motion.p initial={{ opacity: 0, x: -20 }} animate={loaded ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7 }} className="eyebrow" style={{ marginBottom: '1.75rem' }}>
              Barbearia Artesanal — Est. 2018
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              animate={loaded ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' } : {}}
              transition={{ delay: 0.25, duration: 1.1, ease: [0, 0, 0.2, 1] }}
              className="headline-hero" style={{ color: '#f4ede0', marginBottom: '1.25rem' }}
            >
              A Arte do<br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700,
                color: 'var(--color-accent-gold)' }}>
                Corte Perfeito
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.625rem, 0.85vw, 0.75rem)',
                color: 'var(--color-muted)', letterSpacing: '0.14em',
                maxWidth: '460px', lineHeight: 1.7, marginBottom: '3rem',
              }}>
              BRUTALIST BARBER — PREMIUM EXPERIENCE — MULTI-LOCALIDADE
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/contato" className="btn-gold magnetic-hover">Agendar Horário</Link>
              <Link to="/servicos" className="btn-outline" style={{ borderColor: 'rgba(201,162,63,0.35)', color: 'var(--color-accent-gold)' }}>Ver Serviços</Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', width: 1, height: '44px',
            background: 'linear-gradient(to bottom, var(--color-accent-gold), transparent)', zIndex: 4 }} />
      </section>

      {/* ======================== SERVICES PREVIEW ======================== */}
      <section className="section-light" style={{
        padding: '5rem 0',
        background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-warm) 100%)',
        position: 'relative',
      }}>
        <div className="noise-overlay-light" />
        <div className="container-custom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: '3.5rem', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <p className="eyebrow eyebrow-warm">Serviços</p>
              <h2 className="headline-serif" style={{ color: 'var(--color-text-on-dark)', fontSize: 'var(--text-h2)' }}>
                O que oferecemos
              </h2>
            </div>
            <Link to="/servicos" className="btn-outline" style={{ borderColor: 'var(--color-accent-warm)', color: 'var(--color-accent-warm)' }}>
              Ver Tudo
            </Link>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1rem',
          }}>
            {services.map((svc, i) => {
              const colSpans = ['span 6', 'span 5', 'span 6', 'span 5'];
              const colStarts = [undefined, 8, undefined, 8];
              const topOffsets = ['0', '2rem', '0', '2rem'];
              const cardStyle: React.CSSProperties = {
                padding: '2rem',
                background: 'rgba(255,252,245,0.7)',
                border: '1px solid var(--color-border)',
                position: 'relative',
                overflow: 'hidden',
                gridColumn: colStarts[i] ? `${colStarts[i]} / ${colSpans[i]}` : colSpans[i],
                marginTop: topOffsets[i],
              };
              return (
                <motion.div
                  key={svc.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  style={cardStyle}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-serif)', fontWeight: 700, fontStyle: 'italic',
                        fontSize: 'var(--text-h3)', color: 'var(--color-text-on-dark)',
                        lineHeight: 1.1, marginBottom: '0.5rem',
                      }}>{svc.name}</h3>
                      <p style={{
                        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
                        color: 'var(--color-muted)', lineHeight: 1.6,
                      }}>
                        Acabamento premium com produtos artesanais.
                      </p>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', fontWeight: 700,
                      color: 'var(--color-accent-gold)', letterSpacing: '0.05em', whiteSpace: 'nowrap',
                    }}>{svc.price}</span>
                  </div>
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
                    background: 'linear-gradient(to right, var(--color-accent-gold), transparent)',
                    opacity: 0.4,
                  }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================== TESTIMONIALS ======================== */}
      <TestimonialSection />

      {/* ======================== CTA BANNER — FRAUNCES GIANT ======================== */}
      <section style={{
        position: 'relative',
        padding: '6rem 0',
        background: 'var(--color-bg)',
        overflow: 'hidden',
        clipPath: 'polygon(0 0, 100% 4%, 100% 96%, 0 100%)',
      }}>
        <div className="noise-overlay" />
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow" style={{ marginBottom: '2rem' }}>Agende Agora</p>
            <h2 className="headline-serif" style={{
              fontSize: 'clamp(3rem, 7vw, 7rem)',
              color: 'var(--color-accent-gold)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              marginBottom: '2.5rem',
            }}>
              Deixe o<br />Cachorro<br />trabalhar.
            </h2>
            <Link to="/contato" className="btn-gold magnetic-hover" style={{ fontSize: '0.9375rem', padding: '1.25rem 3.5rem' }}>
              Agendar Horário
            </Link>
          </motion.div>
        </div>

        <svg style={{
          position: 'absolute', top: 0, left: '10%', width: '90%', height: '100%',
          opacity: 0.03, pointerEvents: 'none',
        }} viewBox="0 0 800 200" preserveAspectRatio="none">
          <path d="M0 100 L400 0 L800 100" stroke="#c9a23f" strokeWidth="1" fill="none" />
          <path d="M0 120 L400 20 L800 120" stroke="#c9a23f" strokeWidth="0.5" fill="none" />
        </svg>
      </section>
    </div>
  );
}
