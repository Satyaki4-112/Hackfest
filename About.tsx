
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CircleCheck, TrendingUp, FileCheck, Database } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Emma Rodriguez",
      title: "CEO & Co-Founder",
      bio: "Former sustainability director with 15+ years in ESG strategy and implementation.",
      avatar: "ER"
    },
    {
      name: "Jamal Clark",
      title: "CTO & Co-Founder",
      bio: "Blockchain pioneer with background in environmental data systems and verification protocols.",
      avatar: "JC"
    },
    {
      name: "Sophia Chen",
      title: "Chief Sustainability Officer",
      bio: "Environmental scientist specializing in metrics development and impact assessment.",
      avatar: "SC"
    },
    {
      name: "Marcus Okonkwo",
      title: "VP of Partnerships",
      bio: "Built strategic alliances across industries to drive adoption of sustainability standards.",
      avatar: "MO"
    }
  ];

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
        <p className="text-xl text-gray-600 mb-8">
          We're creating a world where corporate sustainability is transparent, accountable, and genuinely impactful through our innovative credits system.
        </p>
        <div className="relative">
          <div className="absolute inset-0 bg-eco-gradient opacity-10 rounded-xl"></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-left">
            <div className="flex items-start">
              <div className="h-12 w-12 rounded-full eco-gradient flex items-center justify-center flex-shrink-0 mr-4">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <p className="text-lg font-medium mb-2">
                  "Our vision is to transform how businesses measure, report, and are rewarded for genuine sustainability progress. By creating a common language of verifiable credits, we help translate good intentions into measurable impact."
                </p>
                <p className="text-gray-600 italic">— Emma Rodriguez, CEO & Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="h-2 bg-category-environmental"></div>
            <CardContent className="pt-6">
              <div className="flex items-start">
                <div className="bg-category-environmental/10 p-3 rounded-full mr-4">
                  <CircleCheck className="h-6 w-6 text-category-environmental" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                  <p className="text-gray-600">
                    We believe full transparency is essential for trust. All claims, metrics, and credits in our system are verifiable, auditable, and publicly accessible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="h-2 bg-category-social"></div>
            <CardContent className="pt-6">
              <div className="flex items-start">
                <div className="bg-category-social/10 p-3 rounded-full mr-4">
                  <TrendingUp className="h-6 w-6 text-category-social" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Accountability</h3>
                  <p className="text-gray-600">
                    We hold ourselves and our partners to the highest standards of ethical behavior, verification, and impact measurement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="h-2 bg-category-governance"></div>
            <CardContent className="pt-6">
              <div className="flex items-start">
                <div className="bg-category-governance/10 p-3 rounded-full mr-4">
                  <FileCheck className="h-6 w-6 text-category-governance" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Measurable Impact</h3>
                  <p className="text-gray-600">
                    We focus on real-world outcomes, not just good intentions. Every credit in our system represents verified, tangible positive change.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="h-2 bg-category-economic"></div>
            <CardContent className="pt-6">
              <div className="flex items-start">
                <div className="bg-category-economic/10 p-3 rounded-full mr-4">
                  <Database className="h-6 w-6 text-category-economic" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Systemic Change</h3>
                  <p className="text-gray-600">
                    We're not satisfied with incremental improvements. Our platform is designed to drive transformational shifts in how businesses operate.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <p className="text-lg mb-4">
              EcoImpact Ledger was born from a moment of frustration. In 2022, our founders, Emma Rodriguez and Jamal Clark, were working on sustainability initiatives at different organizations when they both encountered the same problem: despite good intentions, it was nearly impossible to objectively measure, compare, and reward genuine sustainability efforts.
            </p>
            <p className="text-lg mb-4">
              Traditional sustainability reporting was rife with inconsistencies, greenwashing, and complexity. Corporate claims were difficult to verify, metrics were incomparable across industries, and companies had little financial incentive to pursue ambitious goals.
            </p>
            <p className="text-lg">
              Emma and Jamal envisioned a new approach: a universal system of sustainability credits backed by rigorous verification and blockchain technology. They assembled a team of environmental scientists, financial experts, and technologists to build what would become EcoImpact Ledger—a platform that transforms abstract sustainability goals into concrete, valuable, tradeable assets.
            </p>
          </div>
          <div className="bg-eco-light p-6 rounded-xl">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500">Founded</p>
                <p className="text-xl font-semibold">2022</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-gray-500">Headquarters</p>
                <p className="text-xl font-semibold">San Francisco, CA</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-gray-500">Companies on Platform</p>
                <p className="text-xl font-semibold">175+</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-gray-500">Total Credits Issued</p>
                <p className="text-xl font-semibold">235,000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 rounded-full eco-gradient mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">{member.avatar}</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-eco-primary font-medium mb-3">{member.title}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-eco-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          We're always looking for talented individuals and organizations who share our vision of a more sustainable, transparent business ecosystem.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-eco-primary hover:bg-eco-primary/90">
            Join Our Team
          </Button>
          <Button size="lg" variant="outline" className="border-eco-primary text-eco-primary hover:bg-eco-light">
            Partner With Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
