import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ImagePlaceholder } from './ImagePlaceholder';

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="sobre"
      className="section-light"
      style={{
        padding: 'var(--space-6) 0',
        background: 'linear-gradient(180deg, #ebe3d2 0%, var(--color-surface) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-custom">
        <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-6)' }}>
          {/* Left: image + razor stroke */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
            style={{ position: 'relative' }}
          >
            <ImagePlaceholder label="Tradição desde 2018" bg="#3a4a3f" />
            {/* Decorative razor */}
            <svg
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-30px',
                width: '60%',
                height: 'auto',
                opacity: 0.15,
              }}
              viewBox="0 0 200 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 30 Q50 10 100 30 Q150 50 190 30"
                stroke="var(--color-accent-gold)"
                strokeWidth="2"
                className="razor-stroke"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0, 0, 0.2, 1] }}
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
              Sobre Nós
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: 'var(--text-h2)',
                color: 'var(--color-text-on-dark)',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              Tradição e precisão desde 2018
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-body)',
                color: 'var(--color-muted)',
                lineHeight: 1.7,
                marginBottom: '1rem',
              }}
            >
              Mais do que uma barbearia, somos um espaço onde a cultura do cuidado masculino
              se encontra com a excelência artesanal. Cada corte é uma assinatura, cada
              barba uma tela em branco.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-body)',
                color: 'var(--color-muted)',
                lineHeight: 1.7,
              }}
            >
              Com três unidades espalhadas pela cidade, mantemos o padrão Cachorro em
              cada esquina — a mesma qualidade, o mesmo atendimento VIP.
            </p>

            {/* Gold accent line */}
            <div
              style={{
                width: '60px',
                height: 2,
                background: 'var(--color-accent-gold)',
                marginTop: '2rem',
              }}
              className="razor-stroke"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
