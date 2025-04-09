import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Shield, Cpu, Database } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    // Initial animation on page load for hero section
    const heroElement = heroRef.current;
    const leftContent = leftContentRef.current;
    const rightContent = rightContentRef.current;

    if (heroElement && leftContent && rightContent) {
      // Animate left content first
      setTimeout(() => {
        leftContent.classList.add('animate-fade-in');
        leftContent.classList.remove('opacity-0');
        leftContent.classList.add('translate-x-0');
      }, 300);

      // Then animate right content with a slight delay
      setTimeout(() => {
        rightContent.classList.add('animate-fade-in');
        rightContent.classList.remove('opacity-0');
        rightContent.classList.add('translate-x-0');
      }, 600);
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="pt-32 pb-20 relative overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-futuristic-cyan/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-futuristic-purple/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftContentRef}
            className="space-y-8 opacity-0 -translate-x-10 transition-all duration-1000"
          >
            <div className="inline-block glass-effect px-4 py-2 rounded-full">
              <span className="text-xs font-medium flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Leading Technology Solutions Provider
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Tech Solutions for the 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-futuristic-cyan to-futuristic-purple"> Digital </span>
              Future
            </h1>
            
            <p className="text-lg text-gray-300">
              Experience comprehensive ICT services with cutting-edge technology, 
              innovative solutions, and unmatched technical expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-futuristic-cyan hover:bg-futuristic-cyan/80 button-glow text-white px-8 py-6 h-auto text-lg animate-pulse-subtle">
                Request Consultation
              </Button>
              <Button variant="outline" className="border-white/30 hover:bg-white/10 group flex items-center gap-2 px-8 py-6 h-auto text-lg">
                <span>Our Services</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-500 border-2 border-background"></div>
                ))}
              </div>
              <div className="text-sm">
                <p className="text-gray-300">Trusted by <span className="text-white font-medium">100+</span> organizations</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={rightContentRef}
            className="relative opacity-0 translate-x-10 transition-all duration-1000"
          >
            <div className="absolute -z-10 inset-0 bg-gradient-radial from-futuristic-cyan/20 to-transparent opacity-70"></div>
            
            <div className="relative glass-effect rounded-2xl p-1 shadow-neon overflow-hidden hover:shadow-neon-intense transition-all duration-500">
              <div className="bg-futuristic-dark rounded-xl p-6 overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-gray-400 text-xs">Tech Consultancy</p>
                    <h3 className="text-xl font-bold">Custom Solutions</h3>
                  </div>
                  <div className="glass-effect p-2 rounded-full animate-float">
                    <Cpu size={18} className="text-green-400" />
                  </div>
                </div>
                
                <div className="glass-effect rounded-xl p-4 mb-6 hover:bg-white/5 transition-colors duration-300">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-futuristic-cyan/20 p-2 rounded-full">
                        <Shield size={16} className="text-futuristic-cyan" />
                      </div>
                      <div>
                        <p className="text-gray-200 text-sm">Cybersecurity</p>
                        <p className="text-xs text-gray-400">Advanced protection</p>
                      </div>
                    </div>
                    <span className="text-green-400 text-sm">Enterprise</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-sm text-gray-300">Core Services</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: "IT Strategy", icon: Database },
                      { name: "PMM", icon: Server },
                      { name: "Innovation", icon: Cpu }
                    ].map((service) => (
                      <div 
                        key={service.name} 
                        className="glass-effect rounded-lg p-3 text-center hover:bg-white/5 transition-all duration-300 hover:scale-105"
                      >
                        <service.icon size={16} className="mx-auto mb-1" />
                        <span className="text-xs">{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-futuristic-purple/30 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
