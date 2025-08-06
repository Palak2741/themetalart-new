import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Award, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to revolutionize industrial manufacturing' },
    { year: '2012', title: 'First Major Contract', description: 'Secured automation project for leading automotive manufacturer' },
    { year: '2015', title: 'Expansion', description: 'Opened new fabrication facility with advanced CNC machinery' },
    { year: '2018', title: 'International Recognition', description: 'Received ISO 9001:2015 certification for quality management' },
    { year: '2021', title: 'Technology Upgrade', description: 'Invested in AI-powered quality control systems' },
    { year: '2024', title: 'Sustainable Future', description: 'Launched green manufacturing initiatives' },
  ];

  const team = [
    { name: 'Rajesh Kumar', position: 'Founder & CEO', experience: '20+ years', specialty: 'Mechanical Engineering' },
    { name: 'Priya Sharma', position: 'Head of Operations', experience: '15+ years', specialty: 'Project Management' },
    { name: 'Amit Patel', position: 'Chief Engineer', experience: '18+ years', specialty: 'Automation Systems' },
    { name: 'Dr. Sunita Verma', position: 'R&D Director', experience: '12+ years', specialty: 'Material Science' },
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'OHSAS 18001 Occupational Health & Safety',
    'CE Marking Compliance',
    'Bureau of Indian Standards (BIS)',
    'Export-Import License',
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
                About The Metal Art
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              For over 15 years, we have been at the forefront of industrial innovation, 
              delivering world-class engineering solutions that transform businesses and industries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-morphism rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To revolutionize industrial manufacturing through innovative automation solutions, 
                precision fabrication, and sustainable engineering practices that drive efficiency, 
                quality, and growth for our clients across diverse industries.
              </p>
            </div>
            <div className="glass-morphism rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-blue-500 mb-6">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To become the leading engineering partner in India, recognized globally for our 
                technical excellence, innovative solutions, and commitment to creating a 
                sustainable industrial future through advanced manufacturing technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A timeline of innovation, growth, and industrial excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-blue-500" />
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass-morphism rounded-xl p-6">
                      <div className="text-orange-500 font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-white font-semibold text-xl mb-3">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry experts with decades of combined experience in engineering and manufacturing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass-morphism rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-2">{member.position}</p>
                <p className="text-gray-400 text-sm mb-2">{member.experience}</p>
                <p className="text-blue-400 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Certifications & Compliance
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our commitment to quality and safety is validated by international standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-morphism rounded-xl p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-white font-medium">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Service Areas</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Serving clients across North India with on-site support and consultation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-morphism rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-orange-500 mb-6">Coverage Area</h3>
                  <ul className="space-y-3">
                    {['Haryana', 'Punjab', 'Delhi NCR', 'Uttar Pradesh', 'Rajasthan', 'Himachal Pradesh'].map((state, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {state}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/contact">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        <MapPin className="w-4 h-4 mr-2" />
                        Request Site Visit
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-xl h-80 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                    <p className="text-gray-400">Interactive Service Map</p>
                    <p className="text-sm text-gray-500">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our engineering expertise can transform your industrial operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4">
                Start Your Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}