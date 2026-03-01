import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    program: [
      { name: 'Pendidikan', href: '#' },
      { name: 'Kesehatan', href: '#' },
      { name: 'Sosial', href: '#' },
      { name: 'Bencana Alam', href: '#' }
    ],
    yayasan: [
      { name: 'Tentang Kami', href: '#' },
      { name: 'Visi Misi', href: '#' },
      { name: 'Tim Kami', href: '#' },
      { name: 'Karir', href: '#' }
    ],
    layanan: [
      { name: 'Cara Donasi', href: '#' },
      { name: 'Partner Kami', href: '#' },
      { name: 'Volunteer', href: '#' },
      { name: 'FAQ', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <span className="ml-3 text-2xl font-bold">Yayasan Gemilang</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Bersama membangun masa depan yang lebih cerah bagi anak-anak Indonesia melalui pendidikan, kesehatan, dan pemberdayaan sosial.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Program Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Program</h3>
            <ul className="space-y-2">
              {footerLinks.program.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Yayasan Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Yayasan</h3>
            <ul className="space-y-2">
              {footerLinks.yayasan.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">
                Jakarta, Indonesia
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">
                +62 812-3456-7890
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">
                info@yayasangemilang.org
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Yayasan Gemilang. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm mt-2 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for humanity
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
