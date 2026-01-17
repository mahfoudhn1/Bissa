import React from 'react';
import { Settings, Users, Truck, RotateCcw, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SolutionsSection = () => {
  const solutions = [
    {
      id: '01',
      title: 'Diagnostic & Ingénierie',
      desc: 'Audit technique complet et analyse de gisement par BissaLab.',
      icon: <Settings size={24} />,
    },
    {
      id: '02',
      title: 'Formation',
      desc: 'Instaurer une culture du tri sélectif auprès de vos collaborateurs.',
      icon: <Users size={24} />,
    },
    {
      id: '03',
      title: 'Collecte & Logistique',
      desc: 'Évacuation optimisée par notre propre flotte motorisée.',
      icon: <Truck size={24} />,
    },
    {
      id: '04',
      title: 'Valorisation Industrielle',
      desc: 'Transformation des plastiques en ressources via BissaCycle.',
      icon: <RotateCcw size={24} />,
    },
    {
      id: '05',
      title: 'Traçabilité Dynamique',
      desc: 'Contrôle total en temps réel grâce au service BissaTracker.',
      icon: <BarChart3 size={24} />,
    },
    {
      id: '06',
      title: 'Certification & RSE',
      desc: 'Certificats annuels et calcul d’impact CO2 pour votre image.',
      icon: <ShieldCheck size={24} />,
    },
  ];

  return (
    <section className="bg-[#0B1C14] py-24 px-6 lg:px-16 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-[#FF5C28]"></div>
              <span className="text-[#2DBE2D] font-black uppercase tracking-widest text-xs">Nos Solutions</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-none">
              Un Accompagnement <span className="text-[#2DBE2D]">Bout en Bout</span>
            </h2>
          </div>
          <Link href="/solutions" className="group flex items-center gap-3 bg-white/5 hover:bg-[#FF5C28] px-6 py-4 transition-all duration-300">
            <span className="font-black uppercase italic text-sm">Voir tous les détails</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {solutions.map((item) => (
            <div key={item.id} className="bg-[#0B1C14] p-10 hover:bg-[#0f251a] transition-colors group">
              <div className="flex justify-between items-start mb-8">
                <div className="text-[#FF5C28] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-4xl font-black italic opacity-10 group-hover:opacity-30 transition-opacity">
                  {item.id}
                </span>
              </div>
              <h3 className="text-xl font-black uppercase italic mb-3 group-hover:text-[#2DBE2D] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;