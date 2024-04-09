import React from "react";
import Navbar from "./Navbar";

const Sport = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <header className="mb-8 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 mt-4">
            Welcome to Sports Activities!
          </h1>
          <p className="text-gray-600">
            Here you can participate in various sports activities and follow
            your favorite sports.
          </p>
        </header>
        <main className="w-full max-w-md">
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">⚽</span>
            <span>
              Play soccer and join local leagues or tournaments in your area.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">🏀</span>
            <span>
              Shoot hoops and improve your basketball skills at nearby courts or
              clubs.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">🎾</span>
            <span>
              Hit the tennis courts and participate in tennis matches or
              coaching sessions.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">📺</span>
            <span>
              Follow live sports events, scores, and news from your favorite
              teams and athletes.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sport;
