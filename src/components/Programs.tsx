import { Code, Briefcase, Microscope, Palette, Landmark, Stethoscope } from 'lucide-react';

const programs = [
  {
    name: 'Computer Science',
    description: 'Master software engineering, AI, and data structures in a rapidly evolving digital landscape.',
    icon: Code,
    color: 'bg-blue-500',
  },
  {
    name: 'Business Administration',
    description: 'Develop leadership skills, strategic thinking, and entrepreneurial vision for global markets.',
    icon: Briefcase,
    color: 'bg-emerald-500',
  },
  {
    name: 'Biomedical Engineering',
    description: 'Bridge the gap between medicine and engineering to solve complex healthcare challenges.',
    icon: Microscope,
    color: 'bg-purple-500',
  },
  {
    name: 'Fine Arts & Design',
    description: 'Cultivate your creative voice through rigorous studio practice and critical theory.',
    icon: Palette,
    color: 'bg-pink-500',
  },
  {
    name: 'Law & Public Policy',
    description: 'Engage with legal frameworks and policy-making to drive social justice and governance.',
    icon: Landmark,
    color: 'bg-amber-500',
  },
  {
    name: 'Pre-Med & Health Sciences',
    description: 'Rigorous scientific preparation and clinical experience for future healthcare professionals.',
    icon: Stethoscope,
    color: 'bg-rose-500',
  },
];

export function Programs() {
  return (
    <div id="programs" className="bg-slate-50 dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Academic Excellence</h2>
          <p className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Discover Your Path
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            With over 120+ undergraduate and graduate programs, Veritas offers a diverse array of disciplines designed to challenge and inspire.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {programs.map((program) => (
              <div key={program.name} className="flex flex-col rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 hover:shadow-lg transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  <div className={`h-10 w-10 flex items-center justify-center rounded-lg ${program.color} text-white`}>
                    <program.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  {program.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-300">
                  <p className="flex-auto">{program.description}</p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400 hover:text-primary-500 transition-colors">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
