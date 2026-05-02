import React, { useState } from 'react';
import { Search, Filter, ArrowRight, FileText, MapPin, Calendar, CreditCard } from 'lucide-react';

const CekTagihan = () => {
  const [filterType, setFilterType] = useState('Semua');
  
  const tags = [
    { id: 'TG001', wp: 'Restoran Bakso Mas Edi', nop: '32.01.001.002.003-0', period: 'April 2024', amount: 1250000, status: 'Belum Bayar', type: 'Restoran', date: '2024-04-30' },
    { id: 'TG002', wp: 'Hotel Santika Poso', nop: '32.01.888.999.000-1', period: 'Maret 2024', amount: 25700000, status: 'Jatuh Tempo', type: 'Hotel', date: '2024-03-31' },
    { id: 'TG003', wp: 'Parkir Sentra Plaza', nop: '32.01.111.222.333-0', period: 'April 2024', amount: 3450000, status: 'Belum Bayar', type: 'Parkir', date: '2024-04-28' },
    { id: 'TG004', wp: 'Reklame Toko Berkah', nop: '32.01.444.555.666-0', period: 'Tahun 2024', amount: 5000000, status: 'Lunas', type: 'Reklame', date: '2024-01-15' },
    { id: 'TG005', wp: 'PBB Rumah Budi Santoso', nop: '32.01.010.020.030-4', period: 'Tahun 2024', amount: 850000, status: 'Belum Bayar', type: 'PBB-P2', date: '2024-05-10' },
    { id: 'TG006', wp: 'Restoran Seafood 99', nop: '32.01.999.888.777-2', period: 'April 2024', amount: 4200000, status: 'Belum Bayar', type: 'Restoran', date: '2024-04-25' },
  ];

  const filteredTags = filterType === 'Semua' ? tags : tags.filter(t => t.status === filterType);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Cek Tagihan Daerah</h2>
          <p className="text-sm font-medium text-slate-500">Monitoring piutang dan status bayar Wajib Pajak</p>
        </div>
        <div className="flex gap-2">
          {['Semua', 'Belum Bayar', 'Jatuh Tempo', 'Lunas'].map(f => (
            <button 
              key={f}
              onClick={() => setFilterType(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                filterType === f ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-3xl p-6 border-slate-200">
        <div className="flex gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Cari NOP, Nama WP, atau Alamat..."
              className="w-full pl-12 pr-4 py-3.5 glass-input rounded-2xl text-sm font-bold"
            />
          </div>
          <button className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl font-bold flex items-center gap-2 transition-all">
            <Filter size={18} />
            <span>Filter Lanjutan</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">Wajib Pajak</th>
                <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">NOP / Objek</th>
                <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">Masa Pajak</th>
                <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 text-right">Nominal</th>
                <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 text-center">Status</th>
                <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredTags.map((tag) => (
                <tr key={tag.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xs">
                        {tag.type[0]}
                      </div>
                      <div>
                        <p className="text-sm font-black text-slate-800">{tag.wp}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">{tag.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-4">
                    <p className="text-xs font-bold text-slate-600">{tag.nop}</p>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
                      <MapPin size={10} /> Wilayah Poso Kota
                    </div>
                  </td>
                  <td className="py-5 px-4 text-xs font-bold text-slate-600">
                    {tag.period}
                  </td>
                  <td className="py-5 px-4 text-right">
                    <p className="text-sm font-black text-slate-800">Rp {tag.amount.toLocaleString('id-ID')}</p>
                  </td>
                  <td className="py-5 px-4 text-center">
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tight ${
                      tag.status === 'Lunas' ? 'bg-emerald-100 text-emerald-600' : 
                      tag.status === 'Jatuh Tempo' ? 'bg-rose-100 text-rose-600' : 
                      'bg-amber-100 text-amber-600'
                    }`}>
                      {tag.status}
                    </span>
                  </td>
                  <td className="py-5 px-4">
                    <button className="p-2 bg-white border border-slate-200 rounded-xl text-primary hover:bg-primary hover:text-white transition-all shadow-sm group-hover:shadow-md">
                      <ArrowRight size={16} />
                    </button>
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

export default CekTagihan;
