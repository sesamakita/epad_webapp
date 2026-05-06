import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, Legend, ComposedChart, Area, Cell
} from 'recharts';
import { Download, Filter, Calendar, Info, TrendingUp, TrendingDown, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const StatistikPAD = () => {
  const data = [
    { name: 'Hotel', target: 500, realisasi: 420 },
    { name: 'Resto', target: 400, realisasi: 450 },
    { name: 'Parkir', target: 200, realisasi: 180 },
    { name: 'Reklame', target: 300, realisasi: 290 },
    { name: 'PBB', target: 800, realisasi: 600 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Analisis Capaian PAD</h2>
          <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">Dashboard Monitoring Strategis & Evaluasi Target</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3.5 bg-white border border-slate-200 text-slate-600 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center gap-3 hover:bg-slate-50 transition-all shadow-sm">
             <Calendar size={18} /> Mei 2024
          </button>
          <button className="bg-primary text-white px-8 py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all active:scale-95">
            <Download size={18} />
            Unduh Laporan
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: 'Sektor Terbaik', value: 'Restoran', sub: '+12.5% vs Target', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
           { label: 'Sektor Terendah', value: 'Parkir', sub: '-10% vs Target', icon: TrendingDown, color: 'text-rose-600', bg: 'bg-rose-50' },
           { label: 'Estimasi Akhir', value: 'Rp 148 M', sub: '98.6% dari Target', icon: Target, color: 'text-blue-600', bg: 'bg-blue-50' },
           { label: 'Potensi Baru', value: 'Rp 4.2 M', sub: 'WP Belum Terdata', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
         ].map((item, i) => (
           <motion.div 
             key={i} 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.1 }}
             className="glass-card rounded-[32px] p-6 border-slate-200"
           >
              <div className="flex items-center gap-4">
                 <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center shadow-sm flex-none`}>
                    <item.icon size={22} />
                 </div>
                 <div className="min-w-0">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <h4 className="text-base font-black text-slate-900 truncate">{item.value}</h4>
                    <p className={`text-[10px] font-bold mt-0.5 ${item.color}`}>{item.sub}</p>
                 </div>
              </div>
           </motion.div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Target vs Realisasi Bar Chart */}
        <div className="glass-card rounded-[40px] p-10 border-slate-200 shadow-xl shadow-slate-200/40">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-3">
              <div className="w-2 h-8 bg-primary rounded-full"></div>
              Komparasi Target vs Realisasi
            </h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-slate-100 border border-slate-200 rounded-full"></div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Realisasi</span>
              </div>
            </div>
          </div>

          <div className="h-[380px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#64748b', fontSize: 11, fontWeight: 800}}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}}
                  tickFormatter={(val) => `${val}Jt`}
                />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '15px'}}
                  itemStyle={{fontWeight: 900}}
                />
                <Bar dataKey="target" fill="#f1f5f9" radius={[12, 12, 0, 0]} barSize={45} />
                <Bar dataKey="realisasi" radius={[12, 12, 0, 0]} barSize={45}>
                   {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.realisasi >= entry.target ? '#10b981' : '#1e3a8a'} />
                   ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Growth Trend Composed Chart */}
        <div className="glass-card rounded-[40px] p-10 border-slate-200 shadow-xl shadow-slate-200/40">
          <div className="flex justify-between items-center mb-10">
             <h3 className="text-xl font-black text-slate-900">Pertumbuhan Bulanan</h3>
             <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-widest">
                Semester 1 - 2024
             </div>
          </div>
          <div className="h-[380px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={[
                { name: 'Jan', grow: 10, total: 120 },
                { name: 'Feb', grow: 15, total: 150 },
                { name: 'Mar', grow: 5, total: 140 },
                { name: 'Apr', grow: 22, total: 200 },
                { name: 'Mei', grow: 18, total: 180 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                   dataKey="name" 
                   axisLine={false} 
                   tickLine={false} 
                   tick={{fill: '#64748b', fontSize: 11, fontWeight: 800}} 
                   dy={10}
                />
                <YAxis 
                   axisLine={false} 
                   tickLine={false} 
                   tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} 
                />
                <Tooltip 
                   contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '15px'}}
                />
                <Area type="monotone" dataKey="grow" fill="#3b82f6" fillOpacity={0.1} stroke="#3b82f6" strokeWidth={5} />
                <Bar dataKey="total" barSize={25} fill="#1e3a8a" radius={[12, 12, 12, 12]} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detail Analysis Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-[40px] p-10 border-slate-200 bg-slate-900 text-white relative overflow-hidden shadow-2xl"
      >
        <div className="absolute right-[-50px] top-[-50px] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/10 rounded-[32px] flex items-center justify-center text-blue-400 flex-none shadow-inner">
            <Info size={48} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
               <span className="px-3 py-1 bg-blue-500 text-[10px] font-black uppercase tracking-[2px] rounded-full">Executive Insight</span>
               <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Update: 5 May 2024</span>
            </div>
            <h4 className="text-2xl font-black tracking-tight mb-3">Optimasi Sektor Pendapatan Daerah</h4>
            <p className="text-base text-slate-300 max-w-4xl leading-relaxed">
              Data menunjukkan sektor **Restoran** terus menunjukkan tren positif dengan pertumbuhan organik sebesar **22%** di kuartal ini. Namun, sektor **Parkir** memerlukan evaluasi kebijakan atau penambahan titik pantau (petugas lapangan) di wilayah Poso Pesisir karena realisasi masih berada **10% di bawah target** yang ditetapkan.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StatistikPAD;
