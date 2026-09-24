import { useState, useEffect } from 'react';
import { Play, Loader2, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [status, setStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: number;
    if (status === 'running') {
      timer = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setStatus('completed');
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    }
    return () => clearInterval(timer);
  }, [status]);

  const handleStart = () => {
    if (status === 'idle') {
      setStatus('running');
      setProgress(0);
    } else if (status === 'completed') {
      setStatus('idle');
      setProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 selection:bg-blue-100 font-sans">
      <div className="max-w-2xl w-full flex flex-col items-center justify-center space-y-10 text-center">
        {/* Hero Section Copy */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            System Initialization
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto">
            Click the start button below to trigger the primary sequence and observe the process lifecycle.
          </p>
        </div>

        {/* Start Button & Progress Feedback */}
        <div className="flex flex-col items-center justify-center min-h-[200px] w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
          
          <button
            onClick={handleStart}
            disabled={status === 'running'}
            className={`
              relative group flex items-center justify-center gap-3 px-10 py-5 
              text-lg font-bold text-white rounded-full 
              transition-all duration-300 ease-out outline-none focus-visible:ring-4 focus-visible:ring-offset-2
              ${
                status === 'idle'
                  ? 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30 focus-visible:ring-blue-500'
                  : status === 'running'
                  ? 'bg-slate-300 cursor-not-allowed scale-100 shadow-none'
                  : 'bg-emerald-600 hover:bg-emerald-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-600/30 focus-visible:ring-emerald-500'
              }
            `}
          >
            {status === 'idle' && (
              <>
                <Play className="w-5 h-5 fill-current" />
                <span>Start Process</span>
              </>
            )}
            {status === 'running' && (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-slate-600" />
                <span className="text-slate-600">Processing... {progress}%</span>
              </>
            )}
            {status === 'completed' && (
              <>
                <CheckCircle2 className="w-5 h-5" />
                <span>Completed! Reset</span>
              </>
            )}
          </button>

          {/* Progress Indicator */}
          <div className={`w-full mt-8 flex flex-col gap-3 transition-opacity duration-300 ${status === 'idle' ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-100 ease-out ${
                  status === 'completed' ? 'bg-emerald-500' : 'bg-blue-500'
                }`}
                style={{ width: progress + '%' }}
              />
            </div>
            <p className="text-sm text-slate-500 font-medium h-5">
              {status === 'running' && <span className="animate-pulse">Executing background tasks...</span>}
              {status === 'completed' && <span>All tasks finished successfully.</span>}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
