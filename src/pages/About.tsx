import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Users, TrendingUp, BarChart3, Clock, CheckCircle } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import logo3 from "@/logo/logo3.jpeg";
// import logo2 from "@/logo/logo2.jpeg";

const About = () => {
  // Create refs for all major sections
  const heroRef = useRef(null);
  const companyRef = useRef(null);
  const missionRef = useRef(null);
  const coreValuesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    // Set up intersection observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    // Animation handler for sections
    const handleIntersection = (entries, observer) => {
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

    // Create observer
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all section refs
    [heroRef, companyRef, missionRef, coreValuesRef, whyChooseRef, teamRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-futuristic-dark text-white  overflow-x-hidden">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section 
          ref={heroRef} 
          className="relative py-16 mb-20 opacity-0 -translate-y-8 transition-all duration-1000"
        >
          <div className="absolute -right-48 top-0 w-96 h-96 bg-futuristic-cyan/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -left-48 bottom-0 w-96 h-96 bg-futuristic-purple/20 rounded-full filter blur-3xl"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lumelink</h1>
            <p className="text-xl text-gray-300 mb-8">
              Pioneering the future of leading technological solutions
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section 
          ref={companyRef} 
          className="mb-24 opacity-0 translate-y-10 transition-all duration-1000"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-futuristic-cyan/20 to-transparent"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Lumelink Technologies Limited</h2>
                <p className="text-gray-300">
                  Lumelink Technologies Limited is a leading technology solutions service provider, offering comprehensive ICT services that empower businesses with cutting-edge digital solutions. Established two years ago, we have rapidly grown into a trusted partner for organizations seeking high-quality technology solutions.
                </p>
                <p className="text-gray-300">
                  Our expertise spans across ICT hardware and software supply, telecommunications infrastructure, preventive maintenance, and a broad range of tech-driven projects.
                </p>
                
                <Button className="bg-futuristic-cyan hover:bg-futuristic-cyan/80 button-glow">
                  Learn More About Our Technology
                </Button>
              </div>
              
              <div className="relative">
                <div className="w-full h-[300px] bg-gradient-to-br from-futuristic-cyan/20 to-futuristic-purple/20 rounded-xl flex items-center justify-center transform transition-transform duration-700 hover:scale-105">
                  <div className="w-3/4 h-3/4 glass-effect rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2 gradient-text">Emerging Technologies</h3>
                      <p className="text-gray-300">Creating Digital Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section 
          ref={missionRef} 
          className="mb-24 opacity-0 translate-y-10 transition-all duration-1000"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Vision & Mission</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're committed to transforming the way people interact with their finances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-effect rounded-2xl p-8 h-full transform transition-all duration-500 hover:shadow-neon">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                To provide innovative and reliable tech support solutions that empower businesses and individuals to maximize efficiency, enhance security, and optimize digital experiences. We are committed to delivering exceptional service through expertise, responsiveness, and cutting-edge technology.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 h-full transform transition-all duration-500 hover:shadow-neon">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h3>
              <p className="text-gray-300 mb-6">
                To be the leading provider of tech support services, revolutionizing IT solutions with customer-centric innovations and fostering a seamless digital world for businesses and individuals.
              </p>
            </div>
          </div>

          <div ref={coreValuesRef} className="opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Customer-Centricity",
                  description: "We prioritize our clients' needs and strive to exceed their expectations through personalized and proactive tech support.",
                  icon: Users,
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Innovation",
                  description: "We continuously evolve by adopting emerging technologies and developing creative solutions to enhance IT efficiency.",
                  icon: TrendingUp,
                  gradient: "from-futuristic-cyan to-blue-600"
                },
                {
                  title: "Integrity",
                  description: "We uphold honesty, transparency, and ethical standards in all our interactions and services.",
                  icon: Shield,
                  gradient: "from-green-500 to-emerald-600"
                },
                {
                  title: "Reliability",
                  description: "We are committed to delivering consistent, high-quality support and solutions that our clients can trust.",
                  icon: Clock,
                  gradient: "from-amber-500 to-orange-600"
                },
                {
                  title: "Security & Compliance",
                  description: "We ensure data protection, cybersecurity, and adherence to industry standards to safeguard our clients' digital assets.",
                  icon: Shield,
                  gradient: "from-red-500 to-rose-600"
                },
                {
                  title: "Excellence",
                  description: "We strive for excellence in every service we provide, ensuring continuous improvement and customer satisfaction.",
                  icon: BarChart3,
                  gradient: "from-futuristic-purple to-purple-600"
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="transform transition-all duration-500 hover:scale-105 hover:shadow-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <FeatureCard
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                    gradient={value.gradient}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section 
          ref={whyChooseRef} 
          className="mb-24 opacity-0 translate-y-10 transition-all duration-1000"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Lumelink Technologies Limited?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the advantages that set us apart in the tech industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-8 transform transition-all duration-500 hover:shadow-neon">
              <h3 className="text-2xl font-bold mb-6">Expertise & Experience</h3>
              <p className="text-gray-300 mb-4">
                Our team comprises skilled professionals with vast experience in the tech industry.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-futuristic-cyan/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-futuristic-cyan" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Industry Leaders</h4>
                    <p className="text-sm text-gray-400">Tech experts with decades of combined experience</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-2xl p-8 transform transition-all duration-500 hover:shadow-neon">
              <h3 className="text-2xl font-bold mb-6">Quality & Reliability</h3>
              <p className="text-gray-300 mb-4">
                We provide premium products and services that meet international standards.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-futuristic-purple/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-futuristic-purple" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">ISO Certified</h4>
                    <p className="text-sm text-gray-400">Meeting the highest industry standards</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-2xl p-8 transform transition-all duration-500 hover:shadow-neon">
              <h3 className="text-2xl font-bold mb-6">Customer-Centric Approach</h3>
              <p className="text-gray-300 mb-4">
                We tailor our solutions to meet the unique needs of each client.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-blue-500" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Personalized Solutions</h4>
                    <p className="text-sm text-gray-400">Tailored to your unique needs</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-2xl p-8 transform transition-all duration-500 hover:shadow-neon">
              <h3 className="text-2xl font-bold mb-6">Future-Ready</h3>
              <p className="text-gray-300 mb-4">
                We embrace emerging technologies to help businesses stay ahead of the curve.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-green-500" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Innovative Technologies</h4>
                    <p className="text-sm text-gray-400">Staying ahead of the curve</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>


        {/* {"new section"} */}
        <section className="py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Lumelink: Your Trusted Partner in ICT Solutions
              </h2>
              <p className="text-gray-300">
              Founded just two years ago, Lumelink Technologies Limited has swiftly established itself as a go-to provider of comprehensive technology services. Our expertise covers ICT hardware and software supply, telecom infrastructure, maintenance, and transformative tech projects that drive business success.
              </p>
            </div>
            <div className="flex justify-center md:justify-end ">
              <img src={logo3} alt="Lumelink Technologies Limited" className=" shadow-glow  h-[500px] w-[2900px]" />
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section 
          ref={teamRef} 
          className="mb-20 opacity-0 translate-y-10 transition-all duration-1000"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the experts leading our technological revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sammy Otieno Onyango",
                title: "Director",
                bio: "Leading our GIS, software development, and cybersecurity initiatives with expertise in spatial data analysis.",
                education: "BSc. Geospatial Information Science"
              },
              {
                name: "Stephen Ochieng Odhiambo",
                title: "Director",
                bio: "Overseeing network design, fiber optics, and telecommunications with a focus on infrastructure reliability.",
                education: "BSc. Electrical and Telecommunications"
              },
              {
                name: "Technical Lead",
                title: "Head of Innovation",
                bio: "Drives our research and development of emerging technologies including AI and blockchain solutions.",
                education: "MS, Computer Science"
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="glass-effect rounded-2xl p-6 flex flex-col transform transition-all duration-500 hover:scale-105 hover:shadow-neon"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-futuristic-cyan to-futuristic-purple mb-4 flex items-center justify-center">
                  <Users size={30} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-futuristic-cyan mb-2">{member.title}</p>
                <p className="text-sm text-gray-300 mb-4">{member.bio}</p>
                <p className="text-xs font-medium text-gray-400 mt-auto">{member.education}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
