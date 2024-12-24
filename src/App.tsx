import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactFormProvider } from './components/contact/ContactFormContext';
import { MainLayout } from './components/MainLayout';
import { SuccessPage } from './components/success/SuccessPage';

export default function App() {
  return (
    <Router>
      <ContactFormProvider>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </ContactFormProvider>
    </Router>
  );
}