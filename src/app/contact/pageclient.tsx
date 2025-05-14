
'use client';
import { MotionDivGroup } from '../components';

export default function ContactClient(): JSX.Element {

	return (
		<MotionDivGroup>
			<h1>Contact</h1>
			<h2>Mes coordonnées</h2>
			<div className={"text"}>
				<a href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-marichez-31948712b/" target="_blank"><u>Linkedin</u>: @jérôme-marichez-31948712b</a>
				<a href="https://github.com/Jerome-Marichez" target="_blank"><u>Github:</u> @Jerome-Marichez</a>
				<a href="tel:+33771651588" target="_blank"><u>Téléphone:</u> +33771651588</a>
				<a href="mailto:jeromemarichez@ik.me" target="_blank"><u>Email:</u> jeromemarichez@ik.me</a>
			</div>
		</MotionDivGroup>
	)
}
