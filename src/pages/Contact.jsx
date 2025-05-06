import React from "react";
import { FaFacebook, FaWhatsapp, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    alert(`Thank you, ${name}!\nWe’ve received your message:\n"${message}"\nWe’ll reach out to you at ${email}.`);

    form.reset();
  };

  return (
    <div className="p-6 md:p-12 lg:p-20 bg-white text-neutral-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Contact Dragon News</h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" name="name" required className="w-full border px-4 py-2 rounded" placeholder="Your Name" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" name="email" required className="w-full border px-4 py-2 rounded" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea name="message" required rows="5" className="w-full border px-4 py-2 rounded" placeholder="Write your message here..."></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <iframe
            title="Dragon News Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9027418691035!2d90.39132407445307!3d23.75088528890705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b5b7754b5d%3A0xe4b1743dfb6930c5!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1715000000000"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded border"
          ></iframe>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Connect with Us</h2>
          <div className="flex gap-6 text-3xl">
            <a href="https://facebook.com"  rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebook />
            </a>
            <a href="https://wa.me/1234567890"  rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
              <FaWhatsapp />
            </a>
            <a href="https://twitter.com"  rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FaTwitter />
            </a>
            <a href="mailto:contact@dragonnews.com" className="text-red-500 hover:text-red-700">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* <footer className="border-t pt-6 mt-12 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Dragon News. All rights reserved.
      </footer> */}
    </div>
  );
};

export default Contact;
