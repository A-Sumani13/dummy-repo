import { useState, useEffect } from 'react';
import { StartButton } from './components/StartButton';
import { Moon, Sun, Quote } from 'lucide-react';

const QUOTES = [
  "Time is what we want most, but what we use worst. – William Penn",
  "The two most powerful warriors are patience and time. – Leo Tolstoy",
  "Time is money. – Benjamin Franklin",
  "Lost time is never found again. – Benjamin Franklin",
  "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb"
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const bgClass = isDarkMode ? 'bg-[#0f172a]' : 'bg-[#e2e8f0]'; 
  const textClass = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMutedClass = isDarkMode ? 'text-slate-400' : 'text-slate-600';

  return (
    <main className={`min-h-screen transition-colors duration-500 flex flex-col p-6 ${bgClass}`}>
      <div className="w-full max-w-5xl mx-auto flex justify-end">
        <button 
          onClick={toggleTheme}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400 shadow-md' : 'bg-white hover:bg-slate-100 text-slate-700 shadow-md border border-slate-300'}`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <><Sun className="w-5 h-5" /> <span>Light Mode</span></>
          ) : (
            <><Moon className="w-5 h-5" /> <span>Dark Mode</span></>
          )}
        </button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl w-full mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight transition-colors ${textClass}`}>
            Professional Stopwatch
          </h1>
          <p className={`text-lg max-w-xl mx-auto transition-colors ${textMutedClass}`}>
            Master your time. Use the controls below to start, pause, and reset.
          </p>
        </div>
        
        <div className="flex justify-center w-full">
          <StartButton isDarkMode={isDarkMode} />
        </div>

        <div className={`max-w-2xl mx-auto mt-12 p-8 rounded-3xl flex flex-col items-center gap-4 transition-colors duration-500 shadow-lg ${isDarkMode ? 'bg-slate-800/80 border border-slate-700' : 'bg-white border border-slate-300'}`}>
          <Quote className={`w-10 h-10 transition-colors ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} />
          <p className={`text-xl font-medium italic transition-colors duration-500 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
            "{QUOTES[quoteIndex].split(' – ')[0]}"
          </p>
          <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            – {QUOTES[quoteIndex].split(' – ')[1]}
          </span>
        </div>
      </div>
    </main>
  );
}

export default App;