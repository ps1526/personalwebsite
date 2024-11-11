// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black w-full p-2">
      <ul className="flex justify-end">
        <li className="mx-4">
          <Link href="/" className="text-white text-sm font-semibold transition duration-200 hover:text-blue-400 hover:scale-105">
            About
          </Link>
        </li>
        <li className="mx-4">
          <Link href="/experiences" className="text-white text-sm font-semibold transition duration-200 hover:text-blue-400 hover:scale-105">
            Experiences
          </Link>
        </li> 
        <li className="mx-4">
          <Link href="/research" className="text-white text-sm font-semibold transition duration-200 hover:text-blue-400 hover:scale-105">
            Research 
          </Link>
        </li> 
        <li className="mx-4">
          <Link href="/projects" className="text-white text-sm font-semibold transition duration-200 hover:text-blue-400 hover:scale-105">
            Projects
          </Link>
        </li>
        
        
      </ul>
    </nav>
  );
};

export default Navbar;
