import { StartButton } from './components/StartButton';

function App() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Stopwatch
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Use the controls below to start, pause, and reset the timer.
          </p>
        </div>
        
        <div className="pt-8 flex justify-center">
          <StartButton />
        </div>
      </div>
    </main>
  );
}

export default App;