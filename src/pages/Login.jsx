import React, { useState } from 'react';
import { Lock, Mail, ShieldCheck, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple mock validation for demo
    if (email === 'kasir@epad.go.id' && password === '123456') {
      onLogin({ email, role: 'kasir', name: 'Deni Kasir' });
    } else if (email === 'pejabat@epad.go.id' && password === '123456') {
      onLogin({ email, role: 'pejabat', name: 'Deni Pejabat' });
    } else {
      setError('Email atau Password tidak sesuai. (Gunakan kasir@epad.go.id / pejabat@epad.go.id dengan pass: 123456)');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-slate-50 font-nunito">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="w-full max-w-[420px] glass-card p-10 rounded-[40px] text-center z-10 shadow-2xl shadow-blue-900/10"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/30 border border-white/20">
          <ShieldCheck size={40} strokeWidth={2.5} />
        </div>

        <h1 className="text-3xl font-black text-slate-900 m-0 tracking-tight leading-none mb-3">e-PAD Web Portal</h1>
        <p className="text-sm font-bold text-slate-500 mb-10">Sistem Pendapatan Daerah Terintegrasi</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="text-left">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2.5 ml-1">Email Instansi</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary">
                <Mail size={20} />
              </div>
              <input
                type="email"
                placeholder="kasir@epad.go.id"
                className="w-full pl-12 pr-5 py-4 glass-input rounded-2xl text-sm font-bold placeholder:text-slate-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="text-left">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2.5 ml-1">Kata Sandi</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary">
                <Lock size={20} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-4 glass-input rounded-2xl text-sm font-bold placeholder:text-slate-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black text-rose-500 mb-2 leading-tight"
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            className="w-full py-5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl font-black text-sm flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-[0.98]"
          >
            MASUK KE DASHBOARD <ArrowRight size={20} />
          </button>
        </form>

        <footer className="mt-12">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            Versi 2.0.4 • Bapenda Digital
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          </p>
        </footer>
      </motion.div>
    </div>
  );
};

export default Login;
