'use client'

import '../globals.css';
import Image from "next/image"; 
import { useState } from 'react';

import ProductsSheet from './products.sheet';
import whiteLogo from '../assets/logos/CoMed_Inc_white.png';
import blackLogo from '../assets/logos/CoMed_Inc_black.png';

export default function HeaderPrimary() {
  const [showProducts, setShowProducts] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="w-full pt-4 md:px-0 px-16 sticky top-0 bg-white">
      <div className="navbar w-full relative !h-16">
        <div className="flex justify-between items-center m-auto w-full md:w-4/5 2xl:w-3/5 relative">
          <div className="flex items-center gap-4">
            <a className="btn !border-0 bg-transparent px-0 mr-4 text-gray-700 text-xl font-black" href="/">
              <Image
                src={blackLogo}
                width={150}
                alt="CoMed Inc. Logo"
                className="max-w-[300px] img-shadow shrink-0 grow-0"
                title="CoMed Inc. Logo"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {/* Home */}
            <a className="btn !border-0 bg-transparent px-0 mx-4 text-gray-700 text-md font-bold" href="/">Home</a>

            {/* Products Sheet Toggle */}
            <button
              className="btn !border-0 bg-transparent px-0 mx-4 text-gray-700 text-md font-bold"
              onClick={toggleProducts}
            >
              Products
            </button>

            {/* Careers */}
            <a className="btn !border-0 bg-transparent px-0 mx-4 text-gray-700 text-md font-bold" href="/careers">Careers</a>

            {/* News */}
            <a className="btn !border-0 bg-transparent px-0 mx-4 text-gray-700 text-md font-bold" href="/news">News</a>

            {/* Investors */}
            <a className="btn !border-0 bg-transparent px-0 ml-4 text-gray-700 text-md font-bold" href="/investors">Investors</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black text-[24px] font-bold">
              &#9776;
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {showMenu && (
          <div className="flex flex-col items-left gap-4 md:hidden bg-white stretch py-8 px-8">
            <a className="btn !border-0 bg-transparent text-gray-700 text-md font-bold" href="/" onClick={toggleMenu}>Home</a>
            <button
              className="btn !border-0 bg-transparent text-gray-700 text-md font-bold text-left"
              onClick={() => { toggleProducts(); toggleMenu(); }}
            >
              Products
            </button>
            <a className="btn !border-0 bg-transparent text-gray-700 text-md font-bold" href="/careers" onClick={toggleMenu}>Careers</a>
            <a className="btn !border-0 bg-transparent text-gray-700 text-md font-bold" href="/news" onClick={toggleMenu}>News</a>
            <a className="btn !border-0 bg-transparent text-gray-700 text-md font-bold" href="/investors" onClick={toggleMenu}>Investors</a>
          </div>
        )}
      </div>
      {/* Products Sheet */}
      {showProducts && <ProductsSheet toggleProducts={toggleProducts} />}
    </nav>
  );
}