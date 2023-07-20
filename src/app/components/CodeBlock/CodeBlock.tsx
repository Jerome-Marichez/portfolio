
'use client'
import { CSSProperties } from "react";
import Highlight from 'react-highlight'
import { motion } from 'framer-motion';
import './CodeBlock.scss';

interface CodeBlockProps {
	text: string;
	margin?: string;
	fontSize: number;
	language: "typescript" | "javascript" | "java" | "php"
}

/**
* @param text The text to be displayed as a code block
* @param margin Margin as top | right | bottom | left (in pixels)
* @param fontSize Display the text with the requested font size (in pixels)
* @param language The format (language to be used) for formatting
* @returns A code block that displays lines of code with color and formatting
**/

export function CodeBlock(props: CodeBlockProps): JSX.Element {

	const marginStyle: CSSProperties = props.margin ? { margin: props.margin } : {};
	const finalStyle: CSSProperties = { ...marginStyle, fontSize: props.fontSize };

	return (

		<motion.div className={'codeblock'} style={finalStyle}>
			<Highlight language="typescript">
				{props.text}
			</Highlight>
		</motion.div>
	)
}