import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Homepage = () => {
  const options = [
    {
      id: 1,
      label: "Enjoy exploring technology and digital innovations?",
      icon: "👨‍💻",
      link: "/technology",
    },
    {
      id: 2,
      label: "Interested in business and entrepreneurship?",
      icon: "📈",
      link: "/business",
    },
    {
      id: 3,
      label: "Have a passion for art and creativity?",
      icon: "🎨",
      link: "/art",
    },
    {
      id: 4,
      label: "Curious about scientific discoveries and exploration",
      icon: "🌍",
      link: "/science",
    },
    {
      id: 5,
      label: "Enjoy participating in or following sports activities?",
      icon: "🎯",
      link: "/sport",
    },
    {
      id: 6,
      label: "Something else",
      icon: "✌️",
      link: "/somethingelse",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
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
