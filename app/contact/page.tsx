'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send, Upload } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for static hosting
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          timeline: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to start your next industrial project? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass-morphism rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white focus:border-orange-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white focus:border-orange-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white focus:border-orange-500"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Required *
                    </label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="automation">Mechanical Automation</SelectItem>
                        <SelectItem value="fabrication">Metal Fabrication</SelectItem>
                        <SelectItem value="engineering">Structural Engineering</SelectItem>
                        <SelectItem value="consulting">Engineering Consulting</SelectItem>
                        <SelectItem value="maintenance">Maintenance Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Timeline
                  </label>
                  <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent (Within 1 month)</SelectItem>
                      <SelectItem value="short">Short term (1-3 months)</SelectItem>
                      <SelectItem value="medium">Medium term (3-6 months)</SelectItem>
                      <SelectItem value="long">Long term (6+ months)</SelectItem>
                      <SelectItem value="planning">Planning phase</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white focus:border-orange-500"
                    placeholder="Please describe your project requirements, specifications, and any other relevant details..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Attach Files (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-orange-500 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">
                      Drop files here or click to browse
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Supported: PDF, JPG, PNG, DWG (Max 10MB)
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="glass-morphism rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Address</h4>
                      <p className="text-gray-400">
                        Industrial Area, Gohana<br />
                        Sonipat District, Haryana 131301<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-gray-400">
                        +91 9416943116<br />
                        +91 7206028377
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-gray-400">
                        info@themetalart.com<br />
                        projects@themetalart.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                      <p className="text-gray-400">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Emergency calls only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="glass-morphism rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Find Us</h3>
                <div className="bg-gray-700 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                    <p className="text-gray-400 mb-2">Interactive Map</p>
                    <a 
                      href="https://maps.google.com/?q=Gohana,Haryana,India" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                        Open in Google Maps
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Live Chat Widget */}
              <div className="glass-morphism rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Help?</h3>
                <p className="text-gray-400 mb-6">
                  Our technical support team is available for urgent queries and project discussions.
                </p>
                <a href="tel:+919416943116">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Call Now for Support
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}