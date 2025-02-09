import React, { useState } from "react";

const About = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Sarah, United Kingdom",
      text: "IBIRWA KIVU BIKE TOURS gave us the opportunity to explore Rwanda's beautiful landscapes, rich culture, and incredible history. Our biking trip was exhilarating, and we loved connecting with local communities along the way!",
    },
    {
      id: 2,
      name: "Carlos, Spain",
      text: "The best travel experience I've had! The guides were knowledgeable, friendly, and made us feel like part of the family. Rwanda’s natural beauty will stay in my heart forever.",
    },
  ]);

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTestimonial.name && newTestimonial.text) {
      setTestimonials([
        ...testimonials,
        { id: testimonials.length + 1, ...newTestimonial },
      ]);
      setNewTestimonial({ name: "", text: "" }); // Reset form
    }
  };
  return (
    <div className="about fade-in mx-auto max-w-[80%] flex flex-col py-12">
      <h1 className="headings mb-5 text-center text-4xl font-bold">About Us</h1>

      <p className="text-2xl sm:text-xl md:text-2xl text-justify mb-6">
        Welcome to IBIRWA KIVU BIKE TOURS – your ultimate gateway to explore the
        beauty, adventure, and culture of Rwanda. Whether you are seeking
        tranquil escapes, thrilling adventures, or deep cultural insights, we
        offer a variety of experiences that cater to every traveler.
      </p>

      <p className="text-2xl sm:text-xl md:text-2xl text-justify mb-6">
        As Rwanda's premier adventure partner, we take pride in offering bespoke
        tours that connect you to the heart of this extraordinary country. Our
        tailored experiences take you through awe-inspiring landscapes, cultural
        landmarks, and a fascinating history that has shaped Rwanda into the
        vibrant nation it is today.
      </p>

      <p className="text-2xl sm:text-xl md:text-2xl text-justify mb-6">
        From the tranquil shores of Lake Kivu to the rugged terrain of the Congo
        Nile Trail, our tours offer the perfect balance of adventure and
        serenity. Imagine biking through lush hills, kayaking on crystal-clear
        waters, or hiking in the footsteps of Rwanda's royal heritage. Each of
        our tours invites you to immerse yourself fully in the captivating
        beauty and culture of Rwanda.
      </p>

      <p className="text-2xl sm:text-xl md:text-2xl text-justify mb-6">
        Explore Kigali, a bustling city full of history and modern charm, or
        visit the iconic Genocide Memorials that provide a powerful and moving
        journey through Rwanda's resilient past. Beyond the capital, you'll
        discover the beauty of Musanze, Rubavu, Kibuye, and Huye, each offering
        unique experiences, from cultural visits to breathtaking natural
        landscapes.
      </p>

      {/* Adding a Sustainability Section */}
      <div className="sustainability text-2xl sm:text-xl md:text-2xl text-justify py-6">
        <h2 className="font-bold text-3xl mb-4">
          Sustainability at IBIRWA KIVU
        </h2>
        <p className="mb-6">
          At IBIRWA KIVU BIKE TOURS, sustainability is at the heart of
          everything we do. We are committed to protecting Rwanda's natural
          beauty for future generations by ensuring that our tours are
          environmentally friendly. From using eco-friendly materials to
          minimizing our carbon footprint, we are dedicated to preserving the
          land we love.
        </p>
        <p className="mb-6">
          We also believe in the power of community. By working closely with
          local artisans, farmers, and guides, we ensure that the communities we
          visit thrive from the tourism we bring. Every tour you take helps
          support local economies and keeps Rwanda’s cultural heritage alive.
        </p>
      </div>

      <div
        id="moreContent"
        className="text-2xl sm:text-xl md:text-2xl text-justify py-6"
      >
        <p className="mb-6">
          Rwanda’s agricultural heritage is another gem that we proudly
          highlight. Our tours include visits to the lush coffee and tea
          plantations in the West Province, where you can observe the process of
          cultivation and sample some of the world’s finest brews. At Nkombo
          Island, you’ll experience the beauty of traditional handcrafts,
          created by skilled artisans that showcase Rwanda’s artistic soul.
        </p>

        <p className="mb-6">
          For those with a keen sense of adventure, the mountain biking trails
          offer exhilarating rides through Rwanda’s iconic hills. Hidden
          waterfalls, diverse wildlife, and interactions with local communities
          make these trails an unforgettable journey. You’ll not only witness
          Rwanda's natural beauty but also experience its cultural diversity and
          the warm hospitality of its people.
        </p>

        <p className="mb-6">
          At IBIRWA KIVU BIKE TOURS, we believe that travel should be more than
          just a journey—it should be a life-changing experience. Our tours
          create lasting memories by fostering meaningful connections with
          Rwanda’s vibrant culture, breathtaking landscapes, and fascinating
          history. Each trip is an opportunity to learn, explore, and grow,
          leaving you with an experience that will stay with you for a lifetime.
        </p>

        <p className="mb-6">
          For the adventurous at heart, we offer the Mount Karongi Half-Day and
          Full-Day Trail Biking Adventures. Ride through scenic tea and coffee
          plantations, visit the Gisovu Tea and Coffee Factory, and immerse
          yourself in the powerful history at the Bisesero Genocide Memorial.
          End your journey with a visit to the stunning Mubuga Waterfall. These
          experiences last 6-12 hours and are designed for those who want to
          take their adventure to the next level.
        </p>
      </div>

      {/* Adding Testimonials Section */}
      <section className="about fade-in mx-auto max-w-[80%] flex flex-col py-12">
        <h1 className="headings mb-5 text-center text-4xl font-bold">
          About Us
        </h1>

        <p className="text-2xl sm:text-xl md:text-2xl text-justify mb-6">
          Welcome to IBIRWA KIVU BIKE TOURS – your ultimate gateway to explore
          the beauty, adventure, and culture of Rwanda...
        </p>

        {/* Other content goes here... */}

        {/* Testimonials Section */}
        <div className="testimonials text-2xl sm:text-xl md:text-2xl text-center py-6 bg-gray-100">
          <h2 className="font-bold text-3xl mb-4">What Our Travelers Say</h2>

          {/* Display User Testimonials */}
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item mb-4">
              <p className="italic mb-2">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}

          {/* Testimonial Submission Form */}
          <h3 className="text-2xl mt-8 mb-4">Submit Your Testimonial</h3>
          <form onSubmit={handleSubmit} className="testimonial-form">
            <input
              type="text"
              placeholder="Your Name"
              value={newTestimonial.name}
              onChange={(e) =>
                setNewTestimonial({ ...newTestimonial, name: e.target.value })
              }
              className="input-field mb-4 p-2 w-full border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder="Your Experience"
              value={newTestimonial.text}
              onChange={(e) =>
                setNewTestimonial({ ...newTestimonial, text: e.target.value })
              }
              className="input-field mb-4 p-2 w-full border border-gray-300 rounded"
              rows="4"
              required
            />
            <button
              type="submit"
              className="submit-btn px-4 py-2 bg-blue-600 text-white rounded"
            >
              Submit Testimonial
            </button>
          </form>
        </div>

        {/* CTA Section */}
        <p className="text-xl text-center font-semibold text-gray-700 mt-8">
          At IBIRWA KIVU BIKE TOURS, we don’t just offer tours—we create
          transformative journeys that connect you with the spirit of Rwanda.
          Ready for the adventure of a lifetime?{" "}
          <a href="/book-now" className="text-blue-600 hover:underline">
            Book your tour today
          </a>{" "}
          and let’s explore together!
        </p>
      </section>
    </div>
  );
};

export default About;
