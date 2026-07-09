import { motion } from 'motion/react';
import { ImagePlaceholder } from './ImagePlaceholder';

export function SobrePage() {
  return (
    <div>
      {/* PAGE HERO */}
      <section className="section-dark" style={{
        position: 'relative',
        padding: '7rem 0 4rem',
        background: 'linear-gradient(180deg, var(--color-bg-deep) 0%, var(--color-bg) 100%)',
      }}>
        <div className="noise-overlay animated-grain" />
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0, 0, 0.2, 1] }}>
            <p className="eyebrow">Sobre</p>
            <h1 className="headline-hero" style={{ color: '#f4ede0', maxWidth: '900px' }}>
              A história<br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700,
                color: 'var(--color-accent-gold)' }}>por trás da navalha.</span>
            </h1>
          </motion.div>
        </div>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
          zIndex: 3, clipPath: 'polygon(0 50px, 100% 0, 100% 100%, 0 100%)',
          background: 'var(--color-surface)',
        }} />
      </section>

      {/* STORY — OFFSET LAYOUT */}
      <section className="section-warm" style={{
        padding: '6rem 0',
        background: 'linear-gradient(180deg, var(--color-surface-warm) 0%, var(--color-surface) 100%)',
      }}>
        <div className="noise-overlay-light" />
        <div className="container-custom">
          <div className="grid-asymmetric">
            {/* LEFT — oversized visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
            >
              <ImagePlaceholder label="Fundador — 2018" bg="#2a3535" pattern="razor"
                style={{ height: '520px', aspectRatio: 'auto' }} />

              {/* Floating label */}
              <div style={{
                position: 'absolute', top: '-24px', right: '-24px',
                background: 'var(--color-bg)', border: '1px solid var(--color-border-subtle)',
                padding: '1rem 1.5rem',
              }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem',
                  color: 'var(--color-accent-gold)', letterSpacing: '0.2em', marginBottom: '0.25rem' }}>
                  FUNDADO EM
                </p>
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: 'italic', fontSize: '2rem',
                  color: '#f4ede0', lineHeight: 1 }}>2018</p>
              </div>
            </motion.div>

            {/* RIGHT — story text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{ paddingTop: '4rem' }}
            >
              <p className="eyebrow eyebrow-warm">Nossa história</p>
              <h2 className="headline-serif" style={{
                color: 'var(--color-text-on-dark)', marginBottom: '2rem',
                fontSize: 'var(--text-h2)',
              }}>
                Do bar ao legado.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
                  color: 'var(--color-text-on-dark)', lineHeight: 1.8, opacity: 0.85 }}>
                  Nasceu num porão de bairro em 2018. Três cadeiras, uma navalha e uma crença:
                  <strong> o corte é religião</strong>. O nome Cachorro veio da rua — do povo, da vibe, do respeito.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
                  color: 'var(--color-text-on-dark)', lineHeight: 1.8, opacity: 0.85 }}>
                  Hoje são três unidades. Cada uma com o mesmo princípio: sem pressa, sem pressão,
                  sem modelo clone. A sua cabeça, a sua assinatura.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
                  color: 'var(--color-muted-light)', lineHeight: 1.8 }}>
                  Usamos produtos importados, navalhas Sheffield e técnica de 8 anos de estrada.
                  O resultado não é negociável.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-dark" style={{
        padding: '6rem 0',
        background: 'linear-gradient(180deg, var(--color-bg) 0%, #0a0908 100%)',
      }}>
        <div className="noise-overlay" />
        <div className="container-custom">
          <div style={{ marginBottom: '4rem' }}>
            <p className="eyebrow">Equipe</p>
            <h2 className="headline-serif" style={{ color: '#f4ede0', fontSize: 'var(--text-h2)' }}>
              Os mestres da navalha.
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.25rem',
          }}>
            {[
              { role: 'Master Barber', name: 'Rafael C.', years: '8 anos' },
              { role: 'Senior Barber', name: 'Thiago A.', years: '5 anos' },
              { role: 'Barber', name: 'Bruno F.', years: '3 anos' },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0, 0, 0.2, 1] }}
                style={{
                  gridColumn: i === 1 ? 'span 4' : 'span 5',
                  gridColumnStart: i === 0 ? 1 : i === 1 ? 7 : 1,
                }}
              >
                <div style={{
                  background: 'rgba(255,252,245,0.04)',
                  border: '1px solid var(--color-border-subtle)',
                  padding: '2rem',
                }}>
                  <ImagePlaceholder label={member.name.split(' ')[0]} bg="#2a2825" pattern="dots"
                    style={{ height: '240px', aspectRatio: 'auto', marginBottom: '1.25rem' }} />
                  <p style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.5625rem',
                    letterSpacing: '0.2em', color: 'var(--color-accent-gold)',
                    marginBottom: '0.5rem',
                  }}>{member.role} — {member.years}</p>
                  <h3 style={{
                    fontFamily: "var(--font-serif)", fontStyle: 'italic', fontWeight: 700,
                    fontSize: 'var(--text-h3)', color: '#f4ede0', lineHeight: 1.1,
                  }}>{member.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
