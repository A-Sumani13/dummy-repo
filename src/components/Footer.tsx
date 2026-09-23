export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        <div>
          <h3 className="text-2xl font-bold tracking-tighter uppercase mb-6">Aura.</h3>
          <p className="text-gray-400 font-light text-sm max-w-xs mx-auto md:mx-0">
            A modern, minimal dining space focused on intentional ingredients and precise execution.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">Location</h4>
          <address className="not-italic text-gray-400 font-light space-y-2 text-sm">
            <p>123 Minimalist Way</p>
            <p>Design District, NY 10001</p>
            <p className="pt-2">hello@auracafe.com</p>
            <p>+1 (555) 123-4567</p>
          </address>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">Hours</h4>
          <div className="text-gray-400 font-light space-y-2 text-sm">
            <p className="flex justify-between md:justify-start md:gap-8">
              <span>Wed - Fri</span>
              <span>17:00 - 22:00</span>
            </p>
            <p className="flex justify-between md:justify-start md:gap-8">
              <span>Sat - Sun</span>
              <span>10:00 - 23:00</span>
            </p>
            <p className="flex justify-between md:justify-start md:gap-8 text-gray-600">
              <span>Mon - Tue</span>
              <span>Closed</span>
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Aura Cafe. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
