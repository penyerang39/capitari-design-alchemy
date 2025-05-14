
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-montagu font-medium leading-tight md:leading-tight max-w-4xl mb-8 md:mb-10">
            We design <span className="text-capitari-blue">experiences</span> that transform <span className="text-capitari-magenta">businesses</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mb-12 md:mb-16 opacity-90">
            Capitari is a UX design and development agency for startups and small-medium businesses. We combine research, design, and technology to create products people love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-capitari-blue hover:bg-blue-700 text-white py-6 px-8 rounded-md"
            >
              <a href="#contact">Start a project</a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg" 
              className="border-capitari-black hover:bg-gray-100 py-6 px-8 rounded-md"
            >
              <a href="#services">Explore our services</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className={`absolute -bottom-32 -right-32 w-64 h-64 md:w-96 md:h-96 rounded-full bg-capitari-blue opacity-5 transition-all duration-1000 ${isVisible ? 'opacity-5' : 'opacity-0'}`}></div>
      <div className={`absolute -top-32 -left-32 w-64 h-64 md:w-96 md:h-96 rounded-full bg-capitari-magenta opacity-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-5' : 'opacity-0'}`}></div>
    </section>
  );
};

export default Hero;
