import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { LoginButton } from './LoginButton';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      triggerShake();
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError('Please enter a valid email address');
      triggerShake();
      return;
    }

    setIsLoading(true);
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Reset form after showing success state
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
        setPassword('');
      }, 2000);
    }, 1500);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`w-full max-w-sm space-y-5 rounded-2xl border border-gray-200/60 bg-white/50 p-6 shadow-xl shadow-gray-200/20 backdrop-blur-xl dark:border-gray-800/60 dark:bg-gray-950/50 dark:shadow-black/40 ${isShaking ? 'animate-shake' : ''}`}
    >
      <div className="space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Email address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors peer-focus:text-[var(--primary)]" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="peer w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <a href="#" className="text-xs font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]">
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors peer-focus:text-[var(--primary)]" />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="peer w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-10 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] dark:hover:text-gray-300"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950/50 dark:text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <LoginButton isLoading={isLoading} isSuccess={isSuccess} type="submit" />
    </form>
  );
}
