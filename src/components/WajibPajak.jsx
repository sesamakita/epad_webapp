import React from 'react';
import { Users, UserPlus, Phone, Mail, Building2, CheckCircle2, XCircle, MoreVertical, Download } from 'lucide-react';

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
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Direktori Wajib Pajak</h2>
          <p className="text-sm font-medium text-slate-500">Manajemen data dan kepatuhan Wajib Pajak Daerah</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-all">
            <Download size={18} />
            Export Data
          </button>
          <button className="btn-primary flex items-center gap-2 rounded-2xl shadow-primary/20">
            <UserPlus size={18} />
            Daftar WP Baru
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Wajib Pajak', value: '1,245', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Kepatuhan Rata-rata', value: '84.2%', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Non-Aktif / Tunggakan', value: '112', icon: XCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
        ].map((stat, i) => (
          <div key={i} className="glass-card rounded-3xl p-6 border-slate-200">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                <stat.icon size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <h4 className="text-2xl font-black text-slate-800">{stat.value}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-3xl p-6 border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="pb-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Identitas WP</th>
                <th className="pb-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Kategori</th>
                <th className="pb-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tgl Bergabung</th>
                <th className="pb-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                <th className="pb-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Kepatuhan</th>
                <th className="pb-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Opsi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {wpList.map((wp) => (
                <tr key={wp.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                        {wp.type === 'Badan Usaha' ? <Building2 size={20} /> : <Users size={20} />}
                      </div>
                      <div>
                        <p className="text-sm font-black text-slate-800">{wp.name}</p>
                        <p className="text-[10px] font-bold text-slate-400">{wp.owner}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-xs font-bold text-slate-600">
                    {wp.category}
                  </td>
                  <td className="py-5 px-4 text-xs font-bold text-slate-500">
                    {wp.joined}
                  </td>
                  <td className="py-5 px-4 text-center">
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tight ${
                      wp.status === 'Aktif' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {wp.status}
                    </span>
                  </td>
                  <td className="py-5 px-4 text-center">
                    <div className="w-24 mx-auto bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          parseInt(wp.compliance) > 80 ? 'bg-emerald-500' : 
                          parseInt(wp.compliance) > 50 ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        style={{ width: wp.compliance }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 mt-1 block">{wp.compliance} Skor</span>
                  </td>
                  <td className="py-5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                        <Phone size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                        <Mail size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WajibPajak;
