import React from 'react';
import { Code, Briefcase, Camera, Music, Database, Palette } from 'lucide-react';

const categories = [
  { icon: Code, name: "Development" },
  { icon: Briefcase, name: "Business" },
  { icon: Camera, name: "Photography" },
  { icon: Music, name: "Music" },
  { icon: Database, name: "IT & Software" },
  { icon: Palette, name: "Design" }
];

function Categories() {
  return (
    <div className="bg-gray-50 py-12 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Top Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer"
            >
              <category.icon className="h-8 w-8 mb-3 text-purple-600" />
              <span className="text-sm font-medium text-center">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;