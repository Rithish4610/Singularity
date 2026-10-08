export const scenarios = [
  { id: "normal", name: "Normal Operations", description: "Stable demand and healthy inventory levels", demandMultiplier: 1.0, riskLevel: "LOW" },
  { id: "outbreak", name: "Outbreak Surge", description: "Sudden increase in medical supply demand", demandMultiplier: 1.46, riskLevel: "HIGH" },
  { id: "critical", name: "Critical Shortage", description: "Multiple facilities approaching stock-out", demandMultiplier: 1.72, riskLevel: "CRITICAL" },
  { id: "expiry", name: "Expiry Crisis", description: "Large quantities approaching expiry", demandMultiplier: 1.0, riskLevel: "WARNING" },
  { id: "redistribution", name: "Redistribution Opportunity", description: "Surplus inventory can be transferred", demandMultiplier: 1.0, riskLevel: "OPTIMIZED" },
];
