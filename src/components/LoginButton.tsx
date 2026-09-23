import { LogIn } from 'lucide-react';
import { useState } from 'react';

export function LoginButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful!');
    }, 1500);
  };

  return (
    <button
      onClick={handleLogin}
      disabled={isLoading}
      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[var(--primary-hover)] hover:ring-2 hover:ring-[var(--primary)] hover:ring-offset-2 hover:ring-offset-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-70"
    >
      {isLoading ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : (
        <LogIn className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
      )}
      <span>{isLoading ? 'Logging in...' : 'Sign In'}</span>
      
      {/* Decorative hover effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
    </button>
  );
}
