import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-900/10 bg-[var(--bg-base)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-500/20">
            <GraduationCap className="h-6 w-6" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-primary-950 dark:text-white">
            Veritas University
          </span>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">About</a>
          <a href="#programs" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">Programs</a>
          <a href="#faculty" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">Faculty</a>
          <a href="#courses" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">Free Courses</a>
          <a href="#admissions" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">Admissions</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex">
          <a
            href="#apply"
            className="rounded-full bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all hover:scale-105 active:scale-95"
          >
            Apply Now
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 dark:hover:bg-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-[var(--bg-base)]">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 dark:text-slate-200 dark:hover:bg-slate-800">About</a>
            <a href="#programs" className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 dark:text-slate-200 dark:hover:bg-slate-800">Programs</a>
            <a href="#faculty" className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 dark:text-slate-200 dark:hover:bg-slate-800">Faculty</a>
            <a href="#courses" className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 dark:text-slate-200 dark:hover:bg-slate-800">Free Courses</a>
            <a href="#admissions" className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 dark:text-slate-200 dark:hover:bg-slate-800">Admissions</a>
            <a href="#contact" className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 dark:text-slate-200 dark:hover:bg-slate-800">Contact</a>
            <a href="#apply" className="mt-4 block w-full rounded-md bg-primary-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-primary-500">Apply Now</a>
          </div>
        </div>
      )}
    </header>
  );
}


