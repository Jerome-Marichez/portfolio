'use client';
import styles from "./page.module.scss";
import { motion } from 'framer-motion';
import type { TypeItem } from "../interfaces";
import { SkillItem } from "../components";

/**
 * @returns A component exclusively used in page.tsx to support 'use client' directives 
 */
export function SkillsClient(): JSX.Element {

	const skills: Array<TypeItem> = ["react", "typescript", "nextjs", "javascript", "jest", "sass", "css", "html5", "mongodb", "mysql", "postgresql", "github", "php", "wordpress", "codeigniter"]

	return (
		<motion.div className={styles.skills} initial={{ translateX: 1000 }} animate={{ translateX: 0 }} transition={{ duration: 0.5 }}>
			{skills.map((skills, index) => (
				<SkillItem key={index} height={60} width={60} type={skills} />
			))}
		</motion.div>
	)

}