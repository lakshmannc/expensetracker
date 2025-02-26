'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'user@gmail.com' && password === 'password123') {
      // Redirect to the home page or dashboard after successful login
      window.location.href = '/';
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
         <Link href="/dashboard"><button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg">
            Login
          </button></Link>
          <p className="text-center mt-4">
            Don't have an account? <Link href="/register"><p className="text-blue-600 hover:underline">Register</p></Link>
          </p>

        </form>
      </div>
    </div>
  );
}