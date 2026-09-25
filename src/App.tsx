import { StartButton } from './components/StartButton';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-[-10vh]">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span>Next-Generation Processing</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Accelerate Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Workflow Intelligence
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl font-light leading-relaxed">
          Instantly process heavy workloads with our ultra-fast computing engine. 
          Experience real-time telemetry and zero-latency execution.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col items-center gap-6">
          <StartButton />
          
          <p className="text-sm text-slate-500 font-medium">
            No credit card required. Free tier available.
          </p>
        </div>

      </div>
    </main>
  );
}

export default App;
