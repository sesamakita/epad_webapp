import React from 'react';
import { 
  Users, UserPlus, Phone, Mail, Building2, 
  CheckCircle2, XCircle, MoreVertical, Download,
  Search, Filter, ChevronRight, UserCircle2, ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const WajibPajak = () => {
  const wpList = [
    { id: 'WP001', name: 'PT. Maju Bersama Jaya', owner: 'Hendrawan Kusuma', type: 'Badan Usaha', category: 'Hotel & Restoran', joined: '12 Jan 2022', status: 'Aktif', compliance: '95%' },
    { id: 'WP002', name: 'Warung Makan Sederhana', owner: 'Siti Aminah', type: 'Perorangan', category: 'Restoran', joined: '05 Mar 2023', status: 'Aktif', compliance: '88%' },
    { id: 'WP003', name: 'Parkir Mall Poso', owner: 'Budi Santoso', type: 'Badan Usaha', category: 'Parkir', joined: '20 Feb 2021', status: 'Non-Aktif', compliance: '45%' },
    { id: 'WP004', name: 'Reklame Abadi', owner: 'Dedi Kurniawan', type: 'Badan Usaha', category: 'Reklame', joined: '15 Sep 2023', status: 'Aktif', compliance: '100%' },
    { id: 'WP005', name: 'Guest House Melati', owner: 'Rina Wati', type: 'Perorangan', category: 'Hotel', joined: '01 Nov 2023', status: 'Aktif', compliance: '70%' },
    { id: 'WP006', name: 'Catering Berkah', owner: 'Umi Kulsum', type: 'Perorangan', category: 'Restoran', joined: '10 Feb 2024', status: 'Aktif', compliance: '100%' },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Direktori Wajib Pajak</h2>
          <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">Pusat Data & Manajemen Kepatuhan WP Daerah</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3.5 bg-white border border-slate-200 text-slate-600 rounded-[20px] font-black text-[11px] uppercase tracking-widest flex items-center gap-3 hover:bg-slate-50 transition-all shadow-sm">
            <Download size={18} />
            Export CSV
          </button>
          <button className="bg-primary text-white px-8 py-3.5 rounded-[20px] font-black text-[11px] uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all active:scale-95">
            <UserPlus size={18} />
            Daftar WP Baru
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Total Wajib Pajak', value: '1,245', icon: Users, color: 'bg-blue-600', trend: '+12' },
          { label: 'Kepatuhan Rata-rata', value: '84.2%', icon: CheckCircle2, color: 'bg-emerald-600', trend: '+2.4%' },
          { label: 'Status Penunggak', value: '112', icon: XCircle, color: 'bg-rose-600', trend: '-5' },
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-[32px] p-8 border-slate-200 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-6">
              <div className={`w-16 h-16 ${stat.color} text-white rounded-[22px] flex items-center justify-center shadow-lg shadow-current/20`}>
                <stat.icon size={32} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px]">{stat.label}</p>
                <div className="flex items-center gap-3">
                  <h4 className="text-3xl font-black text-slate-900">{stat.value}</h4>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg ${
                    stat.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                  }`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-card rounded-[40px] p-8 border-slate-200 bg-white/80 shadow-xl shadow-slate-200/40 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
           <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Cari Nama WP, NOP, atau No. Telepon..." 
                className="w-full pl-14 pr-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold text-sm focus:border-primary transition-all outline-none"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
           </div>
           <div className="flex gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-black text-[11px] uppercase tracking-widest text-slate-500 hover:bg-white hover:border-primary hover:text-primary transition-all">
                 <Filter size={18} /> Filter Lanjutan
              </button>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="pb-6 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Identitas Wajib Pajak</th>
                <th className="pb-6 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Kategori Pajak</th>
                <th className="pb-6 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Masa Terdaftar</th>
                <th className="pb-6 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                <th className="pb-6 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Indeks Kepatuhan</th>
                <th className="pb-6 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Opsi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {wpList.map((wp, i) => (
                <motion.tr 
                  key={wp.id} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + (i * 0.05) }}
                  className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                >
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-[18px] border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                        {wp.type === 'Badan Usaha' ? <Building2 size={22} /> : <UserCircle2 size={24} />}
                      </div>
                      <div>
                        <p className="text-[14px] font-black text-slate-800">{wp.name}</p>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">{wp.owner} • {wp.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <span className="text-[11px] font-black text-slate-700 uppercase tracking-tight bg-slate-100 px-3 py-1 rounded-lg">
                      {wp.category}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-[12px] font-bold text-slate-500">
                    {wp.joined}
                  </td>
                  <td className="py-6 px-4 text-center">
                    <div className={`inline-flex items-center gap-2 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${
                      wp.status === 'Aktif' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${wp.status === 'Aktif' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                      {wp.status}
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-28 bg-slate-100 h-2 rounded-full overflow-hidden">
                         <div 
                           className={`h-full rounded-full transition-all duration-1000 ${
                             parseInt(wp.compliance) > 80 ? 'bg-emerald-500' : 
                             parseInt(wp.compliance) > 50 ? 'bg-amber-500' : 'bg-rose-500'
                           }`}
                           style={{ width: wp.compliance }}
                         ></div>
                       </div>
                       <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">{wp.compliance} Skor Kepatuhan</span>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                      <button className="w-9 h-9 bg-white text-slate-400 hover:text-blue-600 hover:bg-blue-50 border border-slate-100 rounded-xl flex items-center justify-center transition-all">
                        <Phone size={16} />
                      </button>
                      <button className="w-9 h-9 bg-white text-slate-400 hover:text-primary hover:bg-primary/5 border border-slate-100 rounded-xl flex items-center justify-center transition-all">
                        <Mail size={16} />
                      </button>
                      <button className="w-9 h-9 bg-white text-slate-400 hover:text-slate-900 border border-slate-100 rounded-xl flex items-center justify-center transition-all">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-50 flex justify-between items-center">
           <p className="text-xs font-bold text-slate-400 tracking-wide">Menampilkan 6 dari 1,245 Wajib Pajak</p>
           <div className="flex gap-2">
              <button className="px-4 py-2 bg-slate-50 text-slate-400 rounded-lg text-xs font-black disabled:opacity-50">PREV</button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-black">1</button>
              <button className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-black hover:bg-slate-100">2</button>
              <button className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-black hover:bg-slate-100">NEXT</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WajibPajak;
