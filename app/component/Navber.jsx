import React from "react";

const Navber = () => {
  const navLinks = (
    <>
      <li>
        <a href="/" className="font-medium hover:text-primary transition-colors duration-300">
          Home
        </a>
      </li>
      <li>
        <a href="/about" className="font-medium hover:text-primary transition-colors duration-300">
          About
        </a>
      </li>
      <li>
        <details>
          <summary className="font-medium hover:text-primary transition-colors duration-300">
            Services
          </summary>
          <ul className="p-2 bg-base-100 rounded-xl shadow-lg w-44 z-50">
            <li>
              <a className="hover:text-primary transition-colors duration-300">
                Web Design
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors duration-300">
                Development
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors duration-300">
                UI/UX
              </a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a href="/projects" className="font-medium hover:text-primary transition-colors duration-300">
          Projects
        </a>
      </li>
      <li>
        <a href="/contact" className="font-medium hover:text-primary transition-colors duration-300">
          Contact
        </a>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[99] w-56 rounded-2xl bg-base-100 p-3 shadow-xl border border-base-200"
            >
              {navLinks}
            </ul>
          </div>

          <a className="text-2xl font-extrabold tracking-wide cursor-pointer">
            Easin<span className="text-primary">.</span>
          </a>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <a className="btn btn-primary rounded-full px-6 font-semibold shadow-md hover:scale-105 transition-transform duration-300">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;