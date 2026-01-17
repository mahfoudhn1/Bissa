"use client";

import React from 'react';
import { Check, Shield, BarChart3, FileText, ArrowRight, Zap } from 'lucide-react';

const BissaProducts = () => {
  const plans = [
    {
      name: "LITE",
      type: "Forfait",
      waste: "8 E-WASTE",
      includes: ["BISSA CERTIFICAT"],
      color: "border-gray-200",
      buttonVariant: "bg-[#0B1C14] text-white"
    },
    {
      name: "EXPERT",
      type: "Forfait",
      waste: "25 E-WASTE",
      includes: ["BISSA TRACKER", "BISSA CERTIFICAT"],
      highlight: true,
      color: "border-[#2DBE2D]",
      buttonVariant: "bg-[#2DBE2D] text-[#0B1C14]"
    },
    {
      name: "BUREAU",
      type: "Forfait",
      waste: "E-WASTE",
      includes: ["BISSA CERTIFICAT"],
      color: "border-gray-200",
      buttonVariant: "bg-[#0B1C14] text-white"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-16 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-[#FF5C28]" />
            <span className="text-[#FF5C28] font-black uppercase tracking-widest text-xs">Nos Offres</span>
            <div className="w-8 h-[2px] bg-[#FF5C28]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-[#0B1C14] mb-6">
            Solutions de <span className="text-[#2DBE2D]">Gestion</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            Choisissez l'accompagnement adapté à votre volume de déchets et vos besoins en traçabilité.
          </p>
        </div>

        {/* Grille des tarifs */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white p-10 rounded-[32px] border-2 transition-all duration-300 hover:shadow-2xl flex flex-col ${plan.color} ${plan.highlight ? 'scale-105 z-10 shadow-xl' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FF5C28] text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                  Recommandé
                </div>
              )}

              <div className="mb-8">
                <span className="text-[#FF5C28] font-black uppercase text-xs tracking-widest">{plan.type}</span>
                <h3 className="text-3xl font-black italic uppercase text-[#0B1C14] mt-2">{plan.name}</h3>
              </div>

              <div className="mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-[#0B1C14]">{plan.waste.split(' ')[0]}</span>
                  <span className="text-lg font-bold text-gray-400 uppercase italic">{plan.waste.split(' ')[1] || ''}</span>
                </div>
                <p className="text-xs font-bold text-gray-400 mt-2 uppercase tracking-tight">Capacité de traitement</p>
              </div>

              <ul className="space-y-5 mb-10 flex-grow">
                {plan.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${plan.highlight ? 'bg-[#2DBE2D]/20 text-[#2DBE2D]' : 'bg-gray-100 text-gray-400'}`}>
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-black uppercase italic text-[#0B1C14]">{item}</span>
                  </li>
                ))}
                {/* Services standards inclus par défaut */}
                <li className="flex items-center gap-3 opacity-50">
                  <div className="p-1 rounded-full bg-gray-100 text-gray-400">
                    <Check size={14} strokeWidth={4} />
                  </div>
                  <span className="text-sm font-bold uppercase italic text-gray-500">Logistique Intégrée</span>
                </li>
              </ul>

              <button className={`w-full py-5 rounded-2xl font-black uppercase italic tracking-widest flex items-center justify-center gap-2 transition-transform active:scale-95 ${plan.buttonVariant}`}>
                Recevoir un Devis
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Note de bas de page */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-[#0B1C14] text-white px-8 py-4 rounded-2xl">
            <Zap className="text-[#2DBE2D]" size={20} />
            <p className="text-sm font-bold italic uppercase tracking-tighter">
              Besoin d'un volume personnalisé ? <span className="text-[#2DBE2D] ml-2 cursor-pointer hover:underline">Contactez nos experts BissaLab</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BissaProducts;