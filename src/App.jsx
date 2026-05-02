import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Wallet, 
  Search, 
  BarChart3, 
  Users, 
  Settings, 
  LogOut,
  Bell,
  CreditCard,
  UserCircle
} from 'lucide-react';
import KasirDashboard from './components/KasirDashboard';
import PejabatDashboard from './components/PejabatDashboard';
import CekTagihan from './components/CekTagihan';
import Pembayaran from './components/Pembayaran';
import StatistikPAD from './components/StatistikPAD';
import WajibPajak from './components/WajibPajak';
import Pengaturan from './components/Pengaturan';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState(null); // { email, role, name }
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  const role = user.role;

  const handleLogout = () => {
    setUser(null);
    setActiveTab('dashboard');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return role === 'kasir' ? <KasirDashboard /> : <PejabatDashboard />;
      case 'cek-tagihan':
        return <CekTagihan />;
      case 'pembayaran':
        return <Pembayaran />;
      case 'statistik':
        return <StatistikPAD />;
      case 'wajib-pajak':
        return <WajibPajak />;
      case 'pengaturan':
        return <Pengaturan />;
      default:
        return role === 'kasir' ? <KasirDashboard /> : <PejabatDashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-nunito animate-in fade-in duration-700">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-50 border-r border-slate-200 p-6 flex flex-col hidden lg:flex sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
            <Wallet size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight text-primary uppercase">e-PAD</span>
        </div>

        <nav className="flex-1 space-y-2">
          <div 
            onClick={() => setActiveTab('dashboard')}
            className={activeTab === 'dashboard' ? 'sidebar-item-active' : 'sidebar-item'}
          >
            <LayoutDashboard size={20} />
            <span className="font-semibold text-sm uppercase tracking-wide">Dashboard</span>
          </div>
          
          {role === 'kasir' ? (
            <>
              <div 
                onClick={() => setActiveTab('cek-tagihan')}
                className={activeTab === 'cek-tagihan' ? 'sidebar-item-active' : 'sidebar-item'}
              >
                <Search size={20} />
                <span className="font-semibold text-sm uppercase tracking-wide">Cek Tagihan</span>
              </div>
              <div 
                onClick={() => setActiveTab('pembayaran')}
                className={activeTab === 'pembayaran' ? 'sidebar-item-active' : 'sidebar-item'}
              >
                <CreditCard size={20} />
                <span className="font-semibold text-sm uppercase tracking-wide">Pembayaran</span>
              </div>
            </>
          ) : (
            <>
              <div 
                onClick={() => setActiveTab('statistik')}
                className={activeTab === 'statistik' ? 'sidebar-item-active' : 'sidebar-item'}
              >
                <BarChart3 size={20} />
                <span className="font-semibold text-sm uppercase tracking-wide">Statistik PAD</span>
              </div>
              <div 
                onClick={() => setActiveTab('wajib-pajak')}
                className={activeTab === 'wajib-pajak' ? 'sidebar-item-active' : 'sidebar-item'}
              >
                <Users size={20} />
                <span className="font-semibold text-sm uppercase tracking-wide">Wajib Pajak</span>
              </div>
            </>
          )}
          
          <div 
            onClick={() => setActiveTab('pengaturan')}
            className={activeTab === 'pengaturan' ? 'sidebar-item-active' : 'sidebar-item'}
          >
            <Settings size={20} />
            <span className="font-semibold text-sm uppercase tracking-wide">Pengaturan</span>
          </div>
        </nav>

        <div className="pt-6 border-t border-slate-200">
          <div 
            onClick={handleLogout}
            className="sidebar-item text-red-500 hover:bg-red-50 hover:text-red-600"
          >
            <LogOut size={20} />
            <span className="font-semibold text-sm uppercase tracking-wide">Keluar</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-black text-slate-800 uppercase tracking-widest">
              {activeTab === 'dashboard' ? (role === 'kasir' ? 'Portal Kasir' : 'Dashboard Pimpinan') : activeTab.replace('-', ' ')}
            </h1>
            <div className="bg-primary/10 px-3 py-1 rounded-full text-[10px] font-black text-primary border border-primary/20">
              {role.toUpperCase()}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer text-slate-400 hover:text-primary transition-colors p-2 hover:bg-slate-50 rounded-xl">
              <Bell size={22} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white text-[10px] text-white flex items-center justify-center font-bold">3</span>
            </div>
            
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-800">{user.name}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{role === 'kasir' ? 'Staff Kasir Utama' : 'Kepala Badan'}</p>
              </div>
              <div className="w-11 h-11 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 overflow-hidden border-2 border-white">
                <UserCircle size={44} />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 p-8 custom-scrollbar">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
