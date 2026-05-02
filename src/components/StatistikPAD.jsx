import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, Legend, ComposedChart, Area
} from 'recharts';
import { Download, Filter, Calendar, Info } from 'lucide-react';

const StatistikPAD = () => {
  const data = [
    { name: 'Hotel', target: 500, realisasi: 420 },
    { name: 'Resto', target: 400, realisasi: 450 },
    { name: 'Parkir', target: 200, realisasi: 180 },
    { name: 'Reklame', target: 300, realisasi: 290 },
    { name: 'PBB', target: 800, realisasi: 600 },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Statistik Capaian PAD</h2>
          <p className="text-sm font-medium text-slate-500">Analisis komparatif target vs realisasi pendapatan daerah</p>
        </div>
        <button className="btn-primary rounded-2xl flex items-center gap-2">
          <Download size={18} />
          Unduh Laporan (PDF)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Target vs Realisasi Bar Chart */}
        <div className="glass-card rounded-[32px] p-8 border-slate-200">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
              <div className="w-2 h-6 bg-primary rounded-full"></div>
              Target vs Realisasi (Per Sektor)
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-slate-200 rounded-full"></div>
                <span className="text-[10px] font-bold text-slate-400">Target</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-[10px] font-bold text-slate-400">Realisasi</span>
              </div>
            </div>
          </div>

          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#64748b', fontSize: 12, fontWeight: 700}}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 600}}
                  tickFormatter={(val) => `${val}Jt`}
                />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="target" fill="#e2e8f0" radius={[10, 10, 0, 0]} barSize={40} />
                <Bar dataKey="realisasi" fill="#1e3a8a" radius={[10, 10, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Growth Trend Composed Chart */}
        <div className="glass-card rounded-[32px] p-8 border-slate-200">
          <h3 className="text-lg font-black text-slate-800 mb-8">Pertumbuhan Bulanan (%)</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={[
                { name: 'Jan', grow: 10, total: 120 },
                { name: 'Feb', grow: 15, total: 150 },
                { name: 'Mar', grow: 5, total: 140 },
                { name: 'Apr', grow: 22, total: 200 },
                { name: 'Mei', grow: 18, total: 180 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <Tooltip />
                <Area type="monotone" dataKey="grow" fill="#3b82f6" fillOpacity={0.1} stroke="#3b82f6" strokeWidth={3} />
                <Bar dataKey="total" barSize={20} fill="#1e3a8a" radius={[10, 10, 10, 10]} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detail Analysis Card */}
      <div className="glass-card rounded-[32px] p-8 border-slate-200 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-emerald-400">
            <Info size={32} />
          </div>
          <div>
            <h4 className="text-xl font-black italic">Insight Strategis</h4>
            <p className="text-sm text-emerald-100/70 max-w-2xl leading-relaxed mt-1">
              Pendapatan sektor **Restoran** melampaui target sebesar **12.5%** pada periode April. Disarankan untuk memperluas pendataan pada wilayah **Poso Pesisir** yang menunjukkan potensi pertumbuhan WP baru yang signifikan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatistikPAD;
