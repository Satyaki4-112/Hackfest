
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import CTASection from '@/components/landing/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
