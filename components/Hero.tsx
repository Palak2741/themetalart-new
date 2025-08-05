'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Cog, Settings, Wrench } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [stats, setStats] = useState([
    { label: 'Projects Completed', value: 0, target: 500 },
    { label: 'Years Experience', value: 0, target: 15 },
    { label: 'Happy Clients', value: 0, target: 200 },
    { label: 'Team Members', value: 0, target: 25 },
  ]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate statistics counter
  useEffect(() => {
    const animateStats = () => {
      setStats(prevStats =>
        prevStats.map(stat => {
          const increment = Math.ceil(stat.target / 50);
          const newValue = Math.min(stat.value + increment, stat.target);
          return { ...stat, value: newValue };
        })
      );
    };

    const interval = setInterval(animateStats, 50);
    const timeout = setTimeout(() => clearInterval(interval), 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 metallic-texture opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>

      {/* Floating gear animations */}
      <div className="absolute inset-0 overflow-hidden">
        <Cog
          className="absolute top-20 left-10 w-16 h-16 text-blue-500/30 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <Settings
          className="absolute top-40 right-20 w-12 h-12 text-orange-500/40 animate-float"
          style={{ animationDelay: '1s' }}
        />
        <Wrench
          className="absolute bottom-32 left-32 w-20 h-20 text-blue-400/20 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <Cog
          className="absolute bottom-20 right-16 w-14 h-14 text-orange-400/30 animate-float"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-slide-in-up">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Crafting Precision,
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Engineering Excellence
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Leading provider of{' '}
            <span className="text-blue-400 font-semibold">Advanced Mechanical Automation</span>,{' '}
            <span className="text-orange-400 font-semibold">Precision Metal Fabrication</span>, and{' '}
            <span className="text-blue-400 font-semibold">Structural Engineering</span>{' '}
            solutions in Haryana
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold group animate-pulse-glow"
            >
              Get Quote Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg font-semibold group"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" />
              View Portfolio
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="glass-morphism rounded-lg p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                  {stat.value}+
                </div>
                <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;