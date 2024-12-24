import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Development',
    description: 'Clean, efficient code that brings your vision to life with modern technologies and best practices.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'User-centered design solutions that combine aesthetics with seamless functionality.',
  },
  {
    icon: Zap,
    title: 'Strategy',
    description: 'Strategic planning and consultation to maximize your digital presence and impact.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-white border border-gray-100 hover:border-black transition-colors"
            >
              <service.icon className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}