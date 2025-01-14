import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative bg-gray-900 h-[400px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="bg-white p-8 max-w-lg rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learning that gets you
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Skills for your present (and future). Get started with us.
          </p>
          <button className="px-6 py-3 bg-purple-600 text-white font-medium rounded hover:bg-purple-700 transition-colors">
            <Link to={`/explore`}>Explore courses</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;