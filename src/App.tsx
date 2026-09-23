import { StartButton } from './components/StartButton';

function App() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Ready to Begin?
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Click the button below to initialize the primary sequence. The system will handle the rest of the configuration automatically.
          </p>
        </div>
        
        <div className="pt-8">
          <StartButton />
        </div>
      </div>
    </main>
  );
}

export default App;
