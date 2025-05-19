import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-bold">Zen Center</Link>
      <ul className="flex space-x-6 text-sm font-medium">
        <li><Link to="/contact" className="hover:text-yellow-300">문의하기</Link></li>
        <li><Link to="/subscribe" className="hover:text-yellow-300">구독하기</Link></li>
      </ul>
    </nav>
  );
}
