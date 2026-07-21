'use client';
import styles from "./page.module.scss";
import { MotionDivGroup, Tag } from "../components";
import { experiencesData } from "../data/experiences";
import type { TagType } from "../interfaces";

/**
 * @returns A component exclusively used in page.tsx to support 'use client' directives
 */
export function ExperiencesClient(): JSX.Element {

	return (
		<MotionDivGroup>
			<h1>Parcours</h1>
			<h2>9 ans d&apos;expérience en ingénierie logicielle</h2>

			<ol className={styles.timeline}>
				{experiencesData.map((xp) => (
					<li key={xp.id} className={styles.item}>
						<span className={styles.period}>{xp.period}</span>
						<div className={styles.head}>
							<h3 className={styles.company}>{xp.company}</h3>
							<span className={styles.location}>{xp.location}</span>
						</div>
						<p className={styles.context}>{xp.context}</p>

						{xp.roles.map((role, rIndex) => (
							<div key={rIndex} className={styles.role}>
								<h4 className={styles.roleTitle}>{role.title}</h4>
								<ul className={styles.achievements}>
									{role.achievements.map((line, aIndex) => (
										<li key={aIndex}>{line}</li>
									))}
								</ul>
							</div>
						))}

						<div className={styles.taglist}>
							{xp.tags.map((tag: TagType, tIndex) => (
								<Tag title={tag} type={tag} key={tIndex} />
							))}
						</div>
					</li>
				))}
			</ol>
		</MotionDivGroup>
	)
}
