
import { motion } from "framer-motion"
import styles from "./Coffee.module.scss";
import coffeePic from "./coffee.jpg";
import Image from "next/image";
import { useState, useEffect } from "react";

interface CoffeeProps {
	durationAnimation: number;
	video: boolean;
	height: number;
	width: number;
}

/**
 * @param durationAnimation duration of animation in seconds.
 * @param width Width of the coffee.
 * @param height Height of the coffee.
 * @param video boolean if the video should be displayed else image is displayed.
 * @returns A coffee video or picture whith a rotation animation.
 */
export function Coffee(props: CoffeeProps): JSX.Element {

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
				style={{ display: props.video ? "none" : "block" }}
				src={coffeePic}
				width={props.width - 25}
				height={props.height - 18}
				alt="Picture of the coffee"
				priority={true}
			/>


			<video autoPlay muted loop
				style={{ display: props.video ? "block" : "none" }}
				width={props.width}
				height={props.height}
				aria-label="Video of coffee"
			>
				<source src={require('./coffee.mp4')} type="video/mp4" />
			</video>
		</motion.div>
	)
	
}

