import { GraduationCap } from 'lucide-react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                Veritas University
              </span>
            </div>
            <p className="text-sm leading-6 text-slate-400 max-w-sm">
              Empowering the next generation of leaders, thinkers, and innovators to shape a better future for all.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Admissions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Undergraduate</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Graduate</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">International</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Financial Aid</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Academics</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Programs & Degrees</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Faculty</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Research</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Libraries</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Campus Life</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Housing</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Student Organizations</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Athletics</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Events</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">About</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Our History</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Leadership</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-400">
            &copy; {new Date().getFullYear()} Veritas University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
