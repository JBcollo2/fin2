
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const chartData = [
  { name: "Jan", value: 2400 },
  { name: "Feb", value: 1398 },
  { name: "Mar", value: 9800 },
  { name: "Apr", value: 3908 },
  { name: "May", value: 4800 },
  { name: "Jun", value: 3800 },
  { name: "Jul", value: 4300 },
];

const statsData = [
  { label: "Active Users", value: "2.4M+", change: "+14%" },
  { label: "Transactions", value: "$2.8B", change: "+27%" },
  { label: "Customer Rating", value: "4.9/5", change: "+0.3" },
];

const StatsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by Advanced Analytics
          </h2>
          <p className="text-gray-300">
            Our platform provides real-time insights and predictive analytics to help you make better financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-futuristic-blue border-white/10 col-span-1 lg:col-span-2 overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Financial Growth</CardTitle>
              <CardDescription>Monthly transaction volume</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#475569" />
                  <YAxis stroke="#475569" />
                  <CartesianGrid stroke="#1E293B" strokeDasharray="3 3" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#0F172A", 
                      borderColor: "#06B6D4",
                      borderRadius: "8px" 
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#06B6D4" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="glass-effect rounded-xl">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-6">Key Metrics</h3>
              <div className="space-y-8">
                {statsData.map((stat) => (
                  <div key={stat.label} className="flex justify-between items-end border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
