import { Play, FileText, Download, Clock, User, X, BookOpen, Video } from 'lucide-react';
import { useState } from 'react';

const COURSES = [
  {
    id: 'c1',
    title: 'Introduction to Artificial Intelligence',
    instructor: 'Dr. Sarah Chen',
    duration: '4 Weeks',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Learn the foundational concepts of AI, machine learning algorithms, and real-world applications in this open-access course.',
    lessons: [
      { id: 'l1', title: 'What is Artificial Intelligence?', duration: '15:20', isCompleted: true },
      { id: 'l2', title: 'History of Machine Learning', duration: '22:15', isCompleted: false },
      { id: 'l3', title: 'Neural Networks 101', duration: '18:45', isCompleted: false },
    ],
    downloads: [
      { id: 'd1', name: 'Course Syllabus', size: '1.2 MB', type: 'PDF' },
      { id: 'd2', name: 'Algorithm Cheat Sheet', size: '3.5 MB', type: 'PDF' },
      { id: 'd3', name: 'Practice Datasets', size: '15.0 MB', type: 'ZIP' },
    ],
  },
  {
    id: 'c2',
    title: 'Modern Financial Markets',
    instructor: 'Prof. James Sterling',
    duration: '6 Weeks',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Explore the dynamics of global financial markets, trading instruments, and economic policies shaping today\'s economy.',
    lessons: [
      { id: 'l1', title: 'Market Structures', duration: '25:10', isCompleted: false },
      { id: 'l2', title: 'Bonds and Equities', duration: '30:05', isCompleted: false },
    ],
    downloads: [
      { id: 'd1', name: 'Financial Glossary', size: '2.4 MB', type: 'PDF' },
    ],
  },
  {
    id: 'c3',
    title: 'Design Thinking & Innovation',
    instructor: 'Elena Rodriguez, MFA',
    duration: '3 Weeks',
    thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A hands-on approach to problem-solving using human-centered design principles and rapid prototyping.',
    lessons: [
      { id: 'l1', title: 'Empathy in Design', duration: '12:40', isCompleted: false },
      { id: 'l2', title: 'Ideation Techniques', duration: '19:20', isCompleted: false },
      { id: 'l3', title: 'Prototyping Basics', duration: '21:15', isCompleted: false },
      { id: 'l4', title: 'User Testing', duration: '16:50', isCompleted: false },
    ],
    downloads: [
      { id: 'd1', name: 'Design Sprint Template', size: '5.1 MB', type: 'PDF' },
      { id: 'd2', name: 'User Persona Worksheets', size: '1.8 MB', type: 'PDF' },
    ],
  },
];

export function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<typeof COURSES[0] | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="courses" className="bg-white dark:bg-[var(--bg-base)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Open Learning</h2>
          <p className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Featured Free Courses
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Access world-class education from anywhere. Start learning today with our open-access video lectures and downloadable resources.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {COURSES.map((course) => (
            <div key={course.id} className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="relative h-48 w-full shrink-0 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 rounded-full bg-white/90 dark:bg-slate-900/90 px-3 py-1 text-xs font-semibold text-slate-900 dark:text-white backdrop-blur-sm">
                  Free Access
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <div className="flex items-center gap-x-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {course.instructor}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold leading-6 text-slate-900 dark:text-white mb-2 font-serif">
                    {course.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300 line-clamp-3">
                    {course.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                  <button
                    onClick={() => {
                      setSelectedCourse(course);
                      setActiveVideo(course.lessons[0].id);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 px-4 py-2.5 text-sm font-semibold text-primary-700 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors"
                  >
                    <Play className="h-4 w-4" fill="currentColor" />
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course LMS Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative flex h-full max-h-[900px] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4">
              <div>
                <h2 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                  {selectedCourse.title}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Instructor: {selectedCourse.instructor}
                </p>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body - LMS View */}
            <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
              {/* Left Column: Video Player */}
              <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950 overflow-y-auto">
                <div className="aspect-video w-full bg-slate-900 relative group flex items-center justify-center">
                  <img
                    src={selectedCourse.thumbnail}
                    alt="Video thumbnail"
                    className="absolute inset-0 h-full w-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <button className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary-600/90 text-white backdrop-blur-sm hover:scale-110 hover:bg-primary-500 transition-all shadow-xl shadow-primary-900/50">
                    <Play className="h-8 w-8 ml-1" fill="currentColor" />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
                    <span className="font-medium bg-black/60 px-2 py-1 rounded backdrop-blur-md">
                      {selectedCourse.lessons.find((l) => l.id === activeVideo)?.title}
                    </span>
                    <span className="bg-black/60 px-2 py-1 rounded backdrop-blur-md">
                      {selectedCourse.lessons.find((l) => l.id === activeVideo)?.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Course Description</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedCourse.description}
                  </p>
                </div>
              </div>

              {/* Right Column: Lessons & Resources */}
              <div className="w-full lg:w-96 flex flex-col border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex-1 overflow-y-auto">
                  {/* Lessons Section */}
                  <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white font-semibold">
                      <Video className="h-5 w-5 text-primary-500" />
                      <h3>Video Lessons</h3>
                    </div>
                    <div className="space-y-2">
                      {selectedCourse.lessons.map((lesson, index) => (
                        <button
                          key={lesson.id}
                          onClick={() => setActiveVideo(lesson.id)}
                          className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition-colors ${
                            activeVideo === lesson.id
                              ? 'bg-primary-50 dark:bg-primary-900/20 ring-1 ring-primary-200 dark:ring-primary-800'
                              : 'hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                            activeVideo === lesson.id
                              ? 'bg-primary-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                          }`}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className={`text-sm font-medium ${
                              activeVideo === lesson.id ? 'text-primary-700 dark:text-primary-400' : 'text-slate-700 dark:text-slate-200'
                            }`}>
                              {lesson.title}
                            </p>
                            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {lesson.duration}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Downloads Section */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white font-semibold">
                      <BookOpen className="h-5 w-5 text-emerald-500" />
                      <h3>Course Resources</h3>
                    </div>
                    <div className="space-y-3">
                      {selectedCourse.downloads.map((file) => (
                        <div key={file.id} className="group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                              <FileText className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{file.name}</p>
                              <p className="text-xs text-slate-500">{file.type} • {file.size}</p>
                            </div>
                          </div>
                          <a
                            href="#"
                            download
                            className="p-2 text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            title="Download resource"
                          >
                            <Download className="h-5 w-5" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
