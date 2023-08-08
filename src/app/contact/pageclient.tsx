
'use client';
import styles from './page.module.scss';
import { motion } from 'framer-motion';

export default function ContactClient(): JSX.Element {

	return (
		<motion.div className={styles.contact} initial={{ translateX: 1000 }} animate={{ translateX: 0 }} transition={{ duration: 0.5 }}>
			<a href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-marichez-31948712b/" target="_blank"><u>Linkedin</u>: @jérôme-marichez-31948712b</a>
			<a href="https://github.com/Jerome-Marichez" target="_blank"><u>Github:</u> @Jerome-Marichez</a>
			<a href="tel:+33771651588" target="_blank"><u>Tel:</u> +33771651588</a>
			<a href="mailto:jeromemarichez@ik.me" target="_blank"><u>Email:</u> jeromemarichez@ik.me</a>
		</motion.div>
	)

}
