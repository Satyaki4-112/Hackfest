
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <div className="py-20 eco-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join the Sustainable Business Revolution
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
          Transform your sustainability efforts into verified, valuable assets while building trust with stakeholders and contributing to a better world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-eco-primary hover:bg-white/90">
            Create Account
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Request Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
