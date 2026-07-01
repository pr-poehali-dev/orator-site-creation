import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import AudienceSection from '@/components/sections/AudienceSection';
import ProgramSection from '@/components/sections/ProgramSection';
import EMDRSection from '@/components/sections/EMDRSection';
import TrainerSection from '@/components/sections/TrainerSection';
import BooksSection from '@/components/sections/BooksSection';
import VideoSection from '@/components/sections/VideoSection';
import PricingSection from '@/components/sections/PricingSection';
import IndividualLessonsSection from '@/components/sections/IndividualLessonsSection';
import QuestionsSection from '@/components/sections/QuestionsSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import FreeTrialBanner from '@/components/sections/FreeTrialBanner';
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
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-4 px-4">
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl">🎓</span>
            <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">11 июля · суббота · 13:00</span>
          </div>
          <div>
            <p className="font-bold text-lg md:text-xl leading-tight">Выпускной показ на ораторском курсе — вход свободный!</p>
            <p className="text-white/85 text-base mt-0.5">1. Выступления выпускников &nbsp;·&nbsp; 2. Спикер-баттл для всех желающих</p>
          </div>
        </div>
      </div>
      <HeroSection />
      <FreeTrialBanner />
      <ScheduleSection />
      <AudienceSection />
      <AboutSection />
      <ProgramSection />
      <EMDRSection />
      <BooksSection />
      <TrainerSection />
      <VideoSection />
      <PricingSection />
      <IndividualLessonsSection />
      <QuestionsSection />
      <FAQSection />
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