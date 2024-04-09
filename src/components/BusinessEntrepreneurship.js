import React from "react";
import Navbar from "./Navbar";

const BusinessEntrepreneurship = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <header className="mb-8 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 mt-4">
            Welcome to Business and Entrepreneurship!
          </h1>
          <p className="text-gray-600">
            Here you can learn and engage in various aspects of business and
            entrepreneurship.
          </p>
        </header>
        <main className="w-full max-w-md">
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">💼</span>
            <span>
              Learn about business models, marketing strategies, and finance.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">🚀</span>
            <span>
              Explore entrepreneurship principles, startup culture, and
              innovation.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">💡</span>
            <span>
              Get inspired by success stories and case studies of prominent
              entrepreneurs.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">📚</span>
            <span>
              Access resources, courses, and workshops to develop your
              entrepreneurial skills.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessEntrepreneurship;
