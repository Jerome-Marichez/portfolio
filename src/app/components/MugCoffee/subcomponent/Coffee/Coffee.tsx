
import { motion } from "framer-motion"
import styles from "./Coffee.module.scss";
import coffeePic from "./Coffee.jpg";
import Image from "next/image";
import { useState, useEffect } from "react";

interface CoffeeProps {
	durationAnimation: number;
	height: number;
	width: number;
}

/**
 * @param durationAnimation duration of animation in seconds.
 * @param width Width of the coffee.
 * @param height Height of the coffee.
 * @returns A coffee video or picture whith a rotation animation.
 */
export function Coffee(props: CoffeeProps): JSX.Element {

	const [isSmallScreen, setSmallScreen] = useState<boolean>(false);

	const resize = () => {
		if (window.innerWidth < 1200) {
			setSmallScreen(true);
		} else {
			setSmallScreen(false);
		}
	}
	useEffect(() => {
		resize();
		window.addEventListener("resize", resize, false);

		return () => { window.removeEventListener("resize", resize, false); };
	}, [])



	return (
		<motion.div animate={{ rotate: ['0deg', '360deg'] }}
			className={styles.coffee}
			transition={{
				type: "keyframes",
				duration: props.durationAnimation,
				repeat: Infinity,
			}}
		>

			<Image
				style={{ display: isSmallScreen ? "none" : "block" }}
				src={coffeePic}
				width={props.width - 25}
				height={props.height - 18}
				alt="Picture of the coffee"
				priority={true}
			/>


			<video autoPlay muted loop
				style={{ display: isSmallScreen ? "block" : "none" }}
				width={props.width}
				height={props.height}
				aria-label="Video of coffee"
			>
				<source src={require('./coffee.mp4')} type="video/mp4" />
			</video>

		</motion.div>

	)
}

