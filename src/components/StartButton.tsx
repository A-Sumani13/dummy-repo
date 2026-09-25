import { useState, useEffect } from 'react';
import { Play, Loader2, CheckCircle2, Pause, Square, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ProcessState = 'idle' | 'starting' | 'running' | 'paused' | 'completed';

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
          return prev + 1.5;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [state]);

  const handleStart = () => {
    if (state === 'idle') {
      setState('starting');
      setProgress(0);
    } else if (state === 'paused') {
      setState('running');
    }
  };

  const handlePause = () => {
    if (state === 'running') {
      setState('paused');
    }
  };

  const handleStop = () => {
    setState('idle');
    setProgress(0);
  };

  const handleReset = () => {
    setState('idle');
    setProgress(0);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Main Action Button */}
      <div className="relative group">
        <div 
          className={cn(
            "absolute -inset-1 rounded-full opacity-50 blur-lg transition duration-1000",
            state === 'idle' ? "bg-blue-500 group-hover:opacity-100 group-hover:duration-200" :
            state === 'paused' ? "bg-purple-500 opacity-75" :
            state === 'starting' || state === 'running' ? "bg-indigo-500 animate-pulse" :
            "bg-emerald-500 opacity-75"
          )}
        />
        
        <button
          onClick={state === 'running' ? handlePause : handleStart}
          disabled={state === 'completed' || state === 'starting'}
          className={cn(
            "relative flex items-center justify-center gap-3 overflow-hidden rounded-full font-semibold text-white transition-all duration-300",
            "px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl min-w-[220px]",
            state === 'idle' ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-95 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]" :
            state === 'paused' ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 active:scale-95 shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]" :
            state === 'starting' || state === 'running' ? "bg-slate-800 cursor-pointer scale-105" :
            "bg-emerald-600 cursor-default scale-100 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)]"
          )}
        >
          {/* Progress Bar Background */}
          {(state === 'starting' || state === 'running' || state === 'paused') && (
            <div className="absolute inset-0 bg-slate-900">
              <motion.div 
                className={cn(
                  "absolute inset-y-0 left-0 transition-colors duration-300",
                  state === 'paused' ? "bg-purple-600" : "bg-indigo-600"
                )}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: state === 'running' ? 0.05 : 0.3 }}
              />
            </div>
          )}

          {/* Content Container */}
          <div className="relative flex items-center gap-3 z-10 w-full justify-center">
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
                  className="flex items-center gap-2 group/running"
                >
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <Loader2 className="w-6 h-6 animate-spin text-indigo-200 absolute transition-opacity group-hover/running:opacity-0" />
                    <Pause className="w-5 h-5 fill-current text-white opacity-0 absolute transition-opacity group-hover/running:opacity-100" />
                  </div>
                  <span className="text-white font-mono tabular-nums">{Math.floor(progress)}%</span>
                </motion.div>
              )}

              {state === 'paused' && (
                <motion.div
                  key="paused"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex items-center gap-2"
                >
                  <Play className="w-6 h-6 fill-current" />
                  <span>Resume</span>
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

      {/* Secondary Controls Toolbar */}
      <div className="h-12 flex items-center justify-center">
        <AnimatePresence>
          {state !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="flex items-center gap-3 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-xl"
            >
              {state === 'running' && (
                <button
                  onClick={handlePause}
                  className="relative group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-purple-500/20 text-slate-300 hover:text-purple-300 transition-all border border-transparent hover:border-purple-500/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Pause className="w-4 h-4 relative z-10" />
                  <span className="text-sm font-medium relative z-10">Pause</span>
                </button>
              )}

              {(state === 'paused' || state === 'completed') && (
                <button
                  onClick={handleReset}
                  className="relative group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-blue-500/20 text-slate-300 hover:text-blue-300 transition-all border border-transparent hover:border-blue-500/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <RotateCcw className="w-4 h-4 relative z-10" />
                  <span className="text-sm font-medium relative z-10">Reset</span>
                </button>
              )}

              {state !== 'completed' && state !== 'starting' && (
                <button
                  onClick={handleStop}
                  className="relative group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 transition-all border border-transparent hover:border-rose-500/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Square className="w-4 h-4 fill-current relative z-10" />
                  <span className="text-sm font-medium relative z-10">Stop</span>
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
