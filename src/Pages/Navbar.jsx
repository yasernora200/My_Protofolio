import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav
      className="
        fixed bottom-6 left-1/2 transform -translate-x-1/2
        bg-white/30 backdrop-blur-lg rounded-full px-6 py-3
        flex items-center gap-4 shadow-lg z-50
      "
    >
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={`p-3 rounded-full transition-all ${
          activeNav === "#home" ? "bg-pink-400 text-white" : "text-gray-700"
        }`}
      >
        <IoHomeOutline size={24} />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={`p-3 rounded-full transition-all ${
          activeNav === "#about" ? "bg-pink-400 text-white" : "text-gray-700"
        }`}
      >
        <LuUserRound size={24} />
      </a>

      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={`p-3 rounded-full transition-all ${
          activeNav === "#skills" ? "bg-pink-400 text-white" : "text-gray-700"
        }`}
      >
        <BiBook size={24} />
      </a>

      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={`p-3 rounded-full transition-all ${
          activeNav === "#services" ? "bg-pink-400 text-white" : "text-gray-700"
        }`}
      >
        <RiServiceLine size={24} />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={`p-3 rounded-full transition-all ${
          activeNav === "#contact" ? "bg-pink-400 text-white" : "text-gray-700"
        }`}
      >
        <BiMessageSquareDetail size={24} />
      </a>
    </nav>
  );
};

export default Navbar;
