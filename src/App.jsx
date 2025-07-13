import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <img src="/logo.png" alt="CTC Logo" className="h-24 mb-6" />
      <h1 className="text-4xl font-bold mb-4 text-yellow-400">Crane Tech Connect</h1>
      <p className="mb-6 max-w-lg text-center">
        CTC is a live technical support marketplace where crane mechanics can both request help and offer paid expertise to others in need—connecting experts in the field with real-time solutions.
      </p>
      <div className="flex space-x-6 mb-6">
        <div className="border p-4 rounded bg-gray-800 w-60">
          <h2 className="text-lg font-semibold text-yellow-300 mb-2">Help Seeker</h2>
          <ul className="list-disc list-inside text-sm text-gray-300">
            <li>Submit live tech support requests</li>
            <li>Get help from experienced mechanics</li>
            <li>Pay only for resolved help</li>
          </ul>
        </div>
        <div className="border p-4 rounded bg-gray-800 w-60">
          <h2 className="text-lg font-semibold text-yellow-300 mb-2">Help Giver</h2>
          <ul className="list-disc list-inside text-sm text-gray-300">
            <li>Browse open help tickets</li>
            <li>Offer expertise and earn money</li>
            <li>Build your reputation</li>
          </ul>
        </div>
      </div>
      <Link to="/auth" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">
        Enter the Site
      </Link>
    </div>
  );
}

function AuthPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Login or Create Account</h1>
      <div className="flex space-x-4">
        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">Login</button>
        <button className="bg-gray-800 px-4 py-2 rounded border border-yellow-400 hover:bg-gray-700">Create Account</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}
