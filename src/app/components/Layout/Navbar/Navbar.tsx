'use client';
import { MugCoffee } from '../../MugCoffee/MugCoffee';
import NavLink from '../../Navlink';
import Link from 'next/link';
import styles from "./Navbar.module.scss";
import { motion } from 'framer-motion';
import type { LinkData, LinksData } from '@/app/interfaces';


interface NavbarProps {
	links: LinksData;
	pathname: string;
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
 * @param pathname - A string representing the current pathname.
 * @example
 * // Usage example:
 * const linksData = [
 *   { text: 'about me', href: '/about' },
 *   { text: 'projects', href: '#', style: { paddingLeft: '25px' } },
 * ];
 * return <Navbar links={linksData} home={true} link={"/home"} />;
 *
 * @returns {JSX.Element} - A JSX Element representing the Navbar component.
 */
export function Navbar(props: NavbarProps): JSX.Element {

	const { home, links, pathname } = props;

	const findRotationCup = (topDegree: number, links: LinksData, pathname: string) => {
		const findIndexActive = links.findIndex((link: LinkData) => link.href === pathname);
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
					scale={5.3}
					mugAnimationDuration={0.5}
					rotateCoffeeDuration={11}
					rotationCupDegree={!home ? findRotationCup(-60, links, pathname) : -35}
					titleAfterHover={home ? "Portfolio" : "Accueil"}
					titleBeforeHover={home ? "Hello World" : links.find((link: LinkData) => link.href === pathname)?.text}
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
								<NavLink href={link.href} marginRight={link.marginRight} marginLeft={link.marginLeft}>
									{link.text}
								</NavLink>
							</motion.div>
						</li>
					))}
				</ul>
			}
		</nav>
	);

}
