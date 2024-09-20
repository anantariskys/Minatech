import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-primary text-secondary">
      <main className="container mx-auto flex items-center justify-between py-3">
        <h1 className="text-4xl font-semibold">MINATECH</h1>
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
