"use client";

import React from 'react';
import { 
  ClipboardCheck, 
  Users, 
  Truck, 
  Factory, 
  LineChart, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Target
} from 'lucide-react';
import Header from '../components/home/header';
import Footer from '../components/home/footer';

const BissaSolutionsPage = () => {
  const solutions = [
    {
      id: "01",
      title: "Diagnostic & Ingénierie",
      subTitle: "BissaLab",
      description: "Tout commence par une maîtrise des flux. Nos experts BissaLab se déplacent sur votre site pour réaliser un audit technique complet.",
      features: [
        "Analyse de gisement : Quantification et qualification précise.",
        "Schéma d'implantation : Définition stratégique des contenants.",
        "Planification : Optimisation des fréquences de collecte."
      ],
      icon: <ClipboardCheck className="text-[#2DBE2D]" size={32} />,
      color: "border-[#2DBE2D]"
    },
    {
      id: "02",
      title: "Formation & Sensibilisation",
      subTitle: "L'Humain au cœur du tri",
      description: "La réussite du recyclage repose sur l'humain. Nous formons vos collaborateurs pour instaurer une culture du tri sélectif à la source.",
      features: [
        "Sensibilisation aux enjeux environnementaux.",
        "Ateliers pratiques pour garantir la pureté des gisements."
      ],
      icon: <Users className="text-[#FF5C28]" size={32} />,
      color: "border-[#FF5C28]"
    },
    {
      id: "03",
      title: "Collecte & Logistique",
      subTitle: "Réactivité Industrielle",
      description: "Nous assurons l'évacuation de vos matières selon vos besoins réels avec une flotte adaptée.",
      features: [
        "Flexibilité : Gestion par flotte propre ou réseau certifié.",
        "Réactivité : Un service calqué sur votre rythme de production."
      ],
      icon: <Truck className="text-[#2DBE2D]" size={32} />,
      color: "border-[#2DBE2D]"
    },
    {
      id: "04",
      title: "Valorisation Industrielle",
      subTitle: "BissaCycle",
      description: "Vos déchets sont transformés en ressources au sein de notre unité BissaCycle ou chez nos partenaires industriels.",
      features: [
        "Recyclage & Réutilisation : Broyage, lavage, granulation.",
        "Économie Circulaire : Seconde vie garantie à vos rebuts."
      ],
      icon: <Factory className="text-[#FF5C28]" size={32} />,
      color: "border-[#FF5C28]"
    },
    {
      id: "05",
      title: "Traçabilité Dynamique",
      subTitle: "BissaTracker",
      description: "Grâce au service BissaTracker, vous gardez le contrôle total sur vos données environnementales en temps réel.",
      features: [
        "Accès à des rapports périodiques détaillés.",
        "Suivi précis de l'état des déchets par établissement."
      ],
      icon: <Target className="text-[#2DBE2D]" size={32} />,
      color: "border-[#2DBE2D]"
    },
    {
      id: "06",
      title: "Certification & RSE",
      subTitle: "Validation Officielle",
      description: "En fin d'année, nous validons vos efforts par des documents officiels cosignés par BissaLab et BissaCycle.",
      features: [
        "Certificat Annuel de Recyclage pour les autorités.",
        "Indicateurs d'Impact : CO2 économisé et arbres préservés.",
        "Valorisation de votre image de marque."
      ],
      icon: <Award className="text-[#FF5C28]" size={32} />,
      color: "border-[#FF5C28]"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#2DBE2D] selection:text-white">
      {/* --- HEADER DE SECTION --- */}
      <Header/>
      <section className="relative bg-[#0B1C14] pt-32 pb-20 px-6 lg:px-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2DBE2D] opacity-5 -skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-[2px] bg-[#FF5C28]" />
            <span className="text-[#2DBE2D] font-black uppercase tracking-[0.3em] text-xs">Nos Solutions</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.9] text-white mb-8">
            Un Accompagnement<br/>
            <span className="text-[#FF5C28]">Bout en Bout</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed border-l-4 border-[#2DBE2D] pl-6">
            BissaEnvironnement ne se contente pas de ramasser des déchets. Nous déployons une méthodologie rigoureuse pour optimiser chaque étape de votre gestion environnementale, de l'audit à la valorisation finale.
          </p>
        </div>
      </section>

      {/* --- GRILLE DES SOLUTIONS --- */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item) => (
              <div 
                key={item.id} 
                className={`group p-8 bg-[#f9fafb] border-t-8 ${item.color} transition-all duration-300 hover:bg-white hover:shadow-2xl flex flex-col`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-[#0B1C14] p-4 text-white transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="text-5xl font-black italic text-[#0B1C14] opacity-5 group-hover:opacity-10">
                    {item.id}
                  </span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-[#FF5C28] mb-1">
                    {item.subTitle}
                  </h4>
                  <h3 className="text-xl font-black italic uppercase text-[#0B1C14] leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-bold text-[#0B1C14] uppercase tracking-tight">
                      <CheckCircle2 size={14} className="text-[#2DBE2D] shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0B1C14] group-hover:text-[#FF5C28] transition-colors">
                    En savoir plus <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION IMPACT FINAL --- */}
      <section className="py-20 px-6 lg:px-16 bg-[#0B1C14]">
        <div className="max-w-7xl mx-auto bg-[#2DBE2D] p-12 md:p-20 rounded-[40px] flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <Zap size={300} className="absolute -left-20 -bottom-20 text-[#0B1C14] opacity-5" />
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase text-[#0B1C14] leading-[0.9] mb-6">
              Prêt à optimiser <br/>votre impact ?
            </h2>
            <p className="text-[#0B1C14]/80 font-bold italic text-lg">
              Nos experts sont prêts à réaliser votre premier diagnostic de gisement.
            </p>
          </div>

          <div className="relative z-10 w-full lg:w-auto">
            <button className="w-full lg:w-auto px-12 py-6 bg-[#0B1C14] text-white font-black uppercase italic tracking-widest text-lg hover:scale-105 transition-transform active:scale-95 shadow-xl">
              Demander un Audit Gratuit
            </button>
          </div>
        </div>
      </section>
    <Footer />
    </div>
  );
};

export default BissaSolutionsPage;