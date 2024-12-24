import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  type?: string;
}

export function FormInput({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  type = 'text'
}: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-transparent border border-white/20 p-3 focus:border-gold transition-colors outline-none"
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}