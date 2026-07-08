import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ImagePlaceholder } from './ImagePlaceholder';

const galleryItems = [
  { label: 'Corte Degradê', color: '#8a5a3c' },
  { label: 'Barba Modelada', color: '#5a3a2a' },
  { label: 'Combo Premium', color: '#3a4a3f' },
  { label: 'Ambiente Loft', color: '#2a2420' },
  { label: 'Navalha Tradicional', color: '#6b4a3a' },
  { label: 'Clube VIP', color: '#4a3a2a' },
];

export function GallerySection() {
  return (
    <section
      id="galeria"
      className="section-dark"
      style={{
        padding: 'var(--space-6) 0',
        background: 'linear-gradient(180deg, #0f0d0b 0%, var(--color-bg) 100%)',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        {/* Section header */}
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
            Galeria
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
            Nosso trabalho
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.gallery-pagination' }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            style={{ paddingBottom: '3rem' }}
          >
            {galleryItems.map((item) => (
              <SwiperSlide key={item.label}>
                <div style={{ borderRadius: 4, overflow: 'hidden' }}>
                  <ImagePlaceholder label={item.label} bg={item.color} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="gallery-pagination" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }} />
        </div>
      </div>
    </section>
  );
}
