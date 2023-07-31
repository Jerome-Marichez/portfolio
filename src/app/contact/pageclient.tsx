
'use client';
import type { Metadata } from 'next';
import styles from './page.module.scss';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
	title: 'Jérôme Marichez - Contact',
	description: 'Web Developer'
}

export default function ContactClient(): JSX.Element {

	return (
		<motion.div className={styles.contact} initial={{ translateX: 1000 }} animate={{ translateX: 0 }} transition={{ duration: 0.5 }}>
			<a href="Link" target="_blank"><u>Linkedin</u>: @jérôme-marichez-31948712b</a>
			<a href="Link" target="_blank"><u>Github:</u> @Jerome-Marichez</a>
			<a href="Link" target="_blank"><u>Tel:</u> +33771651588</a>
			<a href="Link" target="_blank"><u>Email:</u> jeromemarichez@ik.me</a>
		</motion.div>
	)

}
