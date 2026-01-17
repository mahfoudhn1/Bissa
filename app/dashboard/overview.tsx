import React from 'react';
import { Zap, Recycle, Leaf, TrendingUp } from 'lucide-react';

// Copiez ici votre composant StatCard que vous avez déjà fait
const StatCard = ({ label, value, unit, icon, trend, color }:any) => (

    <div className="bg-gray-200 p-8 border-2 border-gray-100 rounded-[24px] hover:border-[#2DBE2D] transition-all group">
        <div className="flex justify-between items-start mb-6">
        <div className={`p-3 rounded-xl bg-gray-50 text-[#0B1C14] group-hover:bg-[#0B1C14] group-hover:text-white transition-all`}>
     {icon}
    </div>

    <span className={`text-[10px] font-black px-2 py-1 rounded bg-[#2DBE2D]/10 text-[#2DBE2D]`}>

    {trend}

    </span>

    </div>

    <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{label}</p>
    <div className="flex items-baseline gap-2">
        <span className="text-4xl font-black italic text-[#0B1C14]">{value}</span>
        <span className="text-sm font-bold text-gray-400 uppercase">{unit}</span>
    </div>

</div>

);


const Overview = () => {
  return (
   <div className="p-10">
          {/* Section Points & Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard 
              label="Points Bissa" 
              value="12,450" 
              unit="Pts" 
              icon={<Zap />} 
              trend="+12%" 
            />
            <StatCard 
              label="Déchets Collectés" 
              value="3.8" 
              unit="Tonnes" 
              icon={<Recycle />} 
              trend="+5.4%" 
            />
            <StatCard 
              label="CO2 Évité" 
              value="840" 
              unit="Kg" 
              icon={<Leaf />} 
              trend="+20%" 
            />
            <StatCard 
              label="Taux de Tri" 
              value="94" 
              unit="%" 
              icon={<TrendingUp />} 
              trend="Stable" 
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Liste des Collectes Récentes */}
            <div className="lg:col-span-2 bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm">
              <div className="p-8 border-b border-gray-50 flex justify-between items-center">
                <h3 className="text-[#0B1C14] font-black italic uppercase">Dernières Collectes</h3>
                <button className="text-[10px] font-black uppercase text-[#FF5C28] hover:underline">Voir tout</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-[10px] font-black uppercase text-gray-400">
                    <tr>
                      <th className="px-8 py-4">Date</th>
                      <th className="px-8 py-4">Type</th>
                      <th className="px-8 py-4">Poids</th>
                      <th className="px-8 py-4">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 text-sm">
                    {[
                      { date: '12 Oct 2023', type: 'Plastique HDPE', weight: '450 kg', status: 'Valorisé', color: 'text-green-500' },
                      { date: '08 Oct 2023', type: 'Carton / Papier', weight: '1.2 t', status: 'En transit', color: 'text-orange-500' },
                      { date: '01 Oct 2023', type: 'E-Waste', weight: '120 kg', status: 'Trié', color: 'text-blue-500' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-[#0B1C14]">{row.date}</td>
                        <td className="px-8 py-6 text-gray-500 font-medium">{row.type}</td>
                        <td className="px-8 py-6 font-black italic">{row.weight}</td>
                        <td className={`px-8 py-6 font-bold uppercase text-[10px] ${row.color}`}>{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Carte de Progression/Certification */}
            <div className="bg-[#0B1C14] rounded-[32px] p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black italic uppercase mb-2">Objectif <span className="text-[#2DBE2D]">Zéro Déchet</span></h3>
                <p className="text-gray-400 text-sm mb-8">Vous avez atteint 85% de votre objectif mensuel de valorisation.</p>
                
                <div className="w-full h-4 bg-white/10 rounded-full mb-10 overflow-hidden">
                  <div className="h-full bg-[#2DBE2D] w-[85%] shadow-[0_0_20px_#2DBE2D]"></div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <p className="text-[10px] font-black uppercase text-[#FF5C28] mb-2">Prochain Palier</p>
                  <p className="font-bold italic">Badge "Champion de l'Économie Circulaire"</p>
                  <p className="text-xs text-gray-500 mt-1">+500 points bonus à la validation.</p>
                </div>
              </div>
              <Recycle size={200} className="absolute -bottom-10 -right-10 text-white opacity-5 rotate-12" />
            </div>
          </div>
        </div>
  );
};

export default Overview;