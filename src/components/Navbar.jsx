import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-800 shadow-md top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Brand Logo */}
        <div className="logo  text-3xl text-white font-bold">I coffee</div>

          {/* Hamburger Button (visible on small screens) */}
         <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="sm:hidden focus:outline-none text-2xl"
  aria-label="Toggle Menu"
>
  {menuOpen
    ?<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
    : <span className="text-white">☰</span>}
</button>


          {/* Navigation Links (visible on desktop) */}
          <div className="hidden sm:flex gap-10 items-center">
            <a href="#" className="text-white text-2xl hover:text-orange-700 transition">Home</a>
            <a href="#" className="text-white text-2xl hover:text-orange-700 transition">About Us</a>
            <a href="#" className="text-white text-2xl hover:text-orange-700 transition">Contact us</a>
            
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col gap-4 pb-4">
            <a href="#" className="text-white text-2xl hover:text-orange-900 transition">Home</a>
            <a href="#" className="text-white text-2xl hover:text-orange-900 transition">About Us</a>
            <a href="#" className="text-white text-2xl hover:text-orange-900 transition">Contact us</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
