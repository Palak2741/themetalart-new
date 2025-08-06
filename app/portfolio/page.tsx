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
      title: "Automated Conveyor System",
      category: "automation",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      description: "Advanced automated conveyor system with sorting and packaging capabilities for industrial manufacturing",
      client: "Manufacturing Industries Ltd.",
      duration: "4 months",
      location: "Sonipat, Haryana",
      team: "6 engineers",
      technologies: ["PLC Control System", "Sensor Integration", "Variable Speed Drives"],
      results: ["50% faster processing", "Reduced manual labor", "24/7 operation capability"]
    },
    {
      id: 2,
      title: "Industrial Steel Structure",
      category: "fabrication",
      image: "https://images.pexels.com/photos/162568/steel-industry-structure-metal-162568.jpeg",
      description: "Heavy-duty industrial steel structure for manufacturing facility with crane support systems",
      client: "Industrial Construction Corp",
      duration: "8 months",
      location: "Panipat, Haryana",
      team: "15 fabricators",
      technologies: ["80 tons structural steel", "Earthquake resistant design", "Advanced welding techniques"],
      results: ["12,000 sq ft facility", "Load capacity 50 tons", "IS 800 compliant"]
    },
    {
      id: 3,
      title: "Mechanical Workshop Setup",
      category: "engineering",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      description: "Complete mechanical workshop design and setup with modern machinery layout and safety systems",
      client: "Technical Training Institute",
      duration: "6 months",
      location: "Gohana, Haryana",
      team: "8 engineers",
      technologies: ["Workshop layout design", "Machinery installation", "Safety systems"],
      results: ["50 workstations", "Modern equipment", "Safety compliant"]
    },
    {
      id: 4,
      title: "Automated Material Handling",
      category: "automation",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      description: "Automated material handling system with robotic arms and conveyor integration",
      client: "Logistics Solutions Pvt Ltd",
      duration: "5 months",
      location: "Delhi NCR",
      team: "12 technicians",
      technologies: ["Robotic arms", "Conveyor systems", "Automated sorting"],
      results: ["70% efficiency increase", "Reduced handling time", "Error-free sorting"]
    },
    {
      id: 5,
      title: "Precision Machine Components",
      category: "fabrication",
      image: "https://images.pexels.com/photos/1108717/pexels-photo-1108717.jpeg",
      description: "High-precision CNC machined components for textile machinery with tight tolerances",
      client: "Textile Machinery Ltd",
      duration: "3 months",
      location: "Ludhiana, Punjab",
      team: "10 machinists",
      technologies: ["CNC machining", "±0.005mm tolerance", "Quality inspection"],
      results: ["500+ components", "Zero defects", "On-time delivery"]
    },
    {
      id: 6,
      title: "Factory Layout Design",
      category: "engineering",
      image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
      description: "Comprehensive factory layout design and optimization for automotive parts manufacturing",
      client: "Auto Components Manufacturer",
      duration: "10 months",
      location: "Gurgaon, Haryana",
      team: "12 engineers",
      technologies: ["3D layout modeling", "Workflow optimization", "Safety compliance"],
      results: ["30% space optimization", "Improved workflow", "Safety certified"]
    },
    {
      id: 7,
      title: "Heavy Machinery Installation",
      category: "engineering",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      description: "Installation and commissioning of heavy industrial machinery with foundation design",
      client: "Heavy Industries Corp",
      duration: "7 months",
      location: "Faridabad, Haryana",
      team: "18 engineers",
      technologies: ["Foundation design", "Machinery alignment", "Vibration analysis"],
      results: ["15 machines installed", "Perfect alignment", "Vibration-free operation"]
    },
    {
      id: 8,
      title: "Automated Quality Control",
      category: "automation",
      image: "https://images.pexels.com/photos/1108717/pexels-photo-1108717.jpeg",
      description: "Vision-based automated quality control system for manufacturing processes",
      client: "Quality Systems Ltd",
      duration: "4 months",
      location: "Noida, UP",
      team: "8 engineers",
      technologies: ["Machine vision", "AI algorithms", "Reject handling"],
      results: ["99.8% accuracy", "Real-time inspection", "Automated reporting"]
    },
    {
      id: 9,
      title: "Custom Fabrication Project",
      category: "fabrication",
      image: "https://images.pexels.com/photos/162568/steel-industry-structure-metal-162568.jpeg",
      description: "Custom fabrication of specialized equipment housings and enclosures",
      client: "Equipment Manufacturing Co",
      duration: "5 months",
      location: "Rohtak, Haryana",
      team: "12 fabricators",
      technologies: ["Sheet metal work", "Powder coating", "Assembly"],
      results: ["200+ enclosures", "Weather resistant", "Modular design"]
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
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 