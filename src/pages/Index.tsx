import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Server, Cpu, Database, Wrench, Wifi } from "lucide-react";
import logo2 from "@/logo/logo2.jpeg";

const Index = () => {
  const features = [
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description: "AI enables machines to learn and perform tasks requiring human intelligence, such as voice recognition and decision-making.",
      gradient: "from-blue-500 to-cyan-700"
    },
    {
      icon: Database,
      title: "Blockchain Technology",
      description: "A decentralized and secure way of recording transactions, widely used in cryptocurrencies and supply chain management.",
      gradient: "from-futuristic-cyan to-blue-700"
    },
    {
      icon: Wifi,
      title: "Internet of Things",
      description: "The interconnection of physical devices that communicate and exchange data, like smart homes and wearable devices.",
      gradient: "from-futuristic-purple to-purple-700"
    },
    {
      icon: Wrench,
      title: "Process Innovation",
      description: "Enhancing production or operational processes to increase efficiency through automation in manufacturing.",
      gradient: "from-amber-500 to-orange-700"
    },
    {
      icon: Server,
      title: "ICT Hardware & Software",
      description: "Comprehensive supply of technology infrastructure solutions tailored to your business needs.",
      gradient: "from-green-500 to-emerald-700"
    },
    {
      icon: Shield,
      title: "Cybersecurity Protection",
      description: "Advanced security solutions including ethical hacking, digital security awareness, and data protection.",
      gradient: "from-red-500 to-rose-700"
    },
  ];

  // Refs for scroll animation
  const featureSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const teamSectionRef = useRef(null);
  const featureItemsRef = useRef([]);

  // Set up refs for feature items
  featureItemsRef.current = [];
  const addToFeatureRefs = (el) => {
    if (el && !featureItemsRef.current.includes(el)) {
      featureItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Configure the intersection observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    // Animation handler for sections
    const handleSectionIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('translate-y-0');
          
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    };

    // Animation handler for feature items with staggered delay
    const handleFeatureIntersection = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Staggered animation with a small delay between each item
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('translate-y-0');
            entry.target.classList.add('scale-100');
          }, index * 100);
          
          observer.unobserve(entry.target);
        }
      });
    };

    // Create observers
    const sectionObserver = new IntersectionObserver(handleSectionIntersection, observerOptions);
    const featureObserver = new IntersectionObserver(handleFeatureIntersection, observerOptions);
    
    // Observe section elements
    if (featureSectionRef.current) sectionObserver.observe(featureSectionRef.current);
    if (ctaSectionRef.current) sectionObserver.observe(ctaSectionRef.current);
    if (teamSectionRef.current) sectionObserver.observe(teamSectionRef.current);
    
    // Observe individual features
    featureItemsRef.current.forEach(feature => {
      featureObserver.observe(feature);
    });

    return () => {
      sectionObserver.disconnect();
      featureObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-futuristic-dark text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* New Section */}
        <section className="py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Lumelink: Crafting Digital Exelence
              </h2>
              <p className="text-gray-300">
              Lumelink Technologies Limited delivers cutting-edge ICT solutions tailored to modern business needs. From infrastructure to innovation, we empower organizations with tools to thrive in an ever-evolving digital world.


              </p>
            </div>
            <div className="flex justify-center md:justify-end ">
              <img src={logo2} alt="Lumelink Technologies Limited" className=" shadow-glow  h-[400px] w-[2000px]" />
            </div>
          </div>
        </section>
        
        {/* Feature Section */}
        <section 
          ref={featureSectionRef}
          className="py-20 relative opacity-0 -translate-y-8 transition-all duration-1000"
        >
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Innovation & Emerging Technologies
              </h2>
              <p className="text-gray-300">
                At Lumelink Technologies Limited we create and implement new ideas, methods, products, or services that improve efficiency, effectiveness, or competitiveness.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  ref={addToFeatureRefs}
                  className="opacity-0 scale-95 -translate-y-4 transition-all duration-700"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    gradient={feature.gradient}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section 
          ref={ctaSectionRef}
          className="py-20 relative opacity-0 -translate-y-8 transition-all duration-1000"
        >
          <div className="absolute -left-48 top-0 w-96 h-96 bg-futuristic-purple/30 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto relative">
            <div className="glass-effect rounded-3xl p-8 md:p-16 relative overflow-hidden hover:shadow-neon transition-all duration-500">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-futuristic-cyan/20 to-transparent"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">Ready to experience cutting-edge technology solutions?</h2>
                  <p className="text-gray-300">
                    Join organizations that trust Lumelink Technologies Limited for comprehensive ICT services and solutions.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-futuristic-cyan hover:bg-futuristic-cyan/80 button-glow animate-pulse-subtle">
                      Contact Us Today
                    </Button>
                    <Button variant="outline" className="border-white/20 hover:bg-white/10 transition-all duration-300">
                      Schedule a Consultation
                    </Button>
                  </div>
                </div>
                
                <div className="relative pl-6 hidden lg:block">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-futuristic-cyan to-futuristic-purple"></div>
                  <div className="space-y-8">
                    {[
                      { label: "Expert Team", value: "Industry Leaders" },
                      { label: "Client Satisfaction", value: "99%" },
                      { label: "Service Quality", value: "ISO Certified" }
                    ].map((stat, index) => (
                      <div key={index} className="transform transition-all duration-500 hover:translate-x-2">
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
        
        {/* Our Leadership Team */}
        <section 
          ref={teamSectionRef}
          className="py-20 relative opacity-0 -translate-y-8 transition-all duration-1000"
        >
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Leadership Team
              </h2>
              <p className="text-gray-300">
                Meet the experts leading our technological innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-effect rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-neon">
                <h3 className="text-2xl font-bold mb-4">Sammy Otieno Onyango</h3>
                <p className="text-futuristic-cyan mb-4">Director</p>
                <p className="text-gray-300 italic mb-6">BSc. Geospatial Information Science</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-futuristic-cyan/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="text-futuristic-cyan" size={14} />
                    </div>
                    <span>GIS & Spatial Analysis: ArcGIS, QGIS, Remote Sensing, GPS Data Processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-futuristic-cyan/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="text-futuristic-cyan" size={14} />
                    </div>
                    <span>Software Development: C, C++, HTML, CSS, JavaScript, Front-End Web Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-futuristic-cyan/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="text-futuristic-cyan" size={14} />
                    </div>
                    <span>Cybersecurity & Data Protection: Ethical Hacking, Digital Security Awareness</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-effect rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-neon">
                <h3 className="text-2xl font-bold mb-4">Stephen Ochieng Odhiambo</h3>
                <p className="text-futuristic-cyan mb-4">Director</p>
                <p className="text-gray-300 italic mb-6">BSc. Electrical and Telecommunications</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-futuristic-purple/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="text-futuristic-purple" size={14} />
                    </div>
                    <span>Monitoring alarms and resolving first line faults</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-futuristic-purple/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="text-futuristic-purple" size={14} />
                    </div>
                    <span>Fiber Stringing, Splicing and Termination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-futuristic-purple/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="text-futuristic-purple" size={14} />
                    </div>
                    <span>Network Design, Implementation and Management</span>
                  </li>
                </ul>
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
