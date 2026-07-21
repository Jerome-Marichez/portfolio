'use client';
import { MotionDivGroup } from "../components";

export function AboutClient() {
	return (
		<MotionDivGroup>
			<h1>À propos</h1>
			<h2>Ingénieur Logiciel · 9 ans d&apos;expérience</h2>
			<div className={"text"}>
				<p>De la startup SaaS à la maison de joaillerie de luxe, je conçois et optimise des systèmes web et mobiles complets, du cadrage à la mise en production.</p>
				<p>Lead Tech, architecture, qualité logiciel, données et IA : je pilote le cycle de vie complet d&apos;un projet et j&apos;accompagne les équipes techniques comme métier.</p>
				<p>Grâce à une compréhension approfondie des besoins, et fort d&apos;un diplôme Bac +5 (Expert IT &amp; SI), je propose des solutions fiables, performantes et parfaitement adaptées.</p>
				<p>Basé à Lille, ouvert aux défis techniques ambitieux.</p>
			</div>
		</MotionDivGroup>
	)
}