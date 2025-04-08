
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Users, TrendingUp, BarChart3, Clock, CheckCircle } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const About = () => {
  return (
    <div className="min-h-screen bg-futuristic-dark text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative py-16 mb-20">
          <div className="absolute -right-48 top-0 w-96 h-96 bg-futuristic-cyan/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -left-48 bottom-0 w-96 h-96 bg-futuristic-purple/20 rounded-full filter blur-3xl"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About FutureFi</h1>
            <p className="text-xl text-gray-300 mb-8">
              Pioneering the future of digital banking with cutting-edge technology
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="mb-24">
          <div className="glass-effect rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-futuristic-cyan/20 to-transparent"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Our Company</h2>
                <p className="text-gray-300">
                  FutureFi is a leading financial technology provider, offering comprehensive banking services with cutting-edge digital solutions. Established five years ago, we have rapidly grown into a trusted partner for individuals and organizations seeking high-quality banking solutions.
                </p>
                <p className="text-gray-300">
                  Our expertise spans across personal banking, wealth management, telecommunications infrastructure, preventive security maintenance, and a broad range of tech-driven financial projects.
                </p>
                
                <Button className="bg-futuristic-cyan hover:bg-futuristic-cyan/80 button-glow">
                  Learn More About Our Technology
                </Button>
              </div>
              
              <div className="relative">
                <div className="w-full h-[300px] bg-gradient-to-br from-futuristic-cyan/20 to-futuristic-purple/20 rounded-xl flex items-center justify-center">
                  <div className="w-3/4 h-3/4 glass-effect rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2 gradient-text">FutureFi</h3>
                      <p className="text-gray-300">Creating Digital Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Vision & Mission</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're committed to transforming the way people interact with their finances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-effect rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                To provide innovative and reliable financial solutions that empower businesses and individuals to maximize efficiency, enhance security, and optimize digital experiences. We are committed to delivering exceptional service through expertise, responsiveness, and cutting-edge technology.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-futuristic-cyan mt-1 flex-shrink-0" size={18} />
                  <span>Empowering financial freedom through technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-futuristic-cyan mt-1 flex-shrink-0" size={18} />
                  <span>Creating secure banking experiences for everyone</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-futuristic-cyan mt-1 flex-shrink-0" size={18} />
                  <span>Driving financial literacy and accessibility</span>
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h3>
              <p className="text-gray-300 mb-6">
                To be the leading provider of financial services, revolutionizing banking solutions with customer-centric innovations and fostering a seamless digital world for businesses and individuals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-futuristic-purple mt-1 flex-shrink-0" size={18} />
                  <span>Building the bank of the future, today</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-futuristic-purple mt-1 flex-shrink-0" size={18} />
                  <span>Reimagining finance for the digital age</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-futuristic-purple mt-1 flex-shrink-0" size={18} />
                  <span>Creating a world where banking is frictionless</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Customer-Centricity",
                  description: "We prioritize our clients' needs and strive to exceed their expectations through personalized and proactive financial services.",
                  icon: Users,
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Innovation",
                  description: "We continuously evolve by adopting emerging technologies and developing creative solutions to enhance financial efficiency.",
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
                  title: "Security",
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
                <FeatureCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  gradient={value.gradient}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose FutureFi?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the advantages that set us apart from traditional banking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Expertise & Experience</h3>
              <p className="text-gray-300 mb-4">
                Our team comprises skilled financial professionals with vast experience in the banking and technology industries.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-futuristic-cyan/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-futuristic-cyan" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Industry Leaders</h4>
                    <p className="text-sm text-gray-400">Financial experts with decades of combined experience</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-futuristic-cyan/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-futuristic-cyan" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Tech Innovators</h4>
                    <p className="text-sm text-gray-400">Builders of next-generation financial systems</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quality & Reliability</h3>
              <p className="text-gray-300 mb-4">
                We provide premium banking products and services that meet international standards.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-futuristic-purple/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-futuristic-purple" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">99.99% Uptime</h4>
                    <p className="text-sm text-gray-400">Banking services that never sleep</p>
                  </div>
                </li>
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

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Customer-Centric Approach</h3>
              <p className="text-gray-300 mb-4">
                We tailor our financial solutions to meet the unique needs of each client.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-blue-500" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Personalized Banking</h4>
                    <p className="text-sm text-gray-400">Solutions tailored to your financial journey</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-blue-500" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">24/7 Support</h4>
                    <p className="text-sm text-gray-400">Always there when you need assistance</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Future-Ready</h3>
              <p className="text-gray-300 mb-4">
                We embrace emerging technologies to help our clients stay ahead in their financial goals.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-green-500" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">AI-Powered Insights</h4>
                    <p className="text-sm text-gray-400">Smart recommendations for your finances</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-green-500" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Blockchain Security</h4>
                    <p className="text-sm text-gray-400">Next-generation protection for your assets</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the experts leading our financial revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Morgan",
                title: "Chief Executive Officer",
                bio: "With over 15 years in fintech, Alex leads our vision to revolutionize digital banking.",
                education: "MBA, Finance"
              },
              {
                name: "Samantha Chen",
                title: "Chief Technology Officer",
                bio: "Samantha brings expertise in AI and machine learning to transform our banking systems.",
                education: "Ph.D., Computer Science"
              },
              {
                name: "Michael Rodriguez",
                title: "Chief Financial Officer",
                bio: "Michael ensures our financial strategies align with our mission of sustainable growth.",
                education: "CPA, Financial Analysis"
              },
              {
                name: "Jordan Taylor",
                title: "Chief Security Officer",
                bio: "Jordan oversees our cutting-edge security protocols to protect client assets.",
                education: "MS, Cybersecurity"
              },
              {
                name: "Priya Sharma",
                title: "VP of Customer Experience",
                bio: "Priya designs seamless banking experiences that put customers first.",
                education: "BA, UX Design & Psychology"
              },
              {
                name: "Daniel Kim",
                title: "Director of Innovation",
                bio: "Daniel leads our R&D initiatives to stay ahead of financial technology trends.",
                education: "MS, Innovation Management"
              }
            ].map((member, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 flex flex-col">
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
