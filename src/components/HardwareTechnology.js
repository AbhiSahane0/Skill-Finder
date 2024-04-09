import React from "react";
import Navbar from "./Navbar";

const HardwareTechnology = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <header className="mb-8 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 mt-4">
            Welcome to Hardware Technology!
          </h1>
          <p className="text-gray-600">
            Here you can learn and engage in various aspects of hardware
            technology and electronics.
          </p>
        </header>
        <main className="w-full max-w-md">
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">🛠️</span>
            <span>
              Learn about hardware components such as processors, memory, etc.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">⚙️</span>
            <span>Explore hardware design and architecture principles.</span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">🔧</span>
            <span>
              Get hands-on experience by building circuits and prototypes.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">📚</span>
            <span>
              Access tutorials, articles, and resources to enhance your
              knowledge.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HardwareTechnology;
