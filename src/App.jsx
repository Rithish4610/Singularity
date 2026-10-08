import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";

function Placeholder({ title }) { return <section className="p-6 lg:p-8"><p className="sc-label">Module</p><h1 className="mt-2 text-3xl font-semibold">{title}</h1><div className="sc-card mt-8 p-8 text-singularity-secondary">This intelligence module is ready for the next data connection.</div></section>; }

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const modules = [["inventory", "Inventory"], ["forecasting", "Forecasting"], ["shortages", "Shortage Risk"], ["expiry-risk", "Expiry & Waste"], ["redistribution", "Redistribution"], ["prioritisation", "Prioritisation"], ["hospitals", "Hospitals"], ["supplies", "Supplies"], ["assistant", "AI Assistant"], ["reports", "Reports"]];
  return <div className="min-h-screen bg-singularity-bg text-singularity-text"><Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} /><Topbar sidebarCollapsed={sidebarCollapsed} /><main className={`min-h-screen pt-20 transition-all duration-300 ${sidebarCollapsed ? "ml-20" : "ml-64"}`}><Routes><Route path="/" element={<Navigate to="/dashboard" replace />} /><Route path="/dashboard" element={<Dashboard />} />{modules.map(([path, title]) => <Route key={path} path={`/${path}`} element={<Placeholder title={title} />} />)}</Routes></main></div>;
}
