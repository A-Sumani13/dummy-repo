export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm font-light">
        
        <div>
          <h4 className="font-serif text-2xl text-stone-50 mb-6">AURA.</h4>
          <p className="max-w-xs leading-relaxed">
            A minimalist approach to exceptional coffee and seasonal plates.
          </p>
        </div>

        <div>
          <h5 className="uppercase tracking-widest text-xs font-medium text-stone-50 mb-6">Location</h5>
          <address className="not-italic leading-relaxed">
            123 Minimalist Way<br/>
            Design District<br/>
            New York, NY 10012
          </address>
        </div>

        <div>
          <h5 className="uppercase tracking-widest text-xs font-medium text-stone-50 mb-6">Hours</h5>
          <ul className="space-y-2">
            <li className="flex justify-between max-w-[200px]">
              <span>Mon - Fri</span>
              <span>7am - 4pm</span>
            </li>
            <li className="flex justify-between max-w-[200px]">
              <span>Sat - Sun</span>
              <span>8am - 5pm</span>
            </li>
          </ul>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-stone-800 text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Aura Cafe. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-stone-300 transition-colors">Instagram</a>
          <a href="#" className="hover:text-stone-300 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
