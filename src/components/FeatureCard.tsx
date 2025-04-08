
import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient?: string;
  className?: string;
  iconClassName?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  gradient = "from-futuristic-cyan to-futuristic-purple", 
  className = "",
  iconClassName = ""
}: FeatureCardProps) => {
  return (
    <div className={`glass-effect rounded-2xl p-6 card-hover ${className}`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${gradient}`}>
        <Icon size={20} className={`text-white ${iconClassName}`} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
