'use client';
import styles from "./page.module.scss";
import { motion } from 'framer-motion';

export function AboutClient() {
	return (
		<motion.div className={styles.about} initial={{ translateX: 1000 }} animate={{ translateX: 0 }} transition={{ duration: 0.5 }}>
			<h1>A propos</h1>
			<h2>Ingénieur Logiciels Web</h2>
			<div className={"text"}>
				<p>Mon expertise englobe la conception et l’optimisation de systèmes web complets, qu’il s’agisse de solutions web ou mobiles.</p>
				<p>Grâce à une compréhension approfondie des besoins spécifiques, je m’efforce de proposer des solutions parfaitement adaptées.</p>
				<p>Avec un diplôme de niveau master, je dispose des compétences nécessaires pour relever des défis complexes et offrir des résultats de qualité.</p>
			</div>
		</motion.div>
	)
}