import styles from './SkillItem.module.scss';
import Image from 'next/image';
import { TypeItem } from '@/app/interfaces';


interface SkillItemProps {
	height: number;
	width: number;
	type: TypeItem;
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
			<Image alt={props.type} src={`/skills/${props.type}.png`} height="42" width="42"  />
		</div>
	);

}