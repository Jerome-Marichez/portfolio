'use client';
import styles from "./page.module.scss";
import { MotionDivGroup } from "../components";
import { technicalSkills, functionalSkills, languages } from "../data/skills";
import { certifications, formations } from "../data/certifications";

/**
 * @returns A component exclusively used in page.tsx to support 'use client' directives
 */
export function SkillsClient(): JSX.Element {

	return (
		<MotionDivGroup>
			<h1>Compétences</h1>
			<h2>Techniques</h2>

			{technicalSkills.map((category) => (
				<div key={category.title} className={styles.category}>
					<h3 className={styles.categoryTitle}>{category.title}</h3>
					<ul className={styles.pills}>
						{category.items.map((item) => (
							<li key={item} className={styles.pill}>{item}</li>
						))}
					</ul>
				</div>
			))}

			<h2 className={styles.section}>Fonctionnelles</h2>
			<ul className={styles.list}>
				{functionalSkills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>

			<h2 className={styles.section}>Langues</h2>
			<ul className={styles.list}>
				{languages.map((lang) => (
					<li key={lang}>{lang}</li>
				))}
			</ul>

			<h2 className={styles.section}>Certifications</h2>
			<ul className={styles.credentials}>
				{certifications.map((c) => (
					<li key={c.title}>
						<span className={styles.year}>{c.year}</span>
						<span>{c.title}{c.place ? ` — ${c.place}` : ""}</span>
					</li>
				))}
			</ul>

			<h2 className={styles.section}>Formations</h2>
			<ul className={styles.credentials}>
				{formations.map((f) => (
					<li key={f.title}>
						<span className={styles.year}>{f.year}</span>
						<span>{f.title}{f.place ? ` — ${f.place}` : ""}</span>
					</li>
				))}
			</ul>
		</MotionDivGroup>
	)
}
