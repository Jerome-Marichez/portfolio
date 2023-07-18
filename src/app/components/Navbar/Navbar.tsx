import { MugCoffee } from "../MugCoffee/MugCoffee";
import Link from "next/link";
import styles from "./Navbar.module.scss";

export function Navbar(): JSX.Element {
	return (
		<nav className={styles.navbar}>
			<MugCoffee
				scale={10}
				mugAnimationDuration={0.5}
				rotateCoffeeDuration={11}
				titleAfterHover="Home"
				titleBeforeHover="Hello World"
			/>
		</nav>
	)
}