import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "../assets/Servicesdata";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((service) => service.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-detail">
      <nav>
        <div className="app-nav">
          <a href="/">
            <div className="app-logo">
              <h1 className="Logo-name">Kivu</h1>
              <p className="Logo-description">Grafter</p>
            </div>
          </a>
          <div className="app-nav-links" id="nav-links">
            <ul>
              <li>
                <a href="#testimonial">Testimonials</a>
              </li>
              <li>
                <a href="#contact-via">Contact</a>
              </li>
              <li className="px-3 py-1 rounded hover:bg-blue-600 opacity-2 text-bold">
                <a href="/signup">Sign up</a>
              </li>
            </ul>
          </div>
          <div className="app-menu-icon" id="menu-toggle" title="Menu">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </nav>
      <section className="content py-10">
        <div className="initial-content mt-8" style={{ paddingTop: "140px" }}>
          <h1 className="heading text-5xl text-bold-600 text-center mx-auto">
            {service.title}
          </h1>
          <p className="text-3xl md:text-xl">{service.description}</p>
        </div>
        <div className="main-content">
          <div className="main-content-left">
            <h1 className="heading text-5xl text-bold-600 text-center">
              SERVICES DESCRIPTION
            </h1>
            <p>{service.description}</p>
            <div className="additional">
              <h3 style={{ fontSize: "x-large", fontWeight: 800 }}>
                Highlights
              </h3>
              <ul>
                {service.details.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              <h3 style={{ fontSize: "x-large", fontWeight: 800 }}>
                Additional Tips
              </h3>
              <ul>
                {service.details.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className="bookings bg-gray-100 p-6 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold mb-4">
                Bookings and More Information
              </h1>
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                Contact Us Via
                <i className="fa-solid fa-circle-chevron-down text-2xl ml-2"></i>
              </h4>
              <div className="call-actions flex gap-4" id="contact-via">
                <a
                  href={service.details.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-lg font-medium text-green-600 hover:underline"
                  style={{ textDecoration: "none", marginRight: "20px" }}
                >
                  <i className="fa-brands fa-whatsapp text-2xl"></i>
                  Whatsapp
                </a>
                <a
                  href={service.details.contact.email}
                  className="flex items-center gap-3 text-lg font-medium text-blue-600 hover:underline"
                  style={{ textDecoration: "none", marginRight: "20px" }}
                >
                  <i className="fa-regular fa-envelope text-2xl"></i>
                  Email
                </a>
              </div>
            </div>
          </div>
          <div className="image-slider relative w-full max-w-lg mx-auto overflow-hidden">
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition"
              id="prev-btn"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div
              className="slider-wrapper flex transition-transform duration-500"
              id="slider-wrapper"
            >
              <img
                src={`../${service.image}`}
                alt={service.title}
                className="w-full sm:w-auto"
              />
            </div>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition"
              id="next-btn"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-blue-500 text-white py-10 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="footer-left">
              <h3 className="text-2xl font-bold mb-3">Kivu safari & tours</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Explore the best of Lake Kivu's natural beauty and cultural
                richness. From scenic tours to unique adventures, we bring you
                unforgettable experiences in Rwanda.
              </p>
              <a
                href="#contactus"
                className="inline-block mt-4 text-blue-400 hover:text-blue-200"
              >
                Contact Us
              </a>
            </div>
            <div className="footer-right">
              <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>
                  <i className="fa-solid fa-envelope mr-2"></i>
                  jeandamourrwibutso@gmail.com
                </li>
                <li>
                  <i className="fa-solid fa-phone mr-2"></i> +250784606393
                </li>
                <li>
                  <i className="fa-solid fa-location-dot mr-2"></i> Kibuye,
                  Rwanda
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps?q=Kibuye,+Rwanda"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View on Google Maps
                  </a>
                </li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <a href="https://facebook.com" className="hover:text-blue-200">
                  <i className="fa-brands fa-facebook text-xl"></i>
                </a>
                <a href="https://twitter.com" className="hover:text-blue-200">
                  <i className="fa-brands fa-x-twitter text-xl"></i>
                </a>
                <a href="https://instagram.com" className="hover:text-blue-200">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center border-t border-blue-600 pt-4 text-sm text-gray-400">
            © 2024 Kivu Grafter. All rights reserved.
          </div>
        </div>
        <button
          id="scrollToTop"
          className="fixed bottom-10 right-6 hidden bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition"
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </footer>
    </div>
  );
};

export default ServiceDetail;
