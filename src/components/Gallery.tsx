const images = [
  {
    url: 'https://images.unsplash.com/photo-1549488344-c5a4fb7058be?auto=format&fit=crop&q=80&w=800',
    alt: 'Interior detail',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800',
    alt: 'Chef cooking',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
    alt: 'Plated dish',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
    alt: 'Coffee preparation',
    className: 'md:col-span-2 md:row-span-1'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black mb-4">Atmosphere</h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto">
            A space designed for clarity. High contrast, low noise. Let the food speak for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-4 auto-rows-[300px]">
          {images.map((img, idx) => (
            <div key={idx} className={`relative overflow-hidden group ${img.className}`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
