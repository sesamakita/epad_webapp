import React, { useState } from 'react';
import { 
  Search, CreditCard, User, FileText, CheckCircle2, 
  History, Printer, BarChart3, Clock, ArrowRight,
  ShieldCheck, Wallet, ChevronRight, Zap, Banknote
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Cell 
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const KasirDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTagihan, setSelectedTagihan] = useState(null);
  const [showManualInput, setShowManualInput] = useState(false);
  const [manualCode, setManualCode] = useState('');

  const mockTagihan = [
    { id: '1', name: 'Restoran Sedap Malam', nop: '12.34.567.890', amount: 4500000, status: 'Belum Bayar', type: 'Pajak Restoran' },
    { id: '2', name: 'Hotel Grand Jaya', nop: '12.34.888.123', amount: 12750000, status: 'Belum Bayar', type: 'Pajak Hotel' },
    { id: '3', name: 'Parkir Mall Sentra', nop: '12.34.111.444', amount: 890000, status: 'Belum Bayar', type: 'Pajak Parkir' },
  ];

  const recentTransactions = [
    { id: 'TX001', name: 'Warkop Digital', amount: 150000, time: '10:45 AM', status: 'Sukses' },
    { id: 'TX002', name: 'PBB Pak Budi', amount: 450000, time: '10:30 AM', status: 'Sukses' },
    { id: 'TX003', name: 'Reklame Toko Maju', amount: 2100000, time: '09:15 AM', status: 'Sukses' },
  ];

  const hourlyData = [
    { hour: '08:00', val: 40 },
    { hour: '09:00', val: 65 },
    { hour: '10:00', val: 90 },
    { hour: '11:00', val: 75 },
    { hour: '12:00', val: 30 },
    { hour: '13:00', val: 85 },
    { hour: '14:00', val: 55 },
    { hour: '15:00', val: 45 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Portal Kasir Online</h2>
          <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest flex items-center gap-2">
             <ShieldCheck size={16} className="text-emerald-500" /> Sistem Pembayaran Terintegrasi (Bapenda)
          </p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowManualInput(!showManualInput)}
            className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all ${
              showManualInput ? 'bg-primary text-white' : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            <Banknote size={16} />
            {showManualInput ? 'Input Scan Mode' : 'Input Kode Manual'}
          </button>
          <div className="bg-emerald-50 text-emerald-600 px-5 py-3 rounded-2xl border border-emerald-100 flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest leading-none">Shift Active</span>
          </div>
        </div>
      </div>

      {/* Top Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-[32px] p-7 bg-primary text-white border-none shadow-2xl shadow-primary/20 relative overflow-hidden"
        >
          <Wallet size={100} className="absolute right-[-20px] bottom-[-20px] opacity-10 rotate-12" />
          <p className="text-[10px] font-black uppercase tracking-[2px] opacity-70 mb-1">Total Penerimaan</p>
          <h3 className="text-2xl font-black tracking-tight">Rp 18.450.000</h3>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-[9px] font-black uppercase">
            <TrendingUp size={12} /> +8.4% Dari Kemarin
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-[32px] p-7 border-slate-200 shadow-sm"
        >
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[2px] mb-1">Metode Tunai</p>
          <h3 className="text-2xl font-black text-slate-800 tracking-tight">Rp 12.100.000</h3>
          <p className="text-[10px] font-bold text-slate-400 mt-4 uppercase">28 Transaksi</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-[32px] p-7 border-slate-200 shadow-sm"
        >
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[2px] mb-1">Transfer / QRIS</p>
          <h3 className="text-2xl font-black text-slate-800 tracking-tight">Rp 6.350.000</h3>
          <p className="text-[10px] font-bold text-slate-400 mt-4 uppercase">14 Transaksi</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-[32px] p-7 border-slate-200 shadow-sm"
        >
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[2px] mb-1">Target Harian</p>
          <h3 className="text-2xl font-black text-slate-800 tracking-tight">73.8%</h3>
          <div className="h-1.5 w-full bg-slate-100 rounded-full mt-5 overflow-hidden">
             <div className="h-full bg-blue-600 rounded-full w-[73.8%]" />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Search & Input Section */}
        <div className="lg:col-span-8 space-y-8">
          <div className="glass-card rounded-[40px] p-10 border-slate-200 shadow-xl shadow-slate-200/50 bg-white/80">
            <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                 {showManualInput ? <Banknote size={20} /> : <Search size={20} />}
              </div>
              {showManualInput ? 'Input Kode Pembayaran Manual' : 'Pencarian Tagihan WP'}
            </h3>
            
            <div className="flex gap-4">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder={showManualInput ? "Masukkan Nomor SKPD / SSPD..." : "Cari berdasarkan Nama / NOP / NPWPD..."}
                  className="w-full glass-input rounded-3xl py-5 px-8 text-lg font-bold border-2 border-slate-100 focus:border-primary pr-14 shadow-sm"
                  value={showManualInput ? manualCode : searchQuery}
                  onChange={(e) => showManualInput ? setManualCode(e.target.value) : setSearchQuery(e.target.value)}
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300">
                  {showManualInput ? <FileText size={24} /> : <Search size={24} />}
                </div>
              </div>
              <button className="bg-primary text-white px-12 rounded-3xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all active:scale-95">
                {showManualInput ? 'PROSES' : 'CARI'}
              </button>
            </div>

            {/* Quick Filter Bar */}
            {!showManualInput && (
              <div className="flex gap-3 mt-6">
                {['Semua', 'PBB', 'Restoran', 'Hotel', 'Parkir'].map((cat, i) => (
                  <button key={i} className="px-5 py-2 rounded-xl bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest border border-slate-100 hover:bg-white hover:border-primary hover:text-primary transition-all">
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Search Results / Manual View */}
            <div className="mt-10 space-y-4">
              {mockTagihan.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ x: 5 }}
                  onClick={() => setSelectedTagihan(item)}
                  className={`p-6 rounded-[28px] border-2 transition-all cursor-pointer flex items-center justify-between group ${
                    selectedTagihan?.id === item.id 
                    ? 'border-primary bg-primary/5 shadow-lg' 
                    : 'border-slate-50 bg-slate-50/30 hover:border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary shadow-sm border border-slate-100 transition-colors">
                      <User size={28} />
                    </div>
                    <div>
                      <p className="text-base font-black text-slate-800">{item.name}</p>
                      <p className="text-xs font-bold text-slate-400 tracking-tight">NOP: {item.nop}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-lg font-black text-slate-900">Rp {item.amount.toLocaleString('id-ID')}</p>
                      <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 uppercase tracking-widest">
                        {item.type}
                      </span>
                    </div>
                    <ChevronRight size={20} className="text-slate-200 group-hover:text-primary transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hourly Stats Chart Card */}
          <div className="glass-card rounded-[40px] p-8 border-slate-200 bg-white/60">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-3">
                   <div className="w-9 h-9 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                      <BarChart3 size={18} />
                   </div>
                   Volume Transaksi Shift
                </h3>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Peak: 10:00 AM</span>
             </div>
             <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={hourlyData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis 
                        dataKey="hour" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 800}}
                        dy={10}
                      />
                      <YAxis hide />
                      <Tooltip 
                        cursor={{fill: '#f8fafc'}}
                        contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                      />
                      <Bar 
                        dataKey="val" 
                        radius={[6, 6, 0, 0]}
                        animationDuration={1500}
                      >
                         {hourlyData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 2 ? '#1e3a8a' : '#bfdbfe'} />
                         ))}
                      </Bar>
                   </BarChart>
                </ResponsiveContainer>
             </div>
          </div>
        </div>

        {/* Right: Payment Panel */}
        <div className="lg:col-span-4 space-y-8">
          <div className="glass-card rounded-[40px] p-8 border-slate-200 bg-white shadow-2xl relative overflow-hidden flex flex-col h-fit">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <Zap size={150} />
            </div>
            
            <h3 className="text-xl font-black text-slate-900 mb-8 relative z-10">Proses Pembayaran</h3>
            
            {selectedTagihan ? (
              <div className="space-y-8 relative z-10">
                <div className="p-6 bg-slate-50 rounded-[28px] border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Pihak Wajib Pajak</p>
                  <p className="text-xl font-black text-slate-900 uppercase leading-tight mb-1">{selectedTagihan.name}</p>
                  <p className="text-xs font-bold text-slate-500 tracking-widest">{selectedTagihan.nop}</p>
                </div>

                <div className="space-y-4 px-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Pokok Pajak</span>
                    <span className="text-slate-900 font-black">Rp {selectedTagihan.amount.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Biaya Admin</span>
                    <span className="text-slate-900 font-black">Rp 2.500</span>
                  </div>
                  <div className="pt-6 border-t border-dashed border-slate-200 flex flex-col gap-1 mt-2">
                    <span className="text-slate-400 font-black uppercase text-[10px] tracking-widest">Total Harus Dibayar</span>
                    <span className="text-3xl font-black text-primary tracking-tight">Rp {(selectedTagihan.amount + 2500).toLocaleString('id-ID')}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2 mb-3">Pilih Metode Pembayaran</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex flex-col items-center justify-center gap-3 p-5 rounded-3xl border-2 border-slate-100 hover:border-primary hover:bg-primary/5 transition-all group active:scale-95">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors border border-slate-50">
                        <Banknote size={24} />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-slate-600">Tunai</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-3 p-5 rounded-3xl border-2 border-slate-100 hover:border-primary hover:bg-primary/5 transition-all group active:scale-95">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors border border-slate-50">
                        <CreditCard size={24} />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-slate-600">Non-Tunai</span>
                    </button>
                  </div>
                  <button className="w-full py-5 bg-primary text-white rounded-3xl font-black text-xs uppercase tracking-[3px] shadow-2xl shadow-primary/30 mt-6 flex items-center justify-center gap-3 active:scale-[0.98] transition-all">
                    PROSES SEKARANG <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-20 flex flex-col items-center justify-center text-center space-y-6 opacity-40">
                <div className="w-24 h-24 bg-slate-50 rounded-[32px] flex items-center justify-center text-slate-300 border border-slate-100 shadow-inner">
                  <Zap size={48} />
                </div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[2px] leading-relaxed max-w-[200px]">Pilih tagihan dari daftar untuk memproses</p>
              </div>
            )}
          </div>

          {/* Quick Transaction Log */}
          <div className="glass-card rounded-[40px] p-8 border-slate-200 bg-white/60">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-base font-black text-slate-900 tracking-tight">Recent Activity</h4>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</button>
            </div>
            <div className="space-y-5">
              {recentTransactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between group cursor-pointer hover:bg-white p-2 rounded-2xl transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm border border-emerald-100">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <p className="text-[13px] font-black text-slate-800 leading-tight">{tx.name}</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mt-1">{tx.time} • Sukses</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[13px] font-black text-slate-900">Rp {tx.amount.toLocaleString('id-ID')}</p>
                    <button className="text-[9px] font-black text-primary opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1 ml-auto uppercase tracking-tighter mt-1">
                      <Printer size={10} /> RE-PRINT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KasirDashboard;
