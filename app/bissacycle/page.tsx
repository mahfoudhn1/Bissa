"use client";

import React from 'react';
import { RotateCcw, Factory, Zap, BarChart3, ChevronRight, CheckCircle2, Droplets, Box } from 'lucide-react';
import Header from '../components/home/header';
import Footer from '../components/home/footer';

const BissaCyclePage = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#2DBE2D] selection:text-white">
      <Header/>
      {/* --- HEADER DE SECTION BISSACYCLE --- */}
      <section className="relative bg-[#0B1C14] pt-32 pb-20 px-6 lg:px-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF5C28] opacity-5 -skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-[2px] bg-[#2DBE2D]" />
            <span className="text-[#FF5C28] font-black uppercase tracking-[0.3em] text-xs">Pôle Valorisation</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.9] text-white mb-8">
            Bissa<span className="text-[#2DBE2D]">Cycle</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed border-l-4 border-[#2DBE2D] pl-6">
            Transformer le déchet en ressource n'est pas une option, c'est une nécessité industrielle. Chez BissaEnvironnement, nous refusons la fatalité de la mise en décharge. Notre pôle Valorisation intervient pour extraire la valeur maximale de chaque flux, garantissant ainsi une seconde vie aux matières premières secondaires.
          </p>
        </div>
      </section>

      {/* --- CONTENU PRINCIPAL --- */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            
            {/* L'Ingénierie de la Transformation */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-[#0B1C14] p-3 text-white">
                  <Factory size={32} />
                </div>
                <h2 className="text-3xl font-black italic uppercase text-[#0B1C14]">
                  L'Ingénierie de la Transformation
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="group p-8 bg-[#f9fafb] border-l-4 border-[#2DBE2D] transition-all hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Droplets className="text-[#2DBE2D]" size={20} />
                    <h4 className="font-black text-[#0B1C14] uppercase text-sm">Régénération de Haute Pureté</h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Nous appliquons des protocoles de tri et de traitement stricts pour garantir des gisements sans impuretés, prêts à être réintégrés dans les processus de fabrication les plus exigeants.
                  </p>
                </div>

                <div className="group p-8 bg-[#f9fafb] border-l-4 border-[#2DBE2D] transition-all hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Box className="text-[#2DBE2D]" size={20} />
                    <h4 className="font-black text-[#0B1C14] uppercase text-sm">Expertise Multi-Flux</h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Maîtrise technique avancée des polymères (plastiques), des fibres cellulosiques (carton/papier), des métaux et des déchets complexes.
                  </p>
                </div>

                <div className="group p-8 bg-[#f9fafb] border-l-4 border-[#2DBE2D] transition-all hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <RotateCcw className="text-[#2DBE2D]" size={20} />
                    <h4 className="font-black text-[#0B1C14] uppercase text-sm">Économie Circulaire de Proximité</h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Nous privilégions les circuits courts et les filières de recyclage locales pour minimiser l'empreinte carbone globale du cycle de traitement.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Indicateurs Intro */}
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="bg-[#0B1C14] p-12 rounded-[40px] text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black italic uppercase text-[#2DBE2D] mb-6">
                    Indicateurs de Performance de Valorisation
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Nous ne nous contentons pas de recycler ; nous mesurons l'efficacité réelle de la transformation pour garantir un impact tangible sur votre chaîne de valeur.
                  </p>
                  <div className="flex items-center gap-4 text-[#FF5C28]">
                    <BarChart3 size={40} />
                    <span className="font-black italic uppercase tracking-widest">Mesure & Transparence</span>
                  </div>
                </div>
                <Factory size={250} className="absolute -bottom-20 -right-20 opacity-5 text-white" />
              </div>
              
              <div className="p-8 border-2 border-dashed border-gray-200 rounded-3xl">
                <p className="text-[#0B1C14] font-bold italic text-center">
                  "Une approche axée sur les données pour une économie circulaire performante."
                </p>
              </div>
            </div>
          </div>

          {/* --- TABLEAU DES INDICATEURS --- */}
          <div className="overflow-hidden border border-gray-200 rounded-3xl shadow-2xl">
            <table className="w-full text-left">
              <thead className="bg-[#0B1C14] text-white uppercase text-[10px] tracking-[0.2em] font-black">
                <tr>
                  <th className="px-10 py-8 italic">Indicateur</th>
                  <th className="px-10 py-8 italic">Objectif Industriel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-10 py-8">
                    <span className="block font-black text-[#0B1C14] uppercase text-lg">Rendement de Matière</span>
                  </td>
                  <td className="px-10 py-8">
                    <p className="text-gray-600 font-medium">Maximiser le ratio entre le poids collecté et le poids réellement valorisé.</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-10 py-8">
                    <span className="block font-black text-[#0B1C14] uppercase text-lg">Pureté des Sorties</span>
                  </td>
                  <td className="px-10 py-8">
                    <p className="text-gray-600 font-medium">Atteindre les standards de qualité requis par les industriels de la plasturgie et de la fonderie.</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-10 py-8">
                    <span className="block font-black text-[#0B1C14] uppercase text-lg">Évitement de Matière Vierge</span>
                  </td>
                  <td className="px-10 py-8">
                    <p className="text-gray-600 font-medium">Quantifier l'économie de ressources naturelles (pétrole, eau, bois) réalisée.</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors bg-[#f8fcf9]">
                  <td className="px-10 py-8">
                    <span className="block font-black text-[#2DBE2D] uppercase text-lg">Certificats de Valorisation</span>
                  </td>
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#2DBE2D]" size={20} />
                      <p className="text-gray-900 font-bold">Émission systématique de preuves de traitement pour votre conformité réglementaire.</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BissaCyclePage;