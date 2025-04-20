
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, BarChart, FileCheck, Link } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy data for companies
  const companiesData = [
    {
      id: 1,
      name: "NatureZen Inc.",
      industry: "Technology",
      location: "San Francisco, CA",
      employees: "1,000-5,000",
      score: 89,
      totalCredits: 668,
      yearFounded: 2010,
      about: "NatureZen develops software solutions that help businesses reduce their environmental impact through AI-powered optimization.",
      highlights: [
        "Achieved carbon neutrality in 2023",
        "100% renewable energy across all operations",
        "Reduced water consumption by 45% since 2020"
      ],
      initiatives: [
        { name: "Zero E-Waste Program", category: "environmental" },
        { name: "Inclusive Hiring Initiative", category: "social" },
        { name: "Supply Chain Transparency", category: "governance" }
      ]
    },
    {
      id: 2,
      name: "Green Futures LLC",
      industry: "Energy",
      location: "Austin, TX",
      employees: "500-1,000",
      score: 85,
      totalCredits: 637,
      yearFounded: 2015,
      about: "Green Futures is a renewable energy company specializing in scalable solar and wind solutions for businesses and communities.",
      highlights: [
        "Powers over 250,000 homes with clean energy",
        "Reduced installation costs by 35% through innovation",
        "Created 1,200 green jobs in underserved communities"
      ],
      initiatives: [
        { name: "Community Solar Projects", category: "environmental" },
        { name: "Energy Equality Program", category: "social" },
        { name: "Transparent Pricing Initiative", category: "governance" }
      ]
    },
    {
      id: 3,
      name: "Sustainable Partners",
      industry: "Manufacturing",
      location: "Detroit, MI",
      employees: "5,000-10,000",
      score: 82,
      totalCredits: 615,
      yearFounded: 2008,
      about: "Sustainable Partners manufactures eco-friendly products using circular economy principles and closed-loop production systems.",
      highlights: [
        "Zero waste to landfill since 2021",
        "Upcycled 750 tons of plastic waste annually",
        "Reduced product carbon footprint by 60%"
      ],
      initiatives: [
        { name: "Closed Loop Manufacturing", category: "environmental" },
        { name: "Worker Well-being Program", category: "social" },
        { name: "Ethical Materials Sourcing", category: "governance" }
      ]
    },
    {
      id: 4,
      name: "EcoCommerce",
      industry: "Retail",
      location: "Seattle, WA",
      employees: "1,000-5,000",
      score: 78,
      totalCredits: 585,
      yearFounded: 2012,
      about: "EcoCommerce is an online marketplace exclusively for sustainable products, with rigorous certification requirements for sellers.",
      highlights: [
        "Carbon-offset shipping for all orders",
        "Plastic-free packaging mandate",
        "2% of revenue directed to environmental NGOs"
      ],
      initiatives: [
        { name: "Sustainable Packaging Alliance", category: "environmental" },
        { name: "Artisan Partner Program", category: "social" },
        { name: "Product Sustainability Ratings", category: "governance" }
      ]
    },
    {
      id: 5,
      name: "BioInnovate",
      industry: "Healthcare",
      location: "Boston, MA",
      employees: "500-1,000",
      score: 75,
      totalCredits: 563,
      yearFounded: 2017,
      about: "BioInnovate develops biodegradable medical supplies and equipment to reduce healthcare's environmental impact without compromising care quality.",
      highlights: [
        "Reduced hospital plastic waste by 32% in partner facilities",
        "Fully biodegradable packaging for all products",
        "Emission-free production facilities"
      ],
      initiatives: [
        { name: "Healthcare Waste Reduction", category: "environmental" },
        { name: "Affordable Solutions Program", category: "social" },
        { name: "Transparent Clinical Testing", category: "governance" }
      ]
    }
  ];

  // Filter companies based on search query
  const filteredCompanies = companiesData.filter(company => 
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'environmental':
        return 'bg-category-environmental/10 text-category-environmental';
      case 'social':
        return 'bg-category-social/10 text-category-social';
      case 'governance':
        return 'bg-category-governance/10 text-category-governance';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const getAvatarColor = (id: number) => {
    const colors = ['bg-eco-primary', 'bg-category-social', 'bg-category-governance', 'bg-category-economic', 'bg-water-primary'];
    return colors[id % colors.length];
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Company Directory</h1>
          <p className="text-gray-500 mt-1">Explore companies leading in sustainability</p>
        </div>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          className="pl-10"
          placeholder="Search companies by name, industry, or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-8">
        {filteredCompanies.map((company) => (
          <Card key={company.id} className="overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 p-6 bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <Avatar className={`h-14 w-14 mr-4 ${getAvatarColor(company.id)}`}>
                    <AvatarFallback className="text-white">{getInitials(company.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{company.name}</h3>
                    <p className="text-gray-500">{company.industry}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Sustainability Score</span>
                    <span className="font-semibold">{company.score}/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-eco-primary h-2 rounded-full"
                      style={{ width: `${company.score}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Total Credits:</span>
                    <span className="font-medium">{company.totalCredits}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Location:</span>
                    <span>{company.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Employees:</span>
                    <span>{company.employees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Founded:</span>
                    <span>{company.yearFounded}</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3 p-6">
                <Tabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-6">
                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-2">About</h4>
                      <p className="text-gray-600">{company.about}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-3">Sustainability Highlights</h4>
                      <ul className="space-y-2">
                        {company.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start bg-eco-light rounded-md p-2">
                            <span className="text-eco-primary mr-2">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="initiatives" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {company.initiatives.map((initiative, index) => (
                        <Card key={index}>
                          <CardHeader className="pb-2">
                            <Badge className={getCategoryColor(initiative.category)}>
                              {initiative.category.charAt(0).toUpperCase() + initiative.category.slice(1)}
                            </Badge>
                          </CardHeader>
                          <CardContent>
                            <h5 className="font-medium">{initiative.name}</h5>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reports" className="mt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <FileCheck className="h-5 w-5 text-gray-500 mr-3" />
                          <span>Annual Sustainability Report 2024</span>
                        </div>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <BarChart className="h-5 w-5 text-gray-500 mr-3" />
                          <span>ESG Performance Data 2024</span>
                        </div>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="flex justify-end mt-6 space-x-4">
                  <Button variant="outline" className="flex items-center">
                    <Link className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                  <Button>
                    View Full Profile
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No companies found matching your search criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setSearchQuery('')}
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Companies;
