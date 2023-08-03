'use client';
import styles from "./MugCoffee.module.scss";
import mugPic from "./mug.png";
import Image from "next/image";
import { Shadows_Into_Light } from "next/font/google";
import { motion } from 'framer-motion';
import { useState } from "react";

const shadowsIntoLight = Shadows_Into_Light({ subsets: ["latin"], weight: "400" })


interface MugCoffeeProps {
	scale: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
	mugAnimationDuration: number;
	rotationCupDegree: number;
	rotateCoffeeDuration: number;
	titleBeforeHover?: string;
	titleAfterHover?: string;
}

/**
 * Represent a Mug with coffee inside
 * @param scale The scale of the MugCoffee as an integer.
 * @param mugAnimationDuration A float or an integer duration for all animations except coffee.
 * @param rotateCoffeeDuration A float or integer duration of the coffee rotation animation.
 * @param rotationCupDegree Set the degree rotation of our mug coffee.
 * @param titleBeforeHover A title in the center of our mug before hovering.
 * @param titleAfterHover A title in the center of our mug after hovering.
 * @returns {JSX.Element} - A JSX Element representing the MugCoffee component.
 */

export function MugCoffee(props: MugCoffeeProps): JSX.Element {

	const heightMug: number = Math.floor(32.5 * props.scale);
	const widthMug: number = Math.floor(36.25 * props.scale);
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleHoverEnd = () => {
		setIsHovered(false);
	};

	const stylesTitle: string = `${shadowsIntoLight.className} ${styles.title}`;

	/** animations */
	const mugAnimations = {
		initial: { opacity: 0, scale: 0.5, rotate: 0 },
		animate: { opacity: 1, scale: 1, rotate: `${Math.floor(props.rotationCupDegree).toString()}deg` },
		hover: { opacity: 1, scale: 1.1, rotate: '150deg' },
	};

	const textAnimations = {
		initial: { rotate: 35, opacity: 0 },
		animate: { rotate: isHovered ? 200 : 35, opacity: isHovered ? 0.8 : 0.5 },
	};

	const coffeeAnimation = { animate: { rotate: ['0deg', '360deg'] } }
	/** end animations */



	return (
		<motion.div
			initial={mugAnimations.initial}
			animate={mugAnimations.animate}
			whileHover={mugAnimations.hover}
			transition={{ duration: props.mugAnimationDuration }}
			className={styles.mugcoffee}
			aria-label="mug coffee"
			style={{ width: widthMug, height: heightMug }}
			onMouseEnter={handleHover}
			onMouseLeave={handleHoverEnd}
		>
			<Image
				src={mugPic}
				className={styles.mug}
				alt="Picture of the mug"
				priority={true}
			/>

			<motion.div
				className={styles.wraptext}
				initial={textAnimations.initial}
				animate={textAnimations.animate}
				transition={{
					type: "keyframes",
					duration: props.mugAnimationDuration * 3,
				}}
			>
				{props.titleBeforeHover && props.titleAfterHover ?
					<p style={{ fontSize: `${3.5 * props.scale}px` }}
						className={stylesTitle}>{isHovered ? props.titleAfterHover : props.titleBeforeHover}
					</p> : ""}
			</motion.div>

			<motion.div animate={coffeeAnimation.animate}
				className={styles.coffee}
				transition={{
					type: "keyframes",
					duration: props.rotateCoffeeDuration,
					repeat: Infinity,
				}}
			>
				<video autoPlay muted loop
					width={Math.floor(widthMug * 1.14)}
					height={Math.floor(heightMug * 1.12)}
					aria-label="Video of coffee"
				>
					<source src={require('./coffee.mp4')} type="video/mp4" />
				</video>
			</motion.div>
		</motion.div>
	);

}
