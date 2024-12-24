import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            We craft digital experiences that matter
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A digital agency focused on delivering exceptional web solutions that drive real business results.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 hover:bg-gray-900 transition-colors"
          >
            Start a project <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}