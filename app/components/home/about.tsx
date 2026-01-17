import React from 'react';
import { Beaker, Globe, Truck, CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const pillars = [
    {
      id: '01',
      title: 'BissaLab',
      subtitle: 'Expertise Homologuée',
      desc: "Bureau d’études agréé par le Ministère de l’Environnement. Nous accompagnons les établissements classés dans leur mise en conformité (Audits, AIE, ADD).",
      icon: <Beaker className="text-[#FF5C28]" size={32} />,
    },
    {
      id: '02',
      title: 'BissaLink',
      subtitle: 'Traçabilité Digitale',
      desc: "Digitalisation de la gestion de vos déchets. Suivez en temps réel le poids, le cash-back et votre impact RSE via notre plateforme unique en Algérie.",
      icon: <Globe className="text-[#FF5C28]" size={32} />,
    },
    {
      id: '03',
      title: 'BissaCycle',
      subtitle: 'Logistique & Valorisation',
      desc: "Transformation physique à Chlef (broyage, lavage, granulation) via notre propre flotte pour transformer vos rebuts en matières premières.",
      icon: <Truck className="text-[#FF5C28]" size={32} />,
    },
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* TOP ROW: HEADING & INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-[#FF5C28]"></div>
              <span className="text-[#2DBE2D] font-black uppercase tracking-widest text-xs">
                À Propos de Nous
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-none text-[#0B1C14]">
              L'Expertise Intégrée de l’Économie <span className="text-[#2DBE2D]">Circulaire</span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-[#FF5C28] pl-6">
              Depuis 2018, **BissaEnvironnement** transforme les défis logistiques en ressources industrielles. 
              Installés au cœur de Chlef, notre écosystème fusionne rigueur industrielle et innovation digitale 
              pour offrir une solution unique en Algérie.
            </p>
          </div>
        </div>

        {/* MIDDLE ROW: THE THREE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="group relative bg-[#f8fcf9] p-8 rounded-2xl border-b-4 border-transparent hover:border-[#2DBE2D] transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white rounded-xl shadow-sm group-hover:bg-[#0B1C14] transition-colors duration-300">
                  {pillar.icon}
                </div>
                <span className="text-4xl font-black opacity-10 italic">{pillar.id}</span>
              </div>
              <h3 className="text-2xl font-black uppercase italic text-[#0B1C14] mb-1">
                {pillar.title}
              </h3>
              <p className="text-[#2DBE2D] font-bold text-xs uppercase mb-4 tracking-tighter">
                {pillar.subtitle}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW: CALL TO ACTION / BADGE */}
        <div className="mt-20 relative bg-[#0B1C14] rounded-3xl p-8 lg:p-12 overflow-hidden">
          {/* Decorative Slant */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2DBE2D] opacity-10 skew-x-12 translate-x-10"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="bg-[#FF5C28] p-4 rounded-full animate-pulse">
                <CheckCircle2 className="text-white" size={40} />
              </div>
              <div>
                <h4 className="text-white text-2xl font-black uppercase italic">Unité de Transformation Intégrée</h4>
                <p className="text-gray-400 text-sm">Répondre aux exigences de traçabilité les plus strictes.</p>
              </div>
            </div>
            <button className="bg-[#FF5C28] text-white px-10 py-4 font-black uppercase italic tracking-widest hover:bg-[#2DBE2D] transition-colors rounded-sm">
              Demander un Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;