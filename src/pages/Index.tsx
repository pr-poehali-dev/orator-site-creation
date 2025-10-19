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
import IndividualLessonsSection from '@/components/sections/IndividualLessonsSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import GallerySection from '@/components/sections/GallerySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import VideoTestimonialsSection from '@/components/sections/VideoTestimonialsSection';
import TheaterSection from '@/components/sections/TheaterSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import SignUpSection from '@/components/sections/SignUpSection';
import BlogSection from '@/components/sections/BlogSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import CookieConsent from '@/components/ui/CookieConsent';
import ScrollToTop from '@/components/ui/scroll-to-top';
import StructuredData from '@/components/SEO/StructuredData';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <StructuredData />
      <Header />
      <HeroSection />
      <AudienceSection />
      <AboutSection />
      <ProgramSection />
      <BooksSection />
      <TrainerSection />
      <VideoSection />
      <PricingSection />
      <IndividualLessonsSection />
      <FAQSection />
      <ScheduleSection />
      <GallerySection />
      <TestimonialsSection />
      <VideoTestimonialsSection />
      <BlogSection />
      <SignUpSection />
      <TheaterSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Index;