import React from 'react';
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-10 w-10 mr-3" />
          <h1 className="text-xl font-bold">ToDo Application</h1>
        </div>
        <nav className="flex space-x-4">
          <NavLink to="/" className="hover:text-gray-200">Home</NavLink>
          <NavLink to="/features" className="hover:text-gray-200">Features</NavLink>
          <NavLink to="/about" className="hover:text-gray-200">About</NavLink>
          <NavLink to="/contact" className="hover:text-gray-200">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
