
import React from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto">
        {/* Newsletter signup */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-futuristic-cyan/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-futuristic-purple/20 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay ahead with FutureFi</h3>
              <p className="text-gray-300">
                Get the latest updates, news, and exclusive offers directly to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="glass-effect bg-white/5 px-4 py-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-futuristic-cyan"
              />
              <Button className="bg-futuristic-cyan hover:bg-futuristic-cyan/80">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold mr-2">
                <span className="text-futuristic-cyan">Future</span>
                <span className="text-white">Fi</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Next-generation banking for the digital era. Secure, fast, and intuitive.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-futuristic-cyan transition-colors">
                <TwitterIcon size={18} />
              </a>
              <a href="#" className="hover:text-futuristic-cyan transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="hover:text-futuristic-cyan transition-colors">
                <LinkedinIcon size={18} />
              </a>
              <a href="#" className="hover:text-futuristic-cyan transition-colors">
                <GithubIcon size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-6">Products</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Smart Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Crypto Wallet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financial AI</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} FutureFi. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
