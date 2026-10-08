export default function RiskBadge({ level }) {
  const styles = { LOW: "bg-singularity-primary/10 text-singularity-primary border-singularity-primary/30", WARNING: "bg-singularity-warning/10 text-singularity-warning border-singularity-warning/30", HIGH: "bg-orange-500/10 text-orange-400 border-orange-400/30", CRITICAL: "bg-singularity-danger/10 text-singularity-danger border-singularity-danger/30", OPTIMIZED: "bg-singularity-primary/10 text-singularity-primary border-singularity-primary/30" };
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${styles[level] || styles.LOW}`}>{level}</span>;
}
