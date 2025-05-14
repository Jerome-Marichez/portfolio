'use client';
import styles from "./page.module.scss";
import { Button, Card, MotionDivGroup } from "../components";
import { projectsData } from "../data/projects";
import Link from "next/link";

/**
 * @returns A component exclusively used in page.tsx to support 'use client' directives 
 */
export function ProjectsClient(): JSX.Element {

	return (
		<MotionDivGroup>
			<h1>Mes Projets</h1>
			<h2>Survol et clic pour en savoir plus</h2>
			<div className={styles.grid}>
				{projectsData.map((project, index) => (
					<Link href={project.url} key={index} target="_blank">
						<div key={index} className={styles.children}>
							<Card
								key={index}
								image={project.picture}
								image2={project.picture2}
								title={project.title}
								tags={project.tags}
							/>
						</div>
					</Link>
				))}
			</div>
			<div className={styles.github}>
				<Link href="https://github.com/Jerome-Marichez" target="_blank">
					<Button text={"# Voir mon github #"} />
				</Link>
			</div>
		</MotionDivGroup>
	)

}