import React from "react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-sm">
        <div className="flex flex-col items-center mb-6">
          <div className="text-orange-500 text-3xl font-bold mb-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="9" height="9" />
              <rect x="13" y="13" width="9" height="9" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">FutureResume</h1>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-1">Sign In</h2>
        <p className="text-sm text-gray-600 mb-6">
          Don’t have an account? <a href="#" className="text-orange-500">Sign up</a>
        </p>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="example@email.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="w-5 h-5"
          />
          <span>Sign in with Googleeeeeeeeeeeeeee</span>
        </button>
      </div>
    </div>
  );
}
