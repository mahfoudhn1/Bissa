import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative">
      {/* Dark Slanted Background */}
      <div 
        className="bg-[#0B1C14] pt-12 pb-32 md:pb-48 px-6 lg:px-16 text-white"
        style={{ 
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 60% 100%, 0 85%)' 
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 space-y-10">
            {/* Play Button Label */}
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all">
                <Play size={18} fill="white" />
              </div>
              <div className="leading-tight">
                <p className="text-[#2DBE2D] text-xs font-black uppercase tracking-[0.2em]">Prise en charge efficace</p>
                <p className="text-gray-400 text-[10px]">ponctualité et efficacité</p>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-[0.9] tracking-tighter">
              Des solution <br />
              <span className="text-white/90">Pour</span> <br />
              La durabilité
            </h1>

            {/* Stats / Badges */}
            <div className="flex items-end gap-10">
              <div className="bg-[#2DBE2D] p-7 pr-16 rounded-tr-[50px] text-[#0B1C14]">
                <span className="text-5xl font-black block leading-none mb-1">6 +</span>
                <p className="text-[10px] font-black uppercase tracking-tighter">déchets Solutions</p>
              </div>
              <div className="pb-4">
                <span className="text-4xl font-bold block">5.7 k</span>
                <p className="text-[10px] text-gray-400 font-bold uppercase">Customers Served</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE BLOCK */}
          <div className="lg:col-span-6 relative">
            {/* Truck Image Container */}
            <div className="relative z-10 rounded-2xl overflow-hidden border-[12px] border-[#0B1C14] shadow-2xl">
              <img 
                src="truck.png" 
                alt="Truck" 
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Orange Label */}
              <div className="absolute top-12 -left-4 bg-[#FF5C28] p-5 w-60 shadow-xl hidden sm:block">
                <p className="text-[14px] font-black uppercase mb-1">déchets Solutions</p>
                <div className="h-0.5 w-8 bg-white/30 mb-2"></div>
                <p className="text-[12px] leading-relaxed font-medium">
                  <ul>
                    <li>1.Diagnos c & Ingénierie (BissaLab)</li>
                    <li>2. Formation & Sensibilisa on</li>
                    <li>3. Collecte & Logistique Optimisée</li>
                    <li>4. Valorisation Industrielle (BissaCycle)</li>
                    <li>5. Traçabilité Dynamique (BissaTracker)</li>
                    <li>6. Certiﬁca on & Reporting RSE</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Contact Info Footer */}
            <div className="mt-6 flex justify-between items-center px-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B1C14] overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-400 font-bold uppercase">Contactez-nous</p>
                <p className="text-lg font-black text-white">+213 697 228 406</p>
                <p className="text-lg font-black text-white">contact@bissa.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;