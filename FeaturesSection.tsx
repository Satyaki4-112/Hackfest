
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Database, FileCheck, TrendingUp } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <FileCheck className="h-12 w-12 text-eco-primary" />,
      title: "Verified Credentials",
      description: "All sustainability claims are verified through robust technological safeguards and third-party validation protocols.",
      badge: "Trust"
    },
    {
      icon: <BarChart className="h-12 w-12 text-category-environmental" />,
      title: "Real-time Metrics",
      description: "Track environmental, social, and governance performance with transparent, real-time data visualization.",
      badge: "Transparency"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-category-economic" />,
      title: "Tradeable Credits",
      description: "Convert sustainability achievements into valuable, tradeable credits with real market value.",
      badge: "Value"
    },
    {
      icon: <Database className="h-12 w-12 text-category-governance" />,
      title: "Immutable Records",
      description: "Secure, tamper-proof ledger ensures all sustainability data maintains integrity and auditability.",
      badge: "Security"
    },
  ];

  return (
    <div className="bg-neutral-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How EcoImpact Ledger Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our platform combines advanced technology with transparent reporting to create a new paradigm for corporate sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {feature.icon}
                  <Badge variant="outline" className="bg-eco-light text-eco-primary">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
