import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1C14] text-white pt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* TOP SECTION: LOGO & CONTACT INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="text-3xl font-black italic tracking-tighter uppercase mb-6">
              Bissa<span className="text-[#2DBE2D]">Environnement</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Transformer les défis logistiques en ressources industrielles depuis 2018. 
              L'expertise intégrée de l'économie circulaire au cœur de l'Algérie.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#FF5C28] hover:border-[#FF5C28] transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-black uppercase italic mb-6 text-[#2DBE2D]">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#" className="hover:text-white transition-colors">À Propos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nos Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BissaLink</a></li>
            </ul>
          </div>

          {/* Support/Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-black uppercase italic mb-6 text-[#2DBE2D]">Support</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="font-black uppercase italic mb-6 text-[#FF5C28]">Contactez-nous</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-white/5 p-2 rounded-lg"><MapPin size={18} className="text-[#FF5C28]" /></div>
                <p className="text-sm text-gray-400">Siège Social & Unité Industrielle,<br /> Zone Industrielle de Chlef, Algérie.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/5 p-2 rounded-lg"><Phone size={18} className="text-[#FF5C28]" /></div>
                <p className="text-sm text-gray-400 font-bold">+213 697 228 406</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/5 p-2 rounded-lg"><Mail size={18} className="text-[#FF5C28]" /></div>
                <p className="text-sm text-gray-400 font-bold">contact@bissaenvironnement.dz</p>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: NEWSLETTER / CTA */}
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-2xl font-black italic uppercase">
            Prêt à optimiser votre <span className="text-[#FF5C28]">impact ?</span>
          </h3>
          <div className="relative w-full max-w-md">
            <input 
              type="email" 
              placeholder="Votre email professionnel" 
              className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-sm focus:outline-none focus:border-[#2DBE2D] transition-colors"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-[#2DBE2D] hover:bg-[#25a025] px-4 rounded-sm transition-colors">
              <ArrowUpRight size={20} className="text-[#0B1C14]" />
            </button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-gray-500">
          <p>© 2026 BissaEnvironnement. Tous droits réservés.</p>
          <p>Conçu par <span className="text-white">Votre Agence</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;