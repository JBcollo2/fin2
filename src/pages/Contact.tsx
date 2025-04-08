
import React from "react";
import { Phone, Mail, MapPin, Globe, Github, Linkedin, Facebook } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeatureCard from "@/components/FeatureCard";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      description: "FutureFi Tower, 1010 Financial District, Freedom Heights"
    },
    {
      icon: Phone,
      title: "Phone Number",
      description: "+254 734 947 348"
    },
    {
      icon: Mail,
      title: "Email Address",
      description: "info@futurefi-banking.com"
    },
    {
      icon: Globe,
      title: "Working Hours",
      description: "Monday-Friday: 8am - 8pm, Online: 24/7"
    }
  ];

  const socialMediaLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "#",
      username: "FutureFi Banking"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      username: "FutureFi Banking Ltd"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "#",
      username: "futurefi-tech"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help you navigate the future of banking
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                gradient="from-futuristic-cyan to-blue-700"
              />
            ))}
          </div>
        </section>

        {/* Map and Form Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div>
            <Card className="bg-transparent border border-white/10 overflow-hidden">
              <div className="w-full h-[350px] bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                    <p className="text-gray-400 mb-4">Our headquarters location</p>
                    <MapPin className="h-16 w-16 mx-auto text-futuristic-cyan animate-pulse" />
                    <p className="mt-4 text-sm">FutureFi Tower, 1010 Financial District</p>
                    <p className="text-sm">Freedom Heights</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-futuristic-dark to-transparent"></div>
              </div>
            </Card>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Our Social Media</h3>
              <div className="flex flex-wrap gap-4">
                {socialMediaLinks.map((social, index) => (
                  <Button 
                    key={index} 
                    variant="outline"
                    className="flex items-center gap-2 border-white/20 hover:bg-white/5"
                  >
                    <social.icon size={18} />
                    {social.username}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card className="glass-effect border-0">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:border-futuristic-cyan focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:border-futuristic-cyan focus:outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:border-futuristic-cyan focus:outline-none"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:border-futuristic-cyan focus:outline-none"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-futuristic-cyan to-futuristic-purple hover:opacity-90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What are your business hours?",
                  answer: "Our physical branches are open Monday through Friday from 8am to 8pm. Our digital banking services are available 24/7/365."
                },
                {
                  question: "How quickly can I open an account?",
                  answer: "With our digital onboarding process, you can open a new account in under 5 minutes, all from the comfort of your home."
                },
                {
                  question: "Is there a waiting period for new cards?",
                  answer: "Virtual cards are available instantly upon account approval. Physical smart cards are delivered within 2-3 business days."
                },
                {
                  question: "What security measures do you have in place?",
                  answer: "We implement multi-factor authentication, biometric verification, AI fraud detection, and end-to-end encryption for all transactions."
                }
              ].map((faq, index) => (
                <div key={index} className="glass-effect rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
