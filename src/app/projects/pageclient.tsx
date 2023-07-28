'use client'
import styles from "./page.module.scss";
import { motion } from 'framer-motion';


export function ProjectsClient() {
	return (
		<motion.div className={styles.projects} initial={{ translateX: 1000 }} animate={{ translateX: 0 }} transition={{ duration: 0.5 }}>
			
		</motion.div>
	)
}