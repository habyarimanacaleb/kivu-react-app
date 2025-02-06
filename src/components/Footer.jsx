import React from "react";

export const Footer = () => {
  return (
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
                <i className="fa-solid fa-envelope mr-2"></i>{" "}
                jeandamourrwibutso@gmail.com
              </li>
              <li>
                <i className="fa-solid fa-phone mr-2"></i> +250784606393
              </li>
              <li>
                <i className="fa-solid fa-location-dot mr-2"></i> Kibuye, Rwanda
              </li>
              <li>
                <a
                  href="https://www.google.com/maps?q=Kibuye,+Rwanda"
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
  );
};
