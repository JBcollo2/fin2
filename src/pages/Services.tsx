import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Cpu, Cable, HardDrive, Wrench, Code, Shield, Smartphone, Globe, Cloud, Settings, Wifi, Satellite, Router } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const testimonials = [
  {
    message: "Great service and support!",
    author: "Kwame Nkrumah",
    rating: 5,
    role: "CEO, Tech Solutions Ltd"
  },
  {
    message: "Highly recommend this company.",
    author: "Amina Juma",
    rating: 5,
    role: "CTO, Digital Innovations"
  },
  {
    message: "Professional and efficient.",
    author: "Tafari Makonnen",
    rating: 4,
    role: "IT Director, Global Systems"
  },
  {
    message: "Excellent results and communication.",
    author: "Fatou Diop",
    rating: 5,
    role: "Operations Manager, Smart Tech"
  },
  {
    message: "Very impressed with their expertise.",
    author: "Chidi Okoro",
    rating: 5,
    role: "Head of IT, Future Systems"
  },
  {
    message: "Their solutions are top-notch!",
    author: "Zola Nsibande",
    rating: 4,
    role: "Technology Consultant"
  }
];

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

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-futuristic-dark text-white overflow-x-hidden">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative py-16 mb-8">
          <div className="absolute -right-48 top-0 w-96 h-96 bg-futuristic-cyan/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -left-48 bottom-0 w-96 h-96 bg-futuristic-purple/20 rounded-full filter blur-3xl"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the range of services we offer to help you achieve your goals.
            </p>
          </div>
        </section>

        {/* Services Cards */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <FeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                gradient="from-futuristic-cyan to-blue-700"
              />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Hear from our satisfied clients about their experience with Lumelink Technologies
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="glass-effect border-0 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>
                    <p className="text-gray-300 italic mb-4">"{testimonial.message}"</p>
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-futuristic-cyan">{testimonial.author}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;