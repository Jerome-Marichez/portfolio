'use client'
import { useState } from 'react';
import { MugCoffee } from '../MugCoffee/MugCoffee';
import Link from 'next/link';
import styles from "./Navbar.module.scss";
import { motion } from 'framer-motion';
import { LinksData } from '@/app/data/routes';


interface NavbarProps {
	links: LinksData;
	home: boolean;
}

/**
 * Represents a navigation bar component that displays a list of links.
 * @param home - A boolean true if it's home false if is not home
 * @param links - An array containing links represented as objects with the following properties:
 *
 * - text: The text to be displayed as the link's label.
 * - href: The link's destination URL.
 * - style: (optional) An object representing inline CSS styles for the link.
 * @example
 * // Usage example:
 * const linksData = [
 *   { text: 'about me', href: '/about' },
 *   { text: 'projects', href: '#', style: { paddingLeft: '25px' } },
 * ];
 * return <Navbar links={linksData} home={true} />;
 *
 * @returns {JSX.Element} - A JSX Element representing the Navbar component.
 */
export function Navbar(props: NavbarProps): JSX.Element {

	const { home, links } = props;
	const [activePath, setActivePath] = useState<string>("");

	const handleLinkClick = (linkText: string) => {
		setActivePath(linkText);
	};

	const findRotationCup = (topDegree: number) => {
		const findIndexActive = links.findIndex((e) => e.text === activePath)
		let rotationCupDegree = topDegree;
		if (findIndexActive >= 0) {
			rotationCupDegree += findIndexActive * 15;
		}
		return rotationCupDegree;
	}

	return (
		<nav className={home ? styles['navbar--center'] : styles['navbar--left']}>
			<Link href={home ? links[0].href : links[links.length - 1].href}>
				<MugCoffee
					scale={8}
					mugAnimationDuration={0.5}
					rotateCoffeeDuration={11}
					rotationCupDegree={activePath && !home ? findRotationCup(-60) : -35}
					titleAfterHover={home ? "Portfolio" : "Home"}
					titleBeforeHover={activePath && !home ? activePath : "Hello World"}
				/>
			</Link>
			{!home &&
				<ul className={styles.menu} role="tablist" aria-orientation="vertical">
					{links.map((link, index) => (
						<li key={link.text} className={styles.list} role="tab">
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 * index + 1 }}
							>
								<Link
									href={link.href}
									onClick={() => handleLinkClick(link.text)}
									style={link.style}
								>
									{link.text}
								</Link>
							</motion.div>
						</li>
					))}
				</ul>
			}
		</nav>
	);

}
