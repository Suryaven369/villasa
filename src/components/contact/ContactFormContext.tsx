import React, { createContext, useContext } from 'react';
import { useContactForm } from './useContactForm';

const ContactFormContext = createContext<ReturnType<typeof useContactForm> | undefined>(undefined);

export function ContactFormProvider({ children }: { children: React.ReactNode }) {
  const contactForm = useContactForm();
  
  return (
    <ContactFormContext.Provider value={contactForm}>
      {children}
    </ContactFormContext.Provider>
  );
}

export function useContactFormContext() {
  const context = useContext(ContactFormContext);
  if (context === undefined) {
    throw new Error('useContactFormContext must be used within a ContactFormProvider');
  }
  return context;
}