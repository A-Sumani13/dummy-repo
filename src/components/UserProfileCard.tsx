import type { User } from '../data/users';
import { Briefcase } from 'lucide-react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface UserProfileCardProps {
  user: User;
}

export const UserProfileCard = ({ user }: UserProfileCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      <div className="px-6 pb-6">
        <div className="relative flex justify-between items-end -mt-12 mb-4">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-24 h-24 rounded-full border-4 border-white object-cover bg-slate-100"
          />
          <button className="mb-2 px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors">
            Connect
          </button>
        </div>
        
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900">{user.name}</h2>
          <div className="flex items-center text-slate-600 mt-1">
            <Briefcase className="w-4 h-4 mr-1.5" />
            <span className="text-sm font-medium">{user.role}</span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {user.bio}
        </p>

        <div className="mb-6">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill) => (
              <span 
                key={skill} 
                className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
          {user.social.twitter && (
            <a href={`https://twitter.com/${user.social.twitter}`} className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
              <FaTwitter className="w-5 h-5" />
            </a>
          )}
          {user.social.github && (
            <a href={`https://github.com/${user.social.github}`} className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="GitHub">
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {user.social.linkedin && (
            <a href={`https://linkedin.com/${user.social.linkedin}`} className="text-slate-400 hover:text-blue-700 transition-colors" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
