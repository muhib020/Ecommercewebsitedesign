import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../imports/SMART_TECH_EVERYDAY.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src={logo}
              alt="Tech Cart Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-slate-400 text-sm mb-4">
              Your trusted source for premium tech accessories across Pakistan.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-purple-600/20 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={18} className="text-slate-400 hover:text-purple-400" />
              </a>
              <a href="https://www.instagram.com/techcart.official.pk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-purple-600/20 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={18} className="text-slate-400 hover:text-purple-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-purple-600/20 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={18} className="text-slate-400 hover:text-purple-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">Wireless Earbuds</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">Power Banks</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">Chargers & Cables</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">Mobile Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <div>+923057040162</div>
                  <div>+923157972502</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>support@techstore.pk</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Gulistan e johar Karachi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 TechStore PK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
