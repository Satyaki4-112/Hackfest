
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, CircleCheck, TrendingUp, BadgeDollarSign } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  // Dummy data for the charts
  const creditDistributionData = [
    { name: 'Environmental', value: 285, color: '#2E8B57' },
    { name: 'Social', value: 178, color: '#4169E1' },
    { name: 'Governance', value: 79, color: '#8A2BE2' },
  ];

  const monthlyCreditsData = [
    { name: 'Jan', environmental: 20, social: 15, governance: 10 },
    { name: 'Feb', environmental: 25, social: 18, governance: 12 },
    { name: 'Mar', environmental: 30, social: 20, governance: 15 },
    { name: 'Apr', environmental: 32, social: 22, governance: 14 },
    { name: 'May', environmental: 35, social: 25, governance: 16 },
    { name: 'Jun', environmental: 40, social: 30, governance: 18 },
  ];

  const companyRankingsData = [
    { name: 'NatureZen Inc.', score: 89, industry: 'Technology' },
    { name: 'Green Futures LLC', score: 85, industry: 'Energy' },
    { name: 'Sustainable Partners', score: 82, industry: 'Manufacturing' },
    { name: 'EcoCommerce', score: 78, industry: 'Retail' },
    { name: 'BioInnovate', score: 75, industry: 'Healthcare' },
  ];

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Sustainability Dashboard</h1>
          <p className="text-gray-500 mt-1">Track, analyze, and optimize your sustainability performance</p>
        </div>
        <div className="mt-4 md:mt-0 bg-eco-light text-eco-primary px-4 py-2 rounded-lg flex items-center">
          <TrendingUp className="mr-2 h-5 w-5" />
          <span className="font-semibold">Total Credits: 542</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Environmental Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="mr-4 rounded-full p-2 bg-category-environmental/10">
                <CircleCheck className="h-6 w-6 text-category-environmental" />
              </div>
              <div>
                <div className="text-2xl font-bold">285</div>
                <div className="text-xs text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12% from last month
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Social Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="mr-4 rounded-full p-2 bg-category-social/10">
                <CircleCheck className="h-6 w-6 text-category-social" />
              </div>
              <div>
                <div className="text-2xl font-bold">178</div>
                <div className="text-xs text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8% from last month
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Governance Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="mr-4 rounded-full p-2 bg-category-governance/10">
                <CircleCheck className="h-6 w-6 text-category-governance" />
              </div>
              <div>
                <div className="text-2xl font-bold">79</div>
                <div className="text-xs text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +5% from last month
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="environmental">Environmental</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="h-5 w-5 mr-2 text-gray-500" />
                  Credit Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={creditDistributionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {creditDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-gray-500" />
                  Monthly Credits Earned
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={monthlyCreditsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="environmental" name="Environmental" fill="#2E8B57" />
                    <Bar dataKey="social" name="Social" fill="#4169E1" />
                    <Bar dataKey="governance" name="Governance" fill="#8A2BE2" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BadgeDollarSign className="h-5 w-5 mr-2 text-gray-500" />
                Top Performing Companies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Company</th>
                      <th className="text-left py-3 px-4">Industry</th>
                      <th className="text-left py-3 px-4">Sustainability Score</th>
                      <th className="text-left py-3 px-4">Total Credits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {companyRankingsData.map((company, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{company.name}</td>
                        <td className="py-3 px-4 text-gray-600">{company.industry}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                              <div
                                className="bg-eco-primary h-2 rounded-full"
                                style={{ width: `${company.score}%` }}
                              ></div>
                            </div>
                            <span>{company.score}/100</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-medium">{Math.round(company.score * 7.5)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="environmental">
          <Card>
            <CardHeader>
              <CardTitle>Environmental Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">Detailed environmental metrics will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Social Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">Detailed social metrics will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="governance">
          <Card>
            <CardHeader>
              <CardTitle>Governance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">Detailed governance metrics will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
