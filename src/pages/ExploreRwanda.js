// src/pages/ExploreRwanda.js
import React from "react";
import { Link } from "react-router-dom";

const ExploreRwanda = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Explore Rwanda: A Land of Wonders
      </h1>
      <div className="text-center mb-8">
        <p className="text-lg text-gray-700">
          Rwanda, known as the "Land of a Thousand Hills", is home to stunning
          landscapes, diverse wildlife, and rich culture. Whether you're an
          adventure seeker or looking to relax in nature, there's something for
          everyone.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-green-600 mb-4">
        Popular Adventures
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <img
            src="/images/mount_rwanda.jpg"
            alt="Mount Rwanda"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-green-700">
            Mount Rwanda Adventure
          </h3>
          <p className="text-gray-600 mb-4">
            Explore Rwanda’s highest peaks through an exciting mountaineering
            adventure.
          </p>
          <Link
            to="/mtbadventure"
            className="text-green-600 hover:text-green-800 font-bold"
          >
            Learn More
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <img
            src="/images/trekking.jpg"
            alt="Trekking"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-green-700">
            Nature Trekking
          </h3>
          <p className="text-gray-600 mb-4">
            Trek through Rwanda’s beautiful forests and wildlife reserves.
          </p>
          <Link
            to="/mtbadventure"
            className="text-green-600 hover:text-green-800 font-bold"
          >
            Learn More
          </Link>
        </div>
        {/* Add more adventure cards if necessary */}
      </div>
    </div>
  );
};

export default ExploreRwanda;
