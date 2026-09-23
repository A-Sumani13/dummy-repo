import { dummyUsers } from './data/users';
import { UserProfileCard } from './components/UserProfileCard';
import { Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4 text-blue-600">
            <Users className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Team Directory
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-500 mx-auto">
            Meet the talented individuals building our platform. Connect, collaborate, and innovate together.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dummyUsers.map((user) => (
              <UserProfileCard key={user.id} user={user} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
