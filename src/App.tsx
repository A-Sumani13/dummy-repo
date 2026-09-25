import { MemoryRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import { NavigationButton } from './components/NavigationButton';
import { Timer } from './components/Timer';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">Welcome Home</h1>
          <p className="text-gray-500">Click the button below to explore more.</p>
        </div>
        
        <NavigationButton 
          onClick={() => navigate('/explore')}
          icon={<ArrowRight className="w-5 h-5" />}
          label="Go to Explore"
        />
      </div>
    </div>
  );
}

function ExplorePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-brand-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-brand-100 p-8 text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-brand-700">Explore Section</h1>
          <p className="text-gray-500">Manage your countdown below.</p>
        </div>
        
        <Timer />
        
        <div className="pt-4 border-t border-brand-100">
          <NavigationButton 
            onClick={() => navigate('/')}
            icon={<Home className="w-5 h-5" />}
            label="Back to Home"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </MemoryRouter>
  );
}
