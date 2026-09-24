import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-100">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2947&auto=format&fit=crop" 
          alt="Minimal cafe interior" 
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 mb-6"
        >
          Simplicity in <br className="hidden md:block"/> every sip.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-stone-700 max-w-lg mb-10 text-lg md:text-xl font-light"
        >
          Experience coffee and cuisine stripped back to their essential elements. No distractions.
        </motion.p>
        
        <motion.a 
          href="#menu"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="inline-block border border-stone-900 text-stone-900 px-8 py-3 text-sm tracking-widest uppercase hover:bg-stone-900 hover:text-stone-50 transition-colors duration-300"
        >
          View Menu
        </motion.a>
      </div>
    </section>
  );
}
