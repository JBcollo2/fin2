import React from "react";
import { Link } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Server, 
  BarChart3, 
  Shield, 
  ChevronDown,
  Menu,
  Cpu, Database, Wrench, Wifi
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import logo1 from "@/logo/logo1.jpeg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo1} alt="Lumelink Technologies" className="h-12 mr-3" />
            <span className="hidden sm:inline text-xl font-bold">
              <span className="text-futuristic-cyan">Lume</span>
              <span className="text-white">link Technology LTD</span>
              
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Services <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-futuristic-blue border-futuristic-cyan w-56">
              <DropdownMenuItem className="flex items-center gap-2">
                <Shield size={16} className="text-futuristic-cyan" />
                <span>Cybersecurity</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <Server size={16} className="text-futuristic-cyan" />
                <span>ICT Hardware & Software</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <Wrench size={16} className="text-futuristic-cyan" />
                <span>Tech Consultancy</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <Cpu size={16} className="text-futuristic-cyan" />
                <span>Project Management</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <Wifi size={16} className="text-futuristic-cyan" />
                <span>Telecommunication Services</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <Server size={16} className="text-futuristic-cyan" />
                <span>Innovation & Emerging Technologies</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link to="/services">
            <Button variant="ghost">Services</Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost">Contact</Button>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-futuristic-cyan hover:bg-futuristic-cyan/80 button-glow">
            Get in Touch
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect px-4 pb-4 mt-2 animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link to="/about">
              <Button variant="ghost" className="justify-start w-full">About</Button>
            </Link>
            <Link to="/services">
              <Button variant="ghost" className="justify-start w-full">Services</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" className="justify-start w-full">Contact</Button>
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Button className="bg-futuristic-cyan hover:bg-futuristic-cyan/80 w-full">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
