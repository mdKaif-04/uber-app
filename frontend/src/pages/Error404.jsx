import React from "react";
import { Link } from "react-router-dom";

// Fun SVG cartoon: City, vehicles, avatars (kids, girls, men)
const Travel404SVG = () => (
  <svg viewBox="0 0 340 140" className="w-72 mx-auto mb-8">
    {/* City skyline */}
    <rect x="0" y="100" width="340" height="40" fill="#e0e7ff" />
    {/* Uber-like car */}
    <rect x="140" y="90" width="50" height="20" rx="10" fill="#6366f1" />
    <circle cx="150" cy="110" r="6" fill="#374151" />
    <circle cx="180" cy="110" r="6" fill="#374151" />
    {/* Cartoon avatars */}
    <circle cx="80" cy="70" r="14" fill="#fbbf24" />    {/* Kid */}
    <circle cx="260" cy="70" r="12" fill="#f472b6" />   {/* Girl */}
    <ellipse cx="170" cy="60" rx="13" ry="16" fill="#34d399" /> {/* Man */}
    {/* Suitcase and balloons */}
    <rect x="115" y="115" width="10" height="10" rx="2" fill="#818cf8" />
    <ellipse cx="220" cy="55" rx="5" ry="9" fill="#f59e42" />
    <ellipse cx="220" cy="40" rx="5" ry="9" fill="#fb7185" />
    <ellipse cx="220" cy="25" rx="5" ry="9" fill="#34d399" />
  </svg>
);

export default function Error404() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tl from-blue-100 via-pink-100 to-yellow-100">
      <div className="max-w-md w-full text-center p-8 rounded-3xl shadow-2xl ring-1 ring-indigo-200 backdrop-blur-md animate-fade-in">
        <Travel404SVG />
        <h1 className="text-6xl font-extrabold tracking-wider text-indigo-600 mb-3 animate-bounce">
          404
        </h1>
        <p className="text-xl text-gray-700 mb-2">
          Oops! Your <span className="text-indigo-600 font-semibold">Uber ride</span> lost its way.
        </p>
        <p className="text-gray-500 mb-6">
          This page doesn’t exist. Our kid adventurers, friendly drivers, and explorers are searching for new routes!
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-xl text-white text-lg font-bold bg-indigo-500 hover:bg-indigo-700 shadow-lg transition-all animate-pulse"
        >
          Get back to home
        </Link>
      </div>
      {/* Tailwind animation utility styles */}
      <style>
        {`
          .animate-fade-in {
            animation: fade-in 1.2s ease-out;
          }
          @keyframes fade-in {
            0% { opacity: 0; transform: scale(0.9);}
            100% { opacity: 1; transform: scale(1);}
          }
        `}
      </style>
    </div>
  );
}

