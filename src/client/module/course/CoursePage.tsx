import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2024",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    reviews: 154342,
    price: 84.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Machine Learning A-Z™: AI, Python & R",
    instructor: "Kirill Eremenko",
    rating: 4.7,
    reviews: 98763,
    price: 94.99,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "iOS & Swift - The Complete iOS App Development",
    instructor: "Dr. Angela Yu",
    rating: 4.9,
    reviews: 63421,
    price: 89.99,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Ultimate AWS Certified Solutions Architect",
    instructor: "Stephane Maarek",
    rating: 4.8,
    reviews: 87654,
    price: 94.99,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

function CoursePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8">Students are viewing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="border rounded-lg hover:shadow-lg transition-shadow">
            <Link to={`/course/${course.id}`}>
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-bold text-base mb-1">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{course.instructor}</p>
              <div className="flex items-center mb-1">
                <span className="text-amber-700 font-bold mr-1">{course.rating}</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-1">({course.reviews.toLocaleString()})</span>
              </div>
              <p className="font-bold">${course.price}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursePage;