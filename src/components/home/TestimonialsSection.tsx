
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "CorporatePro transformed our business operations completely. Their strategic insights helped us increase revenue by 45% in just one year!",
    author: "Jessica Miller",
    position: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    id: 2,
    content: "The level of professionalism and expertise at CorporatePro is unmatched. They delivered beyond our expectations and helped us navigate complex market challenges.",
    author: "Michael Chang",
    position: "Director, Global Innovations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    id: 3,
    content: "Working with CorporatePro was a game-changer for our company. Their market research was thorough and the marketing strategy they developed drove significant results.",
    author: "Samantha Rodriguez",
    position: "Marketing VP, Elevate Solutions",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from some of our satisfied clients about their experiences working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial card */}
            <div className="glass-card p-8 md:p-12">
              <div className="mb-8">
                <svg className="w-12 h-12 text-corporate-300 dark:text-corporate-600 opacity-30" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                </svg>
              </div>
              <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8">
                {testimonials[activeIndex].content}
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[activeIndex].author}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeIndex === index 
                        ? "bg-corporate-500 dark:bg-corporate-400" 
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
