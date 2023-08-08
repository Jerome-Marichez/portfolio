'use client';
import styles from "./page.module.scss";
import { motion } from 'framer-motion';
import { Card } from "../components";
import { projectsData } from "../data/projects";
import { Button } from "../components";
import Link from "next/link";

/**
 * @returns A component exclusively used in page.tsx to support 'use client' directives 
 */
export function ProjectsClient(): JSX.Element {

	return (
		<motion.div className={styles.projects} initial={{ translateX: 1000 }} animate={{ translateX: 0 }} transition={{ duration: 0.5 }}>
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
			<Link href="https://github.com/Jerome-Marichez" target="_blank">
				<Button text={"# See more projects #"} />
			</Link>
		</motion.div>
	)

}