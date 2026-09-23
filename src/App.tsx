import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] p-4 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-[-10%] left-[-10%] h-96 w-96 rounded-full bg-[var(--primary)] opacity-5 blur-3xl dark:opacity-10" />
      <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-[var(--primary)] opacity-5 blur-3xl dark:opacity-10" />
      
      <div className="relative z-10 flex w-full flex-col items-center gap-8">
        <div className="space-y-2 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">Welcome Back</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account.</p>
        </div>
        
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
