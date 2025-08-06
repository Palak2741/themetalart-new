'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Cog,
  ArrowRight
} from 'lucide-react';
import { toast } from 'sonner';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubscribing(true);
    try {
      // Using Formspree for newsletter subscription
      const response = await fetch('https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (response.ok) {
        toast.success('Successfully subscribed to newsletter!');
        setNewsletterEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const companyLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/team', label: 'Our Team' },
    { href: '/careers', label: 'Careers' },
    { href: '/news', label: 'News & Updates' },
  ];

  const serviceLinks = [
    { href: '/services', label: 'Mechanical Automation' },
    { href: '/services', label: 'Metal Fabrication' },
    { href: '/services', label: 'Structural Engineering' },
    { href: '/services', label: 'Engineering Consulting' },
    { href: '/services', label: 'Maintenance Services' },
  ];

  const quickLinks = [
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/contact', label: 'Request Quote' },
    { href: '/contact', label: 'Technical Support' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Newsletter section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Projects
            </h3>
            <p className="text-orange-100 mb-8">
              Get insights on industrial automation trends, project updates, and engineering innovations
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white"
              />
              <Button 
                type="submit"
                disabled={isSubscribing}
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold disabled:opacity-50"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Cog className="w-8 h-8 text-orange-500" />
                  <div className="absolute inset-0 w-8 h-8 border-2 border-blue-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">The Metal Art</h3>
                  <p className="text-xs text-gray-400">Engineering Excellence</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leading provider of advanced mechanical automation, precision metal fabrication, 
                and structural engineering solutions in Haryana, India.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>Gohana, Haryana, India</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>+91 9416943116 | 7206028377</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>info@themetalart.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Embedded mini map */}
              <div className="mt-8 bg-gray-800 rounded-lg p-4">
                <h5 className="text-white font-medium mb-3">Our Location</h5>
                <div className="bg-gray-700 rounded h-32 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Gohana, Haryana</p>
                    <a 
                      href="https://maps.google.com/?q=Gohana,Haryana,India" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-orange-500 hover:text-orange-400 mt-1 inline-block"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} The Metal Art. All rights reserved. | 
              <Link href="/privacy" className="hover:text-orange-500 ml-1">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-orange-500 ml-1">Terms of Service</Link>
            </div>
            <div className="text-gray-400 text-sm">
              Made with ❤️ for industrial excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;