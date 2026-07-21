export interface Credential {
	year: string;
	title: string;
	place?: string;
}

/** Certifications (source : CV). */
export const certifications: Credential[] = [
	{ year: "2026", title: "Claude with Google Cloud's Vertex AI" },
	{ year: "2026", title: "ISTQB — Certification Foundation" },
	{ year: "2025", title: "Management & Prévention des risques psychosociaux" },
	{ year: "2023", title: "Devenez développeur Agile", place: "Dunkerque" },
	{ year: "2023", title: "WeLoveDev — Top 5 % React", place: "Dunkerque" },
	{ year: "2022", title: "EF SET — Anglais B2 CEFR", place: "Dunkerque" },
	{ year: "2021", title: "Google Ads Certification", place: "Dunkerque" },
];

/** Formations & diplômes (source : CV). */
export const formations: Credential[] = [
	{ year: "2025", title: "Bac +5 — Expert IT et SI", place: "Lille" },
	{ year: "2022", title: "Bac +3 — Développeur", place: "Dunkerque" },
];
