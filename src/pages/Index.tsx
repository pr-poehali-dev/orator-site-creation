import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import AudienceSection from '@/components/sections/AudienceSection';
import ProgramSection from '@/components/sections/ProgramSection';
import TrainerSection from '@/components/sections/TrainerSection';
import BooksSection from '@/components/sections/BooksSection';
import VideoSection from '@/components/sections/VideoSection';
import PricingSection from '@/components/sections/PricingSection';
import GallerySection from '@/components/sections/GallerySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TheaterSection from '@/components/sections/TheaterSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import SignUpSection from '@/components/sections/SignUpSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <ProgramSection />
      <TrainerSection />
      <BooksSection />
      <VideoSection />
      <PricingSection />
      <GallerySection />
      <TestimonialsSection />
      <TheaterSection />
      <FAQSection />
      <SignUpSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;