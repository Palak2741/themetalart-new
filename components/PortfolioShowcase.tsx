'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, ExternalLink } from 'lucide-react';

const PortfolioShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = ['All', 'Automation', 'Fabrication', 'Engineering'];

  const projects = [
    {
      id: 1,
      title: 'Automated Assembly Line',
      category: 'Automation',
      description: 'Complete robotic assembly system for automotive parts manufacturing',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      specs: ['6-axis robotic arms', 'Vision systems', '99.9% accuracy'],
      client: 'AutoTech Industries',
    },
    {
      id: 2,
      title: 'Precision Steel Framework',
      category: 'Fabrication',
      description: 'Custom steel framework for industrial warehouse construction',
      image: 'https://images.pexels.com/photos/162568/steel-industry-structure-metal-162568.jpeg',
      specs: ['50 tons steel', 'Earthquake resistant', 'Fire rated coating'],
      client: 'BuildCorp Ltd.',
    },
    {
      id: 3,
      title: 'Bridge Structural Analysis',
      category: 'Engineering',
      description: 'Comprehensive structural engineering for highway bridge project',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
      specs: ['300m span', 'Load capacity 80T', 'Seismic analysis'],
      client: 'State Highway Dept.',
    },
    {
      id: 4,
      title: 'Robotic Welding Cell',
      category: 'Automation',
      description: 'Advanced welding automation for shipbuilding industry',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      specs: ['Multi-pass welding', 'Quality monitoring', 'Fume extraction'],
      client: 'Marine Shipyard',
    },
    {
      id: 5,
      title: 'Custom Machinery Parts',
      category: 'Fabrication',
      description: 'High-precision machined components for mining equipment',
      image: 'https://images.pexels.com/photos/1108717/pexels-photo-1108717.jpeg',
      specs: ['±0.01mm tolerance', 'Hardened steel', 'Surface treatment'],
      client: 'MiningTech Corp',
    },
    {
      id: 6,
      title: 'Industrial Plant Design',
      category: 'Engineering',
      description: 'Complete structural design for chemical processing plant',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      specs: ['Corrosion resistant', 'Safety systems', 'Modular design'],
      client: 'ChemProcess Inc.',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-gray-900" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Showcasing our expertise through successful project implementations across industries
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-500'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:bg-gray-750 transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                
                {/* Overlay actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      className="bg-orange-500/80 backdrop-blur-md hover:bg-orange-600 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Case Study
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.specs.slice(0, 2).map((spec, specIndex) => (
                    <span
                      key={specIndex}
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{project.client}</span>
                  <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-400 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold group"
          >
            View Complete Portfolio
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Project Modal (simplified for now) */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </Button>
            </div>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <div className="space-y-2 mb-6">
              {selectedProject.specs.map((spec: string, index: number) => (
                <div key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                  {spec}
                </div>
              ))}
            </div>
            <Button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioShowcase;