const DashboardHeader = ({ userName = "Industrie Algérie" }) => {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-30">
      <div>
        <h2 className="text-[#0B1C14] font-black italic uppercase text-lg">Espace Partenaire</h2>
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Suivi en temps réel</p>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="text-[#0B1C14] font-black text-sm uppercase">{userName}</p>
          <p className="text-[#2DBE2D] text-[10px] font-bold">Client Certifié Gold</p>
        </div>
        <div className="w-12 h-12 bg-[#0B1C14] rounded-full flex items-center justify-center text-[#2DBE2D] font-black italic">
          IA
        </div>
      </div>
    </header>
  );
};
export default DashboardHeader