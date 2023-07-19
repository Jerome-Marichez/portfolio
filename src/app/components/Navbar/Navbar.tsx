'use client'
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import { MugCoffee } from '../MugCoffee/MugCoffee';
import Link from 'next/link';
import styles from "./Navbar.module.scss";
import { motion } from 'framer-motion';

interface NavbarProps {
	links: {
		text: string;
		href: string;
		style?: React.CSSProperties;
	}[];
}

/**
 * Represents a navigation bar component that displays a list of links.
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
 * return <Navbar links={linksData} />;
 *
 * @returns {JSX.Element} - A JSX Element representing the Navbar component.
 */
export function Navbar(props: NavbarProps): JSX.Element {

	const pathname = usePathname()
	const [activePath, setActivePath] = useState<string>("");

	const handleLinkClick = (linkText: string) => {
		setActivePath(linkText);
	};

	const isItHome = (): true | false => {
		if (pathname.length < 2) return true;
		return false;
	}

	const findRotationCup = (topDegree: number) => {
		const findIndexActive = props.links.findIndex((e) => e.text === activePath)
		let rotationCupDegree = topDegree;
		if (findIndexActive >= 0) {
			rotationCupDegree += findIndexActive * 15;
		}
		return rotationCupDegree;
	}

	return (
		<nav className={isItHome() ? styles['navbar--center'] : styles['navbar--left']}>
			<Link href={isItHome() ? props.links[0].href : './'}>
				<MugCoffee
					scale={8}
					mugAnimationDuration={0.5}
					rotateCoffeeDuration={11}
					rotationCupDegree={activePath && !isItHome() ? findRotationCup(-60) : -35}
					titleAfterHover={isItHome() ? "Portfolio" : "Home"}
					titleBeforeHover={activePath && !isItHome() ? activePath : "Hello World"}
				/>
			</Link>
			{!isItHome() &&
				<ul className={styles.menu} role="menu">
					{props.links.map((link, index) => (
						<li key={link.text} className={styles.list}>
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
