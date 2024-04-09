import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-center">
        <div className="w-full md:w-96 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-400">Login</h1>
          </div>

          <form className="flex flex-col space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-400 p-2"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-400 p-2"
              />
            </div>
            <div>
              <button className="w-full bg-blue-400 text-white font-bold py-2 rounded-md hover:text-black">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
