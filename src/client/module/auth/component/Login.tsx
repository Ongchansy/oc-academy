import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../core/actions';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {Login} = useAuth()
  const {mutate} = Login()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      email,
      password
    })
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-center mb-8">Log in to your Udemy account</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="name@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              Log in
            </button>
          </form>
          
          <div className="mt-6">
            <Link to="/forgot-password" className="text-sm text-purple-600 hover:text-purple-700">
              Forgot Password?
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-purple-600 hover:text-purple-700 font-medium">
                Sign up
              </Link>
            </p>
          </div>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>
            
            <div className="mt-6 grid gap-3">
              <button className="w-full px-4 py-3 border border-gray-300 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </button>
              <button className="w-full px-4 py-3 border border-gray-300 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors">
                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5 mr-2" />
                Continue with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;