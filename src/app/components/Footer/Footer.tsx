'use client'
import styles from "./Footer.module.scss";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from "react";

/**
 * @returns A component footer 
 */
export function Footer(): JSX.Element {

	const codeBlockText = `return (
		<>
			<CodeBlock text={codeBlockText} fontSize="medium" language="typescript" />
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
		</>
	)`;

	const pathname: string = usePathname()
	const ref = useRef<number>(0);
	useEffect(() => {
		ref.current++;
	}, [pathname])

	return (
		<>
			<motion.div key={ref.current}
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.7, transition: { duration: 3.5 } }}
			>
				<CodeBlock text={codeBlockText} fontSize="small" language="typescript" margin="2% 0 0px 15%" />
			</motion.div>
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
		</>
	)
}