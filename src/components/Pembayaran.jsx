import React, { useState } from 'react';
import { CreditCard, CheckCircle2, History, Search, ArrowRight, Wallet, Banknote, QrCode, Printer, Shield, Zap } from 'lucide-react';

const Pembayaran = () => {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState('');

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-black text-slate-800">Modul Pembayaran Kasir</h2>
        <p className="text-sm font-medium text-slate-500">Proses transaksi penerimaan daerah secara langsung</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress Bar */}
        <div className="lg:col-span-3 flex items-center justify-center gap-4 mb-4">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all ${
                step >= s ? 'bg-primary text-white shadow-lg' : 'bg-white text-slate-300 border border-slate-200'
              }`}>
                {s}
              </div>
              {s < 3 && <div className={`w-20 h-1 rounded-full ${step > s ? 'bg-primary' : 'bg-slate-200'}`}></div>}
            </React.Fragment>
          ))}
        </div>

        {/* Content Section */}
        <div className="lg:col-span-2">
          {step === 1 && (
            <div className="glass-card rounded-[32px] p-8 border-slate-200 space-y-8">
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">Step 1: Identifikasi Tagihan</h3>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" placeholder="Scan Kode QR atau Masukkan Nomor Billing..." className="w-full pl-12 pr-4 py-4 glass-input rounded-2xl font-bold" />
                </div>
                <div className="p-8 border-2 border-dashed border-slate-100 rounded-[32px] text-center space-y-4">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
                    <QrCode size={32} />
                  </div>
                  <p className="text-sm font-bold text-slate-400">Silakan scan kode QR pada surat ketetapan pajak atau masukkan nomor billing secara manual</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button onClick={() => setStep(2)} className="btn-primary rounded-2xl flex items-center gap-2">
                  Lanjutkan <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="glass-card rounded-[32px] p-8 border-slate-200 space-y-8">
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">Step 2: Pilih Metode Pembayaran</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: 'tunai', label: 'Tunai', icon: Banknote, color: 'emerald' },
                  { id: 'qris', label: 'QRIS', icon: QrCode, color: 'rose' },
                  { id: 'va', label: 'Virtual Account', icon: CreditCard, color: 'blue' },
                ].map((m) => (
                  <button 
                    key={m.id}
                    onClick={() => setMethod(m.id)}
                    className={`p-6 rounded-[32px] border-2 transition-all flex flex-col items-center gap-4 ${
                      method === m.id ? 'border-primary bg-primary/5' : 'border-slate-50 hover:border-slate-200 bg-white'
                    }`}
                  >
                    <div className={`w-14 h-14 bg-${m.color}-50 text-${m.color}-600 rounded-2xl flex items-center justify-center shadow-sm`}>
                      <m.icon size={28} />
                    </div>
                    <span className="font-black text-slate-800">{m.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <button onClick={() => setStep(1)} className="px-8 py-3.5 bg-slate-100 text-slate-600 rounded-2xl font-bold transition-all">Kembali</button>
                <button 
                  disabled={!method}
                  onClick={() => setStep(3)} 
                  className={`btn-primary rounded-2xl flex items-center gap-2 ${!method && 'opacity-50 grayscale'}`}
                >
                  Proses Bayar <CheckCircle2 size={18} />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="glass-card rounded-[32px] p-12 border-slate-200 text-center space-y-6">
              <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-200 animate-bounce">
                <CheckCircle2 size={48} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Pembayaran Berhasil!</h3>
                <p className="text-sm font-bold text-slate-500">Status pajak Wajib Pajak telah diperbarui menjadi LUNAS dalam sistem.</p>
              </div>
              <div className="max-w-xs mx-auto p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                  <span>No. Transaksi</span>
                  <span className="text-slate-800">#TX-20240502-001</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                  <span>Wajib Pajak</span>
                  <span className="text-slate-800">Hotel Sentra Poso</span>
                </div>
                <div className="pt-3 border-t border-dashed border-slate-200 flex justify-between font-black text-primary">
                  <span>TOTAL</span>
                  <span>Rp 12.500.000</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 max-w-sm mx-auto pt-6">
                <button className="btn-primary rounded-2xl flex items-center justify-center gap-2">
                  <Printer size={18} /> Cetak Struk Bukti Bayar
                </button>
                <button onClick={() => setStep(1)} className="px-8 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold transition-all hover:bg-slate-200">
                  Selesai & Transaksi Baru
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Info Section */}
        <div className="space-y-6">
          <div className="glass-card rounded-[32px] p-8 border-slate-200 bg-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
             <h4 className="font-black text-slate-800 mb-6 uppercase tracking-widest text-xs">Informasi Pembayaran</h4>
             <div className="space-y-6">
                {[
                  { label: 'Bank Penampung', value: 'BANK BPD SULUTGO', icon: Wallet },
                  { label: 'Limit Transaksi', value: 'Rp 500.000.000 / Hari', icon: Shield },
                  { label: 'Status Integrasi', value: 'CONNECTED', icon: Zap, isStatus: true },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                      {item.isStatus ? (
                        <span className="text-[10px] font-black bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-lg">{item.value}</span>
                      ) : (
                        <p className="text-sm font-black text-slate-800">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="glass-card rounded-[32px] p-6 border-slate-200">
            <h4 className="font-bold text-slate-800 mb-4">Riwayat Per Sesi</h4>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 cursor-pointer transition-all border border-transparent hover:border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">#TX-20240{i}</p>
                      <p className="text-[10px] text-slate-400 font-medium">14:2{i} PM</p>
                    </div>
                  </div>
                  <p className="text-xs font-black text-slate-800">Rp 450.000</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pembayaran;
