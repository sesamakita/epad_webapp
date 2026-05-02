import React, { useState } from 'react';
import { Search, CreditCard, User, FileText, CheckCircle2, History, Printer } from 'lucide-react';

const KasirDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTagihan, setSelectedTagihan] = useState(null);

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

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card rounded-3xl p-6 bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-none">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/20 rounded-2xl">
              <CreditCard size={24} />
            </div>
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-lg">Hari Ini</span>
          </div>
          <p className="text-emerald-100 text-sm font-medium">Total Penerimaan Kasir</p>
          <h3 className="text-3xl font-black mt-1">Rp 18.450.000</h3>
        </div>
        
        <div className="glass-card rounded-3xl p-6 border-slate-200">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
              <History size={24} />
            </div>
          </div>
          <p className="text-slate-500 text-sm font-medium">Transaksi Berhasil</p>
          <h3 className="text-3xl font-black mt-1 text-slate-800">42 <span className="text-sm font-medium text-slate-400">Items</span></h3>
        </div>

        <div className="glass-card rounded-3xl p-6 border-slate-200">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl">
              <FileText size={24} />
            </div>
          </div>
          <p className="text-slate-500 text-sm font-medium">Antrian Pending</p>
          <h3 className="text-3xl font-black mt-1 text-slate-800">12 <span className="text-sm font-medium text-slate-400">Items</span></h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Search & Selection Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card rounded-3xl p-8 border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Search className="text-primary" size={22} />
              Cari Tagihan Wajib Pajak
            </h3>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="Masukkan NOP / NPWPD / Nama WP..."
                  className="w-full glass-input rounded-2xl py-4 px-6 text-lg font-medium pr-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <Search size={24} />
                </div>
              </div>
              <button className="btn-primary px-10 rounded-2xl">CARI</button>
            </div>

            {/* Search Results */}
            <div className="mt-8 space-y-3">
              {mockTagihan.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setSelectedTagihan(item)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedTagihan?.id === item.id 
                    ? 'border-primary bg-primary/5 shadow-md' 
                    : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
                      <User size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{item.name}</p>
                      <p className="text-xs font-medium text-slate-400">NOP: {item.nop}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-slate-800">Rp {item.amount.toLocaleString('id-ID')}</p>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-600 uppercase">
                      {item.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transaction Panel */}
        <div className="space-y-6">
          <div className="glass-card rounded-3xl p-8 border-slate-200 bg-white shadow-2xl relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-6">Detail Pembayaran</h3>
            
            {selectedTagihan ? (
              <div className="space-y-6 relative z-10">
                <div className="space-y-2 border-b border-slate-100 pb-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Wajib Pajak</p>
                  <p className="text-lg font-black text-slate-800 uppercase">{selectedTagihan.name}</p>
                  <p className="text-sm font-medium text-slate-500">{selectedTagihan.nop}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Tagihan {selectedTagihan.type}</span>
                    <span className="text-slate-800 font-bold">Rp {selectedTagihan.amount.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Biaya Admin (BPD)</span>
                    <span className="text-slate-800 font-bold">Rp 2.500</span>
                  </div>
                  <div className="pt-4 border-t border-dashed border-slate-200 flex justify-between items-end">
                    <span className="text-slate-500 font-bold">TOTAL BAYAR</span>
                    <span className="text-2xl font-black text-primary">Rp {(selectedTagihan.amount + 2500).toLocaleString('id-ID')}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-8">
                  <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 border-slate-100 hover:border-primary hover:bg-primary/5 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                      <CreditCard size={20} />
                    </div>
                    <span className="text-xs font-bold text-slate-600">Tunai</span>
                  </button>
                  <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 border-primary bg-primary text-white shadow-lg shadow-primary/20 transition-all active:scale-95">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-xs font-bold">Proses</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
                  <FileText size={40} />
                </div>
                <p className="text-sm font-medium text-slate-400">Pilih tagihan dari daftar sebelah kiri untuk memproses pembayaran</p>
              </div>
            )}
          </div>

          {/* Recent History Mini Table */}
          <div className="glass-card rounded-3xl p-6 border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-slate-800">Transaksi Terakhir</h4>
              <button className="text-xs font-bold text-primary hover:underline">Lihat Semua</button>
            </div>
            <div className="space-y-4">
              {recentTransactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-700">{tx.name}</p>
                      <p className="text-[10px] text-slate-400">{tx.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-black text-slate-800">Rp {tx.amount.toLocaleString('id-ID')}</p>
                    <button className="text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 ml-auto">
                      <Printer size={10} /> Cetak
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
