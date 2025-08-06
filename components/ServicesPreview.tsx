'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Wrench, Building } from 'lucide-react';

const ServicesPreview = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Advanced Mechanical Automation',
      description: 'Cutting-edge robotic systems and automated solutions for enhanced productivity and precision manufacturing.',
      icon: Bot,
      features: ['Robotic Assembly', 'Process Automation', 'Quality Control', 'System Integration'],
      color: 'from-blue-500 to-blue-600',
      href: '/services/automation',
    },
    {
      id: 2,
      title: 'Precision Metal Fabrication',
      description: 'Expert metalworking services including cutting, welding, forming, and finishing with micron-level precision.',
      icon: Wrench,
      features: ['CNC Machining', 'Laser Cutting', 'Welding', 'Surface Treatment'],
      color: 'from-orange-500 to-orange-600',
      href: '/services/fabrication',
    },
    {
      id: 3,
      title: 'Structural Engineering',
      description: 'Comprehensive structural design and analysis for industrial buildings, bridges, and complex infrastructure.',
      icon: Building,
      features: ['Design Analysis', '3D Modeling', 'Safety Compliance', 'Project Management'],
      color: 'from-green-500 to-green-600',
      href: '/services/engineering',
    },
  ];

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 metallic-texture opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Core Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Delivering world-class engineering solutions with cutting-edge technology and unmatched expertise
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer ${
                  hoveredCard === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: hoveredCard === index 
                    ? `linear-gradient(135deg, ${service.color.split(' ')[1]} 0%, ${service.color.split(' ')[3]} 100%)`
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Card content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === index ? 'bg-white/20' : 'bg-gradient-to-br ' + service.color
                  }`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href={service.href}>
                    <Button
                      variant="ghost"
                      className="group/btn text-white hover:text-orange-500 p-0 h-auto font-semibold"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                {/* 3D effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold group"
            >
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;