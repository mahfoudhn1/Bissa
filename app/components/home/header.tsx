"use client";

import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mapping des noms vers les ID de section
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'A propos', href: '#about' },
    { name: 'Solution', href: '/solutions' },
    { name: 'Secteur', href: '#secteurs' },
    { name: 'Produit', href: '#produits' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 lg:px-16 bg-[#0B1C14] border-b border-white/5">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <a href="#home" className="text-2xl font-black italic tracking-tighter text-white uppercase cursor-pointer">
            Bissa
          </a>
          
          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`text-sm font-bold uppercase tracking-tight transition-all duration-300 relative py-2 group 
                  ${activeItem === item.name ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#FF5C28] transition-all duration-300 
                  ${activeItem === item.name ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6 text-white">
          {/* Phone Info */}
          <div className="hidden sm:flex items-center gap-2 group cursor-pointer">
            <div className="bg-[#FF5C28]/10 p-2 rounded-full group-hover:bg-[#FF5C28] transition-colors duration-300">
              <Phone size={14} className="text-[#FF5C28] group-hover:text-white transition-colors" />
            </div>
            <span className="text-sm font-bold group-hover:text-[#FF5C28] transition-colors tracking-tighter">
              +213 697 228 406
            </span>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 group cursor-pointer">
            <div className="bg-[#FF5C28]/10 p-2 rounded-full group-hover:bg-[#FF5C28] transition-colors duration-300">
              <Mail size={14} className="text-[#FF5C28] group-hover:text-white transition-colors" />
            </div>
            <span className="text-sm font-bold group-hover:text-[#FF5C28] transition-colors tracking-tighter">
              contact@bissa.com
            </span>
          </div>
          
          {/* HAMBURGER BUTTON */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden bg-[#FF5C28] p-2 hover:scale-110 active:scale-95 transition-all duration-200 rounded-sm"
          >
            {isMenuOpen ? <X size={22} strokeWidth={3} /> : <Menu size={22} strokeWidth={3} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU DRAWER */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Dark Overlay */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Content */}
        <nav className="absolute right-0 top-0 h-full w-[280px] bg-[#0B1C14] border-l border-white/10 p-8 flex flex-col gap-6 shadow-2xl">
          <div className="flex justify-end mb-4">
             <span className="text-xl font-black italic text-white mr-auto uppercase tracking-tighter">Bissa</span>
          </div>

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveItem(item.name);
                setIsMenuOpen(false);
              }}
              className={`text-left text-xl font-bold uppercase tracking-widest py-4 border-b border-white/5 
                ${activeItem === item.name ? 'text-[#FF5C28]' : 'text-white hover:text-[#FF5C28]'}`}
            >
              {item.name}
            </a>
          ))}

          {/* Mobile Info */}
          <div className="mt-auto pt-8 border-t border-white/5">
            <div className="flex items-center gap-4 text-white">
              <div className="bg-[#FF5C28] p-3 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Support 24/7</p>
                <p className="text-sm font-bold">+213 697 228 406</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
      

    </>
  );
};

export default Header;