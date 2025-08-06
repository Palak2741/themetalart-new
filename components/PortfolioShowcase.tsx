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
      title: 'Automated Conveyor System',
      category: 'Automation',
      description: 'Advanced automated conveyor system with sorting and packaging capabilities',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      specs: ['PLC Control System', 'Sensor Integration', 'Variable Speed Drives'],
      client: 'Manufacturing Industries Ltd.',
    },
    {
      id: 2,
      title: 'Industrial Steel Structure',
      category: 'Fabrication',
      description: 'Heavy-duty industrial steel structure for manufacturing facility',
      image: 'https://images.pexels.com/photos/162568/steel-industry-structure-metal-162568.jpeg',
      specs: ['80 tons structural steel', 'Earthquake resistant', 'Advanced welding'],
      client: 'Industrial Construction Corp',
    },
    {
      id: 3,
      title: 'Mechanical Workshop Setup',
      category: 'Engineering',
      description: 'Complete mechanical workshop design and setup with modern machinery',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      specs: ['Workshop layout design', 'Machinery installation', 'Safety systems'],
      client: 'Technical Training Institute',
    },
    {
      id: 4,
      title: 'Automated Material Handling',
      category: 'Automation',
      description: 'Automated material handling system with robotic arms and conveyor integration',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      specs: ['Robotic arms', 'Conveyor systems', 'Automated sorting'],
      client: 'Logistics Solutions Pvt Ltd',
    },
    {
      id: 5,
      title: 'Precision Machine Components',
      category: 'Fabrication',
      description: 'High-precision CNC machined components for textile machinery',
      image: 'https://images.pexels.com/photos/1108717/pexels-photo-1108717.jpeg',
      specs: ['CNC machining', '±0.005mm tolerance', 'Quality inspection'],
      client: 'Textile Machinery Ltd',
    },
    {
      id: 6,
      title: 'Factory Layout Design',
      category: 'Engineering',
      description: 'Comprehensive factory layout design and optimization for automotive parts',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
      specs: ['3D layout modeling', 'Workflow optimization', 'Safety compliance'],
      client: 'Auto Components Manufacturer',
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
          <Link href="/portfolio">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold group"
            >
              View Complete Portfolio
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
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