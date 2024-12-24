import React from 'react';

interface FormTextareaProps {
  label: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

export function FormTextarea({
  label,
  name,
  value,
  onChange,
  required = false
}: FormTextareaProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={4}
        className="w-full bg-transparent border border-white/20 p-3 focus:border-gold transition-colors outline-none resize-none"
      />
    </div>
  );
}