import React from 'react';
import { Clock, Mail, Phone } from 'lucide-react';

export function SuccessContent() {
  return (
    <div className="space-y-6 mb-12">
      <div className="bg-white/5 p-6 rounded-lg">
        <h2 className="font-bold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-gold" />
          What Happens Next?
        </h2>
        <ul className="space-y-2 text-gray-300">
          <li>• Our team will review your submission within 24 hours</li>
          <li>• You'll receive a detailed response via email</li>
          <li>• We'll schedule a consultation call if needed</li>
        </ul>
      </div>

      <div className="border-t border-gold/20 pt-6">
        <h3 className="font-bold mb-4">Need Immediate Assistance?</h3>
        <div className="space-y-3 text-gray-300">
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gold" />
            support@viilasa.com
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold" />
            +91 8767530469
          </p>
        </div>
      </div>
    </div>
  );
}