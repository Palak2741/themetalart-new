'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Bot, 
  Wrench, 
  Building, 
  Settings, 
  Cog, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Advanced Mechanical Automation",
      description: "Cutting-edge robotic systems and automated solutions for enhanced productivity and precision manufacturing.",
      features: [
        "Robotic Assembly Systems",
        "Process Automation",
        "Quality Control Systems",
        "System Integration",
        "PLC Programming",
        "HMI Development"
      ],
      color: "from-blue-500 to-blue-600",
      badge: "Automation"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Precision Metal Fabrication",
      description: "Expert metalworking services including cutting, welding, forming, and finishing with micron-level precision.",
      features: [
        "CNC Machining",
        "Laser Cutting",
        "Welding Services",
        "Surface Treatment",
        "Custom Fabrication",
        "Quality Assurance"
      ],
      color: "from-orange-500 to-orange-600",
      badge: "Fabrication"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Structural Engineering",
      description: "Comprehensive structural design and analysis for industrial buildings, bridges, and complex infrastructure.",
      features: [
        "Design Analysis",
        "3D Modeling",
        "Safety Compliance",
        "Project Management",
        "Load Calculations",
        "Construction Support"
      ],
      color: "from-green-500 to-green-600",
      badge: "Engineering"
    }
  ];

  const additionalServices = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "System Integration",
      description: "Seamless integration of various industrial systems and equipment for optimal performance."
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Maintenance Services",
      description: "Preventive and corrective maintenance for all types of industrial machinery and equipment."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energy Optimization",
      description: "Energy-efficient solutions to reduce operational costs and environmental impact."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety Systems",
      description: "Comprehensive safety solutions including emergency stops, guards, and monitoring systems."
    }
  ];

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
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive engineering solutions tailored to your industrial needs. From automation to fabrication, we deliver excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Core Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our three main service areas form the foundation of our engineering excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color}`}>
                      {service.icon}
                    </div>
                    <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Additional Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized services to complement our core offerings
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Why Choose The Metal Art?
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-gray-300">
                Our engineers have 15+ years of experience in industrial automation and manufacturing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality Assurance</h3>
              <p className="text-gray-300">
                ISO-certified processes ensure the highest quality standards in all our projects.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Delivery</h3>
              <p className="text-gray-300">
                Efficient project management ensures timely delivery without compromising quality.
              </p>
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