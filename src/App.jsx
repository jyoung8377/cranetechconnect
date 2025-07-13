
import React from 'react';

const App = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <img src="/logo.png" alt="CTC Logo" className="w-32 mb-6" />
      <h1 className="text-4xl font-bold text-yellow-400">Crane Tech Connect</h1>
      <p className="text-gray-300 mt-4 max-w-xl">
        CTC is a live technical support marketplace where crane mechanics can both request help and offer paid expertise to others in need—connecting experts in the field with real-time solutions.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-yellow-500 p-4 rounded">
          <h2 className="font-semibold text-xl text-yellow-300">Help Seeker</h2>
          <ul className="mt-2 text-sm text-left">
            <li>• Submit a technical issue</li>
            <li>• Receive help in real-time</li>
            <li>• Choose your helper based on ratings</li>
          </ul>
        </div>
        <div className="border border-yellow-500 p-4 rounded">
          <h2 className="font-semibold text-xl text-yellow-300">Help Giver</h2>
          <ul className="mt-2 text-sm text-left">
            <li>• Browse requests for help</li>
            <li>• Offer paid support</li>
            <li>• Build your reputation as an expert</li>
          </ul>
        </div>
      </div>
      <button className="mt-8 px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500">
        Enter the Site
      </button>
    </main>
  );
};

export default App;
