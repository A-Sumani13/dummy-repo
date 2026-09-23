import { LoginButton } from './components/LoginButton';

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] p-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">Welcome Back</h1>
          <p className="text-gray-500 dark:text-gray-400">Sign in to access your account dashboard.</p>
        </div>
        
        <LoginButton />
      </div>
    </div>
  );
}

export default App;
