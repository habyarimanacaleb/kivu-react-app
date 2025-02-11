import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "../assets/Servicesdata";
import { Navbar } from "../components/Navbar";
import {
  FaWhatsapp,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((service) => service.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-detail">
      <Navbar />
      <section className="content py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="initial-content mt-4">
          {" "}
          {/* Reduced margin-top */}
          <h1 className="heading text-5xl font-bold text-center mx-auto text-blue-800 mb-2">
            {" "}
            {/* Reduced margin-bottom */}
            {service.title}
          </h1>
          <p className="text-3xl md:text-xl text-gray-700 mt-2 text-center">
            {" "}
            {/* Reduced margin-top */}
            {service.description}
          </p>
        </div>
        <div className="main-content mt-10 flex flex-col lg:flex-row">
          <div className="main-content-left lg:w-2/3 p-6">
            <h2 className="heading text-4xl font-bold text-center text-blue-800 mb-6">
              Services Description
            </h2>
            <p className="text-lg text-gray-700 mb-6">{service.description}</p>
            <div className="additional">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Highlights
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
                {service.details.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Additional Tips
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
                {service.details.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className="bookings bg-gray-100 p-6 rounded-lg shadow-md mt-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">
                Bookings and More Information
              </h2>
              <h4 className="text-xl font-semibold mb-6 flex items-center text-gray-700">
                Contact Us Via
                <FaChevronDown className="text-2xl ml-2" />
              </h4>
              <div className="call-actions flex gap-4" id="contact-via">
                <a
                  href={service.details.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-lg font-medium text-green-600 hover:underline"
                  style={{ textDecoration: "none", marginRight: "20px" }}
                >
                  <FaWhatsapp className="text-2xl" />
                  Whatsapp
                </a>
                <a
                  href={`${service.details.contact.email}`}
                  className="flex items-center gap-3 text-lg font-medium text-blue-600 hover:underline"
                  style={{ textDecoration: "none", marginRight: "20px" }}
                >
                  <FaEnvelope className="text-2xl" />
                  Email
                </a>
              </div>
            </div>
          </div>
          <div className="image-slider relative w-full lg:w-1/3 max-w-lg mx-auto overflow-hidden mt-10 lg:mt-0">
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition"
              id="prev-btn"
            >
              <FaChevronLeft />
            </button>
            <div
              className="slider-wrapper flex transition-transform duration-500"
              id="slider-wrapper"
            >
              <img
                src={`../${service.image}`}
                alt={service.title}
                className="w-full sm:w-auto rounded-md"
              />
            </div>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition"
              id="next-btn"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
