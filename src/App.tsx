import { useState } from 'react';
import { Play, Loader2, CheckCircle, Activity, Settings, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [processState, setProcessState] = useState<'idle' | 'running' | 'success'>('idle');

  const startProcess = () => {
    if (processState !== 'idle') return;
    
    setProcessState('running');
    
    // Simulate process
    setTimeout(() => {
      setProcessState('success');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setProcessState('idle');
      }, 3000);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Navigation Bar */}
      <nav className="border-b border-white/10 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Activity size={20} />
              </div>
              <span className="font-semibold text-lg text-white">Nexus</span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <a href="#" className="bg-white/5 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                <a href="#" className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium">Analytics</a>
                <a href="#" className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium">Reports</a>
              </div>
            </div>

            {/* Right side - Start Button & Profile */}
            <div className="flex items-center gap-4">
              <button
                onClick={startProcess}
                disabled={processState !== 'idle'}
                className={`
                  relative overflow-hidden group px-4 py-2 rounded-full font-medium text-sm
                  transition-all duration-300 flex items-center gap-2
                  ${processState === 'idle' 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.6)]' 
                    : processState === 'running'
                    ? 'bg-blue-600/50 text-blue-100 cursor-wait'
                    : 'bg-emerald-500 text-white shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]'
                  }
                `}
              >
                <AnimatePresence mode="wait">
                  {processState === 'idle' && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <Play size={16} className="fill-current" />
                      <span>Start Process</span>
                    </motion.div>
                  )}
                  {processState === 'running' && (
                    <motion.div
                      key="running"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 size={16} className="animate-spin" />
                      <span>Processing...</span>
                    </motion.div>
                  )}
                  {processState === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle size={16} />
                      <span>Completed</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Background pulse effect for idle state */}
                {processState === 'idle' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_2s_infinite]" />
                )}
              </button>
              
              <div className="w-px h-6 bg-white/10 hidden sm:block"></div>
              
              <div className="hidden sm:flex items-center gap-3">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Settings size={20} />
                </button>
                <button className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-white/10">
                  <User size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] -z-10"></div>
        
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Control Center</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10">
            Click the start button in the navigation bar above to initiate the primary system process. The button features interactive states and smooth animations.
          </p>
          
          {/* Status Display */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm max-w-md mx-auto">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">System Status</h2>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Primary Process</span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border
                ${processState === 'idle' ? 'bg-slate-800 border-slate-700 text-slate-300' :
                  processState === 'running' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400 animate-pulse' :
                  'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                }
              `}>
                {processState === 'idle' ? 'Standby' :
                 processState === 'running' ? 'Active' :
                 'Complete'}
              </span>
            </div>
            
            {processState === 'running' && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                    className="h-full bg-blue-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
