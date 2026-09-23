import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface StartButtonProps {
  isDarkMode?: boolean;
}

export function StartButton({ isDarkMode = false }: StartButtonProps) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className={`text-6xl sm:text-7xl font-mono font-extrabold tracking-tight transition-colors duration-500 tabular-nums ${isDarkMode ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'text-slate-800'}`}>
        {formatTime(time)}
      </div>
      
      <div className="flex items-center gap-4">
        {!isRunning ? (
          <button
            onClick={handleStart}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:translate-y-0"
          >
            <Play className="w-6 h-6 fill-current" />
            <span>Start</span>
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-blue-500 rounded-2xl shadow-lg shadow-blue-500/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:translate-y-0"
          >
            <Pause className="w-6 h-6 fill-current" />
            <span>Pause</span>
          </button>
        )}
        
        <button
          onClick={handleReset}
          disabled={time === 0 && !isRunning}
          className={`inline-flex items-center justify-center gap-3 px-6 py-4 text-lg font-bold rounded-2xl shadow-md transition-all duration-300 ease-out focus:outline-none focus:ring-4 active:translate-y-0 ${
            isDarkMode 
              ? 'bg-slate-800 text-blue-400 hover:bg-slate-700 hover:text-blue-300 hover:-translate-y-1 focus:ring-slate-700/50 disabled:bg-slate-800/50 disabled:text-slate-600'
              : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 hover:-translate-y-1 focus:ring-blue-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:border-slate-200'
          } disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed`}
        >
          <RotateCcw className="w-6 h-6" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}