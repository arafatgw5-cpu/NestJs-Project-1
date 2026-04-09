import Link from "next/link";
import React from "react";

const Navber = () => {
  const navLinks = (
    <>
      <li>
        <Link href="/" className="font-medium hover:text-primary transition">
          Home
        </Link>
      </li>

      <li>
        <Link href="/about" className="font-medium hover:text-primary transition">
          About
        </Link>
      </li>

      <li>
        <Link href="/Blogs" className="font-medium hover:text-primary transition">
          Blogs
        </Link>
      </li>
      <li>
        <Link href="/dashboard" className="font-medium hover:text-primary transition">
          Dashboard
        </Link>
      </li>

      <li>
        <Link href="/projects" className="font-medium hover:text-primary transition">
          Projects
        </Link>
      </li>

      <li>
        <Link href="/contact" className="font-medium hover:text-primary transition">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-2">

        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden rounded-xl"
            >
              ☰
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[99] w-56 rounded-2xl bg-base-100 p-3 shadow-xl border border-base-200"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold tracking-wide">
            Easin<span className="text-primary">.</span>
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navLinks}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <Link
            href="/contact"
            className="btn btn-primary rounded-full px-6 font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;