'use client'
import styles from "./page.module.scss";
import { motion } from 'framer-motion';
import { SkillItem } from "../components";


/**
 * @returns A component exclusively used in page.tsx to support 'use client' directives 
 */
export function SkillsClient(): JSX.Element {

	return (
		<motion.div className={styles.skills} initial={{ translateX: 1000 }} animate={{ translateX: 0 }} transition={{ duration: 0.5 }}>
			<SkillItem height={80} width={80} type="react" />
			<SkillItem height={80} width={80} type="typescript" />
			<SkillItem height={80} width={80} type="nextjs" />
			<SkillItem height={80} width={80} type="css" />
			<SkillItem height={80} width={80} type="javascript" />
			<SkillItem height={80} width={80} type="sass" />
			<SkillItem height={80} width={80} type="css" />
			<SkillItem height={80} width={80} type="html5" />
			<SkillItem height={80} width={80} type="jest" />
			<SkillItem height={80} width={80} type="mongodb" />
			<SkillItem height={80} width={80} type="mysql" />
			<SkillItem height={80} width={80} type="postgresql" />
			<SkillItem height={80} width={80} type="github" />
			<SkillItem height={80} width={80} type="php" />
			<SkillItem height={80} width={80} type="codeigniter" />
		</motion.div>
	)

}