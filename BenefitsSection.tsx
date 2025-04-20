
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const BenefitsSection: React.FC = () => {
  return (
    <div className="py-24 bg-eco-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits for All Stakeholders</h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-eco-primary">For Businesses</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-eco-primary mr-2">✓</span>
                    <span>Quantifiable return on sustainability investments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-primary mr-2">✓</span>
                    <span>Simplified, standardized reporting process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-primary mr-2">✓</span>
                    <span>Competitive advantage through transparent credentials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eco-primary mr-2">✓</span>
                    <span>New revenue streams from credit trading</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-water-primary">For Investors</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-water-primary mr-2">✓</span>
                    <span>Verified ESG metrics for due diligence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-water-primary mr-2">✓</span>
                    <span>Comparable data across industries and companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-water-primary mr-2">✓</span>
                    <span>Risk reduction through transparency</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-category-social">For Consumers & Communities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-category-social mr-2">✓</span>
                    <span>Visibility into corporate sustainability claims</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-category-social mr-2">✓</span>
                    <span>Ability to support genuinely sustainable businesses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-category-social mr-2">✓</span>
                    <span>Community impact tracking and verification</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Button className="mt-8 bg-eco-primary hover:bg-eco-primary/90">
              Start Your Sustainability Journey
            </Button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-eco-secondary text-white">NZ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">NatureZen Inc.</p>
                      <p className="text-sm text-gray-500">Tech Sector</p>
                    </div>
                  </div>
                  <div className="bg-eco-light text-eco-primary rounded-md p-2 text-center font-semibold">
                    +143 Credits in Q2
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-category-social text-white">GF</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Green Futures LLC</p>
                      <p className="text-sm text-gray-500">Energy Sector</p>
                    </div>
                  </div>
                  <div className="bg-water-light text-water-primary rounded-md p-2 text-center font-semibold">
                    87% Water Reduction
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-category-governance text-white">SP</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Sustainable Partners</p>
                      <p className="text-sm text-gray-500">Manufacturing</p>
                    </div>
                  </div>
                  <div className="bg-category-governance/10 text-category-governance rounded-md p-2 text-center font-semibold">
                    Transparency Leader
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-category-economic text-white">EC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">EcoCommerce</p>
                      <p className="text-sm text-gray-500">Retail</p>
                    </div>
                  </div>
                  <div className="bg-earth-light text-earth-primary rounded-md p-2 text-center font-semibold">
                    100% Ethical Sourcing
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-eco-primary text-white p-4 rounded-lg shadow-lg hidden lg:block">
              <p className="font-medium">Credits Market Cap</p>
              <p className="text-2xl font-bold">$3.7B</p>
              <p className="text-sm opacity-80">+27% YoY Growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
