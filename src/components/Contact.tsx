import React from 'react';
import { Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Project</h2>
          <p className="text-gray-400 mb-8">
            Ready to bring your vision to life? Let's create something exceptional together.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 bg-transparent border border-white/20 focus:border-white transition-colors text-white placeholder:text-gray-500"
            />
            <textarea
              placeholder="Tell us about your project"
              rows={4}
              className="w-full p-3 bg-transparent border border-white/20 focus:border-white transition-colors text-white placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 hover:bg-gray-100 transition-colors"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}