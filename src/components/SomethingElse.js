import React from "react";
import Navbar from "./Navbar";

const SomethingElse = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-white">
        <p className="mt-10 text-8xl">🙇</p>
        <header className="mb-8 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 mt-10">
            Sorry, we don't guess your interest.
          </h1>
          <p className="text-gray-600">
            You can gain knowledge about this field from other sources.
          </p>
        </header>
        <main className="w-full max-w-md">
          {/* Add additional content or links here */}
        </main>
      </div>
    </div>
  );
};

export default SomethingElse;
