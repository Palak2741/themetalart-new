'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'Manufacturing Director',
      company: 'TechnoSteel Industries',
      content: 'The Metal Art delivered exceptional automation solutions that increased our production efficiency by 40%. Their technical expertise and project management are outstanding.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Project Manager',
      company: 'Infrastructure Corp',
      content: 'Outstanding structural engineering services. Their attention to detail and compliance with safety standards made our project a complete success.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    },
    {
      id: 3,
      name: 'Amit Patel',
      position: 'Operations Head',
      company: 'PrecisionTech Ltd',
      content: 'Their metal fabrication quality is unmatched. Every component was delivered on time with perfect precision. Highly recommended for complex projects.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg',
    },
    {
      id: 4,
      name: 'Dr. Sunita Verma',
      position: 'Chief Engineer',
      company: 'Advanced Manufacturing',
      content: 'The Metal Art transformed our production line with their innovative automation solutions. Professional team with deep technical knowledge.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 metallic-texture opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear what our clients say about our engineering excellence and project delivery
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="glass-morphism rounded-2xl p-8 md:p-12 text-center relative">
                    {/* Quote icon */}
                    <div className="absolute top-6 left-6 text-orange-500/30">
                      <Quote size={48} />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author info */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-orange-500 text-sm">{testimonial.position}</p>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-500 bg-gray-800/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-500 bg-gray-800/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight size={20} />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-orange-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">500+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">15+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;