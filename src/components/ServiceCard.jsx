import React from "react";
export const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300">
      <div className="image">
        <img
          className="w-full h-48 object-cover rounded-md"
          src={image}
          alt={title}
        />
      </div>
      <h2 className="text-xl font-semibold mt-3 text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-400 hover:shadow-md px-4 py-2 my-4 text-white rounded-md ">
        Learn More
      </button>
    </div>
  );
};
