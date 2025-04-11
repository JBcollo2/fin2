import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Server, Cpu, Database, Wrench, Wifi } from "lucide-react";
import logo2 from "@/logo/logo2.jpeg";
import ImageSlider from "./ImageSlider";
const Index = () => {
  const features = [
    {
      icon: Cpu,
      title: "Project Management & Maintenance (PMM)",
      description: "AI enables machines to learn and perform tasks requiring human intelligence, such as voice recognition and decision-making.",
      gradient: "from-blue-500 to-cyan-700"
    },
    {
      icon: Database,
      title: "ICT Hardware & Software Supply",
      description: "A decentralized and secure way of recording transactions, widely used in cryptocurrencies and supply chain management.",
      gradient: "from-futuristic-cyan to-blue-700"
    },
    {
      icon: Wifi,
      title: "Telecommunication Services",
      description: "The interconnection of physical devices that communicate and exchange data, like smart homes and wearable devices.",
      gradient: "from-futuristic-purple to-purple-700"
    },
    {
      icon: Wrench,
      title: "Tech Consultancy & Custom Solutions",
      description: "Enhancing production or operational processes to increase efficiency through automation in manufacturing.",
      gradient: "from-amber-500 to-orange-700"
    },
    {
      icon: Server,
      title: "Innovation & Emerging Technologies",
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


  const sliderImages = [
    { src: logo2, alt: "Lumelink Technologies Limited" },
    { src: "https://th.bing.com/th/id/OIP.t_i68xv6mRZFrX-CDUxktAHaEO?w=329&h=187&c=7&r=0&o=5&pid=1.7", alt: "Lumelink Infrastructure" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREL76GdMKfn3eiC5xfGLg5Ec173CyVC5URCQ&s", alt: "Lumelink Solutions" },
    { src: "https://th.bing.com/th/id/OIP.QrHa1hxwYdmFb91TenLjZQHaEK?w=299&h=180&c=7&r=0&o=5&pid=1.7", alt: "Lumelink Solutions" },
    { src: "https://th.bing.com/th/id/OIP.FKRg7LXGabMdEuE6aBSMegHaE7?w=258&h=180&c=7&r=0&o=5&pid=1.7", alt: "Lumelink Solutions" },
    { src: "https://th.bing.com/th/id/OIP.QrHa1hxwYdmFb91TenLjZQHaEK?w=299&h=180&c=7&r=0&o=5&pid=1.7", alt: "Lumelink Technologies Limited" },
  ]
  // Debug: Log images on mount
  useEffect(() => {
    console.log('Slider images:', sliderImages);
  }, [sliderImages]);

  return (
    <div className="min-h-screen bg-futuristic-dark text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* New Section */}
        <section className="py-24 min-h-[500px] flex items-center">
  <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between">
    <div className="text-center md:text-left mb-12 md:mb-0 md:w-2/5">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Lumelink: Crafting Digital Excellence
      </h2>
      <p className="text-gray-300 text-lg max-w-xl">
        Lumelink Technologies Limited delivers cutting-edge ICT solutions tailored to modern business needs.
        From infrastructure to innovation, we empower organizations with tools to thrive in an ever-evolving digital world.
      </p>
    </div>
    <div className="flex justify-center md:justify-end w-full md:w-3/5">
      <ImageSlider images={sliderImages} />
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
        
        {/* Achievements Section */}
        <section 
          ref={teamSectionRef}
          className="py-20 relative opacity-0 -translate-y-8 transition-all duration-1000"
        >
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Achievements & Milestones
              </h2>
              <p className="text-gray-300">
                Celebrating our journey of innovation and excellence in the tech industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="glass-effect rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-neon">
                  <h3 className="text-2xl font-bold mb-4">Industry Recognition</h3>
                  <p className="text-gray-300">
                    Awarded for excellence in ICT solutions and recognized as a leading technology service provider in the region.
                  </p>
                </div>
                
                <div className="glass-effect rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-neon">
                  <h3 className="text-2xl font-bold mb-4">Client Success</h3>
                  <p className="text-gray-300">
                    Successfully implemented solutions for over 100+ businesses, helping them achieve digital transformation goals.
                  </p>
                </div>
                
                <div className="glass-effect rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-neon">
                  <h3 className="text-2xl font-bold mb-4">Innovation Hub</h3>
                  <p className="text-gray-300">
                    Pioneering new technologies and setting industry standards in cybersecurity and digital infrastructure.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="glass-effect rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-neon">
                  <img 
                    src="https://th.bing.com/th/id/OIP.qsqdetZ60fP_CRSPnej1iQHaEL?w=626&h=353&rs=1&pid=ImgDetMain" 
                    alt="Lumelink Technologies Achievements" 
                    className="w-full h-full object-cover"
                  />
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
