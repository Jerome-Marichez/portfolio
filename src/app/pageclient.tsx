'use client';
import { Button, TypingTitle } from "./components";
import { Metadata } from "next";
import Link from "next/link";
import { linksData } from "./data/routes";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
	title: 'Jérôme Marichez - Web Developer - Home',
	description: 'Welcome to my world of web development! Crafting dynamic interfaces and innovative solutions for a captivating user experience',
	openGraph: {
		title: 'Jérôme Marichez - Home',
		description: 'Welcome to my world of web development! Crafting dynamic interfaces and innovative solutions for a captivating user experience',
		type: 'website',
		locale: 'en_US',
		url: 'https://jeromemarichez.fr',
		images: [
			{
				url: 'https://jeromemarichez.fr/preview.jpg',
				alt: 'Preview of website',
			},
		],
	}
}


export default function HomeClient() {

	const title: string = `< i'm marichez jérôme, web developer >`;
	const [load, setLoad] = useState<boolean>(false);

	useEffect(() => {
		setLoad(true);
	}, [])

	return (

		<main className={styles.home}>
			<h1 style={{ display: "none" }}>{title}</h1>
			<TypingTitle aria-label={"heading"} title={title} speed={3.5} />
			{load && <Link href={linksData[1].href}><Button height={52} width={220} text={"portfolio"} /></Link>}
		</main>

	)
}
