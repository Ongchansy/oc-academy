import React, { useState } from 'react';
import { Star, Filter, SortAsc } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2024",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    reviews: 154342,
    price: 84.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    level: "All Levels",
    duration: "52.5 hours",
    category: "Development",
    subcategory: "Web Development",
    bestseller: true
  },
  {
    id: 2,
    title: "Machine Learning A-Z™: AI, Python & R",
    instructor: "Kirill Eremenko",
    rating: 4.7,
    reviews: 98763,
    price: 94.99,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    level: "Beginner",
    duration: "44 hours",
    category: "Development",
    subcategory: "Data Science",
    bestseller: true
  },
  {
    id: 3,
    title: "iOS & Swift - The Complete iOS App Development",
    instructor: "Dr. Angela Yu",
    rating: 4.9,
    reviews: 63421,
    price: 89.99,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    level: "Beginner",
    duration: "55 hours",
    category: "Development",
    subcategory: "Mobile Development",
    bestseller: false
  },
  {
    id: 4,
    title: "Ultimate AWS Certified Solutions Architect",
    instructor: "Stephane Maarek",
    rating: 4.8,
    reviews: 87654,
    price: 94.99,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    level: "Intermediate",
    duration: "38 hours",
    category: "IT & Software",
    subcategory: "Cloud Computing",
    bestseller: true
  },
  {
    id: 5,
    title: "The Complete Digital Marketing Course",
    instructor: "Rob Percival",
    rating: 4.5,
    reviews: 45678,
    price: 89.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    level: "All Levels",
    duration: "38 hours",
    category: "Business",
    subcategory: "Digital Marketing",
    bestseller: false
  },
  {
    id: 6,
    title: "Complete Python Bootcamp",
    instructor: "Jose Portilla",
    rating: 4.6,
    reviews: 78901,
    price: 84.99,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    level: "Beginner",
    duration: "41 hours",
    category: "Development",
    subcategory: "Python",
    bestseller: true
  }
];

const filters = {
  ratings: ["4.5 & up", "4.0 & up", "3.5 & up", "3.0 & up"],
  duration: ["0-3 Hours", "3-6 Hours", "6-17 Hours", "17+ Hours"],
  level: ["All Levels", "Beginner", "Intermediate", "Expert"],
  topics: ["Python", "Web Development", "Machine Learning", "JavaScript", "Data Science", "AWS"],
  price: ["Free", "Paid"]
};

function ExplorePage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Most Popular");

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">All Development Courses</h1>
          <p className="mt-2 text-gray-300">Find the right development course for you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Filter className="h-5 w-5" />
              </div>

              {Object.entries(filters).map(([category, options]) => (
                <div key={category} className="mb-6">
                  <h3 className="font-medium mb-3 capitalize">{category}</h3>
                  <div className="space-y-2">
                    {options.map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.includes(option)}
                          onChange={() => toggleFilter(option)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          <div className="lg:w-3/4">
            {/* Sort Controls */}
            <div className="bg-white rounded-lg shadow p-4 mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <SortAsc className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="ml-2 text-sm border-none focus:ring-0"
                >
                  <option>Most Popular</option>
                  <option>Highest Rated</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
              <span className="text-sm text-gray-600">{courses.length} results</span>
            </div>

            {/* Courses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to={`/course/${course.id}`}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{course.instructor}</p>
                    <div className="flex items-center mb-1">
                      <span className="text-amber-700 font-bold mr-1">{course.rating}</span>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-1">
                        ({course.reviews.toLocaleString()})
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <span>{course.duration}</span>
                      <span className="mx-2">•</span>
                      <span>{course.level}</span>
                      {course.bestseller && (
                        <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
                          Bestseller
                        </span>
                      )}
                    </div>
                    <p className="font-bold text-lg">${course.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;