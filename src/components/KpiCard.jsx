import { ArrowRightLeft, Building2, Clock3, Package, TriangleAlert } from "lucide-react";

const icons = { hospitals: Building2, supplies: Package, shortages: TriangleAlert, expiry: Clock3, transfers: ArrowRightLeft };

export default function KpiCard({ title, value, subtitle, type, danger = false }) {
  const Icon = icons[type];
  return <div className="sc-card-hover relative overflow-hidden p-5"><div className="flex items-start justify-between"><div><p className="sc-label">{title}</p><h2 className={`mt-3 text-3xl font-bold ${danger ? "text-singularity-danger" : "text-singularity-text"}`}>{value}</h2><p className="mt-2 text-sm text-singularity-secondary">{subtitle}</p></div><div className={`rounded-xl p-3 ${danger ? "bg-singularity-danger/10 text-singularity-danger" : "bg-singularity-primary/10 text-singularity-primary"}`}><Icon size={22} /></div></div><div className={`absolute bottom-0 left-0 h-[2px] w-full ${danger ? "bg-singularity-danger" : "bg-singularity-primary"}`} /></div>;
}
