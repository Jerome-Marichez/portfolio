
import styles from "./Button.module.scss";

interface ButtonProps {
	height?: number;
	width?: number;
	text: string;
}

/**
 * @param height A optional height for the button 
 * @param width A optional width for the button 
 * @param text The text to display on the button 
 * @returns A styled button component which display a text
 */
export function Button(props: ButtonProps): JSX.Element {
	
	const { height, width, text } = props;

	return (
		<button
			className={styles.button}
			style={height && width ? { height: height, width: width } : {}}
		>
			{text}
		</button>
	)

}