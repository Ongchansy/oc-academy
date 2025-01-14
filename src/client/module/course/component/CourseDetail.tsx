import React, { useState } from 'react';
import { Star, Play, Globe, Award, ChevronDown, ChevronUp,Users } from 'lucide-react';

// Mock course data
const courseData = {
  id: 1,
  title: "Complete Web Development Bootcamp 2024",
  description: "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps",
  instructor: {
    name: "Dr. Angela Yu",
    title: "Developer and Lead Instructor",
    bio: "I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    totalStudents: 825644,
    reviews: 234,
    courses: 8
  },
  rating: 4.8,
  reviews: 154342,
  students: 825644,
  lastUpdated: "January 2024",
  language: "English",
  price: 84.99,
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  whatYouWillLearn: [
    "Build 16 web development projects for your portfolio",
    "Learn the latest technologies, including Javascript, React, Node and even Web3 development",
    "Build fully-fledged websites and web apps for your startup or business",
    "Master frontend development with React",
    "Master backend development with Node",
    "Learn professional developer best practices"
  ],
  curriculum: [
    {
      title: "Introduction to Web Development",
      lectures: 18,
      duration: "2.5 hours",
      items: [
        { title: "How the Internet Works", duration: "15:00" },
        { title: "How Websites Work", duration: "12:00" },
        { title: "Setup Your Development Environment", duration: "20:00" }
      ]
    },
    {
      title: "HTML Foundations",
      lectures: 22,
      duration: "3 hours",
      items: [
        { title: "HTML Tags and Elements", duration: "18:00" },
        { title: "HTML Forms and Inputs", duration: "25:00" },
        { title: "HTML5 Semantic Elements", duration: "20:00" }
      ]
    }
  ]
};

function CourseDetail() {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setExpandedSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };


  return (
    <div className="bg-white">
      {/* Course Header */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
              <p className="text-lg mb-4">{courseData.description}</p>
              <div className="flex items-center mb-4">
                <span className="text-amber-400 font-bold mr-2">{courseData.rating}</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2">({courseData.reviews.toLocaleString()} ratings)</span>
                <span className="ml-4">{courseData.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center text-sm">
                <span>Created by {courseData.instructor.name}</span>
                <span className="mx-2">•</span>
                <span>Last updated {courseData.lastUpdated}</span>
                <span className="mx-2">•</span>
                <Globe className="h-4 w-4 mr-1" />
                <span>{courseData.language}</span>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
                <img
                  src={courseData.image}
                  alt={courseData.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="text-3xl font-bold mb-4">${courseData.price}</div>
                <button className="w-full py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors mb-4">
                  Add to cart
                </button>
                <button className="w-full py-3 border border-gray-300 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Buy now
                </button>
                <div className="mt-4 text-sm text-center text-gray-600">
                  30-Day Money-Back Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* What you'll learn */}
            <div className="border border-gray-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseData.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course content */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Course content</h2>
              <div className="border border-gray-200 rounded-lg">
                {courseData.curriculum.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        {expandedSections.includes(index) ? (
                          <ChevronUp className="h-5 w-5 mr-2" />
                        ) : (
                          <ChevronDown className="h-5 w-5 mr-2" />
                        )}
                        <span className="font-medium">{section.title}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        {section.lectures} lectures • {section.duration}
                      </div>
                    </button>
                    {expandedSections.includes(index) && (
                      <div className="px-6 py-2 bg-gray-50">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center justify-between py-2"
                          >
                            <div className="flex items-center">
                              <Play className="h-4 w-4 mr-2" />
                              <span className="text-sm">{item.title}</span>
                            </div>
                            <span className="text-sm text-gray-600">{item.duration}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Instructor</h2>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start">
                  <img
                    src={courseData.instructor.image}
                    alt={courseData.instructor.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{courseData.instructor.name}</h3>
                    <p className="text-gray-600 mb-2">{courseData.instructor.title}</p>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <div className="flex items-center mr-4">
                        <Star className="h-4 w-4 mr-1" />
                        <span>{courseData.instructor.reviews} Reviews</span>
                      </div>
                      <div className="flex items-center mr-4">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{courseData.instructor.totalStudents.toLocaleString()} Students</span>
                      </div>
                      <div className="flex items-center">
                        <Play className="h-4 w-4 mr-1" />
                        <span>{courseData.instructor.courses} Courses</span>
                      </div>
                    </div>
                    <p className={`text-gray-700 ${!isDescriptionExpanded && 'line-clamp-3'}`}>
                      {courseData.instructor.bio}
                    </p>
                    <button
                      onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                      className="text-purple-600 hover:text-purple-700 font-medium mt-2"
                    >
                      Show {isDescriptionExpanded ? 'less' : 'more'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;