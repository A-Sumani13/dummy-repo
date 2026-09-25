import { useState, useEffect } from 'react';
import { Play, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ProcessState = 'idle' | 'starting' | 'running' | 'completed';

export function StartButton() {
  const [state, setState] = useState<ProcessState>('idle');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (state === 'starting') {
      const timer = setTimeout(() => {
        setState('running');
      }, 800);
      return () => clearTimeout(timer);
    }

    if (state === 'running') {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setState('completed');
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }

    if (state === 'completed') {
      const timer = setTimeout(() => {
        setState('idle');
        setProgress(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const handleStart = () => {
    if (state === 'idle') {
      setState('starting');
      setProgress(0);
    }
  };

  return (
    <div className="relative group">
      {/* Background glow effect */}
      <div 
        className={cn(
          "absolute -inset-1 rounded-full opacity-50 blur-lg transition duration-1000",
          state === 'idle' ? "bg-blue-500 group-hover:opacity-100 group-hover:duration-200" :
          state === 'starting' || state === 'running' ? "bg-indigo-500 animate-pulse" :
          "bg-emerald-500 opacity-75"
        )}
      />
      
      <button
        onClick={handleStart}
        disabled={state !== 'idle'}
        className={cn(
          "relative flex items-center justify-center gap-3 overflow-hidden rounded-full font-semibold text-white transition-all duration-300",
          "px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl",
          state === 'idle' ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-95 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]" :
          state === 'starting' || state === 'running' ? "bg-slate-800 cursor-default scale-105" :
          "bg-emerald-600 cursor-default scale-100 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)]"
        )}
      >
        {/* Progress Bar Background */}
        {(state === 'starting' || state === 'running') && (
          <div className="absolute inset-0 bg-slate-900">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-indigo-600"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
        )}

        {/* Content Container */}
        <div className="relative flex items-center gap-3 z-10 min-w-[160px] justify-center">
          <AnimatePresence mode="wait">
            {state === 'idle' && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2"
              >
                <Play className="w-6 h-6 fill-current" />
                <span>Start Process</span>
              </motion.div>
            )}

            {state === 'starting' && (
              <motion.div
                key="starting"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2"
              >
                <Loader2 className="w-6 h-6 animate-spin text-indigo-400" />
                <span className="text-indigo-100">Initializing...</span>
              </motion.div>
            )}

            {state === 'running' && (
              <motion.div
                key="running"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2"
              >
                <Loader2 className="w-6 h-6 animate-spin text-indigo-400" />
                <span className="text-white font-mono tabular-nums">{progress}%</span>
              </motion.div>
            )}

            {state === 'completed' && (
              <motion.div
                key="completed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-300" />
                <span>Completed</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </div>
  );
}
