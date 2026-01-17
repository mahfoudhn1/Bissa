"use client";
import React, { useState } from 'react';
import { LayoutDashboard, Truck, Award, Settings, LogOut, Menu, X } from 'lucide-react';

const Sidebar = ({ activeView, setActiveView }: any) => {
  // État pour contrôler l'ouverture du menu sur mobile
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: 'Tableau de Bord' },
    { id: 'collectes', icon: <Truck size={20} />, label: 'Mes Collectes' },
    { id: 'points', icon: <Award size={20} />, label: 'Mes Points' },
    { id: 'settings', icon: <Settings size={20} />, label: 'Paramètres' },
  ];

  const handleNavClick = (id: string) => {
    setActiveView(id);
    setIsOpen(false); // Ferme le menu après un clic sur mobile
  };

  return (
    <>
      {/* 1. BOUTON HAMBURGER (Mobile Uniquement) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] bg-[#FF5C28] text-white p-2 rounded-lg shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 2. OVERLAY (Fond sombre quand le menu est ouvert sur mobile) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[40] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 3. LE SIDEBAR */}
      <aside className={`
        fixed left-0 top-0 h-screen bg-[#0B1C14] border-r border-white/5 flex flex-col z-[50] transition-transform duration-300 ease-in-out
        w-64 
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
      `}>
        {/* Logo Section */}
        <div className="p-8 mt-4 lg:mt-0">
          <span className="text-2xl font-black italic text-white uppercase tracking-tighter">
            Bissa<span className="text-[#2DBE2D]">Tracker</span>
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="flex-grow px-4 mt-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl font-bold uppercase text-xs tracking-widest transition-all mb-2
                ${activeView === item.id 
                  ? 'bg-[#FF5C28] text-white shadow-lg shadow-[#FF5C28]/20' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
            >
              <span className={activeView === item.id ? 'text-white' : 'text-[#2DBE2D]'}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout Section */}
        <div className="p-6 border-t border-white/5">
          <button className="flex items-center gap-4 px-4 py-3 text-gray-500 hover:text-red-400 transition-colors font-bold uppercase text-xs tracking-widest w-full">
            <LogOut size={20} />
            Déconnexion
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;