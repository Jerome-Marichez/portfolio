import styles from "./Button.module.scss";

interface ButtonProps {
	height: number;
	width: number;
	text: string;
}

/**
 * 
 * @param props 
 * @returns A button component 
 */
export function Button(props: ButtonProps): JSX.Element {

	return (
		<button
			className={styles.button}
			style={{ height: props.height, width: props.width }}
		>
			{props.text}
		</button>
	)

}