// src/pages/Contacts.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="p-12">
        <h1>Welcome to contact page 👋🏻👋🏻</h1>
        <button
          onClick={() => navigate("/")}
          className="p-3 my-3 border rounded-lg bg-blue-300 text-white"
        >
          <span className="text-xl">←</span> Home page
        </button>
      </div>
      <section id="contactus" className="contact-us my-8">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <form className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Name (optional):
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 p-2 rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contacts;
