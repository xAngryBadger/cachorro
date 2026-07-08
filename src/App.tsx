import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { TestimonialSection } from './components/TestimonialSection';
import { BookingSection } from './components/BookingSection';
import { FooterSection } from './components/FooterSection';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <AboutSection />
        <TestimonialSection />
        <BookingSection />
      </main>
      <FooterSection />
    </>
  );
}

export { App };
