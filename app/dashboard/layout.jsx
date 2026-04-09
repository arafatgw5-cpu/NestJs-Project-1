import React from "react";
import Link from "next/link";
import Image from "next/image";
const DashBoardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col p-6">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary mb-8">
          Easin Dev
        </h1>

        {/* Menu */}
        <nav className="flex flex-col gap-3">
          <Link href="/dashboard">
            <span className="px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition cursor-pointer">
              📊 Dashboard
            </span>
          </Link>


          <Link href="/dashboard/profile">
            <span className="px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition cursor-pointer">
              🚀 Profile
            </span>
          </Link>
        </nav>

        {/* Footer */}
        <div className="mt-auto text-sm text-gray-400">
          © 2026 Easin
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <header className="bg-white shadow px-4 md:px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg md:text-xl font-semibold">
            Dashboard Panel
          </h2>

          <div className="flex items-center gap-3">
             <Image
                         src="/my-profile.jpeg"
                         alt="Easin Arafat Profile"
                         width={60}
                         height={60}
                         className="rounded-full object-cover shadow-lg border-4 border-white"
                       />
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6">
          {children}
        </main>

      </div>
    </div>
  );
};

export default DashBoardLayout;