
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-corporate-100 dark:bg-corporate-900 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-200 dark:bg-accent-900 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-scale-in">
              Innovative Solutions for 
              <span className="text-corporate-500 dark:text-corporate-300"> Business Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              We help businesses transform their operations, increase efficiency, and drive sustainable growth through innovative strategies and solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-corporate-500 hover:bg-corporate-600">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="glass-card shadow-xl rounded-xl overflow-hidden border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=800" 
                  alt="Business professionals in a meeting" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg glass-card">
                <div className="flex items-center">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-sm">Trusted by</p>
                    <p className="text-lg font-bold">500+ Companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
