"use client";

import React from 'react';
import { 
  BarChart, 
  Database, 
  Layers, 
  ShieldCheck, 
  Scale, 
  Recycle, 
  Leaf, 
  LineChart,
  Monitor
} from 'lucide-react';
import Footer from '../components/home/footer';
import Header from '../components/home/header';

const BissaTrackerPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#2DBE2D] selection:text-white">
      <Header/>
      {/* --- HEADER DE SECTION BISSA TRACKER --- */}
      <section className="relative bg-[#0B1C14] pt-32 pb-20 px-6 lg:px-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2DBE2D] opacity-5 skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-[2px] bg-[#FF5C28]" />
            <span className="text-[#2DBE2D] font-black uppercase tracking-[0.3em] text-xs">Infrastructure Numérique</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.9] text-white mb-8">
            Bissa<span className="text-[#FF5C28]">Tracker</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed border-l-4 border-[#FF5C28] pl-6">
            Bissa Tracker est l'infrastructure numérique de Bissa Environnement. Ce n'est pas seulement une interface de suivi, c'est l'outil souverain de contrôle de votre conformité et de votre rentabilité. En centralisant chaque donnée à la source, nous éliminons l'approximation de votre gestion environnementale.
          </p>
        </div>
      </section>

      {/* --- EXCELLENCE OPÉRATIONNELLE --- */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="bg-[#0B1C14] p-3 text-white">
              <Database size={32} />
            </div>
            <h2 className="text-3xl font-black italic uppercase text-[#0B1C14]">
              L'Excellence Opérationnelle par la Donnée
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-[#f9fafb] border-t-4 border-[#0B1C14] hover:border-[#FF5C28] transition-all shadow-sm">
              <BarChart className="text-[#FF5C28] mb-6" size={40} />
              <h4 className="font-black text-[#0B1C14] uppercase text-lg mb-4">Audit Permanent & Automatisé</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                La plateforme agrège en temps réel les bordereaux de suivi, les factures et les certificats de pesée. Chaque kilo est tracé, de la production à l'exutoire final.
              </p>
            </div>

            <div className="group p-8 bg-[#f9fafb] border-t-4 border-[#0B1C14] hover:border-[#FF5C28] transition-all shadow-sm">
              <Layers className="text-[#FF5C28] mb-6" size={40} />
              <h4 className="font-black text-[#0B1C14] uppercase text-lg mb-4">Intelligence Multi-Sites</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Une architecture conçue pour les organisations complexes. Comparez les performances de vos différents sites, identifiez les écarts de gestion et harmonisez vos processus à l'échelle du groupe.
              </p>
            </div>

            <div className="group p-8 bg-[#f9fafb] border-t-4 border-[#0B1C14] hover:border-[#FF5C28] transition-all shadow-sm">
              <ShieldCheck className="text-[#FF5C28] mb-6" size={40} />
              <h4 className="font-black text-[#0B1C14] uppercase text-lg mb-4">Transparence Infaillible</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Accédez à des rapports de conformité réglementaire prêts pour l'audit, garantissant une traçabilité sans faille vis-à-vis des autorités et des parties prenantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ARCHITECTURE DE DÉCISION (KPIs) --- */}
      <section className="py-24 px-6 lg:px-16 bg-[#0B1C14] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black italic uppercase text-[#2DBE2D] mb-4">
              Architecture de Décision
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
              4 Piliers Stratégiques de Pilotage
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <div className="bg-[#0B1C14] p-12 hover:bg-[#0f251a] transition-colors group">
              <div className="flex justify-between items-start mb-8">
                <Scale className="text-[#FF5C28]" size={32} />
                <span className="text-5xl font-black italic opacity-10 group-hover:opacity-30">01</span>
              </div>
              <h3 className="text-xl font-black uppercase italic mb-4">Masse Critique (Poids)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Monitoring précis des tonnages collectés pour ajuster vos fréquences de rotation et réduire les coûts logistiques.
              </p>
            </div>

            <div className="bg-[#0B1C14] p-12 hover:bg-[#0f251a] transition-colors group">
              <div className="flex justify-between items-start mb-8">
                <Recycle className="text-[#FF5C28]" size={32} />
                <span className="text-5xl font-black italic opacity-10 group-hover:opacity-30">02</span>
              </div>
              <h3 className="text-xl font-black uppercase italic mb-4">Indice de Valorisation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Analyse fine de la qualité du tri pour maximiser le taux de transformation en matière première secondaire.
              </p>
            </div>

            <div className="bg-[#0B1C14] p-12 hover:bg-[#0f251a] transition-colors group">
              <div className="flex justify-between items-start mb-8">
                <Leaf className="text-[#FF5C28]" size={32} />
                <span className="text-5xl font-black italic opacity-10 group-hover:opacity-30">03</span>
              </div>
              <h3 className="text-xl font-black uppercase italic mb-4">Bilan Décarbonation (CO2)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Conversion automatique de vos données de valorisation en tonnes de CO2 évitées, alimentant directement votre reporting RSE.
              </p>
            </div>

            <div className="bg-[#0B1C14] p-12 hover:bg-[#0f251a] transition-colors group">
              <div className="flex justify-between items-start mb-8">
                <LineChart className="text-[#FF5C28]" size={32} />
                <span className="text-5xl font-black italic opacity-10 group-hover:opacity-30">04</span>
              </div>
              <h3 className="text-xl font-black uppercase italic mb-4">Optimisation Financière</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Visualisation immédiate des ratios coûts/économies pour transformer vos déchets en centres de profit.
              </p>
            </div>
          </div>

          <div className="mt-20 p-8 border border-[#2DBE2D]/30 bg-[#2DBE2D]/5 rounded-2xl flex flex-col md:flex-row items-center gap-6">
            <Monitor className="text-[#2DBE2D]" size={48} />
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-[#2DBE2D] mb-1">Note Technique</p>
              <p className="text-white font-bold italic">
                BissaTracker est une plateforme SaaS sécurisée, garantissant l'intégrité et la confidentialité de vos données industrielles.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BissaTrackerPage;