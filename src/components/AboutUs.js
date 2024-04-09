import React from "react";
import Navbar from "./Navbar";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-center">
        <div className="w-full md:w-96 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-400">About Us</h1>
          </div>

          <div className="text-center">
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lobortis magna vel purus convallis eleifend. Phasellus sodales
              ligula a risus congue, ac scelerisque eros fringilla. Suspendisse
              potenti. Vestibulum eget justo ac felis rhoncus elementum.
              Curabitur sed odio non ipsum bibendum aliquam. Nullam quis nunc
              quis enim condimentum aliquam. Morbi nec turpis non lacus
              dignissim efficitur. In et lacus convallis, tincidunt nisi sed,
              dictum felis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
