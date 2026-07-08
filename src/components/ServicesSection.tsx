import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const services = [
  {
    emoji: '🏳️',
    name: 'Degradê',
    desc: 'Transição perfeita dos laterais ao topo, acabamento impecável.',
    price: 'R$ 55',
  },
  {
    emoji: '🪒',
    name: 'Barba',
    desc: 'Toalha quente, navalha e produtos premium para um acabamento definido.',
    price: 'R$ 40',
  },
  {
    emoji: '✂️',
    name: 'Cabelo + Barba',
    desc: 'Combo completo: corte de cabelo com barba modelada à navalha.',
    price: 'R$ 80',
  },
  {
    emoji: '👑',
    name: 'Completo',
    desc: 'Experiência total — consultoria de estilo, hidratação e acabamento VIP.',
    price: 'R$ 120',
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="section-light"
      style={{
        padding: 'var(--space-6) 0',
        background: 'linear-gradient(180deg, var(--color-surface) 0%, #ebe3d2 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          style={{ marginBottom: 'var(--space-5)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-eyebrow)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-warm)',
              marginBottom: '0.75rem',
            }}
          >
            Serviços
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: 'var(--text-h2)',
              color: 'var(--color-text-on-dark)',
              lineHeight: 1.1,
            }}
          >
            O que fazemos de melhor
          </h2>
        </motion.div>

        <div className="grid-4">
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0, 0, 0.2, 1],
      }}
      whileHover={{ y: -4 }}
      style={{
        background: 'rgba(255, 252, 245, 0.6)',
        border: '1px solid var(--color-border)',
        padding: 'var(--space-4)',
        transition: 'box-shadow 0.3s ease, background 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(26, 22, 20, 0.08)';
        (e.currentTarget as HTMLDivElement).style.background = '#fffcf5';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLDivElement).style.background = 'rgba(255, 252, 245, 0.6)';
      }}
    >
      <span style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }}>{service.emoji}</span>
      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: 'var(--text-h3)',
          color: 'var(--color-text-on-dark)',
          marginBottom: '0.75rem',
          lineHeight: 1.1,
        }}
      >
        {service.name}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-body)',
          color: 'var(--color-muted)',
          lineHeight: 1.6,
          marginBottom: '1.5rem',
        }}
      >
        {service.desc}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-label)',
          fontWeight: 700,
          color: 'var(--color-accent-gold)',
          letterSpacing: '0.05em',
        }}
      >
        {service.price}
      </p>
    </motion.div>
  );
}
