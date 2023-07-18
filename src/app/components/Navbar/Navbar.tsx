import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import mugPic from "./mug2.png";

interface NavbarProps {
	picHeight: number
	picWidth: number
}

export default function Navbar(props: NavbarProps): JSX.Element {

	return (
		<nav className={styles.navbar}>
			<div
				className={styles.mugcoffee}
				aria-label="mug coffee"
				style={{ width: props.picWidth, height: props.picHeight }}
			>
				<Image
					src={mugPic}
					className={styles.mug}
					alt={"mug"}
					height={props.picHeight}
					width={props.picWidth}
					priority={true}
				/>
				<video
					autoPlay={true}
					loop={true}
					
					width={props.picWidth * 1.25}
					height={props.picHeight * 1.25}
					className={styles.coffee}
				>
					<source src={'./coffee.mp4'} type="video/mp4"></source>
				</video>
			</div>
		</nav>
	)
}