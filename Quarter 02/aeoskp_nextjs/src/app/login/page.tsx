// Login.tsx
import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {/* Logo */}
        <div className="mb-6 flex items-center justify-center">
          <img
            src="markazlogo.png" // Replace with your actual logo path or URL
            alt="Logo"
            className="w-16 h-16"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <p className="text-sm">
            Don't have an account? <a href="/register" className="text-blue-500">Register here</a>.
          </p>
          <p className="text-sm">
            Forgot your password? <a href="/forgot-password" className="text-blue-500">Reset it here</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
