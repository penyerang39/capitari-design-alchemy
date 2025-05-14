
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-6 px-4 md:px-8",
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-capitari-black font-montagu font-medium text-xl md:text-2xl tracking-tight">
          Capitari
        </a>
        
        <div className="lg:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            <div className={cn(
              "w-6 h-0.5 bg-black mb-1.5 transition-all",
              menuOpen && "rotate-45 translate-y-2"
            )}></div>
            <div className={cn(
              "w-6 h-0.5 bg-black mb-1.5 transition-all",
              menuOpen && "opacity-0"
            )}></div>
            <div className={cn(
              "w-6 h-0.5 bg-black transition-all",
              menuOpen && "-rotate-45 -translate-y-2"
            )}></div>
          </button>
        </div>
        
        <nav className={cn(
          "fixed inset-0 bg-white pt-20 px-6 lg:p-0 lg:static lg:bg-transparent lg:flex transition-all duration-300",
          menuOpen ? "top-0 opacity-100" : "top-[-100%] lg:opacity-100 opacity-0 lg:top-0",
          "lg:items-center"
        )}>
          <ul className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
            <li><a href="#services" className="text-lg hover:text-capitari-blue transition-colors" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#work" className="text-lg hover:text-capitari-blue transition-colors" onClick={() => setMenuOpen(false)}>Work</a></li>
            <li><a href="#contact" className="text-lg hover:text-capitari-blue transition-colors" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
        
        <Button 
          asChild
          className="hidden lg:inline-flex bg-capitari-blue hover:bg-blue-700 transition-colors"
        >
          <a href="#contact">Get in touch</a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
