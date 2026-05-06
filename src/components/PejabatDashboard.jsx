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
import { 
  TrendingUp, Target, Users, MapPin, ArrowUpRight, ArrowDownRight, 
  Filter, Zap, ShieldCheck, Activity, Clock, ChevronRight, User
} from 'lucide-react';
import { motion } from 'framer-motion';

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

  const activePersonnel = [
    { name: 'Siti Aminah', role: 'Kasir', status: 'Online', loc: 'Loket 2', time: 'Active' },
    { name: 'Budi Santoso', role: 'Lapangan', status: 'Online', loc: 'Zona 1', time: 'Active' },
    { name: 'Andi Wijaya', role: 'Lapangan', status: 'Offline', loc: 'Zona 4', time: '2h ago' },
    { name: 'Rina Kartika', role: 'Kasir', status: 'Online', loc: 'Loket 5', time: 'Active' },
    { name: 'Deni Pratama', role: 'Lapangan', status: 'Online', loc: 'Zona 2', time: 'Active' },
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
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-3xl p-6 border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 ${stat.color} text-white rounded-2xl shadow-lg shadow-current/20`}>
                <stat.icon size={22} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-black px-2 py-1 rounded-lg ${stat.isUp ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-50'}`}>
                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </div>
            </div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[2px]">{stat.label}</p>
            <h3 className="text-2xl font-black mt-1 text-slate-800">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Chart Section */}
        <div className="lg:col-span-3 space-y-8">
          <div className="glass-card rounded-[40px] p-8 border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden bg-white/80">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <TrendingUp size={200} />
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 relative z-10">
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Trend Pendapatan Daerah</h3>
                <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest flex items-center gap-2">
                   <Clock size={14} /> Real-time Data Realisasi 2024
                </p>
              </div>
              <div className="flex gap-3 mt-4 md:mt-0">
                <button className="p-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all text-slate-500 shadow-sm active:scale-95">
                  <Filter size={20} />
                </button>
                <select className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm font-black text-slate-700 outline-none shadow-sm focus:ring-2 focus:ring-primary/10">
                  <option>Januari - Juni 2024</option>
                  <option>Juli - Desember 2024</option>
                </select>
              </div>
            </div>

            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dataRealisasi}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 800}}
                    dy={15}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 800}}
                    tickFormatter={(value) => `${value}M`}
                  />
                  <Tooltip 
                    contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '15px'}}
                    itemStyle={{fontWeight: 900, color: '#1e3a8a'}}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#1e3a8a" 
                    strokeWidth={5}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-[32px] p-6 border-slate-200">
              <div className="flex justify-between items-center mb-6 px-2">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-[2px]">Komposisi Sektor</h4>
                <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                   <Activity size={16} />
                </div>
              </div>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={dataSektor}
                      cx="50%"
                      cy="50%"
                      innerRadius={65}
                      outerRadius={85}
                      paddingAngle={8}
                      dataKey="value"
                      stroke="none"
                    >
                      {dataSektor.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {dataSektor.map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-xl transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{backgroundColor: s.color}}></div>
                      <span className="text-[11px] font-black text-slate-700 uppercase tracking-tight">{s.name}</span>
                    </div>
                    <span className="text-[11px] font-black text-slate-900">{s.value} M</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[32px] p-6 border-slate-200 bg-primary text-white relative overflow-hidden">
               <ShieldCheck size={120} className="absolute right-[-20px] bottom-[-20px] opacity-10" />
              <h4 className="text-xs font-black uppercase tracking-[2px] mb-6 opacity-70">Status Rekonsiliasi</h4>
              <div className="space-y-4 relative z-10">
                {[
                  { label: 'Bank BPD', status: 'SINKRON', time: '5 Menit Lalu' },
                  { label: 'Sistem Pusat', status: 'SINKRON', time: '1 Jam Lalu' },
                  { label: 'Sistem Pajak', status: 'SINKRON', time: 'Real-time' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-wider">{item.label}</p>
                      <p className="text-[9px] text-white/50 font-bold mt-0.5 uppercase tracking-tighter">{item.time}</p>
                    </div>
                    <span className="text-[9px] font-black bg-emerald-400 text-emerald-900 px-2.5 py-1 rounded-lg">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[32px] p-6 border-slate-200 flex flex-col justify-between">
               <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[2px] mb-6 px-2">Efektivitas Penagihan</h4>
                  <div className="flex items-center justify-center py-4">
                     <div className="relative w-28 h-28 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90">
                           <circle cx="56" cy="56" r="48" fill="transparent" stroke="#f1f5f9" strokeWidth="8" />
                           <circle cx="56" cy="56" r="48" fill="transparent" stroke="#3b82f6" strokeWidth="8" strokeDasharray="301" strokeDashoffset="75" strokeLinecap="round" />
                        </svg>
                        <span className="absolute text-xl font-black text-slate-900">75%</span>
                     </div>
                  </div>
               </div>
               <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Meningkat 5.2% bulan ini</p>
               </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Monitoring & Personnel */}
        <div className="space-y-8">
          {/* Monitoring Personel */}
          <div className="glass-card rounded-[40px] p-8 border-slate-200 shadow-xl shadow-slate-200/50 bg-white/60">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">Personnel Live</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 flex items-center gap-2">
                  <Activity size={10} className="text-emerald-500" /> Aktif Sekarang
                </p>
              </div>
              <div className="w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500">
                <Users size={20} />
              </div>
            </div>
            
            <div className="space-y-4">
              {activePersonnel.map((p, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white rounded-3xl border border-slate-50 hover:border-primary/20 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-11 h-11 bg-slate-100 text-slate-500 rounded-2xl flex items-center justify-center font-black text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                        {p.name.charAt(0)}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                        p.status === 'Online' ? 'bg-emerald-500' : 'bg-slate-300'
                      }`} />
                    </div>
                    <div>
                      <p className="text-[13px] font-black text-slate-900 m-0 leading-tight">{p.name}</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{p.role} • {p.loc}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-200 group-hover:text-primary transition-colors" />
                </motion.div>
              ))}
            </div>

            <button className="mt-8 w-full py-4 bg-slate-900 text-white rounded-[24px] text-[11px] font-black uppercase tracking-[2px] shadow-xl shadow-slate-900/20 active:scale-95 transition-all">
              LIHAT PETA PERSONEL
            </button>
          </div>

          {/* Activity Logs */}
          <div className="glass-card rounded-[40px] p-8 border-slate-200 bg-white/60">
            <h3 className="text-lg font-black text-slate-900 tracking-tight mb-8">System Audit Log</h3>
            <div className="space-y-6">
              {[
                { title: 'Pembayaran Hotel', time: '2m', color: 'bg-emerald-500' },
                { title: 'Data WP Diubah', time: '15m', color: 'bg-blue-500' },
                { title: 'Target Capai 80%', time: '1h', color: 'bg-amber-500' },
              ].map((log, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-none ${log.color}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-black text-slate-800 leading-tight">{log.title}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">{log.time} ago • System</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full py-4 bg-white text-slate-900 border border-slate-200 rounded-[24px] text-[11px] font-black uppercase tracking-[2px] hover:bg-slate-50 transition-all">
              EXPORT LOGS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PejabatDashboard;
