
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShieldCheck, CreditCard, Smartphone, TrendingUp, BarChart3, Settings } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Advanced Security",
      description: "Multi-layered security architecture with biometric authentication and real-time fraud detection.",
      gradient: "from-green-500 to-emerald-700"
    },
    {
      icon: CreditCard,
      title: "Smart Cards",
      description: "Next-gen payment cards with dynamic security codes and instant push notifications.",
      gradient: "from-futuristic-cyan to-blue-700"
    },
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "Manage your finances anywhere with our award-winning mobile application.",
      gradient: "from-futuristic-purple to-fuchsia-700"
    },
    {
      icon: TrendingUp,
      title: "Wealth Management",
      description: "AI-powered investment strategies tailored to your financial goals.",
      gradient: "from-amber-500 to-orange-700"
    },
    {
      icon: BarChart3,
      title: "Financial Analytics",
      description: "Comprehensive insights and visualizations to understand your spending habits.",
      gradient: "from-blue-500 to-indigo-700"
    },
    {
      icon: Settings,
      title: "Personalization",
      description: "Customize your banking experience with flexible account settings and preferences.",
      gradient: "from-pink-500 to-rose-700"
    },
  ];

  return (
    <div className="min-h-screen bg-futuristic-dark text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Feature Section */}
        <section className="py-20 relative">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Next-Generation Banking Features
              </h2>
              <p className="text-gray-300">
                Discover the tools and features designed for the future of finance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  gradient={feature.gradient}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute -left-48 top-0 w-96 h-96 bg-futuristic-purple/30 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto relative">
            <div className="glass-effect rounded-3xl p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-futuristic-cyan/20 to-transparent"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">Ready to experience the future of banking?</h2>
                  <p className="text-gray-300">
                    Join thousands of satisfied customers who have already made the switch to FutureFi.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-futuristic-cyan hover:bg-futuristic-cyan/80 button-glow">
                      Open Free Account
                    </Button>
                    <Button variant="outline" className="border-white/20">
                      Schedule a Demo
                    </Button>
                  </div>
                </div>
                
                <div className="relative pl-6 hidden lg:block">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-futuristic-cyan to-futuristic-purple"></div>
                  <div className="space-y-8">
                    {[
                      { label: "Account Setup Time", value: "Under 5 Minutes" },
                      { label: "Customer Satisfaction", value: "97%" },
                      { label: "Fee-Free Transfers", value: "Unlimited" }
                    ].map((stat, index) => (
                      <div key={index}>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                        <p className="text-xl font-medium">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <StatsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
