import React from 'react';

interface NavigationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function NavigationButton({ 
  label, 
  icon, 
  variant = 'primary', 
  className = '', 
  ...props 
}: NavigationButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-6 py-3 font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";
  
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] focus:ring-brand-500",
    secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm focus:ring-gray-200"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{label}</span>
      {icon && (
        <span className="transition-transform group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
}
