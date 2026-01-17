"use client";
import React from 'react';
import { 
  LayoutDashboard, 
  Truck, 
  BarChart3, 
  History, 
  Settings, 
  LogOut, 
  Award 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Tableau de Bord', active: true },
    { icon: <Truck size={20} />, label: 'Mes Collectes', active: false },
    { icon: <BarChart3 size={20} />, label: 'Statistiques', active: false },
    { icon: <Award size={20} />, label: 'Mes Points', active: false },
    { icon: <History size={20} />, label: 'Historique', active: false },
  ];

  return (
    <aside className="w-64 bg-[#0B1C14] h-screen fixed left-0 top-0 flex flex-col border-r border-white/5">
      <div className="p-8">
        <span className="text-2xl font-black italic text-white uppercase tracking-tighter">
          Bissa<span className="text-[#2DBE2D]">Tracker</span>
        </span>
      </div>

      <nav className="flex-grow px-4 mt-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl font-bold uppercase text-xs tracking-widest transition-all mb-2
              ${item.active 
                ? 'bg-[#FF5C28] text-white shadow-lg shadow-[#FF5C28]/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-white/5">
        <button className="flex items-center gap-4 px-4 py-3 text-gray-500 hover:text-red-400 transition-colors font-bold uppercase text-xs">
          <LogOut size={20} />
          Déconnexion
        </button>
      </div>
    </aside>
  );
};
export default Sidebar