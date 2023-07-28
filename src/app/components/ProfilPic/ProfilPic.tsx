'use client'
import Image from "next/image";
import profilPic from "./profilPic.jpg";
import styles from "./ProfilPic.module.scss";
import { motion } from "framer-motion";

/**
 * @returns A component profile pic with a shape circle
 */
export function ProfilPic(): JSX.Element {

	return (
		<motion.div
			initial={{ opacity: 0.5, scale: 0.5 }}
			animate={{ opacity: 1.0, scale: 1.0, filter: 'grayscale(80%)' }}
			whileHover={{ filter: 'grayscale(0%)' }}
			transition={{ ease: "easeOut", duration: 0.5 }}
		>
			<Image
				className={styles.profil}
				src={profilPic}
				alt={"Picture of me"}
			/>
		</motion.div>
	)

}