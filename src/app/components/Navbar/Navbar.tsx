'use client'
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import { MugCoffee } from '../MugCoffee/MugCoffee';
import Link from 'next/link';
import styles from "./Navbar.module.scss";

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
	console.log(pathname);
	const isItHome = () => {
		if (pathname.length < 2) return true;
		return false;
	}

	const [activePath, setActivePath] = useState<string>("");
	const handleLinkClick = (linkText: string) => {
		setActivePath(linkText);
	};

	return (
		<nav className={styles.navbar}>
			<Link href={isItHome() ? "./about" : './'}>
				<MugCoffee
					scale={8}
					mugAnimationDuration={0.5}
					rotateCoffeeDuration={11}
					titleAfterHover={isItHome() ? "Portfolio" : "Home"}
					titleBeforeHover={activePath && !isItHome() ? activePath : "Hello World"}
				/>
			</Link>
			{props.links &&
				<ul className={styles.menu} role="menu">
					{props.links.map((link) => (
						<li key={link.text} className={styles.list}>
							<Link
								href={link.href}
								onClick={() => handleLinkClick(link.text)}
								style={link.style}
							>
								{link.text}
							</Link>
						</li>
					))}
				</ul>
			}
		</nav>
	);
}
