import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 text-gray-800">
      {/* زخرفة موجية في الأعلى */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#fbcfe8"
            d="M0,64L48,69.3C96,75,192,85,288,74.7C384,64,480,32,576,32C672,32,768,64,864,69.3C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* المحتوى */}
      <div className="relative container mx-auto flex flex-col items-center gap-6 py-16 z-10">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold text-purple-800 tracking-wide">
          NoraYasir
        </h1>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row justify-center gap-6 text-lg font-medium text-center">
          <li><a href="#home" className="hover:text-purple-700 transition">Home</a></li>
          <li><a href="#about" className="hover:text-purple-700 transition">About</a></li>
          <li><a href="#skills" className="hover:text-purple-700 transition">Skills</a></li>
          <li><a href="#services" className="hover:text-purple-700 transition">Services</a></li>
          <li><a href="#projects" className="hover:text-purple-700 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-700 transition">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          {[
            { icon: <FaFacebookF />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaXTwitter />, link: "#" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-600 text-white text-2xl shadow-lg hover:bg-purple-800 hover:scale-110 transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-700 mt-6 text-sm">
          <a href="#" className="text-purple-700 font-semibold">NoraYasir</a> © All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
