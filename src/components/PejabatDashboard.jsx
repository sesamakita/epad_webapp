import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { TrendingUp, Target, Users, MapPin, ArrowUpRight, ArrowDownRight, Filter } from 'lucide-react';

const PejabatDashboard = () => {
  const dataRealisasi = [
    { name: 'Jan', value: 4.2 },
    { name: 'Feb', value: 3.8 },
    { name: 'Mar', value: 5.1 },
    { name: 'Apr', value: 4.9 },
    { name: 'Mei', value: 6.2 },
    { name: 'Jun', value: 7.5 },
  ];

  const dataSektor = [
    { name: 'Hotel', value: 400, color: '#6366f1' },
    { name: 'Restoran', value: 300, color: '#10b981' },
    { name: 'Parkir', value: 200, color: '#f59e0b' },
    { name: 'Reklame', value: 100, color: '#ef4444' },
  ];

  const targetData = [
    { name: 'Target 2024', value: 120, total: 150 },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      {/* Top Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Realisasi PAD', value: 'Rp 84.5 M', color: 'bg-primary', icon: TrendingUp, trend: '+12.5%', isUp: true },
          { label: 'Target Tahunan', value: 'Rp 150.0 M', color: 'bg-amber-500', icon: Target, trend: '56% Capaian', isUp: true },
          { label: 'Wajib Pajak Aktif', value: '12.450', color: 'bg-emerald-500', icon: Users, trend: '+450 Baru', isUp: true },
          { label: 'Kecamatan Terdata', value: '12 / 12', color: 'bg-indigo-500', icon: MapPin, trend: '100% Coverage', isUp: true },
        ].map((stat, i) => (
          <div key={i} className="glass-card rounded-3xl p-6 border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 ${stat.color} text-white rounded-2xl shadow-lg shadow-current/20`}>
                <stat.icon size={22} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${stat.isUp ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-50'}`}>
                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </div>
            </div>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
            <h3 className="text-2xl font-black mt-1 text-slate-800">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card rounded-3xl p-8 border-slate-200">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800">Trend Pendapatan Daerah</h3>
                <p className="text-sm font-medium text-slate-400 italic">Data realisasi per bulan (dalam Miliar Rupiah)</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                  <Filter size={18} className="text-slate-500" />
                </button>
                <select className="bg-slate-100 border-none rounded-xl px-4 py-2 text-sm font-bold text-slate-600 outline-none">
                  <option>Tahun 2024</option>
                  <option>Tahun 2023</option>
                </select>
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dataRealisasi}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}}
                    tickFormatter={(value) => `${value}M`}
                  />
                  <Tooltip 
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 'bold'}}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#1e3a8a" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-3xl p-6 border-slate-200">
              <h4 className="font-bold text-slate-800 mb-6">Komposisi Sektor Pajak</h4>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={dataSektor}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {dataSektor.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {dataSektor.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: s.color}}></div>
                    <span className="text-xs font-bold text-slate-600">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 border-slate-200 bg-primary text-white">
              <h4 className="font-bold mb-6">Status Rekonsiliasi</h4>
              <div className="space-y-4">
                {[
                  { label: 'Bank BPD', status: 'SINKRON', time: '5 Menit Lalu' },
                  { label: 'Sistem Pusat', status: 'SINKRON', time: '1 Jam Lalu' },
                  { label: 'Sistem Pajak', status: 'SINKRON', time: 'Real-time' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/10 rounded-2xl border border-white/10">
                    <div>
                      <p className="text-xs font-black">{item.label}</p>
                      <p className="text-[10px] text-white/60">{item.time}</p>
                    </div>
                    <span className="text-[10px] font-black bg-emerald-400 text-emerald-900 px-2 py-0.5 rounded-lg">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Feed & Activity */}
        <div className="space-y-6">
          <div className="glass-card rounded-3xl p-6 border-slate-200 flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-800">Aktivitas Terkini</h3>
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </div>
            
            <div className="space-y-6 flex-1 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
              {[
                { type: 'SUCCESS', title: 'Pembayaran Hotel Grand', desc: 'Sektor Hotel baru saja menyetor Rp 45.000.000', time: '2 menit lalu' },
                { type: 'WARNING', title: 'Penurunan Pendapatan', desc: 'Restoran sektor A mengalami penurunan 5%', time: '15 menit lalu' },
                { type: 'INFO', title: 'WP Baru Terdaftar', desc: 'CV. Maju Jaya mendaftar sebagai WP Restoran', time: '45 menit lalu' },
                { type: 'SUCCESS', title: 'Capaian Target', desc: 'Target Pajak Parkir mencapai 80%', time: '1 jam lalu' },
                { type: 'SUCCESS', title: 'Setoran PBB', desc: 'Kecamatan A menyetorkan Rp 120.000.000', time: '2 jam lalu' },
              ].map((act, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-slate-100 last:border-0 pb-6 last:pb-0">
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white shadow-sm ${
                    act.type === 'SUCCESS' ? 'bg-emerald-500' : act.type === 'WARNING' ? 'bg-amber-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer">
                    <p className="text-xs font-black text-slate-800 uppercase tracking-wide">{act.title}</p>
                    <p className="text-xs font-medium text-slate-500 mt-1 leading-relaxed">{act.desc}</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-6 w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl text-xs font-bold transition-all">
              LIHAT LAPORAN LENGKAP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PejabatDashboard;
