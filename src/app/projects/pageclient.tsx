'use client'
import styles from "./page.module.scss";
import { motion } from 'framer-motion';
import { Card } from "../components";

export function ProjectsClient(): JSX.Element {

	return (
		<motion.div className={styles.projects} initial={{ translateX: 1000 }} animate={{ translateX: 0 }} transition={{ duration: 0.5 }}>
			<div className={styles.grid}>
				<Card
					image="https://user-images.githubusercontent.com/62617561/253905231-651cb6b7-f5fd-4d03-a171-5a0182463962.jpg"
					title="Boule Infernal"
					tag={['React', 'Typescript', 'Html', 'Scss']}
				/>

				<Card
					image="https://user-images.githubusercontent.com/62617561/253905231-651cb6b7-f5fd-4d03-a171-5a0182463962.jpg"
					title="Boule Infernal"
					tag={['React', 'Typescript', 'Html', 'Scss']}
				/>
				<Card
					image="https://user-images.githubusercontent.com/62617561/253905231-651cb6b7-f5fd-4d03-a171-5a0182463962.jpg"
					title="Boule Infernal"
					tag={['React', 'Typescript', 'Html', 'Scss']}
				/>
				<Card
					image="https://user-images.githubusercontent.com/62617561/253905231-651cb6b7-f5fd-4d03-a171-5a0182463962.jpg"
					title="Boule Infernal"
					tag={['React', 'Typescript', 'Html', 'Scss']}
				/>
				<Card
					image="https://user-images.githubusercontent.com/62617561/253905231-651cb6b7-f5fd-4d03-a171-5a0182463962.jpg"
					title="Boule Infernal"
					tag={['React', 'Typescript', 'Html', 'Scss']}
				/>
				<Card
					image="https://user-images.githubusercontent.com/62617561/253905231-651cb6b7-f5fd-4d03-a171-5a0182463962.jpg"
					title="Boule Infernal"
					tag={['React', 'Typescript', 'Html', 'Scss']}
				/>
				<Card
					image="https://user-images.githubusercontent.com/62617561/253905231-651cb6b7-f5fd-4d03-a171-5a0182463962.jpg"
					title="Boule Infernal"
					tag={['React', 'Typescript', 'Html', 'Scss']}
				/>
				<Card
					image="https://user-images.githubusercontent.com/62617561/253905231-651cb6b7-f5fd-4d03-a171-5a0182463962.jpg"
					title="Boule Infernal"
					tag={['React', 'Typescript', 'Html', 'Scss']}
				/>
				<Card
					image="https://user-images.githubusercontent.com/62617561/253905231-651cb6b7-f5fd-4d03-a171-5a0182463962.jpg"
					title="Boule Infernal"
					tag={['React', 'Typescript', 'Html', 'Scss']}
				/>
			</div>

		</motion.div>
	)

}