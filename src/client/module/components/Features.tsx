import React from 'react';
import { Award, Users, Play, Building2 } from 'lucide-react';

function Features() {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why learn with Udemy?</h2>
          <p className="text-gray-400">Learn from anywhere, anytime, and at your own pace</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Play className="h-12 w-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-lg font-semibold mb-2">Learn in-demand skills</h3>
            <p className="text-gray-400">Choose from over 210,000 online video courses</p>
          </div>
          
          <div className="text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-lg font-semibold mb-2">Learn from experts</h3>
            <p className="text-gray-400">Find the right instructor for you</p>
          </div>
          
          <div className="text-center">
            <Award className="h-12 w-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-lg font-semibold mb-2">Earn a certificate</h3>
            <p className="text-gray-400">Get certified upon completion</p>
          </div>
          
          <div className="text-center">
            <Building2 className="h-12 w-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-lg font-semibold mb-2">For Business</h3>
            <p className="text-gray-400">Upskill your team with Udemy Business</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;