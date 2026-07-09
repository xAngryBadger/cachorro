import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

const services = [
  {
    name: 'Degradê',
    desc: 'Transição perfeita dos laterais ao topo. Acabamento navalha, contornos impecáveis.',
    price: 'R$ 55',
    duration: '45 min',
    bg: '#3a3528',
    pattern: 'razor',
  },
  {
    name: 'Barba',
    desc: 'Toalha quente, óleo essencial e navalha. Modelagem artesanal com precisão cirúrgica.',
    price: 'R$ 40',
    duration: '30 min',
    bg: '#2e2520',
    pattern: 'dots',
  },
  {
    name: 'Cabelo + Barba',
    desc: 'Combo definitivo. O pacote completo para quem não aceita menos que a excelência.',
    price: 'R$ 80',
    duration: '60 min',
    bg: '#332e28',
    pattern: 'grid',
  },
  {
    name: 'Completo VIP',
    desc: 'Consultoria de estilo, hidratação premium, navalha e acabamento VIP. A experiência máxima.',
    price: 'R$ 120',
    duration: '90 min',
    bg: '#1f2a2e',
    pattern: 'cross',
  },
  {
    name: 'Corte Infantil',
    desc: 'Para os mini-chefes. Paciência, técnica e um ambiente sem pressa.',
    price: 'R$ 50',
    duration: '40 min',
    bg: '#2a2825',
    pattern: 'razor',
  },
  {
    name: 'Hidratação',
    desc: 'Tratamento capilar com produtos importados. Brilho, definição e saúde.',
    price: 'R$ 35',
    duration: '25 min',
    bg: '#252428',
    pattern: 'dots',
  },
];

export function ServicosPage() {
  return (
    <div>
      {/* ==================== PAGE HERO ==================== */}
      <section className="section-dark" style={{
        position: 'relative',
        padding: '7rem 0 4rem',
        background: 'linear-gradient(180deg, var(--color-bg-deep) 0%, var(--color-bg) 100%)',
      }}>
        <div className="noise-overlay animated-grain" />
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0, 0, 0.2, 1] }}>
            <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Serviços</p>
            <h1 className="headline-hero" style={{ color: '#f4ede0', marginBottom: '2rem', maxWidth: '900px' }}>
              Cada corte, uma<br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700,
                color: 'var(--color-accent-gold)' }}>
                assinatura.
              </span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
              color: 'var(--color-muted)', maxWidth: '520px', lineHeight: 1.7,
            }}>
              Serviços pensados para quem entende que o corte é uma extensão da identidade. Sem pressa, sem pressão — só resultado.
            </p>
          </motion.div>
        </div>
        {/* Diagonal slash bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
          zIndex: 3, clipPath: 'polygon(0 0, 100% 40px, 100% 100%, 0 100%)',
          background: 'var(--color-surface)',
        }} />
      </section>

      {/* ==================== SERVICES GRID — ASYMMETRIC ==================== */}
      <section className="section-warm" style={{
        padding: '5rem 0 7rem',
        background: 'linear-gradient(180deg, var(--color-surface-warm) 0%, var(--color-surface) 100%)',
      }}>
        <div className="noise-overlay-light" />
        <div className="container-custom">
          {/* Section label */}
          <div style={{ marginBottom: '4rem' }}>
            <p className="eyebrow eyebrow-warm">Catálogo</p>
            <h2 className="headline-serif" style={{ color: 'var(--color-text-on-dark)', fontSize: 'var(--text-h2)' }}>
              Preços e serviços
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.25rem',
          }}>
            {services.map((svc, i) => {
              const layouts = [
                'col-span-6', 'col-span-5 col-start-8', 'col-span-5',
                'col-span-6 col-start-1', 'col-span-6', 'col-span-5 col-start-8'
              ];
              return (
                <ServiceCard key={svc.name} service={svc} index={i} layout={layouts[i]} />
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== BRUTALIST PRINCIPLES SECTION ==================== */}
      <section className="section-dark-deep" style={{
        padding: '6rem 0',
        background: 'linear-gradient(180deg, #0a0908 0%, var(--color-bg-deep) 100%)',
      }}>
        <div className="noise-overlay" />
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Filosofia</p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '3rem',
              alignItems: 'center',
            }}>
              <div style={{ gridColumn: 'span 6' }}>
                <h2 className="headline-serif" style={{
                  fontSize: 'clamp(3rem, 6vw, 6rem)',
                  lineHeight: 0.9,
                  color: '#f4ede0',
                  marginBottom: '2rem',
                  maxWidth: '800px',
                }}>
                  Não fazemos<br />
                  <span style={{ color: 'var(--color-accent-gold)' }}>cortes.</span><br />
                  Fazemos<br />
                  <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>marcas.</em>
                </h2>
              </div>
              <div style={{ gridColumn: 'span 4', gridColumnStart: 9 }}>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
                  color: 'var(--color-muted)', lineHeight: 1.8,
                }}>
                  Cada cliente é único. Cada boca é um projeto. Três unidades espalhadas
                  pela cidade — a mesma qualidade, o mesmo código de honra. Não cobramos
                  por minutos. Cobramos por precisão.
                </p>
                <div className="gold-line" style={{ marginTop: '2rem' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service, index, layout }: { service: typeof services[0]; index: number; layout: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0, 0, 0.2, 1] }}
      style={{
        gridColumn: layout === 'col-span-6' ? 'span 6' : layout.includes('col-start-8') ? 'span 5 / span 5' : 'span 5',
        background: 'rgba(255,252,245,0.65)',
        border: '1px solid var(--color-border)',
        padding: '2.25rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = '#fffcf5';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'rgba(255,252,245,0.65)';
      }}
    >
      <ImagePlaceholder label={service.name} bg={service.bg} pattern={service.pattern as 'razor'} />

      <div style={{ marginTop: '1.5rem' }}>
        <h3 style={{
          fontFamily: 'var(--font-serif)', fontWeight: 700, fontStyle: 'italic',
          fontSize: 'var(--text-h3)', color: 'var(--color-text-on-dark)',
          lineHeight: 1.1, marginBottom: '0.75rem',
        }}>{service.name}</h3>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
          color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '1.5rem',
        }}>{service.desc}</p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', color: 'var(--color-accent-gold)',
            letterSpacing: '0.05em',
          }}>{service.duration}</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', fontWeight: 700,
            color: 'var(--color-text-on-dark)', letterSpacing: '0.05em',
          }}>{service.price}</span>
        </div>
      </div>

      {/* Bottom gold accent */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(to right, var(--color-accent-gold), transparent)',
        opacity: 0.5,
      }} />
    </motion.div>
  );
}
