import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Trophy, Infinity, AlertCircle, X } from 'lucide-react';

// Mock cart data
const cartItems = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2024",
    instructor: "Dr. Angela Yu",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    originalPrice: 94.99,
    discountedPrice: 84.99,
    bestseller: true
  },
  {
    id: 2,
    title: "Machine Learning A-Z™: AI, Python & R",
    instructor: "Kirill Eremenko",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    originalPrice: 129.99,
    discountedPrice: 94.99,
    bestseller: true
  }
];

function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.originalPrice, 0);
  const total = cartItems.reduce((sum, item) => sum + item.discountedPrice, 0);
  const savings = subtotal - total;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-4">{cartItems.length} Course{cartItems.length !== 1 && 's'} in Cart</div>
                
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 py-6 border-t border-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-48 h-28 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-bold mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-600 mb-1">By {item.instructor}</p>
                          {item.bestseller && (
                            <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
                              Bestseller
                            </span>
                          )}
                        </div>
                        <button className="text-purple-600 hover:text-purple-700">
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Keep Shopping */}
            <div className="mt-8">
              <Link
                to="/explore"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Keep Shopping
              </Link>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-6">
                <h2 className="font-bold mb-4">Total:</h2>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Original Price:</span>
                  <span className="line-through text-gray-600">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2 text-green-600">
                  <span>Savings:</span>
                  <span>-${savings.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors mb-4">
                Checkout
              </button>

              <div className="text-center text-sm text-gray-600 mb-6">
                30-Day Money-Back Guarantee
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-bold mb-4">This course includes:</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Infinity className="h-4 w-4 mr-2" />
                    Full lifetime access
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Trophy className="h-4 w-4 mr-2" />
                    Certificate of completion
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Access on mobile and TV
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="flex items-start text-sm text-gray-600">
                  <AlertCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <p>
                    Udemy is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;