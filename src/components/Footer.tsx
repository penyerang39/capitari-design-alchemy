
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 md:px-8 bg-capitari-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-montagu mb-6">Capitari</h3>
            <p className="opacity-80">
              Creating exceptional UX experiences for startups and SMBs since 2020.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-montagu mb-4">Sitemap</h4>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#work" className="opacity-80 hover:opacity-100 transition-opacity">Work</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-montagu mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Twitter</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">LinkedIn</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Instagram</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Dribbble</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80 text-sm">&copy; {currentYear} Capitari. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Privacy</a></li>
              <li><a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Terms</a></li>
              <li><a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
