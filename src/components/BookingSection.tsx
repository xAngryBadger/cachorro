import { useState, type FormEvent } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function BookingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contato"
      className="section-light"
      style={{
        padding: 'var(--space-6) 0',
        background: 'linear-gradient(180deg, var(--color-surface) 0%, #ebe3d2 100%)',
        position: 'relative',
      }}
    >
      <div className="container-custom" style={{ maxWidth: '640px' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}
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
            Agendamento
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
            Reserve seu horário
          </h2>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              background: 'rgba(201, 162, 63, 0.1)',
              border: '1px solid var(--color-accent-gold)',
              padding: 'var(--space-4)',
              textAlign: 'center',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-body)',
              color: 'var(--color-text-on-dark)',
            }}
          >
            Agendamento enviado com sucesso! Entraremos em contato em breve.
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {[
              { name: 'name', label: 'Nome', type: 'text', placeholder: 'Seu nome completo', required: true },
              { name: 'phone', label: 'Telefone', type: 'tel', placeholder: '(11) 99999-0000', required: true },
            ].map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-label)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted)',
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-body)',
                    background: 'transparent',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-on-dark)',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent-gold)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="service"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-label)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}
              >
                Serviço
              </label>
              <select
                id="service"
                name="service"
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-body)',
                  background: 'transparent',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-on-dark)',
                  outline: 'none',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent-gold)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              >
                <option value="">Selecione um serviço</option>
                <option value="deg">Degradê — R$ 55</option>
                <option value="barb">Barba — R$ 40</option>
                <option value="cab">Cabelo + Barba — R$ 80</option>
                <option value="comp">Completo — R$ 120</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="date"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-label)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}
              >
                Data preferida
              </label>
              <input
                id="date"
                name="date"
                type="date"
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-body)',
                  background: 'transparent',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-on-dark)',
                  outline: 'none',
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent-gold)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-label)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}
              >
                Mensagem (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-body)',
                  background: 'transparent',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-on-dark)',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent-gold)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              />
            </div>

            {/* Gold button (magnetic-hover effect via CSS) */}
            <button
              type="submit"
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
                border: 'none',
                cursor: 'pointer',
                marginTop: '1rem',
                transition: 'background 0.3s var(--ease-circ-out)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#b8922e')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-accent-gold)')}
            >
              Enviar Agendamento
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
