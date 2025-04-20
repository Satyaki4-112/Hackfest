
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CircleCheck, BarChart, BadgeDollarSign, FileCheck, TrendingUp } from "lucide-react";

const Credits = () => {
  // Dummy data for earned credits
  const earnedCredits = [
    {
      id: 1,
      title: "Carbon Reduction",
      category: "environmental",
      points: 120,
      description: "Reduced carbon emissions by 15% through renewable energy implementation",
      date: "Mar 15, 2025",
      icon: <CircleCheck className="h-5 w-5" />,
      status: "Verified",
    },
    {
      id: 2,
      title: "Water Conservation",
      category: "environmental",
      points: 85,
      description: "Implemented water recycling systems saving 500,000 gallons annually",
      date: "Feb 28, 2025",
      icon: <CircleCheck className="h-5 w-5" />,
      status: "Verified",
    },
    {
      id: 3,
      title: "Diversity Initiative",
      category: "social",
      points: 95,
      description: "Achieved 40% diversity in executive positions",
      date: "Mar 10, 2025",
      icon: <CircleCheck className="h-5 w-5" />,
      status: "Verified",
    },
    {
      id: 4,
      title: "Supply Chain Ethics",
      category: "governance",
      points: 65,
      description: "100% ethical sourcing certification for all suppliers",
      date: "Jan 20, 2025",
      icon: <CircleCheck className="h-5 w-5" />,
      status: "Verified",
    },
    {
      id: 5,
      title: "Community Development",
      category: "social",
      points: 83,
      description: "Funded local education programs improving literacy rates by 12%",
      date: "Mar 05, 2025",
      icon: <CircleCheck className="h-5 w-5" />,
      status: "Verified",
    },
  ];

  // Dummy data for available credit opportunities
  const availableOpportunities = [
    {
      id: 101,
      title: "Clean Energy Transition",
      category: "environmental",
      potentialPoints: 150,
      difficulty: "Medium",
      description: "Switch operations to 100% renewable energy sources",
      requirements: "Documentation of energy sources, reduction in carbon footprint",
    },
    {
      id: 102,
      title: "Zero Waste Operations",
      category: "environmental",
      potentialPoints: 120,
      difficulty: "Hard",
      description: "Achieve zero waste to landfill across all facilities",
      requirements: "Waste audit reports, recycling program documentation",
    },
    {
      id: 103,
      title: "Living Wage Certification",
      category: "social",
      potentialPoints: 100,
      difficulty: "Medium",
      description: "Ensure all employees and contractors receive living wages",
      requirements: "Compensation analysis, third-party certification",
    },
  ];

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

  const getCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Sustainability Credits</h1>
          <p className="text-gray-500 mt-1">Track your earned credits and discover new opportunities</p>
        </div>
        <div className="mt-4 md:mt-0 bg-eco-light text-eco-primary px-6 py-3 rounded-lg flex items-center text-lg font-semibold">
          <BadgeDollarSign className="mr-2 h-6 w-6" />
          <span>Total: 542 Credits</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">Environmental</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold">285</span>
              <Badge className={getCategoryColor('environmental')}>
                52.6%
              </Badge>
            </div>
            <Progress value={52.6} className="h-2 bg-gray-100" indicatorClassName="bg-category-environmental" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">Social</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold">178</span>
              <Badge className={getCategoryColor('social')}>
                32.8%
              </Badge>
            </div>
            <Progress value={32.8} className="h-2 bg-gray-100" indicatorClassName="bg-category-social" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">Governance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold">79</span>
              <Badge className={getCategoryColor('governance')}>
                14.6%
              </Badge>
            </div>
            <Progress value={14.6} className="h-2 bg-gray-100" indicatorClassName="bg-category-governance" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="earned" className="mb-8">
        <TabsList>
          <TabsTrigger value="earned">Earned Credits</TabsTrigger>
          <TabsTrigger value="opportunities">Credit Opportunities</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
        </TabsList>
        <TabsContent value="earned" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            {earnedCredits.map((credit) => (
              <Card key={credit.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className={`p-6 md:w-1/4 flex items-center ${credit.category === 'environmental' ? 'bg-category-environmental/10' : credit.category === 'social' ? 'bg-category-social/10' : 'bg-category-governance/10'}`}>
                    <div>
                      <Badge className={getCategoryColor(credit.category)}>
                        {getCategoryName(credit.category)}
                      </Badge>
                      <div className="mt-4 text-3xl font-bold">{credit.points}</div>
                      <div className="text-sm text-gray-500">Credits</div>
                      <div className="mt-4 flex items-center text-sm font-medium text-green-600">
                        {credit.icon}
                        <span className="ml-1">{credit.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:w-3/4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{credit.title}</h3>
                        <p className="text-gray-600 mb-4">{credit.description}</p>
                      </div>
                      <div className="text-sm text-gray-500">{credit.date}</div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm" className="mr-2">
                        <FileCheck className="h-4 w-4 mr-1" />
                        View Certificate
                      </Button>
                      <Button size="sm">
                        <BarChart className="h-4 w-4 mr-1" />
                        Impact Report
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="opportunities" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge className={getCategoryColor(opportunity.category)}>
                      {getCategoryName(opportunity.category)}
                    </Badge>
                    <Badge className={getDifficultyColor(opportunity.difficulty)}>
                      {opportunity.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4">{opportunity.title}</CardTitle>
                  <CardDescription>
                    Potential Credits: <span className="font-semibold">{opportunity.potentialPoints}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-sm font-medium">Requirements:</p>
                    <p className="text-sm text-gray-600">{opportunity.requirements}</p>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full">
                    Start This Initiative
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="marketplace" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Credit Marketplace
              </CardTitle>
              <CardDescription>
                Buy, sell, or trade sustainability credits with other organizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-12 text-center bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Coming Soon!</h3>
                <p className="text-gray-600 mb-6">
                  Our marketplace for trading sustainability credits will be launching in Q3 2025.
                </p>
                <Button variant="outline">
                  Join Waitlist
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Credits;
