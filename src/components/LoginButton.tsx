import { LogIn, Check } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';

interface LoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isSuccess?: boolean;
}

export function LoginButton({ isLoading, isSuccess, className = '', ...props }: LoginButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading || isSuccess || props.disabled}
      className={`group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[var(--primary-hover)] hover:ring-2 hover:ring-[var(--primary)] hover:ring-offset-2 hover:ring-offset-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-70 ${className}`}
    >
      {isLoading ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : isSuccess ? (
        <Check className="h-5 w-5 animate-scale-in" />
      ) : (
        <LogIn className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
      )}
      <span>{isLoading ? 'Authenticating...' : isSuccess ? 'Welcome Back!' : 'Sign In'}</span>
      
      {/* Decorative hover effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
    </button>
  );
}
