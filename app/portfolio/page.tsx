'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Eye, 
  ExternalLink, 
  ArrowRight,
  Filter,
  Calendar,
  MapPin,
  Users
} from 'lucide-react';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Automated Assembly Line",
      category: "automation",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      description: "Complete robotic assembly system for automotive parts manufacturing",
      client: "AutoTech Industries",
      duration: "6 months",
      location: "Gurgaon, Haryana",
      team: "8 engineers",
      technologies: ["6-axis robotic arms", "Vision systems", "PLC control"],
      results: ["40% increase in production", "99.9% quality rate", "24/7 operation"]
    },
    {
      id: 2,
      title: "Precision Steel Framework",
      category: "fabrication",
      image: "https://images.pexels.com/photos/162568/steel-industry-structure-metal-162568.jpeg",
      description: "Custom steel framework for industrial warehouse construction",
      client: "BuildCorp Ltd.",
      duration: "4 months",
      location: "Sonipat, Haryana",
      team: "12 fabricators",
      technologies: ["50 tons steel", "Earthquake resistant", "Custom welding"],
      results: ["5000 sq ft structure", "Seismic compliance", "On-time delivery"]
    },
    {
      id: 3,
      title: "Bridge Structural Analysis",
      category: "engineering",
      image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
      description: "Comprehensive structural engineering for highway bridge project",
      client: "State Highway Dept.",
      duration: "8 months",
      location: "Panipat, Haryana",
      team: "6 engineers",
      technologies: ["300m span", "Load capacity 80T", "3D modeling"],
      results: ["Safety certified", "Load tested", "Traffic ready"]
    },
    {
      id: 4,
      title: "Robotic Welding Cell",
      category: "automation",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      description: "Advanced welding automation for shipbuilding industry",
      client: "Marine Shipyard",
      duration: "5 months",
      location: "Mumbai, Maharashtra",
      team: "10 technicians",
      technologies: ["Multi-pass welding", "Quality monitoring", "Automated inspection"],
      results: ["60% faster welding", "Zero defects", "Cost savings 30%"]
    },
    {
      id: 5,
      title: "Custom Machinery Parts",
      category: "fabrication",
      image: "https://images.pexels.com/photos/1108717/pexels-photo-1108717.jpeg",
      description: "High-precision machined components for mining equipment",
      client: "MiningTech Corp",
      duration: "3 months",
      location: "Jharkhand",
      team: "15 machinists",
      technologies: ["±0.01mm tolerance", "Hardened steel", "Custom tooling"],
      results: ["1000+ parts delivered", "Zero rejects", "Extended lifespan"]
    },
    {
      id: 6,
      title: "Industrial Plant Design",
      category: "engineering",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      description: "Complete structural design for chemical processing plant",
      client: "ChemProcess Inc.",
      duration: "12 months",
      location: "Gujarat",
      team: "20 engineers",
      technologies: ["Corrosion resistant", "Safety systems", "Modular design"],
      results: ["100,000 sq ft facility", "Safety certified", "Operational ready"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'automation', label: 'Automation' },
    { id: 'fabrication', label: 'Fabrication' },
    { id: 'engineering', label: 'Engineering' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 metallic-texture opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Showcasing our expertise through successful project implementations across industries
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`${
                  activeFilter === filter.id 
                    ? 'bg-orange-500 hover:bg-orange-600' 
                    : 'border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-500'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:bg-gray-750 transition-all duration-500 transform hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <Button size="sm" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm" className="bg-orange-500/80 backdrop-blur-md hover:bg-orange-600 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Case Study
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-gray-500">
                      <Users className="w-3 h-3 mr-2" />
                      {project.client}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-2" />
                      {project.duration}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <MapPin className="w-3 h-3 mr-2" />
                      {project.location}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 2).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="space-y-1 mb-4">
                    {project.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center text-xs text-green-400">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    View Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Project Statistics
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your industrial automation and manufacturing goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 