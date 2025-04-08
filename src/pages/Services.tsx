
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Server, Smartphone, CreditCard, Briefcase, BarChart3, Database, PieChart, Coins, FileText, Settings, TrendingUp } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const Services = () => {
  const bankingServices = [
    {
      icon: CreditCard,
      title: "Smart Banking Cards",
      description: "Next-generation payment cards with dynamic security features, contactless payments, and real-time notifications.",
      gradient: "from-futuristic-cyan to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "Access your accounts, make transfers, pay bills, and manage your finances from anywhere with our secure mobile app.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Multi-layered security with biometric authentication, encryption, and AI-powered fraud detection systems.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Briefcase,
      title: "Business Banking",
      description: "Specialized accounts, payment processing, and financial management tools designed for businesses of all sizes.",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: Database,
      title: "Cloud Banking Storage",
      description: "Secure digital storage for all your financial documents, statements, and transaction history.",
      gradient: "from-futuristic-purple to-purple-600"
    },
    {
      icon: PieChart,
      title: "Financial Analytics",
      description: "Advanced insights into your spending habits, income patterns, and personalized financial recommendations.",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const wealthManagementServices = [
    {
      icon: TrendingUp,
      title: "Investment Portfolio Management",
      description: "Professional management of your investment portfolio tailored to your financial goals and risk tolerance.",
      details: [
        "Customized investment strategies",
        "Regular portfolio rebalancing",
        "Risk assessment and management",
        "Tax-efficient investing approaches"
      ]
    },
    {
      icon: Coins,
      title: "Retirement Planning",
      description: "Comprehensive retirement planning services to ensure financial security during your retirement years.",
      details: [
        "Retirement income projection",
        "Social security optimization",
        "401(k) and IRA management",
        "Long-term care planning"
      ]
    },
    {
      icon: FileText,
      title: "Estate Planning",
      description: "Preserve and protect your assets for future generations with our estate planning services.",
      details: [
        "Will preparation assistance",
        "Trust establishment",
        "Legacy planning",
        "Inheritance tax strategies"
      ]
    },
    {
      icon: Settings,
      title: "Tax Optimization",
      description: "Strategic tax planning to minimize your tax burden and maximize your wealth preservation.",
      details: [
        "Tax-efficient investment strategies",
        "Capital gains planning",
        "Charitable giving strategies",
        "Tax loss harvesting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic-dark text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative py-16 mb-20">
          <div className="absolute -right-48 top-0 w-96 h-96 bg-futuristic-cyan/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -left-48 bottom-0 w-96 h-96 bg-futuristic-purple/20 rounded-full filter blur-3xl"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover our comprehensive range of futuristic banking solutions
            </p>
          </div>
        </section>

        {/* Banking Services */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Banking Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our suite of advanced banking solutions designed for the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bankingServices.map((service, index) => (
              <FeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                gradient={service.gradient}
              />
            ))}
          </div>
        </section>

        {/* Digital Banking */}
        <section className="mb-24">
          <div className="glass-effect rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-futuristic-cyan/20 to-transparent"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Digital Banking Platform</h2>
                <p className="text-gray-300">
                  Experience banking reimagined with our comprehensive digital platform that brings all your financial needs together in one seamless interface.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-futuristic-cyan/20 flex items-center justify-center flex-shrink-0">
                      <Server size={20} className="text-futuristic-cyan" />
                    </div>
                    <div>
                      <h3 className="font-medium">Cloud-Based Architecture</h3>
                      <p className="text-sm text-gray-400">Secure, scalable platform with 99.99% uptime</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-futuristic-cyan/20 flex items-center justify-center flex-shrink-0">
                      <Shield size={20} className="text-futuristic-cyan" />
                    </div>
                    <div>
                      <h3 className="font-medium">Enterprise-Grade Security</h3>
                      <p className="text-sm text-gray-400">Multi-layered protection for your financial data</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-futuristic-cyan/20 flex items-center justify-center flex-shrink-0">
                      <Smartphone size={20} className="text-futuristic-cyan" />
                    </div>
                    <div>
                      <h3 className="font-medium">Cross-Device Accessibility</h3>
                      <p className="text-sm text-gray-400">Seamless experience across all your devices</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="bg-futuristic-cyan hover:bg-futuristic-cyan/80 button-glow">
                  Explore Digital Banking
                </Button>
              </div>
              
              <div className="relative">
                <div className="w-full h-[300px] bg-gradient-to-br from-futuristic-cyan/20 to-futuristic-purple/20 rounded-xl flex items-center justify-center p-6">
                  <div className="w-full h-full glass-effect rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-8 bg-gray-800/50 flex items-center px-3 space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="font-mono text-futuristic-cyan">FutureFi Banking Platform</h3>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="h-16 bg-white/10 rounded-md"></div>
                        <div className="h-16 bg-white/10 rounded-md"></div>
                        <div className="h-16 bg-white/10 rounded-md"></div>
                        <div className="h-16 bg-white/10 rounded-md"></div>
                      </div>
                      <div className="h-8 w-1/2 bg-futuristic-cyan/50 rounded-md mt-4 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wealth Management */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Wealth Management</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Strategic financial planning and investment services to help grow and protect your wealth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {wealthManagementServices.map((service, index) => (
              <Card key={index} className="bg-transparent border border-white/10 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-futuristic-purple to-blue-700">
                      <service.icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-6">{service.description}</p>
                    
                    <div className="mt-auto">
                      <h4 className="text-sm font-medium text-futuristic-cyan mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-futuristic-cyan"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-futuristic-purple to-futuristic-cyan hover:opacity-90">
              Schedule a Wealth Management Consultation
            </Button>
          </div>
        </section>

        {/* Emerging Technologies */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Emerging Banking Technologies</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Stay ahead with our innovative technologies that are shaping the future of finance
            </p>
          </div>
          
          <div className="glass-effect rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Artificial Intelligence & Machine Learning",
                  description: "AI-powered financial assistants, automated fraud detection, and personalized banking experiences.",
                  icon: <svg className="w-12 h-12 text-futuristic-cyan" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path></svg>
                },
                {
                  title: "Blockchain Technology",
                  description: "Secure, transparent transactions with reduced fees and enhanced privacy through distributed ledger technology.",
                  icon: <svg className="w-12 h-12 text-futuristic-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                },
                {
                  title: "Internet of Things (IoT)",
                  description: "Connected financial devices enabling seamless payments, account management, and security monitoring.",
                  icon: <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 7H7v6h6V7z"></path><path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"></path></svg>
                },
                {
                  title: "Biometric Authentication",
                  description: "Advanced security using fingerprint, facial recognition, voice patterns, and behavioral biometrics.",
                  icon: <svg className="w-12 h-12 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd"></path><path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clipRule="evenodd"></path><path fillRule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                },
                {
                  title: "Quantum Computing",
                  description: "Next-generation computational power for risk assessment, market prediction, and portfolio optimization.",
                  icon: <svg className="w-12 h-12 text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path></svg>
                },
                {
                  title: "Augmented Reality Banking",
                  description: "Immersive financial management interfaces with visual data representation and interactive planning tools.",
                  icon: <svg className="w-12 h-12 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
                }
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                  <div className="mb-4">{tech.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
                  <p className="text-gray-300 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Service Packages */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Banking Packages</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Select the perfect banking package tailored to your financial needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "$0",
                description: "Perfect for everyday banking needs",
                features: [
                  "Free digital checking account",
                  "Virtual debit card",
                  "Mobile banking app access",
                  "Fee-free ATM withdrawals (in-network)",
                  "Basic financial insights"
                ],
                highlighted: false
              },
              {
                name: "Premium",
                price: "$12.99",
                description: "Enhanced features for active banking users",
                features: [
                  "Everything in Essential package",
                  "Physical smart card with tap-to-pay",
                  "No foreign transaction fees",
                  "Advanced financial analytics",
                  "Priority customer support",
                  "Savings accounts with competitive rates"
                ],
                highlighted: true
              },
              {
                name: "Elite",
                price: "$29.99",
                description: "Comprehensive banking and wealth management",
                features: [
                  "Everything in Premium package",
                  "Dedicated financial advisor",
                  "Wealth management services",
                  "Advanced investment options",
                  "Insurance discounts",
                  "Exclusive member events",
                  "Concierge banking services"
                ],
                highlighted: false
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`glass-effect rounded-2xl p-6 flex flex-col ${
                  plan.highlighted ? 'border-2 border-futuristic-cyan relative' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-futuristic-cyan text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-futuristic-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`mt-auto w-full ${
                    plan.highlighted 
                    ? 'bg-gradient-to-r from-futuristic-cyan to-futuristic-purple hover:opacity-90' 
                    : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
