'use client';
import styles from "./Footer.module.scss";

/**
 * @returns A component footer 
 */
export function Footer(): JSX.Element {
	return (
		<footer className={styles.footer}>
			<div className={styles.group}>
				<a href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-marichez-31948712b/" target="_blank">Linkedin</a>
				<a href="https://github.com/Jerome-Marichez" target="_blank">Github</a>
			</div>
			<div className={styles.group}>
				<a href="tel:+33771651588">Tel: +33771651588</a>
				<a href="mailto:jeromemarichez@ik.me">Email: jeromemarichez@ik.me</a>
			</div>
		</footer>
	)
}