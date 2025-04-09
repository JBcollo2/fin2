import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Cpu, Cable, HardDrive, Wrench, Code, Shield, Smartphone, Globe, Cloud, Settings, Wifi, Satellite, Router } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const Services = () => {
  const coreServices = [
    {
      icon: Server,
      title: "ICT Hardware & Software Supply",
      description: "Comprehensive IT solutions including networking equipment, computing devices, enterprise software, and power solutions.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Cpu,
      title: "Telecommunications Infrastructure",
      description: "Specialized in fiber optic rollout, structured cabling, VoIP systems, and network optimization.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Wrench,
      title: "Project Management & Maintenance",
      description: "End-to-end project execution with ongoing maintenance for long-term system reliability.",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: Code,
      title: "Tech Consultancy & Custom Solutions",
      description: "Tailored technology strategies including digital transformation and cybersecurity consulting.",
      gradient: "from-purple-500 to-fuchsia-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your digital assets and ensure compliance.",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: Cloud,
      title: "Cloud Computing Services",
      description: "Migration to cloud platforms and management of cloud infrastructure for optimal performance.",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const telecomServices = [
    {
      icon: Smartphone,
      title: "Voice Communication",
      description: "Fixed-line, mobile telephony, and VoIP solutions for seamless business communication.",
      details: [
        "Traditional landline services",
        "Cellular network solutions (2G-5G)",
        "VoIP implementation",
        "Unified communications"
      ]
    },
    {
      icon: Globe,
      title: "Internet Services",
      description: "Reliable internet connectivity solutions for businesses of all sizes.",
      details: [
        "Broadband internet via fiber/DSL",
        "Wireless internet solutions",
        "Satellite internet for remote areas",
        "Dedicated leased lines"
      ]
    },
    {
      icon: HardDrive,
      title: "Data Solutions",
      description: "Secure data communication and storage services for enterprise needs.",
      details: [
        "VPN services",
        "Cloud computing solutions",
        "Data center services",
        "Enterprise storage solutions"
      ]
    },
    {
      icon: Settings,
      title: "Network Infrastructure",
      description: "Complete network design, implementation, and optimization services.",
      details: [
        "Fiber optic rollout",
        "Network design & implementation",
        "Preventive maintenance",
        "Performance optimization"
      ]
    }
  ];

  const emergingTech = [
    {
      title: "Artificial Intelligence",
      description: "AI-powered solutions for automation, predictive analytics, and intelligent decision-making.",
      icon: <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path></svg>
    },
    {
      title: "Internet of Things (IoT)",
      description: "Connected device solutions for smart monitoring, automation, and data collection.",
      icon: <svg className="w-10 h-10 md:w-12 md:h-12 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 7H7v6h6V7z"></path><path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"></path></svg>
    },
    {
      title: "Blockchain Solutions",
      description: "Secure, transparent transaction systems and decentralized applications for business.",
      icon: <svg className="w-10 h-10 md:w-12 md:h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
    },
    {
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure and services for flexible business operations.",
      icon: <svg className="w-10 h-10 md:w-12 md:h-12 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path></svg>
    },
    {
      title: "5G Technology",
      description: "Ultra-fast connectivity solutions for next-generation network requirements.",
      icon: <svg className="w-10 h-10 md:w-12 md:h-12 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
    },
    {
      title: "Data Analytics",
      description: "Advanced data processing and visualization for actionable business insights.",
      icon: <svg className="w-10 h-10 md:w-12 md:h-12 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic-dark text-white">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 mb-12 md:mb-20">
          <div className="absolute -right-20 sm:-right-48 top-0 w-40 h-40 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full filter blur-xl sm:blur-3xl"></div>
          <div className="absolute -left-20 sm:-left-48 bottom-0 w-40 h-40 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full filter blur-xl sm:blur-3xl"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Technology Services</h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Empowering your business with cutting-edge ICT solutions and digital transformation services
            </p>
          </div>
        </section>

        {/* Core Services */}
        <section className="mb-16 md:mb-24">
          <div className="text-center mb-8 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Core Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreServices.map((service, index) => (
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

        {/* Telecom Services */}
        <section className="mb-16 md:mb-24">
          <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-blue-500/20 to-transparent"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Telecommunication Services</h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  Complete telecom solutions that enable seamless communication through voice, data, video, and digital signals for businesses and organizations.
                </p>
                
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Cable size={18} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm sm:text-base">Fiber Optic Infrastructure</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">High-speed connectivity with reliable fiber networks</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Shield size={18} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm sm:text-base">Secure Networks</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">Protected communication channels with enterprise-grade security</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Globe size={18} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm sm:text-base">Global Connectivity</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">Solutions that keep you connected locally and internationally</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="bg-blue-500 hover:bg-blue-600 button-glow text-sm sm:text-base">
                  Explore Telecom Solutions
                </Button>
              </div>
              
              <div className="relative hidden lg:block">
                <div className="w-full h-[250px] md:h-[300px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center p-4 md:p-6">
                  <div className="w-full h-full glass-effect rounded-xl flex flex-col items-center justify-center relative overflow-hidden p-4">
                    {/* Network Topology Visualization */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs text-green-400">Network Active</span>
                    </div>
                    
                    {/* Main Network Nodes */}
                    <div className="relative w-full h-full">
                      {/* Central Hub */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 rounded-full bg-blue-500/30 border-2 border-blue-400 flex items-center justify-center">
                          <Router className="text-blue-300" size={24} />
                        </div>
                      </div>
                      
                      {/* Satellite Nodes */}
                      {[0, 1, 2, 3, 4].map((i) => {
                        const angle = (i * 72) - 90; // 72 degrees apart (360/5)
                        const radius = 100;
                        const x = 50 + radius * Math.cos(angle * Math.PI / 180);
                        const y = 50 + radius * Math.sin(angle * Math.PI / 180);
                        
                        return (
                          <div 
                            key={i}
                            className="absolute"
                            style={{
                              left: `${x}px`,
                              top: `${y}px`,
                              transform: 'translate(-50%, -50%)'
                            }}
                          >
                            <div className="w-12 h-12 rounded-full bg-purple-500/30 border border-purple-400 flex items-center justify-center">
                              {i % 2 === 0 ? (
                                <Wifi className="text-purple-300" size={20} />
                              ) : (
                                <Satellite className="text-purple-300" size={20} />
                              )}
                            </div>
                          </div>
                        );
                      })}
                      
                      {/* Connection Lines */}
                      <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        {[0, 1, 2, 3, 4].map((i) => {
                          const angle = (i * 72) - 90;
                          const radius = 100;
                          const x1 = 50;
                          const y1 = 50;
                          const x2 = 50 + radius * Math.cos(angle * Math.PI / 180);
                          const y2 = 50 + radius * Math.sin(angle * Math.PI / 180);
                          
                          return (
                            <line
                              key={i}
                              x1={`${x1}%`}
                              y1={`${y1}%`}
                              x2={`${x2}%`}
                              y2={`${y2}%`}
                              stroke="rgba(96, 165, 250, 0.5)"
                              strokeWidth="2"
                              strokeDasharray="5,5"
                            />
                          );
                        })}
                      </svg>
                      
                      {/* Data Packets Animation */}
                      {[0, 1, 2].map((i) => (
                        <div 
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
                          style={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: '3s',
                            animationName: 'movePacket',
                            animationIterationCount: 'infinite'
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Status Bar */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4">
                      <span className="text-xs text-blue-300">5G Ready</span>
                      <span className="text-xs text-green-300">Latency: 12ms</span>
                      <span className="text-xs text-purple-300">99.9% Uptime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Telecom Services Details */}
        <section className="mb-16 md:mb-24">
          <div className="text-center mb-8 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Telecommunication Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
              Comprehensive communication solutions to keep your business connected
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {telecomServices.map((service, index) => (
              <Card key={index} className="bg-transparent border border-white/10 overflow-hidden">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col h-full">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6 bg-gradient-to-br from-blue-500 to-indigo-600">
                      <service.icon size={18} className="text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6">{service.description}</p>
                    
                    <div className="mt-auto">
                      <h4 className="text-xs sm:text-sm font-medium text-blue-400 mb-2 sm:mb-3">Key Features:</h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
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
          
          <div className="mt-8 sm:mt-12 text-center">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-sm sm:text-base">
              Request Telecom Consultation
            </Button>
          </div>
        </section>

        {/* Emerging Technologies */}
        <section className="mb-16 md:mb-24">
          <div className="text-center mb-8 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Emerging Technologies</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
              Innovative solutions leveraging cutting-edge technologies to future-proof your business
            </p>
          </div>
          
          <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {emergingTech.map((tech, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 sm:p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                  <div className="mb-3 sm:mb-4">{tech.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{tech.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Animation Styles - Corrected version */}
      <style>{`
        @keyframes movePacket {
          0% {
            transform: translate(-50%, -50%);
            opacity: 1;
          }
          50% {
            transform: translate(
              calc(-50% + ${Math.cos(45 * Math.PI / 180) * 50}px),
              calc(-50% + ${Math.sin(45 * Math.PI / 180) * 50}px)
            );
            opacity: 0.8;
          }
          100% {
            transform: translate(
              calc(-50% + ${Math.cos(90 * Math.PI / 180) * 100}px),
              calc(-50% + ${Math.sin(90 * Math.PI / 180) * 100}px)
            );
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;