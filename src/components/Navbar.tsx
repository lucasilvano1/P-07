
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
export const Navbar: React.FC = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 border-b border-westside-purple-accent/10 backdrop-blur-lg bg-transparent">
      <div className="container mx-auto px-4 md:px-8 lg:px-[109px] bg-[#000a00]/0">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold text-westside-purple-accent">
              westside
            </Link>
            
            <div className="hidden md:flex space-x-6 ml-10">
              <Link to="/smart-hands" className="text-white/80 hover:text-white transition-colors">
                Smart Hands
              </Link>
              <Link to="/solutions" className="text-white/80 hover:text-white transition-colors">
                Solutions
              </Link>
              <Link to="/products" className="text-white/80 hover:text-white transition-colors">
                Products
              </Link>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>
          
          <Button variant="outline" className="border-westside-purple-accent/50 hover:border-westside-purple-accent text-slate-50 bg-transparent">
            Get Started
          </Button>
        </div>
      </div>
    </nav>;
};
