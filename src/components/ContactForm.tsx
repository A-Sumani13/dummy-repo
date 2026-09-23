import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  program: string;
  message: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div id="contact" className="relative isolate bg-white dark:bg-[var(--bg-base)] py-24 px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Contact Admissions</h2>
        <p className="mt-2 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Have questions about our programs or the application process? Reach out to our team.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        {isSuccess ? (
          <div className="rounded-2xl bg-green-50 dark:bg-green-900/20 p-8 text-center ring-1 ring-green-200 dark:ring-green-900/50 animate-in fade-in zoom-in duration-500">
            <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
            <h3 className="mt-4 text-lg font-semibold text-green-800 dark:text-green-300">Message Sent Successfully!</h3>
            <p className="mt-2 text-sm text-green-700 dark:text-green-400">
              Thank you for reaching out. An admissions counselor will get back to you within 24-48 hours.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-6 text-sm font-medium text-green-600 dark:text-green-400 hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="firstName"
                    {...register('firstName', { required: 'First name is required' })}
                    className={`block w-full rounded-md border-0 py-2 px-3.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ${errors.firstName ? 'ring-red-500 focus:ring-red-500' : 'ring-slate-300 dark:ring-slate-700 focus:ring-primary-600'} dark:bg-slate-800 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-all`}
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName', { required: 'Last name is required' })}
                    className={`block w-full rounded-md border-0 py-2 px-3.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ${errors.lastName ? 'ring-red-500 focus:ring-red-500' : 'ring-slate-300 dark:ring-slate-700 focus:ring-primary-600'} dark:bg-slate-800 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-all`}
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`block w-full rounded-md border-0 py-2 px-3.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ${errors.email ? 'ring-red-500 focus:ring-red-500' : 'ring-slate-300 dark:ring-slate-700 focus:ring-primary-600'} dark:bg-slate-800 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-all`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="program" className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200">
                  Program of Interest
                </label>
                <div className="mt-2">
                  <select
                    id="program"
                    {...register('program', { required: 'Please select a program' })}
                    className={`block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ${errors.program ? 'ring-red-500 focus:ring-red-500' : 'ring-slate-300 dark:ring-slate-700 focus:ring-primary-600'} dark:bg-slate-800 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-all`}
                  >
                    <option value="">Select a program...</option>
                    <option value="cs">Computer Science</option>
                    <option value="business">Business Administration</option>
                    <option value="engineering">Engineering</option>
                    <option value="arts">Fine Arts & Design</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.program && <p className="mt-1 text-sm text-red-500">{errors.program.message}</p>}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message', { required: 'Message is required' })}
                    className={`block w-full rounded-md border-0 py-2 px-3.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ${errors.message ? 'ring-red-500 focus:ring-red-500' : 'ring-slate-300 dark:ring-slate-700 focus:ring-primary-600'} dark:bg-slate-800 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-all`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-md bg-primary-600 px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
