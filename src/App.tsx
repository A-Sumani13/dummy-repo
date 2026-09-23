import { useState } from 'react';
import { Play, Loader2, CheckCircle2 } from 'lucide-react';

function App() {
  const [status, setStatus] = useState<'idle' | 'running' | 'completed'>('idle');

  const handleStart = () => {
    if (status !== 'idle') return;
    setStatus('running');
    
    // Mock execution process
    setTimeout(() => {
      setStatus('completed');
      
      // Reset after 3 seconds to allow starting again
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-white selection:bg-indigo-500/30">
      <main className="flex-1 w-full flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto space-y-8">
        
        {/* Hero Content */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-100">
            Initialize System
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Ready to begin the automated initialization sequence. Click the button below to start the process and configure your environment.
          </p>
        </div>

        {/* Start Button */}
        <div className="pt-4 flex flex-col items-center gap-4">
          <button
            onClick={handleStart}
            disabled={status !== 'idle'}
            className={`
              group relative flex items-center justify-center gap-3 px-8 py-4 
              rounded-full font-medium text-lg transition-all duration-300
              ${status === 'idle' 
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] hover:shadow-[0_0_60px_-15px_rgba(79,70,229,0.7)] hover:scale-105 active:scale-95' 
                : status === 'running'
                ? 'bg-neutral-800 text-indigo-400 cursor-not-allowed'
                : 'bg-emerald-600/20 text-emerald-400 cursor-not-allowed border border-emerald-500/30'
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
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Initializing...</span>
              </>
            )}

            {status === 'completed' && (
              <>
                <CheckCircle2 className="w-5 h-5" />
                <span>System Ready</span>
              </>
            )}
          </button>
          
          {/* Status Message */}
          <div className="h-6">
            <span className={`text-sm font-medium transition-all duration-300 ${status === 'running' ? 'text-indigo-400 opacity-100' : 'opacity-0'}`}>
              Connecting to services and setting up the environment...
            </span>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;