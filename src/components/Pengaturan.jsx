import React from 'react';
import { Settings, User, Bell, Shield, Database, Cloud, Zap, HelpCircle } from 'lucide-react';

const Pengaturan = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <div>
        <h2 className="text-2xl font-black text-slate-800">Pengaturan Sistem</h2>
        <p className="text-sm font-medium text-slate-500">Konfigurasi akun, tarif pajak, dan integrasi sistem e-PAD</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar for Settings */}
        <div className="space-y-2">
          {[
            { label: 'Profil Saya', icon: User, active: true },
            { label: 'Notifikasi', icon: Bell, active: false },
            { label: 'Keamanan', icon: Shield, active: false },
            { label: 'Basis Data', icon: Database, active: false },
            { label: 'Integrasi Bank', icon: Cloud, active: false },
            { label: 'Preferensi', icon: Zap, active: false },
          ].map((item, i) => (
            <div 
              key={i}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer transition-all ${
                item.active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-white hover:text-primary'
              }`}
            >
              <item.icon size={18} />
              <span className="text-sm font-bold">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* User Profile Card */}
          <div className="glass-card rounded-[32px] p-8 border-slate-200">
            <h3 className="text-lg font-black text-slate-800 mb-6">Informasi Profil</h3>
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-100">
              <div className="w-24 h-24 bg-primary/10 rounded-[32px] flex items-center justify-center text-primary relative group cursor-pointer">
                <User size={48} strokeWidth={1.5} />
                <div className="absolute inset-0 bg-primary/40 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <span className="text-[10px] font-black uppercase tracking-widest">Ubah Foto</span>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-black text-slate-800">Deni Apps</h4>
                <p className="text-sm font-bold text-slate-500 italic">deni.apps@bapenda.go.id</p>
                <span className="inline-block mt-2 text-[10px] font-black bg-blue-100 text-blue-600 px-3 py-1 rounded-full uppercase">Administrator Utama</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nama Lengkap</label>
                <input type="text" defaultValue="Deni Apps" className="w-full glass-input rounded-2xl px-5 py-3 text-sm font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">NIP / ID Pegawai</label>
                <input type="text" defaultValue="19870512 201212 1 001" className="w-full glass-input rounded-2xl px-5 py-3 text-sm font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Jabatan</label>
                <input type="text" defaultValue="Kasubag Pendapatan" className="w-full glass-input rounded-2xl px-5 py-3 text-sm font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Wilayah Kerja</label>
                <input type="text" defaultValue="Bapenda Poso Kota" className="w-full glass-input rounded-2xl px-5 py-3 text-sm font-bold" />
              </div>
            </div>

            <div className="mt-10 flex justify-end">
              <button className="btn-primary rounded-2xl px-10">Simpan Perubahan</button>
            </div>
          </div>

          {/* System Info Mini Card */}
          <div className="glass-card rounded-[32px] p-6 border-slate-200 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="flex items-start justify-between relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-xl">
                    <Cloud size={20} className="text-blue-400" />
                  </div>
                  <h4 className="font-bold">Status Server e-PAD</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-300">Database Core: Online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-300">Bank Integrator: Terhubung (Bank BPD)</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Waktu Server</p>
                <p className="text-sm font-black">2026-05-02 16:30</p>
                <button className="mt-4 text-[10px] font-black text-blue-400 uppercase border-b border-blue-400/30 pb-1">Periksa Koneksi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengaturan;
