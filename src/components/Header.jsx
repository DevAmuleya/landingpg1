import React, { useState } from "react";
import Logo from "../assets/kids.png";
import { LuX, LuAlignRight } from "react-icons/lu"; 
import DarkMode from './DarkMode'

// Menu Data
const Menu = [
  { id: 1, name: "About", link: "/#" },
  { id: 2, name: "Campaigns", link: "/#services" },
  { id: 3, name: "Get involved", link: "/#" },
  { id: 4, name: "Contact us", link: "/#" }
];

const Header = () => {
  // State for menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOrderPopup = () => {
    // Add functionality to open a donation popup
    console.log("Donate button clicked");
  };

  return (
    <div className="bg-bg_primary dark:bg-bg_footer pb-16">
      <div className="py-1 px-8 shadow-bottom">
        <div className="flex justify-between items-center py-1">
          <div className="text-primary_blue font-extrabold">
            Hope
          </div>

          {/* Desktop Navigation */}
          <div className="sm:flex hidden justify-between gap-4">
            <ul className="flex flex-wrap justify-center items-center">
              {Menu.map((data) => (
                <li key={data.id} className="mr-4">
                  <a
                    href={data.link}
                    className="inline-block px-4 hover:text-primary_blue"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Donate Button */}
          <div className="hidden sm:block">
            <button
              onClick={handleOrderPopup}
              className="bg-primary_blue text-white py-1 px-4 rounded-md flex items-center"
            >
              Donate
            </button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden flex">
            <button
              onClick={toggleMenu}
              className="text-primary_blue text-2xl focus:outline-none"
            >
              {isMenuOpen ? <LuX /> : <LuAlignRight />}
            </button>
          </div>
        </div>

        <div>
            <DarkMode />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-white p-5 text-black flex flex-col items-start">
            <div className="lg:hidden py-4">
                <ul className="flex flex-col">
                    {Menu.map((data) => (
                    <li key={data.id} className="mb-4">
                        <a
                        href={data.link}
                        className="inline-block hover:text-primary_blue"
                        >
                        {data.name}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="flex lg:hidden">
                <button
                onClick={handleOrderPopup}
                className="bg-primary_blue text-white py-1 px-8 rounded-md items-center w-full"
                >
                Donate
                </button>
            </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex text-center justify-center flex-col mt-10">
        <div className="items-center justify-center p-10 sm:p-16 md:p-20">
          <h1 className="text-[20px] sm:text-[60px] md:text-[70px] font-bold sm:font-extrabold">
            <span className="block">Empowering Communities,</span>
            <span>Transforming Futures</span>
          </h1>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex items-center justify-center mt-10 px-8 sm:px-16 md:px-20">
        <img
          src={Logo}
          alt="logo"
          className="rounded-[20px] w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
