"use client";

import React, { useState } from 'react';
import { Phone, Mail, Menu, X, ChevronDown, Beaker, Globe, Truck } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const pillars = [
    { name: 'BissaLab', href: '/bissalab', icon: <Beaker size={16} /> },
    { name: 'BissaTracker', href: '/bissatracker', icon: <Globe size={16} /> },
    { name: 'BissaCycle', href: '/bissacycle', icon: <Truck size={16} /> },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'A propos', href: '#about' },
    { name: 'Secteur', href: '#secteurs' },
    { name: 'Produit', href: '#produits' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 lg:px-16 bg-[#0B1C14] border-b border-white/5">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black italic tracking-tighter text-white uppercase cursor-pointer">
            Bissa
          </Link>
          
          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Lien Home manuel pour gérer l'ordre */}
            <Link href="/" onClick={() => setActiveItem('Home')} className={`text-sm font-bold uppercase tracking-tight transition-all duration-300 relative py-2 group ${activeItem === 'Home' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
              Home
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#FF5C28] transition-all duration-300 ${activeItem === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
            {/* DROPDOWN A propos */}
            <div 
              className="relative py-2 group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-bold uppercase tracking-tight text-gray-400 group-hover:text-white transition-all">
                À Propos <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-[#FF5C28]' : ''}`} />
              </button> 

              {/* Menu Déroulant */}
              <div className={`absolute top-full left-0 w-56 bg-[#0B1C14] border border-white/10 shadow-2xl transition-all duration-300 transform origin-top-left ${isDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <div className="flex flex-col p-3">
                  <Link href="#about" className="px-4 py-2 text-[10px] font-black text-[#FF5C28] uppercase tracking-[0.2em] mb-2 hover:underline">Présentation Générale</Link>
                  {pillars.map((pillar) => (
                    <Link 
                      key={pillar.name} 
                      href={pillar.href}
                      className="flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
                    >
                      <span className="text-[#2DBE2D]">{pillar.icon}</span>
                      {pillar.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="#about" onClick={() => setActiveItem('A propos')} className={`text-sm font-bold uppercase tracking-tight transition-all duration-300 relative py-2 group ${activeItem === 'A propos' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
              Solution
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#FF5C28] transition-all duration-300 ${activeItem === 'A propos' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>



            {/* Autres Items */}
            {navItems.slice(2).map((item) => (
              <Link
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
              </Link>
            ))}
          </nav>
        </div>

        {/* CONTACT INFO & HAMBURGER */}
        <div className="flex items-center gap-6 text-white">
          <div className="hidden sm:flex items-center gap-2 group cursor-pointer">
            <div className="bg-[#FF5C28]/10 p-2 rounded-full group-hover:bg-[#FF5C28] transition-colors duration-300">
              <Phone size={14} className="text-[#FF5C28] group-hover:text-white transition-colors" />
            </div>
            <span className="text-sm font-bold group-hover:text-[#FF5C28] transition-colors tracking-tighter">+213 697 228 406</span>
          </div>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden bg-[#FF5C28] p-2 rounded-sm">
            {isMenuOpen ? <X size={22} strokeWidth={3} /> : <Menu size={22} strokeWidth={3} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <nav className="absolute right-0 top-0 h-full w-[280px] bg-[#0B1C14] border-l border-white/10 p-8 flex flex-col shadow-2xl">
          <span className="text-xl font-black italic text-white uppercase tracking-tighter mb-10">Bissa</span>
          
          <Link href="/" className="text-xl font-bold uppercase tracking-widest py-4 border-b border-white/5 text-white">Home</Link>
          
          {/* Mobile Accordion pour Solutions */}
          <div className="py-4 border-b border-white/5">
            <p className="text-xs font-black text-[#FF5C28] uppercase tracking-widest mb-4">Nos Piliers</p>
            <div className="flex flex-col gap-4 pl-4">
              {pillars.map(p => (
                <Link key={p.name} href={p.href} onClick={() => setIsMenuOpen(false)} className="text-white font-bold uppercase text-sm">{p.name}</Link>
              ))}
            </div>
          </div>

          {navItems.slice(2).map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-widest py-4 border-b border-white/5 text-white">{item.name}</Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;