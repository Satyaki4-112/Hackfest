
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="eco-pattern absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-eco-primary">EcoImpact</span> Ledger
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
              The next generation platform for transparent, verified tracking and trading of sustainability credits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-eco-primary hover:bg-eco-primary/90 text-white px-8 py-6 text-lg rounded-lg">
                Get Started
              </Button>
              <Button variant="outline" className="bg-transparent border-eco-primary text-eco-primary hover:bg-eco-light px-8 py-6 text-lg rounded-lg">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="mt-16 md:mt-24 w-full animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden credit-card">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-2xl font-semibold text-eco-primary">Sustainability Credits</div>
                  <div className="text-xl font-medium bg-eco-light text-eco-primary px-3 py-1 rounded-full">
                    542 Points
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  <div className="bg-category-environmental/10 p-4 rounded-lg">
                    <div className="text-category-environmental font-medium mb-1">Environmental</div>
                    <div className="text-xl font-bold">285 pts</div>
                    <div className="text-sm text-gray-500">CO₂ reduction, renewable energy</div>
                  </div>
                  <div className="bg-category-social/10 p-4 rounded-lg">
                    <div className="text-category-social font-medium mb-1">Social</div>
                    <div className="text-xl font-bold">178 pts</div>
                    <div className="text-sm text-gray-500">Fair labor, community impact</div>
                  </div>
                  <div className="bg-category-governance/10 p-4 rounded-lg">
                    <div className="text-category-governance font-medium mb-1">Governance</div>
                    <div className="text-xl font-bold">79 pts</div>
                    <div className="text-sm text-gray-500">Ethics, transparency</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-eco-primary/20 to-eco-tertiary/20 p-4 text-center text-eco-primary font-medium">
                Verified • Transparent • Tradeable
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
