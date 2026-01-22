"use client";

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, Beaker, Globe, Truck } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pillars = [
    { name: 'BissaLab', href: '/bissalab', icon: <Beaker size={18} /> },
    { name: 'BissaLink', href: '/bissatrack', icon: <Globe size={18} /> },
    { name: 'BissaCycle', href: '/bissacycle', icon: <Truck size={18} /> },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'A propos', href: '#about' },
    { name: 'solution', href: '/solutions' },
    { name: 'Secteur', href: '#secteurs' },
    { name: 'Produit', href: '#produits' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 lg:px-16 flex items-center justify-between 
        ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white'}`}
      >
        <div className="flex items-center gap-12">
          {/* Logo - Kept Forest Green for brand identity */}
          <Link href="/" className="text-2xl font-black tracking-tight text-white flex items-center gap-1 uppercase">
            <span className="bg-[#2E6F40] px-2 py-0.5 rounded-sm">Bissa</span>
          </Link>
          
          {/* DESKTOP NAVIGATION - High contrast #2D2D2D */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link 
              href="/" 
              onClick={() => setActiveItem('Home')} 
              className={`text-[13px] font-bold uppercase tracking-wider transition-colors relative py-2 
              ${activeItem === 'Home' ? 'text-[#2D2D2D]' : 'text-gray-500 hover:text-[#00674F]'}`}
            >
              Home
              {/* Active Indicator: Emerald Green */}
              {activeItem === 'Home' && <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#00674F] rounded-full" />}
            </Link>

            <div 
              className="relative py-2 group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider text-gray-500 group-hover:text-[#2D2D2D] transition-all">
                À Propos <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button> 

              <div className={`absolute top-full -left-4 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 p-2 transition-all duration-200 origin-top ${isDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  <p className="px-4 py-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">Expertises</p>
                  <Link href="#about" className="px-4 py-2 text-[10px] font-black text-[#2E6F40] uppercase tracking-[0.2em] mb-2 hover:underline">Présentation Générale</Link>

                  {pillars.map((pillar) => (
                    <Link 
                      key={pillar.name} 
                      href={pillar.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-[#2D2D2D] hover:bg-[#F4F4F1] transition-all group"
                    >
                      {/* Icon Container: Petrol Blue */}
                      <span className="text-white bg-[#083344] p-1.5 rounded-lg group-hover:bg-[#00674F] group-hover:scale-110 transition-all">
                        {pillar.icon}
                      </span>
                      {pillar.name}
                    </Link>
                  ))}
              </div>
            </div>

            {navItems.slice(2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`text-[13px] font-bold uppercase tracking-wider transition-all relative py-2 
                  ${activeItem === item.name ? 'text-[#2D2D2D]' : 'text-gray-500 hover:text-[#00674F]'}`}
              >
                {item.name}
                {/* Active Indicator: Emerald Green */}
                {activeItem === item.name && <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#00674F] rounded-full" />}
              </Link>
            ))}
          </nav>
        </div>

        {/* CTA & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 bg-[#F4F4F1] px-5 py-2.5 rounded-full border border-gray-100 hover:border-[#00674F] transition-all group cursor-pointer">
            <Phone size={14} className="text-[#083344]" />
            <span className="text-[13px] font-bold text-[#2D2D2D]">+213 697 228 406</span>
          </div>

          {/* Button: Petrol Blue with Emerald hover */}
          <Link href="#contact" className="hidden md:block bg-[#083344] hover:bg-[#00674F] text-white transition-all px-8 py-2.5 rounded-full text-[13px] font-black uppercase tracking-tight">
            Devis Gratuit
          </Link>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-[#2D2D2D] p-2 hover:text-[#00674F] transition-colors">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-[#083344]/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <nav className="absolute right-0 top-0 h-full w-[300px] bg-white p-10 flex flex-col shadow-2xl">
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-black text-[#2D2D2D]">Bissa<span className="text-[#00674F]">.</span></span>
            <X size={24} onClick={() => setIsMenuOpen(false)} className="text-gray-400" />
          </div>
          
          <div className="flex flex-col gap-6">
             {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-lg font-bold text-[#2D2D2D] border-b border-gray-100 pb-2 hover:text-[#00674F]"
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile CTA: Petrol Blue */}
            <div className="mt-4 p-6 bg-[#083344] rounded-[24px] text-white">
                <p className="font-black uppercase text-xs mb-2 text-white/60">Prêt à recycler ?</p>
                <Link href="/contact" className="text-sm font-bold underline decoration-[#00674F] decoration-2 underline-offset-4">Contactez-nous</Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;