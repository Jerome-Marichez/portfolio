import styles from './SkillItem.module.scss';
import Image from 'next/image';

interface SkillItemProps {
	height: number;
	width: number;
	type: 'codeigniter' | 'css' | 'github' | 'html5' | 'javascript' | 'jest' | 'mongodb' | 'mysql' | 'nextjs' | 'php' | 'postgresql' | 'react' | 'sass' | 'typescript' | 'wordpress';
}

/**
 * @param height - height of the skill item
 * @param width - width of the skill item
 * @param type - type of the skill item
 * @returns A skill item with the given height and width and his logo
 */
export function SkillItem(props: SkillItemProps): JSX.Element {

	return (
		<div className={styles.skillitem} style={{ height: props.height, width: props.width }}>
			<Image alt={props.type} src={`/skills/${props.type}.png`} height="64" width="64" />
		</div>
	);

}