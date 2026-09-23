import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="absolute inset-0 w-full h-full">
        {/* Abstract minimalistic background or high contrast image */}
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2047&ixlib=rb-4.0.3" 
          alt="Cafe Interior" 
          className="w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black mb-6">
          Purity in <br /> Every Plate.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 font-light">
          A minimalist culinary experience. We strip away the unnecessary to focus on the essence of flavor, crafted with seasonal, local ingredients.
        </p>
        <a 
          href="#reservations" 
          className="inline-flex items-center gap-2 border border-black px-8 py-4 text-sm uppercase tracking-widest font-semibold text-black hover:bg-black hover:text-white transition-all duration-300"
        >
          Book a Table
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
