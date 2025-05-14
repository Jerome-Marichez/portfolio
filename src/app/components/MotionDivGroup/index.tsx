'use client';
import { motion } from 'framer-motion';
import styles from "./MotionDivGroup.module.scss"

export function MotionDivGroup({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			className={styles.motionDivGroup}
			initial={{ translateX: 1000 }}
			animate={{ translateX: 0 }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);
}