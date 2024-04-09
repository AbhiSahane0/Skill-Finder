import React from "react";
import Navbar from "./Navbar";

const Science = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <header className="mb-8 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 mt-4">
            Welcome to Scientific Discoveries and Exploration!
          </h1>
          <p className="text-gray-600">
            Here you can satisfy your curiosity by learning about various
            scientific topics and discoveries.
          </p>
        </header>
        <main className="w-full max-w-md">
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">🔬</span>
            <span>
              Explore the world of biology, chemistry, and physics through
              interactive experiments and simulations.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">🚀</span>
            <span>
              Learn about space exploration, astronomy, and the latest
              advancements in space science.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">🌱</span>
            <span>
              Discover environmental science and sustainability initiatives to
              protect our planet.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">📚</span>
            <span>
              Access resources, articles, and documentaries to stay updated on
              scientific discoveries.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Science;
