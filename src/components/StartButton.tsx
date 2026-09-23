import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export function StartButton() {
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
    <div className="flex flex-col items-center gap-6">
      <div className="text-5xl font-mono font-bold text-gray-800 tracking-wider">
        {formatTime(time)}
      </div>
      
      <div className="flex items-center gap-4">
        {!isRunning ? (
          <button
            onClick={handleStart}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Start</span>
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-amber-500 rounded-xl shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            <Pause className="w-5 h-5 fill-current" />
            <span>Pause</span>
          </button>
        )}
        
        <button
          onClick={handleReset}
          disabled={time === 0 && !isRunning}
          className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-gray-700 bg-gray-200 rounded-xl shadow transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}