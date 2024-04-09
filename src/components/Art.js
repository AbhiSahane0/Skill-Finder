import React from "react";
import Navbar from "./Navbar";

const Art = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <header className="mb-8 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 mt-4">
            Welcome to Art and Creativity!
          </h1>
          <p className="text-gray-600">
            Here you can explore and engage in various artistic and creative
            activities.
          </p>
        </header>
        <main className="w-full max-w-md">
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">🎨</span>
            <span>
              Create beautiful artwork using different mediums such as painting,
              drawing, and digital art.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">🎭</span>
            <span>
              Express yourself through performing arts such as acting, dancing,
              and music.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">✨</span>
            <span>
              Discover inspiration and creativity through art exhibitions,
              museums, and galleries.
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
            <span className="mr-4 text-2xl">📚</span>
            <span>
              Access resources, tutorials, and workshops to enhance your
              artistic skills and knowledge.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Art;
