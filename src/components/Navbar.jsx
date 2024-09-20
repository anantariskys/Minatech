import React, { useState } from "react";
import Logo from '../assets/logonavbar.png';
import { Icon } from '@iconify/react'; // Import Icon component from Iconify

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for controlling mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu on click
  };

  return (
    <nav className="w-full bg-primary text-secondary">
      <main className="container mx-auto flex items-center justify-between py-5 lg:py-3">
        <img src={Logo} alt="Logo" draggable="false" className="lg:w-60 w-32" />
        
        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <Icon icon="mdi:close" width="30" /> // Close icon
            ) : (
              <Icon icon="mdi:menu" width="30" />  // Hamburger icon
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-8 text-lg items-center">
          <li>Beranda</li>
          <li>Tentang</li>
          <li>
            <button className="rounded-3xl bg-tertiary py-2 px-4 hover:bg-opacity-80 duration-300 shadow-2xl active:scale-95 transition-all">
              Masuk
            </button>
          </li>
        </ul>

        {/* Mobile menu (visible when isOpen is true) */}
        {isOpen && (
          <ul className="lg:hidden absolute top-16 left-0 w-full bg-primary text-secondary flex flex-col items-center gap-4 py-4">
            <li onClick={toggleMenu}>Beranda</li>
            <li onClick={toggleMenu}>Tentang</li>
            <li>
              <button className="rounded-3xl bg-tertiary py-2 px-4 hover:bg-opacity-80 duration-300 shadow-2xl active:scale-95 transition-all" onClick={toggleMenu}>
                Masuk
              </button>
            </li>
          </ul>
        )}
      </main>
    </nav>
  );
};

export default Navbar;
