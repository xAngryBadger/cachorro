import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

export function ContatoPage() {
  const formRef = useRef(null);
  const inView = useInView(formRef, { once: true, margin: '-60px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      {/* PAGE HERO */}
      <section className="section-dark-deep" style={{
        position: 'relative',
        padding: '7rem 0 3rem',
        background: 'linear-gradient(180deg, #080706 0%, var(--color-bg) 100%)',
      }}>
        <div className="noise-overlay animated-grain" />
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0, 0, 0.2, 1] }}>
            <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Contato</p>
            <h1 className="headline-hero" style={{ color: '#f4ede0', maxWidth: '900px' }}>
              Agende seu<br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700,
                color: 'var(--color-accent-gold)' }}>horário.</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
              color: 'var(--color-muted)', maxWidth: '480px', lineHeight: 1.7, marginTop: '1.5rem',
            }}>
              Escolha a unidade, o serviço e deixa o resto com a gente.
            </p>
          </motion.div>
        </div>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
          zIndex: 3, clipPath: 'polygon(0 45px, 100% 0, 100% 100%, 0 100%)',
          background: 'var(--color-surface)',
        }} />
      </section>

      {/* FORM SECTION — OFFSET LAYOUT */}
      <section className="section-light" style={{
        padding: '6rem 0',
        background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-warm) 100%)',
      }}>
        <div className="noise-overlay-light" />
        <div className="container-custom">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3rem',
            alignItems: 'start',
          }}>
            {/* LEFT — form (offset to right) */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
              style={{ gridColumn: 'span 6', gridColumnStart: 4 }}
            >
              <div style={{ marginBottom: '3rem', textAlign: 'right' }}>
                <p className="eyebrow eyebrow-warm">Agendamento</p>
                <h2 className="headline-serif" style={{
                  color: 'var(--color-text-on-dark)', fontSize: 'var(--text-h2)',
                }}>
                  Reserve seu<br />horário.
                </h2>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background: 'rgba(201, 162, 63, 0.08)',
                    border: '1px solid var(--color-accent-gold)',
                    padding: 'var(--space-5)',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                    fontSize: 'var(--text-h3)', color: 'var(--color-text-on-dark)', marginBottom: '0.75rem' }}>
                    Agendamento enviado!
                  </p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
                    color: 'var(--color-muted)' }}>
                    Entraremos em contato em até 2h para confirmar.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{
                  display: 'flex', flexDirection: 'column', gap: '1.5rem',
                }}>
                  <div>
                    <label style={{
                      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)',
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--color-muted)', display: 'block', marginBottom: '0.5rem',
                    }}>Nome completo</label>
                    <input required placeholder="Seu nome completo" style={{
                      width: '100%', padding: '1rem 1.125rem',
                      fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
                      background: 'rgba(255,252,245,0.5)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-on-dark)', outline: 'none',
                      transition: 'border-color 0.3s ease',
                    }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent-gold)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{
                        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)',
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: 'var(--color-muted)', display: 'block', marginBottom: '0.5rem',
                      }}>Telefone</label>
                      <input required placeholder="(11) 99999-0000" type="tel" style={{
                        width: '100%', padding: '1rem 1.125rem',
                        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
                        background: 'rgba(255,252,245,0.5)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-on-dark)', outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent-warm)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                      />
                    </div>
                    <div>
                      <label style={{
                        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)',
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: 'var(--color-muted)', display: 'block', marginBottom: '0.5rem',
                      }}>Data preferida</label>
                      <input required type="date" style={{
                        width: '100%', padding: '1rem 1.125rem',
                        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
                        background: 'rgba(255,252,245,0.5)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-on-dark)', outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent-warm)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{
                      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)',
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--color-muted)', display: 'block', marginBottom: '0.5rem',
                    }}>Serviço</label>
                    <select style={{
                      width: '100%', padding: '1rem 1.125rem',
                      fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
                      background: 'rgba(255,252,245,0.5)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-on-dark)', outline: 'none',
                      cursor: 'pointer', transition: 'border-color 0.3s ease',
                    }}>
                      <option value="">Selecione um serviço</option>
                      <option>Degradê — R$ 55</option>
                      <option>Barba — R$ 40</option>
                      <option>Cabelo + Barba — R$ 80</option>
                      <option>Completo VIP — R$ 120</option>
                    </select>
                  </div>
                  <div>
                    <label style={{
                      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)',
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--color-muted)', display: 'block', marginBottom: '0.5rem',
                    }}>Unidade preferida</label>
                    <select style={{
                      width: '100%', padding: '1rem 1.125rem',
                      fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
                      background: 'rgba(255,252,245,0.5)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-on-dark)', outline: 'none',
                      cursor: 'pointer',
                    }}>
                      <option>Centro — Rua dos Barbeiros, 42</option>
                      <option>Mooca — Rua da Navalha, 128</option>
                      <option>Vila Madalena — R. Aspargo, 77</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-gold magnetic-hover" style={{
                    marginTop: '1rem', width: '100%',
                    fontSize: '0.875rem', padding: '1.125rem',
                  }}>
                    Confirmar Agendamento
                  </button>
                </form>
              )}
            </motion.div>

            {/* RIGHT — contact info + map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ gridColumn: 'span 3' }}
            >
              <div style={{ position: 'sticky', top: '6rem' }}>
                <p className="eyebrow eyebrow-warm" style={{ marginBottom: '2rem' }}>Informações</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)',
                      letterSpacing: '0.15em', color: 'var(--color-accent-warm)',
                      marginBottom: '0.5rem', textTransform: 'uppercase' }}>Telefone</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
                      color: 'var(--color-text-on-dark)' }}>+55 (11) 99999-0000</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)',
                      color: 'var(--color-accent-gold)', marginTop: '0.25rem' }}>WhatsApp</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)',
                      letterSpacing: '0.15em', color: 'var(--color-accent-warm)',
                      marginBottom: '0.5rem', textTransform: 'uppercase' }}>Endereço</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
                      color: 'var(--color-text-on-dark)', lineHeight: 1.7 }}>
                      Rua dos Barbeiros, 42<br />
                      Centro — São Paulo, SP<br />
                      CEP 01000-000
                    </p>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)',
                      letterSpacing: '0.15em', color: 'var(--color-accent-warm)',
                      marginBottom: '0.5rem', textTransform: 'uppercase' }}>Horário</p>
                    {[
                      ['Seg—Sex', '09:00 — 20:00'],
                      ['Sábado', '09:00 — 18:00'],
                      ['Domingo', 'Fechado'],
                    ].map(([day, hr]) => (
                      <div key={day} style={{
                        display: 'flex', justifyContent: 'space-between',
                        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)',
                        color: 'var(--color-text-on-dark)', padding: '0.35rem 0',
                        borderBottom: '1px solid rgba(0,0,0,0.05)',
                      }}>
                        <span>{day}</span>
                        <span style={{ fontWeight: 700, color: 'var(--color-accent-warm)' }}>{hr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
