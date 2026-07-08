export function FooterSection() {
  return (
    <footer
      className="section-dark"
      style={{
        background: 'linear-gradient(180deg, #080706 0%, var(--color-bg) 100%)',
        padding: 'var(--space-6) 0 var(--space-4)',
        borderTop: '1px solid rgba(201, 162, 63, 0.1)',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-5)',
            marginBottom: 'var(--space-5)',
          }}
        >
          {/* Brand column */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.875rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-gold)',
                marginBottom: '1rem',
              }}
            >
              BARBEARIA
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-body)',
                color: 'var(--color-muted)',
                lineHeight: 1.6,
                maxWidth: '280px',
              }}
            >
              Luxo-artesanal para quem entende que o corte é uma extensão da identidade.
            </p>
          </div>

          {/* Hours column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-label)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-gold)',
                marginBottom: '1rem',
              }}
            >
              Horários
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <HourRow days="Seg—Sex" hours="09:00 — 20:00" />
              <HourRow days="Sábado" hours="09:00 — 18:00" />
              <HourRow days="Dom/Feriado" hours="Fechado" />
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-label)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-gold)',
                marginBottom: '1rem',
              }}
            >
              Contato
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <ContactLink href="tel:+5511999990000">+55 (11) 99999-0000</ContactLink>
              <ContactLink href="#contato">Rua dos Barbeiros, 42 — Centro</ContactLink>
            </ul>
          </div>

          {/* Social column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-label)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-gold)',
                marginBottom: '1rem',
              }}
            >
              Redes
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <ContactLink href="#">Instagram</ContactLink>
              <ContactLink href="#">WhatsApp</ContactLink>
              <ContactLink href="#">TikTok</ContactLink>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'linear-gradient(to right, transparent, var(--color-border), transparent)',
            marginBottom: 'var(--space-3)',
            opacity: 0.3,
          }}
        />

        {/* Copyright */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-label)',
            color: 'var(--color-muted)',
            letterSpacing: '0.05em',
            textAlign: 'center',
          }}
        >
          © 2025 Cachorro Barbearia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function HourRow({ days, hours }: { days: string; hours: string }) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-label)',
        color: 'var(--color-muted)',
        letterSpacing: '0.03em',
        gap: '2rem',
      }}
    >
      <span>{days}</span>
      <span style={{ color: 'var(--color-text)', fontWeight: 700 }}>{hours}</span>
    </li>
  );
}

function ContactLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-label)',
          color: 'var(--color-muted)',
          textDecoration: 'none',
          transition: 'color 0.2s',
          letterSpacing: '0.03em',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-gold)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
      >
        {children}
      </a>
    </li>
  );
}
