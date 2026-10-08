import { NavLink } from "react-router-dom";
import { Activity, LayoutDashboard, Package, TrendingUp, AlertTriangle, TimerReset, ArrowRightLeft, ShieldAlert, Hospital, Pill, Bot, FileBarChart, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  ["Dashboard", "/dashboard", LayoutDashboard], ["Inventory", "/inventory", Package], ["Forecasting", "/forecasting", TrendingUp], ["Shortage Risk", "/shortages", AlertTriangle], ["Expiry & Waste", "/expiry-risk", TimerReset], ["Redistribution", "/redistribution", ArrowRightLeft], ["Prioritisation", "/prioritisation", ShieldAlert], ["Hospitals", "/hospitals", Hospital], ["Supplies", "/supplies", Pill], ["AI Assistant", "/assistant", Bot], ["Reports", "/reports", FileBarChart],
];

export default function Sidebar({ collapsed, setCollapsed }) {
  return <aside className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-singularity-border/30 bg-singularity-surface transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}>
    <div className="flex h-20 shrink-0 items-center border-b border-singularity-border/30 px-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-singularity-primary text-singularity-bg shadow-lime"><Activity size={22} strokeWidth={2.5} /></div>
      {!collapsed && <div className="ml-3"><div className="text-sm font-bold tracking-wide">MEDISUPPLY<span className="text-singularity-primary">IQ</span></div><div className="text-[9px] uppercase tracking-[0.2em] text-singularity-secondary">Supply intelligence</div></div>}
    </div>
    <nav className="mt-5 flex-1 space-y-1 overflow-y-auto px-3">{items.map(([label, path, Icon]) => <NavLink key={path} to={path} className={({ isActive }) => `group flex items-center gap-3 rounded-lg px-3 py-3 transition-all ${isActive ? "bg-singularity-primary/10 text-singularity-primary shadow-[inset_3px_0_0_#D8FF00]" : "text-singularity-secondary hover:bg-singularity-card hover:text-singularity-text"}`}><Icon size={18} />{!collapsed && <span className="text-sm font-medium">{label}</span>}</NavLink>)}</nav>
    <div className="border-t border-singularity-border/30 p-3">{!collapsed && <div className="mb-3 rounded-lg border border-singularity-border/30 bg-singularity-card p-3"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-singularity-primary shadow-[0_0_10px_#D8FF00]" /><span className="text-xs font-medium">System operational</span></div><div className="mt-1 text-[10px] text-singularity-secondary">Demo mode · Synced 2m ago</div></div>}<button aria-label="Toggle sidebar" onClick={() => setCollapsed(!collapsed)} className="flex w-full items-center justify-center rounded-lg border border-singularity-border/30 py-2 text-singularity-secondary transition hover:border-singularity-primary/50 hover:text-singularity-primary">{collapsed ? <ChevronRight size={17} /> : <ChevronLeft size={17} />}</button></div>
  </aside>;
}
