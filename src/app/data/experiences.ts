import type { ExperiencesData } from "../interfaces";

export const experiencesData: ExperiencesData = [
	{
		id: 0,
		period: "2023 - 2025",
		company: "Acetelecom",
		location: "France",
		context:
			"Startup innovante spécialisée dans les solutions SaaS et applications mobiles. Équipe technique de 2 développeurs et 1 PO.",
		roles: [
			{
				title: "Ingénieur logiciel — Support, Compliance IT, Audit SI, Gestion de projet",
				achievements: [
					"Réduction des tâches répétitives et montée en compétence de l'équipe sur la partie technico-commerciale.",
					"Aide à la prise de décision : meilleure confiance et précision des indicateurs de performance.",
					"Encadrement d'intervenants sur les projets pour des besoins ponctuels.",
				],
			},
			{
				title: "Lead Tech — Sms En Masse",
				achievements: [
					"Création d'une solution plus performante et réactive que la marque blanche existante.",
					"Indépendance gagnée sur le canal du SMS.",
				],
			},
			{
				title: "Développeur — Prézage",
				achievements: [
					"Refonte de l'application mobile iOS/Android : Ionic 6 → 8, Angular 15 → 19, refactoring.",
					"Réduction des bugs et amélioration de la qualité perçue du produit existant.",
					"Meilleures décisions UI/UX et maintien du chiffre d'affaires.",
				],
			},
			{
				title: "Data & IA — MailingVox",
				achievements: [
					"Modèle prédictif d'IA supervisée pour anticiper les échecs de dépôt vocal.",
					"Réduction des coûts en évitant les routes alternatives lors des échecs.",
				],
			},
		],
		tags: ["Typescript", "React", "NextJS", "Angular", "Ionic", "NodeJS", "Docker", "GCP", "IA"],
	},
	{
		id: 1,
		period: "2019 - 2022",
		company: "Verhoeven Joaillier",
		location: "France",
		context:
			"Maison de joaillerie de luxe avec un site e-commerce haut de gamme. En autonomie sur le poste, 5 à 10 salariés en interne et interlocuteurs du milieu du luxe.",
		roles: [
			{
				title: "Développeur — Architecture, Qualité logiciel, Support, Déploiement",
				achievements: [
					"Migration du backend PHP 5 → PHP 7 puis Node.js (POO), et du frontend JS/jQuery → React.",
					"Intégration et synchronisation de la boutique physique et de l'e-commerce via l'ERP M3 Soft.",
					"E-commerce : augmentation du panier moyen de +50 %.",
					"Réduction des incidents liés aux pics d'activité et meilleure gestion des stocks.",
				],
			},
		],
		tags: ["React", "Typescript", "NodeJS", "jQuery", "Php", "M3Soft"],
	},
	{
		id: 2,
		period: "2017 - 2019",
		company: "Truffle Capital",
		location: "France",
		context:
			"Société de capital-risque spécialisée dans les fintechs et medtechs. Encadrement du projet avec l'équipe marketing (5 à 10 personnes) et mes prestataires (3 personnes).",
		roles: [
			{
				title: "Développeur web & chef de projet",
				achievements: [
					"Refonte et développement des sites institutionnels : truffle.com, truffle100.fr, artedrone.fr.",
					"Gestion de projets de A à Z : conception, choix techniques, développement full-stack.",
				],
			},
		],
		tags: ["Php", "Javascript", "jQuery", "MySQL", "WordPress"],
	},
];
