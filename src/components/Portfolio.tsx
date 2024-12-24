import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Modern E-commerce Platform',
    description: 'A cutting-edge shopping experience built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Financial Dashboard',
    description: 'Real-time analytics platform for financial institutions',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">Featured Work</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden bg-black"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}