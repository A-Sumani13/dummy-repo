import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export function Timer() {
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds countdown
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
      <div className="text-5xl font-mono font-bold text-gray-800 tracking-wider">
        {formatTime(timeLeft)}
      </div>
      
      <div className="flex items-center gap-4">
        {!isRunning ? (
          <button
            onClick={toggleTimer}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] transition-all duration-200 active:scale-95"
          >
            <Play className="w-5 h-5" />
            Start
          </button>
        ) : (
          <button
            onClick={toggleTimer}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-medium shadow-[0_4px_14px_0_rgba(147,51,234,0.39)] hover:bg-purple-700 hover:shadow-[0_6px_20px_rgba(147,51,234,0.23)] transition-all duration-200 active:scale-95"
          >
            <Pause className="w-5 h-5" />
            Pause
          </button>
        )}
        
        <button
          onClick={resetTimer}
          className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 active:scale-95 shadow-sm"
        >
          <RotateCcw className="w-5 h-5" />
          Reset
        </button>
      </div>
    </div>
  );
}
