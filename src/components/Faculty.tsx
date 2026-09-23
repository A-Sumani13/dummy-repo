import { Mail } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const FACULTY = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Professor of Computer Science',
    department: 'School of Engineering',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Leading researcher in artificial intelligence and neural networks. Former AI lead at Tech Global.',
  },
  {
    name: 'Prof. James Sterling',
    role: 'Chair of Finance',
    department: 'School of Business',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Expert in global financial markets and economic policy. Advisor to multiple global financial institutions.',
  },
  {
    name: 'Elena Rodriguez, MFA',
    role: 'Director of Design',
    department: 'School of Fine Arts',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Award-winning industrial designer focusing on human-centered design, rapid prototyping, and sustainability.',
  },
  {
    name: 'Dr. Michael Chang',
    role: 'Dean of Sciences',
    department: 'College of Arts & Sciences',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Pioneering researcher in biomedical engineering and genetic sequencing technologies. Published over 50 peer-reviewed papers.',
  }
];

export function Faculty() {
  return (
    <section id="faculty" className="bg-slate-50 dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">World-Class Educators</h2>
          <p className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Meet Our Faculty
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Learn directly from industry leaders, groundbreaking researchers, and dedicated mentors who are shaping the future of their fields.
          </p>
        </div>
        
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {FACULTY.map((person) => (
            <li key={person.name} className="flex flex-col items-center text-center sm:items-start sm:text-left group">
              <div className="overflow-hidden rounded-2xl w-full">
                <img
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={person.image}
                  alt={person.name}
                />
              </div>
              <h3 className="mt-6 font-serif text-lg font-bold leading-8 tracking-tight text-slate-900 dark:text-white">
                {person.name}
              </h3>
              <p className="text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400">
                {person.role}
              </p>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                {person.department}
              </p>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300 flex-grow">
                {person.bio}
              </p>
              <ul role="list" className="mt-6 flex justify-center sm:justify-start gap-x-4">
                <li>
                  <a href="#" className="text-slate-400 hover:text-primary-500 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-primary-500 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-primary-500 transition-colors">
                    <span className="sr-only">Email</span>
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
