import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const DemoComponent = () => {
  return (
    <div>
      <Navbar />

      <div className="">
        <div className="p-8 ">
          <div className=" float-end ">
            <img
              className="w-96 md:mt-5 md:mr-10"
              src="https://t4.ftcdn.net/jpg/06/44/69/71/360_F_644697167_h81iRPBjVk1ZPSeQbxAKnSc3oySS3j4D.jpg"
            />
          </div>

          <div className=" md:ml-16 md:mt-20">
            <div className="inline md:w-68  ">
              <h1 className="text-5xl font-bold text-stone-700 mt-4">
                Skill Finder.
              </h1>
            </div>

            <div className="md:flex md:w-96">
              <p className="text-base text-stone-700 mt-4 md:w-96 font-bold ">
                Skill Finder helps you uncover your strengths. Take our test to
                learn what you're good at. Let's start your journey to success
                today!🚀
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Link to="/test">
          <button className="mt-15 font-bold text-white text-xl bg-blue-400 w-44 h-12 rounded-lg hover:text-black md:justify-center md:mt-24 ">
            Take Skill Test
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DemoComponent;
