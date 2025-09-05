import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative bg-secondary-blue font-manrope">
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center p-4 text-white">
        <h2 className="font-bold text-4xl text-shadow-gold mr-auto cursor-pointer">
          Booklyn
        </h2>
        <ul className="flex gap-10 text-2xl">
          <li><a href="../pages/index.php" className="navlink">Home</a></li>
          <li><a href="../pages/books.php" className="navlink">Books</a></li>
          <li><a href="../pages/library.php" className="navlink">Authors</a></li>
        </ul>
        <div className="ml-auto flex items-center gap-4">
          <a href="../pages/login.php">
            <button className="login-btn rounded-md border-2 border-accent-gold py-1 px-3 hover:bg-accent-gold hover:text-gray-900 transition">
              Login
            </button>
          </a>
          <a href="../pages/register.php">
            <button className="start-btn rounded-md bg-accent-gold py-1 px-3 text-gray-900 hover:scale-105 transition transform">
              Get Started
            </button>
          </a>
        </div>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden flex items-center justify-between p-4">
        <h2 className="font-bold text-3xl text-shadow-gold">Booklyn</h2>
        <button
          className="p-2 rounded-md bg-accent-gold text-white hover:bg-yellow-400 transition"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-75 bg-secondary-blue shadow-xl transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-2 rounded-md bg-accent-gold text-white hover:bg-yellow-400 transition"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
        </button>

        {/* Mobile Links */}
        <ul className="flex flex-col mt-20">
          <li>
            <a href="../pages/index.php" className="text-white block py-4 px-6 border-b border-gray-700 hover:bg-[#1e2a4f] transition">
              Home
            </a>
          </li>
          <li>
            <a href="../pages/books.php" className="text-white block py-4 px-6 border-b border-gray-700 hover:bg-[#1e2a4f] transition">
              Books
            </a>
          </li>
          <li>
            <a href="../pages/library.php" className="text-white block py-4 px-6 border-b border-gray-700 hover:bg-[#1e2a4f] transition">
              Authors
            </a>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex flex-col p-6 space-y-4 mt-4">
          <a href="../pages/login.php">
            <button className="w-full rounded-md border-2 border-accent-gold py-2 hover:bg-accent-gold hover:text-gray-900 transition">
              Login
            </button>
          </a>
          <a href="../pages/register.php">
            <button className="w-full rounded-md bg-accent-gold py-2 text-gray-900 hover:scale-105 transition transform">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
