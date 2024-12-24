import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useContactFormContext } from './ContactFormContext';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';

export function ContactForm() {
  const { 
    isOpen, 
    closeForm,
    isSuccess
  } = useContactFormContext();

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={closeForm}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-black border border-gold/20 p-8 max-w-md w-full rounded-lg relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={closeForm}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-8"
          >
            <h3 className="text-2xl font-bold text-gold mb-4">Thank You!</h3>
            <p className="text-gray-400">
              We'll be in touch with you shortly to discuss your project.
            </p>
          </motion.div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6">We'll Contact You Soon</h2>
            <form 
              action="https://formsubmit.co/suryavenkatesh369@gmail.com" 
              method="POST"
              className="space-y-4"
            >
              {/* FormSubmit Configuration */}
             
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you for contacting Viilasa. We'll get back to you shortly!" />
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <FormInput
                label="Full Name"
                name="name"
                required
              />
              <FormInput
                label="Email Address"
                name="email"
                type="email"
                required
              />
              <FormInput
                label="Subject"
                name="subject"
              />
              <FormTextarea
                label="Message"
                name="message"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gold text-black py-3 px-6 text-sm uppercase tracking-wider hover:bg-gold/90 transition-colors"
              >
                Submit
              </motion.button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}