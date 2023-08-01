'use client';
import { CSSProperties, useEffect } from "react";
import { motion } from 'framer-motion';
import './CodeBlock.scss';
import hljs from './highlight.js_11.7.0.min.js';

interface CodeBlockProps {
	text: string;
	margin?: string;
	fontSize: "small" | "medium" | "big";
	language: "typescript" | "javascript" | "java" | "php";
}

/**
* @param text The text to be displayed as a code block
* @param margin Margin as top | right | bottom | left (in pixels)
* @param fontSize Display the text with the requested style
* @param language The format (language to be used) for formatting
* @returns A code block that displays lines of code with color and formatting
**/

export function CodeBlock(props: CodeBlockProps): JSX.Element {

	const marginStyle: CSSProperties = props.margin ? { margin: props.margin } : {};

	useEffect(() => {
		(async () => {
			// @ts-ignore
			await hljs.highlightAll();
		})();
	}, []);

	return (
		<motion.div className={`codeblock--${props.fontSize}`} style={marginStyle}>
			<pre>
				<code className={`language-${props.language}`}>{props.text}</code>
			</pre>
		</motion.div >
	)

}