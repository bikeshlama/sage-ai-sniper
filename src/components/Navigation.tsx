
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, BarChart2, Users, FileText } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cs-darker bg-opacity-80 backdrop-blur-md border-b border-cs-purple/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative overflow-hidden rounded-full bg-gradient-to-br from-cs-purple to-cs-blue p-[2px] animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-cs-darker flex items-center justify-center">
                <Zap size={20} className="text-cs-purple" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight neon-text">
              Chain<span className="text-cs-blue neon-text-blue">Sage</span> AI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/80 hover:text-cs-blue transition-colors duration-200">
              Home
            </Link>
            <Link to="/dashboard" className="text-white/80 hover:text-cs-blue transition-colors duration-200">
              Dashboard
            </Link>
            <Link to="/tokenomics" className="text-white/80 hover:text-cs-blue transition-colors duration-200">
              Tokenomics
            </Link>
            <Link to="/community" className="text-white/80 hover:text-cs-blue transition-colors duration-200">
              Community
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-cs-blue text-cs-blue hover:bg-cs-blue/20">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-cs-purple to-cs-blue text-white hover:opacity-90">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X size={24} className="text-cs-blue" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cs-darker border-t border-cs-purple/20 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-6">
            <Link
              to="/"
              className="text-white/80 hover:text-cs-blue transition-colors duration-200 py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-white/80 hover:text-cs-blue transition-colors duration-200 py-2"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <Link
              to="/tokenomics"
              className="text-white/80 hover:text-cs-blue transition-colors duration-200 py-2"
              onClick={toggleMenu}
            >
              Tokenomics
            </Link>
            <Link
              to="/community"
              className="text-white/80 hover:text-cs-blue transition-colors duration-200 py-2"
              onClick={toggleMenu}
            >
              Community
            </Link>
            <div className="flex flex-col space-y-3 pt-4 border-t border-cs-purple/20">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full border-cs-blue text-cs-blue hover:bg-cs-blue/20">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full bg-gradient-to-r from-cs-purple to-cs-blue text-white hover:opacity-90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
