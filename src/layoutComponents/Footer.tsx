import React from 'react';
import { Globe } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Udemy Business</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Teach on Udemy</a></li>
              <li><a href="#" className="hover:text-white">Get the app</a></li>
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Contact us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Careers</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Help and Support</a></li>
              <li><a href="#" className="hover:text-white">Affiliate</a></li>
              <li><a href="#" className="hover:text-white">Investors</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Terms</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white">Cookie settings</a></li>
              <li><a href="#" className="hover:text-white">Sitemap</a></li>
              <li><a href="#" className="hover:text-white">Accessibility</a></li>
            </ul>
          </div>
          
          <div>
            <button className="flex items-center space-x-2 border border-white px-4 py-2 rounded">
              <Globe className="h-5 w-5" />
              <span>English</span>
            </button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">Udemy</div>
          <div className="text-gray-400">© 2024 Udemy, Inc.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;