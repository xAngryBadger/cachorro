import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: 'Melhor barbearia da região. O atendimento é impecável e o corte sempre sai perfeito.',
    name: 'Rafael M.',
    rating: 5,
  },
  {
    quote: 'Ambiente sofisticado sem ser arrogante. Me sinto em casa toda vez que venho.',
    name: 'Thiago A.',
    rating: 5,
  },
  {
    quote: 'A navalha é um ritual à parte. Vale cada centavo pela experiência premium.',
    name: 'Bruno F.',
    rating: 5,
  },
];

export function TestimonialSection() {
  const renderStars = (count: number) => '★'.repeat(count);

  return (
    <section
      className="section-dark"
      style={{
        padding: 'var(--space-6) 0',
        background: 'linear-gradient(180deg, #0a0908 0%, var(--color-bg) 100%)',
      }}
    >
      <div className="container-custom">
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-5)', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-eyebrow)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-gold)',
              marginBottom: '0.75rem',
            }}
          >
            Depoimentos
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: 'var(--text-h2)',
              color: 'var(--color-text)',
              lineHeight: 1.1,
            }}
          >
            O que dizem nossos clientes
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.testimonial-pagination' }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div
                style={{
                  background: 'rgba(42, 36, 32, 0.5)',
                  border: '1px solid rgba(201, 162, 63, 0.15)',
                  padding: 'var(--space-4)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: 'var(--text-body)',
                      color: 'var(--color-text)',
                      lineHeight: 1.7,
                      marginBottom: '1.5rem',
                    }}
                  >
                    "{t.quote}"
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-label)',
                      color: 'var(--color-accent-gold)',
                      letterSpacing: '0.08em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {renderStars(t.rating)}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                    }}
                  >
                    {t.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonial-pagination" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }} />
      </div>
    </section>
  );
}
