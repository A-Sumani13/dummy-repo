import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { Courses } from './components/Courses';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Programs />
        <Courses />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;

