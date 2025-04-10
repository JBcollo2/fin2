import React from "react";
import {
    Phone,
    Mail,
    MapPin,
    Globe,
    Github,
    Linkedin,
    Facebook,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeatureCard from "@/components/FeatureCard";
import GoogleMapEmbed from "./GoogleMapEmbed"; // Assuming GoogleMapEmbed.jsx is in the same directory or adjust path
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Replace this placeholder URL with the actual URL of your uploaded image
// const imageUrl = "https://i.imgur.com/NLRz57d.jpeg"; 

const Contact = () => {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Our Location",
            description:
                "Freedom Heights Building, Off Langata Road-Langata District",
        },
        {
            icon: Phone,
            title: "Phone Number",
            description: "+254 734 947 348",
        },
        {
            icon: Mail,
            title: "Email Address",
            description: "info@lumelinktechnologies.co.ke",
        },
        {
            icon: Globe,
            title: "P.O. Box",
            description: "100345-00101-NAIROBI",
        },
    ];

    const socialMediaLinks = [
        {
            icon: Facebook,
            name: "Facebook",
            url: "https://www.facebook.com/LumelinkTechnologiesLimited",
            username: "Lumelink Technologies Limited",
        },
        {
            icon: Linkedin,
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/Lumelink-Technologies-Limited",
            username: "Lumelink Technologies Limited",
        },
        // { icon: Github, name: "GitHub", url: "#", username: "lumelink-tech" },
    ];

    const companyLocation = "Freedom Heights Building, Off Langata Road, Langata District, Nairobi, Kenya";

    return (
        <div className="min-h-screen bg-futuristic-dark text-white overflow-x-hidden">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <section className="relative py-16 mb-8">
                    <div className="absolute -right-48 top-0 w-96 h-96 bg-futuristic-cyan/20 rounded-full filter blur-3xl"></div>
                    <div className="absolute -left-48 bottom-0 w-96 h-96 bg-futuristic-purple/20 rounded-full filter blur-3xl"></div>

                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <div className="flex justify-center items-center mb-6">
                            {/* <img
                                src={imageUrl}
                                alt="Lumelink Technologies Logo"
                                className="w-48 rounded-md shadow-md mr-8"
                            /> */}
                            {/* Placeholder for Office/Team Photo - Replace with your actual image */}
                            {/* <img
                                src="/images/office-team-placeholder.jpg"
                                alt="Our Office or Team"
                                className="w-48 rounded-md shadow-md ml-8"
                            /> */}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Contact Lumelink Technologies Limited
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            We'd love to hear from you! Get in touch using the methods below.
                        </p>
                    </div>
                </section>

                {/* Contact Information Cards */}
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
                        {/* Interactive Google Map */}
                        <Card className="bg-transparent border border-white/10 overflow-hidden mb-8">
                            <div className="w-full h-[350px]">
                                <GoogleMapEmbed location={companyLocation} className="w-full h-full" />
                            </div>
                        </Card>

                        {/* Social Media Links */}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4">
                                Connect With Us on Social Media
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {socialMediaLinks.map((social, index) => (
                                    <Button
                                        key={index}
                                        variant="outline"
                                        className="flex items-center gap-2 border-white/20 hover:bg-white/5"
                                        onClick={() => window.open(social.url, "_blank")}
                                    >
                                        <social.icon size={18} />
                                        {social.username}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* Static Image of the Location */}
                        <Card className="bg-transparent border border-white/10 overflow-hidden mb-8">
                            <div className="w-full h-[350px]">
                                <img
                                    src="https://laptrustimaraireit.co.ke/wp-content/uploads/2023/02/FREEDOM-MALL-01.jpg"
                                    alt="Freedom Heights Mall"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </Card>

                        {/* Contact Form */}
                        <Card className="glass-effect border-0">
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold mb-6">
                                    Send Us a Message
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Fill out the form below, and our team will get back to you as soon as possible.
                                </p>
                                <form className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-sm font-medium">
                                                Full Name
                                            </Label>
                                            <Input id="name" type="text" className="bg-white/10 border border-white/20 focus:border-futuristic-cyan focus:outline-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-medium">
                                                Email Address
                                            </Label>
                                            <Input id="email" type="email" className="bg-white/10 border border-white/20 focus:border-futuristic-cyan focus:outline-none" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-sm font-medium">
                                            Subject
                                        </Label>
                                        <Select>
                                            <SelectTrigger className="w-full bg-white/10 border border-white/20 focus:border-futuristic-cyan focus:outline-none rounded-md py-2 px-3 text-sm">
                                                <SelectValue placeholder="Choose an inquiry type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="sales">Sales Inquiry</SelectItem>
                                                <SelectItem value="support">Support Request</SelectItem>
                                                <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                                                <SelectItem value="general">General Question</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm font-medium">
                                            Your Message
                                        </Label>
                                        <Textarea id="message" rows={5} className="bg-white/10 border border-white/20 focus:border-futuristic-cyan focus:outline-none" />
                                    </div>

                                    <Button className="w-full bg-gradient-to-r from-futuristic-cyan to-futuristic-purple hover:opacity-90">
                                        Send Message
                                    </Button>
                                    {/* Placeholder for Confirmation Message */}
                                    {/* <p className="text-green-500 mt-2">Your message has been sent successfully!</p> */}
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-20">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    question:
                                        "What are your business hours?",
                                    answer:
                                        "Our physical branches are open Monday through Friday from 8am to 8pm. Our digital banking services are available 24/7/365.",
                                },
                                {
                                    question:
                                        "How quickly can I open an account?",
                                    answer:
                                        "With our digital onboarding process, you can open a new account in under 5 minutes, all from the comfort of your home.",
                                },
                                {
                                    question:
                                        "Is there a waiting period for new cards?",
                                    answer:
                                        "Virtual cards are available instantly upon account approval. Physical smart cards are delivered within 2-3 business days.",
                                },
                                {
                                    question:
                                        "What security measures do you have in place?",
                                    answer:
                                        "We implement multi-factor authentication, biometric verification, AI fraud detection, and end-to-end encryption for all transactions.",
                                },
                            ].map((faq, index) => (
                                <div
                                    key={index}
                                    className="glass-effect rounded-xl p-6"
                                >
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