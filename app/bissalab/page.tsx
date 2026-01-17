"use client";

import React from 'react';
import { ShieldCheck, BookOpen, Lock, FileText, Users, Zap, HardHat, CheckCircle } from 'lucide-react';
import Header from '../components/home/header';
import Footer from '../components/home/footer';

const BissaLabPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#2DBE2D] selection:text-white">
      <Header/>
      {/* --- HEADER DE SECTION BISSALAB --- */}
      <section className="relative bg-[#0B1C14] pt-32 pb-20 px-6 lg:px-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2DBE2D] opacity-5 skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-[2px] bg-[#FF5C28]" />
            <span className="text-[#2DBE2D] font-black uppercase tracking-[0.3em] text-xs">Pôle Expertise</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.9] text-white mb-8">
            Bissa<span className="text-[#FF5C28]">Lab</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed border-l-4 border-[#FF5C28] pl-6">
            BissaLab est l'entité d'expertise de BissaEnvironnement dédiée à la maîtrise des risques et à l'optimisation des performances environnementales. Nous accompagnons les industriels dans la mise en conformité de leurs installations et la transformation de leur modèle économique.
          </p>
        </div>
      </section>

      {/* --- CONTENU PRINCIPAL --- */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* 1. Bureau d'Études & Maîtrise des Risques */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-[#0B1C14] p-3 text-white">
                  <ShieldCheck size={32} />
                </div>
                <h2 className="text-3xl font-black italic uppercase text-[#0B1C14]">
                  1. Bureau d'Études & Maîtrise des Risques
                </h2>
              </div>
              
              <p className="text-gray-600 font-bold italic">
                Nous réalisons les analyses critiques nécessaires à la pérennité de vos activités face aux exigences réglementaires :
              </p>

              <div className="space-y-6">
                <div className="group p-6 bg-[#f9fafb] border-l-4 border-[#FF5C28] transition-all">
                  <h4 className="font-black text-[#0B1C14] uppercase text-sm mb-2">Étude d'Impact Environnemental (EIE)</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Évaluation rigoureuse des effets de vos projets sur l'écosystème pour garantir leur acceptabilité et leur durabilité.</p>
                </div>

                <div className="group p-6 bg-[#f9fafb] border-l-4 border-[#FF5C28] transition-all">
                  <h4 className="font-black text-[#0B1C14] uppercase text-sm mb-2">Étude de Danger (EDD)</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Identification des risques technologiques, modélisation des scénarios d'accidents et définition des barrières de sécurité.</p>
                </div>

                <div className="group p-6 bg-[#f9fafb] border-l-4 border-[#FF5C28] transition-all">
                  <h4 className="font-black text-[#0B1C14] uppercase text-sm mb-2">Plan d'Intervention Interne (PII)</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Élaboration de protocoles de gestion de crise pour protéger vos collaborateurs, vos actifs et l'environnement en cas d'incident.</p>
                </div>

                <div className="group p-6 bg-[#f9fafb] border-l-4 border-[#FF5C28] transition-all">
                  <h4 className="font-black text-[#0B1C14] uppercase text-sm mb-2">Audit Environnemental</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Diagnostic exhaustif de vos sites pour identifier les non-conformités et optimiser vos consommations de ressources.</p>
                </div>
              </div>
            </div>

            {/* 2. Formation & Approche */}
            <div className="space-y-12">
              <div className="bg-[#2DBE2D] p-10 rounded-3xl relative overflow-hidden text-[#0B1C14]">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <BookOpen size={32} />
                    <h2 className="text-3xl font-black italic uppercase">2. Formation</h2>
                  </div>
                  <p className="font-bold mb-6 italic text-sm">Le savoir est le moteur de l'économie circulaire. BissaLab forme vos équipes pour transformer vos contraintes en leviers de performance :</p>
                  <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
                    <li className="flex gap-3 items-start"><Zap size={18} className="shrink-0 mt-1" /> Management de l'Environnement: Maîtrise des normes ISO et de la réglementation en vigueur.</li>
                    <li className="flex gap-3 items-start"><CheckCircle size={18} className="shrink-0 mt-1" /> Techniques de l'Économie Circulaire: Éco-conception, gestion optimisée des flux et valorisation des ressources.</li>
                    <li className="flex gap-3 items-start"><HardHat size={18} className="shrink-0 mt-1" /> Sécurité Industrielle: Formation aux risques spécifiques et à l'application des plans d'urgence.</li>
                  </ul>
                </div>
                <BookOpen size={200} className="absolute -bottom-10 -right-10 opacity-10" />
              </div>

              {/* L'Approche BissaLab */}
          
            </div>
          </div>

          {/* --- TABLEAU DES SERVICES --- */}
          
          <div className="mt-24 overflow-hidden border border-gray-200 rounded-2xl shadow-xl">
            <div className="bg-[#0B1C14] p-10 rounded-3xl text-white mb-4">
              <h3 className="text-2xl font-black italic uppercase text-[#FF5C28] mb-4">L'Approche BissaLab: "Audit - Action - Acquisition"</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Contrairement aux consultants classiques, BissaLab s'appuie sur la réalité du terrain de Bissa Environnement.
              </p>
              <p className="text-white font-black italic uppercase tracking-wider">
                Nos études ne sont pas de simples rapports papier, mais des feuilles de route opérationnelles.
              </p>
            </div>
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0B1C14] text-white uppercase text-[10px] tracking-widest font-black">
                <tr>
                  <th className="px-8 py-6 italic">Service</th>
                  <th className="px-8 py-6 italic">Livrable Clé</th>
                  <th className="px-8 py-6 italic">Impact Client</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-6 font-black text-[#0B1C14] uppercase">Audit</td>
                  <td className="px-8 py-6 text-gray-500 italic">Rapport de conformité</td>
                  <td className="px-8 py-6 flex items-center gap-2 font-bold text-[#2DBE2D] uppercase tracking-tighter"><Lock size={14}/> Sécurité juridique totale</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-6 font-black text-[#0B1C14] uppercase">EIE / EDD</td>
                  <td className="px-8 py-6 text-gray-500 italic">Dossier réglementaire</td>
                  <td className="px-8 py-6 flex items-center gap-2 font-bold text-[#2DBE2D] uppercase tracking-tighter"><FileText size={14}/> Autorisation d'exploiter sécurisée</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-6 font-black text-[#0B1C14] uppercase">Formation</td>
                  <td className="px-8 py-6 text-gray-500 italic">Certificat de compétences</td>
                  <td className="px-8 py-6 flex items-center gap-2 font-bold text-[#2DBE2D] uppercase tracking-tighter"><Users size={14}/> Équipes autonomes et expertes</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default BissaLabPage;