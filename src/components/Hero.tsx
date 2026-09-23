import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-[var(--bg-base)]">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4 transform opacity-20 dark:opacity-40">
        <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary-400 to-primary-600 blur-[100px]" />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/3 translate-y-1/4 transform opacity-20 dark:opacity-40">
        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-primary-600 to-primary-900 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-32 sm:pt-32 sm:pb-40 lg:flex lg:items-center lg:gap-x-10 lg:pt-40 lg:pb-48">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div className="flex">
            <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 ring-1 ring-primary-900/10 hover:ring-primary-900/20 dark:ring-primary-500/30 dark:hover:ring-primary-500/50">
              <span className="font-semibold text-primary-600 dark:text-primary-400">Admissions Open 2026</span>
              <span className="h-4 w-px bg-primary-900/10 dark:bg-primary-500/20" aria-hidden="true" />
              <a href="#apply" className="flex items-center gap-x-1 text-slate-600 dark:text-slate-300">
                Explore Programs
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <h1 className="mt-10 max-w-lg font-serif text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-7xl leading-[1.1]">
            Shape Your Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-800 dark:from-primary-400 dark:to-primary-600">Veritas</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300 font-sans">
            A world-class education rooted in excellence, innovation, and leadership. Join a community dedicated to discovering knowledge and transforming the world.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#apply"
              className="rounded-full bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary-500 hover:shadow-primary-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Start Application
            </a>
            <a href="#about" className="text-base font-semibold leading-6 text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Discover Veritas <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative">
          <div className="relative mx-auto w-[90%] max-w-[500px] lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Students on campus"
              className="w-full rounded-2xl shadow-2xl ring-1 ring-slate-900/10 object-cover aspect-[4/5] lg:aspect-[3/4]"
            />
            {/* Floating Stats Badge */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10 backdrop-blur-lg">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-800"
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt=""
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">15,000+</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Active Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
