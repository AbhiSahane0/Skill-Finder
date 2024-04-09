import React from "react";
import Navbar from "./Navbar";

const ContactUs = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-center">
        <div className="w-full md:w-96 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-400">Contact Us</h1>
          </div>

          <div className="text-center">
            <p className="text-base text-gray-700">
              For any inquiries or feedback, please feel free to contact us
              using the following information:
            </p>
            <p className="mt-4 text-base text-gray-700">
              Email: cloudabhi123@gmail.com
            </p>
            <p className="text-base text-gray-700">Phone: +91 8485071067</p>
            <p className="mt-4 text-base text-gray-700">
              Address: 123 Main Street, City, Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
