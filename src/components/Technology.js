import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Homepage = () => {
  const options = [
    {
      id: 1,
      label: "Interested in Software Technology(Coding,Development)?",
      icon: "👨‍💻",
      link: "/software",
    },
    {
      id: 2,
      label: "Interested in Hardware Technology(Robots,AR/VR)?",
      icon: "⚙️",
      link: "/hardware",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-10 min-h-screen bg-white">
        <header className="mb-8 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 mt-4">
            Which are you most interested in?
          </h1>
          <p className="text-gray-600">
            Choose just one. This will help us get you started (but don't limit
            your self).
          </p>
        </header>
        <main className="w-full max-w-md">
          {options.map((option) => (
            <Link key={option.id} to={option.link}>
              <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-md">
                <span className="mr-4 text-2xl">{option.icon}</span>
                <span>{option.label}</span>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Homepage;
