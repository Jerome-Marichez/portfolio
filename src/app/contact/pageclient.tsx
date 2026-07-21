
'use client';
import { MotionDivGroup } from '../components';

export default function ContactClient(): JSX.Element {

	return (
		<MotionDivGroup>
			<h1>Contact</h1>
			<h2>Mes coordonnées</h2>
			<div className={"text"}>
				<a href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-marichez-31948712b/" target="_blank" rel="noopener noreferrer"><u>Linkedin</u> : @jérôme-marichez-31948712b</a>
				<a href="https://github.com/Jerome-Marichez" target="_blank" rel="noopener noreferrer"><u>Github</u> : @Jerome-Marichez</a>
				<a href="tel:+33771651588"><u>Téléphone</u> : +33 7 71 65 15 88</a>
				<a href="mailto:jeromemarichez@ik.me"><u>Email</u> : jeromemarichez@ik.me</a>
				<a><u>Ville</u> : Lille</a>
				<a href="/cv-jerome-marichez.pdf" target="_blank" rel="noopener noreferrer"><u>CV</u> : télécharger le CV (PDF)</a>
			</div>
		</MotionDivGroup>
	)
}
