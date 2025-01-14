import React from 'react';
import { Search, ShoppingCart, Menu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 lg:hidden" />
            <div className="text-2xl font-bold">
                <Link to={`/`}>OC Bootcamp</Link>
            </div>
            <div className="hidden lg:block ml-8">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-[400px] px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/explore" className="text-sm ml-4 hover:text-purple-600">Explore</Link>
            <Link to={`/cart`}>
              <ShoppingCart className="h-5 w-5" />  
            </Link>
            <div className="space-x-2">
              <button className="px-4 py-2 border border-gray-900 text-sm font-medium rounded hover:bg-gray-100">
                <Link to={`/auth/login`}>Log in</Link>
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800">
              <Link to={`/auth/signup`}>Sign up</Link>
              </button>
            </div>
            <button className="p-2 border border-gray-900 rounded">
              <Globe className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex lg:hidden items-center space-x-4">
            <Search className="h-6 w-6" />
               <ShoppingCart className="h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;