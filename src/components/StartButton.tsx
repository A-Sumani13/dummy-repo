import { useState } from 'react';
import { Loader2, Play } from 'lucide-react';

export function StartButton() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleStart = () => {
    setIsProcessing(true);
    setIsCompleted(false);

    // Mock process
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      
      // Reset after 3 seconds
      setTimeout(() => setIsCompleted(false), 3000);
    }, 2000);
  };

  return (
    <button
      onClick={handleStart}
      disabled={isProcessing}
      className={`
        relative inline-flex items-center justify-center gap-2 px-8 py-4 
        text-lg font-semibold text-white rounded-xl shadow-lg
        transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${
          isProcessing 
            ? 'bg-blue-400 cursor-wait' 
            : isCompleted
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-blue-600 hover:bg-blue-700'
        }
      `}
    >
      {isProcessing ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Processing...</span>
        </>
      ) : isCompleted ? (
        <span>Process Complete!</span>
      ) : (
        <>
          <Play className="w-5 h-5 fill-current" />
          <span>Start Process</span>
        </>
      )}
    </button>
  );
}
