import React from "react";
import Navbar from "./Navbar";

const SoftwareTechnology = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <header className="mb-8 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 mt-4">
            Welcome to Software Technology!
          </h1>
          <p className="text-gray-600">
            Here you can learn and engage in various aspects of software
            development and coding.
          </p>
        </header>
        <main className="w-full max-w-md">
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">👩‍💻</span>
            <span>
              Learn coding languages such as JavaScript, Python, Java, etc.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">📘</span>
            <span>
              Explore various software development methodologies like Agile,
              Scrum, etc.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">🛠️</span>
            <span>
              Get hands-on experience by building projects and applications.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">📝</span>
            <span>
              Access tutorials, articles, and resources to enhance your skills.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SoftwareTechnology;
