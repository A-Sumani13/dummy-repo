import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Check, AlertCircle, CalendarDays } from 'lucide-react';

type Priority = 'low' | 'medium' | 'high';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
}

const PriorityBadge = ({ priority }: { priority: Priority }) => {
  const colors = {
    low: 'bg-blue-100 text-blue-800 border-blue-200',
    medium: 'bg-orange-100 text-orange-800 border-orange-200',
    high: 'bg-red-100 text-red-800 border-red-200'
  };

  const labels = {
    low: 'Low',
    medium: 'Medium',
    high: 'High'
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full border ${colors[priority]} flex items-center gap-1 font-medium`}>
      {priority === 'high' && <AlertCircle size={12} />}
      {labels[priority]}
    </span>
  );
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('daily-tasks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [
      { id: '1', text: 'Review project requirements', completed: true, priority: 'high' },
      { id: '2', text: 'Design UI mockup', completed: false, priority: 'high' },
      { id: '3', text: 'Update documentation', completed: false, priority: 'medium' },
      { id: '4', text: 'Reply to emails', completed: false, priority: 'low' },
    ];
  });
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  useEffect(() => {
    localStorage.setItem('daily-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    const task: Task = {
      id: crypto.randomUUID(),
      text: newTask.trim(),
      completed: false,
      priority
    };
    
    setTasks([...tasks, task]);
    setNewTask('');
    setPriority('medium');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    const priorityWeight = { high: 3, medium: 2, low: 1 };
    return priorityWeight[b.priority] - priorityWeight[a.priority];
  });

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-blue-50 to-cyan-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-500 rounded-lg">
              <CalendarDays size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Daily Plan</h1>
              <p className="text-slate-400 text-sm">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2 text-slate-300">
              <span>Progress</span>
              <span>{completedCount} / {totalCount} tasks</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 border-b border-gray-100 bg-slate-50">
          <form onSubmit={addTask} className="flex flex-col gap-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="What needs to be done?"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
              <button
                type="submit"
                disabled={!newTask.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 font-medium">Priority:</span>
              <div className="flex gap-2">
                {(['low', 'medium', 'high'] as Priority[]).map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`text-xs px-3 py-1 rounded-full border transition-all ${
                      priority === p 
                        ? p === 'high' ? 'bg-red-100 border-red-500 text-red-700 font-bold shadow-sm' 
                        : p === 'medium' ? 'bg-orange-100 border-orange-500 text-orange-700 font-bold shadow-sm'
                        : 'bg-blue-100 border-blue-500 text-blue-700 font-bold shadow-sm'
                        : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </div>

        {/* Task List */}
        <div className="p-6">
          {sortedTasks.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <p className="mb-2">Your day is a blank slate.</p>
              <p className="text-sm">Add a task above to get started.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {sortedTasks.map(task => (
                <li 
                  key={task.id}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    task.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1 overflow-hidden">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        task.completed 
                          ? 'bg-emerald-500 border-emerald-500 text-white' 
                          : 'border-gray-300 hover:border-emerald-500 text-transparent hover:text-emerald-500/30'
                      }`}
                    >
                      <Check size={14} strokeWidth={3} />
                    </button>
                    <div className="flex flex-col min-w-0">
                      <span className={`truncate transition-colors ${task.completed ? 'text-gray-400 line-through' : 'text-gray-800 font-medium'}`}>
                        {task.text}
                      </span>
                      {!task.completed && (
                        <div className="mt-1">
                          <PriorityBadge priority={task.priority} />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="ml-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                  >
                    <Trash2 size={18} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}