const StatCard = ({ label, value, unit, icon, trend, color }) => (
  <div className="bg-white p-8 border-2 border-gray-100 rounded-[24px] hover:border-[#2DBE2D] transition-all group">
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

export default StatCard