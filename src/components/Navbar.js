import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <navbar>
      <div className="flex ml-4 mt-8">
        <h1 className="text-3xl font-bold text-blue-400 w-full md:ml-7">
          Skill Finder
        </h1>
        <div className="relative md:hidden">
          <button className="mr-8 text-3xl" onClick={toggleMenu}>
            &#8801;
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 p-4 bg-white shadow-md rounded">
              <Link to="/">
                <p className="mb-2 hover:text-black">Home</p>
              </Link>
              <Link to="/about">
                <p className="mb-2 hover:text-black">About Us</p>
              </Link>
              <Link to="/contact">
                <p className="mb-2 hover:text-black">Contact Us</p>
              </Link>
              <Link to="/login">
                <p className="mb-2 hover:text-black">Login</p>
              </Link>
            </div>
          )}
        </div>
        <div className="hidden md:flex md:justify-end md:w-full text-blue-400 font-bold md:mr-10">
          <Link to="/">
            <p className="md:float-right md:mr-10 hover:text-black">Home</p>
          </Link>
          <Link to="/about">
            <p className="md:mr-10 hover:text-black">About Us</p>
          </Link>
          <Link to="/contact">
            <p className="md:mr-10 hover:text-black">Contact Us</p>
          </Link>
          <Link to="/login">
            <p className="md:mr-10 hover:text-black">Login</p>
          </Link>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
