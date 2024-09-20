import React from "react";
import Logo from '../assets/logonavbar.png'
const Navbar = () => {
  return (
    <nav className="w-full bg-primary text-secondary">
      <main className="container mx-auto flex items-center justify-between py-3">
        <img src={Logo} alt="Logo" draggable='false' className="lg:w-60" />
        <ul className="flex gap-8 text-lg items-center">
          <li>Beranda</li>
          <li>Tentang</li>
          <li>
            <button className="rounded-3xl bg-tertiary  py-2 px-4 hover:bg-opacity-80 duration-300 shadow-2xl active:scale-95 transition-all">Masuk</button>
          </li>
        </ul>
      </main>
    </nav>
  );
};

export default Navbar;
