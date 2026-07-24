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
import ApplicationModal from '@/components/ApplicationModal';
import { useState } from 'react';

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <StructuredData />
      <Header />
      <HeroSection />
      <div
        className="bg-gradient-to-r from-primary to-secondary text-white py-4 px-4 cursor-pointer hover:opacity-95 transition-opacity"
        onClick={() => setShowModal(true)}
      >
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-3xl">🎓</span>
            <span className="bg-white/20 text-white text-base font-bold px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap">03 августа · 19:00</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-xl md:text-2xl leading-tight">Первое занятие нового потока ораторского курса!</p>
            <p className="text-white/85 text-lg mt-1">Можно прийти как на пробное занятие — бесплатно · Коммунаров, 266, офис 45</p>
          </div>
          <div className="flex-shrink-0 bg-white/20 border border-white/30 text-white text-lg font-bold px-6 py-2.5 rounded-full hover:bg-white/30 transition-colors whitespace-nowrap">
            Записаться →
          </div>
        </div>
      </div>
      <ApplicationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        courseName="Первое занятие нового потока (бесплатное пробное)"
        courseDate="03 августа, 19:00"
      />
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