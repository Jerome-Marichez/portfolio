'use client';
import styles from "./page.module.scss";
import { MotionDivGroup } from "../components";

/**
 * @returns A component exclusively used in page.tsx to support 'use client' directives 
 */
export function SkillsClient(): JSX.Element {


	return (
		<MotionDivGroup>
			<h1>Compétences</h1>
			<div className={styles.spacer} />

			<h2>Langages</h2>
			<div className={styles.bloc}>
				<li>TypeScript</li>
				<li>JavaScript</li>
				<li>PHP</li>
			</div>

			<h2>Frameworks</h2>
			<div className={styles.bloc}>
				<li>React</li>
				<li>Next.js</li>
				<li>Node.js</li>
			</div>
			<div className={styles.bloc}>
				<li>Angular</li>
				<li>Ionic</li>
			</div>

			<h2>Outils</h2>
			<div className={styles.bloc}>
				<li>Docker</li>
				<li>GitHub</li>
				<li>Git</li>
			</div>
			<div className={styles.bloc}>
				<li>Vercel</li>
				<li>Google Cloud (GCP)</li>
			</div>

			<h2>Bases de données</h2>
			<div className={styles.bloc}>
				<li>SQL</li>
				<li>NoSQL</li>
			</div>
			<div className={styles.bloc}>
				<li>Time Series</li>
				<li>Vectorielles</li>
			</div>


			<h2>Autres</h2>
			<div className={styles.bloccol}>
				<li>Autonomie & prise d’initiative</li>
				<li>Capacité d’analyse</li>
				<li>Sens du détail & qualité</li>
				<li>Vulgarisation</li>
				<li>Design Patterns / POO</li>
				<li>Data & IA (LLM / ML)</li>
				<li>CI/CD</li>
				<li>Cloud</li>
				<li>Développement Web & Mobile</li>
				<li>Tests Unitaires / Intégration / E2E</li>
				<li>Cartographie</li>
			</div>

			<h2>Formations</h2>
			<div className={styles.bloccol}>
				<li>Master Ingénierie - Expert en IT et SI</li>
				<li>Anglais (B2 CEFR)</li>
				<li>Google AdWords SEO</li>
				<li>Prévention des Risques Psychosociaux</li>
				<li>Certificat Devenez Développeur Agile</li>
			</div>
		</MotionDivGroup>
	)

}