'use client';
import { Button, TypingTitle } from "./components";
import Link from "next/link";
import { linksData } from "./data/routes";
import styles from "./page.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HomeClient() {

	const title: string = `< Jérôme Marichez, Ingénieur Logiciel />`;
	const [load, setLoad] = useState<boolean>(false);

	useEffect(() => setLoad(true), [])

	return (
		<main className={styles.home}>
			<h1 style={{ display: "none" }}>{title}</h1>
			<TypingTitle aria-label={"heading"} title={title} speed={3.5} />

			{load &&
				<motion.p
					className={styles.tagline}
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.6 }}
				>
					9 ans d&apos;expérience · Lille
				</motion.p>
			}

			{load &&
				<motion.div
					className={styles.actions}
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.4, duration: 0.6 }}
				>
					<Link href={linksData[0].href}><Button height={52} width={220} text={"Voir le portfolio"} /></Link>
					<Link href={"/cv-jerome-marichez.pdf"} target="_blank" rel="noopener noreferrer">
						<Button height={52} width={220} text={"Télécharger le CV"} />
					</Link>
				</motion.div>
			}
		</main>

	)
}
