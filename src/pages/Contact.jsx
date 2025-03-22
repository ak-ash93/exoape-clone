import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col mt-30">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center py-20 px-6">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-48  left-0 w-full h-[62vh] object-cover "
          src="https://cdn.dribbble.com/userupload/2994229/file/original-f9346fee35d9afcdf84b1303c26dc4d1.mp4"
        >
          Your browser does not support the video tag.
        </video>

        {/* Overlay Text */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-300">
            Our Story
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-400">
            The story behind Exo Ape is one of exploration, creativity, and
            curiosity.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-auto py-12 px-6 border-t border-gray-700">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-center md:text-left">
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-gray-400">Contact</h3>
            <p className="text-gray-500 mt-2">Willem II Singel 8</p>
            <p className="text-gray-500">
              6041 HS, Roermond,
              <br /> The Netherlands
            </p>
            <p className="text-gray-500">hello@exoape.com</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-400">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  Work
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  Studio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-400">Follow Us</h3>
            <div className="flex flex-col justify-center md:justify-start space-y-1 mt-2">
              <a href="#" className="text-gray-500 hover:text-white">
                Behance
              </a>
              <a href="#" className="text-gray-500 hover:text-white">
                Dribbble
              </a>
              <a href="#" className="text-gray-500 hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="text-gray-500 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
