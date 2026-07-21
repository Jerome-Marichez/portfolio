export interface SkillCategory {
	title: string;
	items: string[];
}

/** Compétences techniques, regroupées par domaine (source : CV). */
export const technicalSkills: SkillCategory[] = [
	{
		title: "Langages",
		items: ["TypeScript", "JavaScript", "PHP", "HTML", "SCSS", "CSS", "CSS-in-JS"],
	},
	{
		title: "Frameworks & Librairies",
		items: ["React", "Next.js", "Angular", "Ionic", "Node.js", "Express", "Zod", "jQuery", "Material UI", "Storybook"],
	},
	{
		title: "Qualité logiciel",
		items: ["Jest (unitaires / intégration)", "Cypress (E2E)", "Accessibilité RGAA / WCAG", "Lighthouse", "Surveillance SLA & performances", "W3C"],
	},
	{
		title: "DevOps & Infrastructure",
		items: ["CI/CD", "Docker", "GitHub Actions", "Vercel", "Google Cloud (GCP)", "Cloud Functions", "Webhooks", "Gestion de serveurs"],
	},
	{
		title: "Data & IA",
		items: ["IA supervisée (classification)", "KNN Clustering", "Adaptation de LLM", "Data Visualisation", "HeatMap", "Matomo", "Google Analytics", "Microsoft Ads"],
	},
	{
		title: "Bases de données",
		items: ["MySQL", "NoSQL (Realtime Database)", "PostgreSQL (relationnel, vectoriel, time-series)"],
	},
	{
		title: "CMS & ERP",
		items: ["WordPress", "Strapi", "M3Soft"],
	},
	{
		title: "Web Performance & SEO",
		items: ["Code splitting", "Lazy loading", "SEO", "SEA", "Audit Lighthouse", "RGAA", "W3C"],
	},
	{
		title: "Systèmes",
		items: ["Linux", "Windows", "macOS"],
	},
];

/** Compétences fonctionnelles (source : CV). */
export const functionalSkills: string[] = [
	"Architecture & Conception (monolithe / microservices, design patterns)",
	"Gestion de projet — du cadrage à la livraison",
	"Data & Analytics — intégrité des données, tableaux de bord métier",
	"Compliance IT — RGPD / DORA & exigences clients",
	"Audit & Optimisation SI — cartographie, matrice de risque",
	"Déploiement — PaaS, IaaS, On-premise & maintenance",
	"Support — documentation technique, formation, bonnes pratiques sécurité",
	"IA — modèles supervisés, non supervisés & adaptation de LLM",
	"Assistance & réponse aux appels d'offres",
];

export const languages: string[] = [
	"Français — langue maternelle",
	"Anglais — niveau B2 (CEFR)",
];
