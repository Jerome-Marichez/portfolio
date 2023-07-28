'use client'
import type { Metadata } from 'next'
import styles from "./page.module.scss";
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Jérôme Marichez - About',
  description: 'Web Developer',
}

export default function About(): JSX.Element {
  return (
    <motion.div className={styles.about} initial={{ translateX: 1000 }} animate={{ translateX: 0 }} transition={{ duration: 0.5 }}>
      <h2>Developer</h2>
      <h1>Web Developer</h1>
      <div className={styles.text}>
        <p>Web developer specialized in React, RNCP certified graduate with a Bachelor degree (equivalent to bac+4). </p>
        <p>Proficient in various aspects of web development, including mastery of components, virtual rendering, routing, and state management.</p>
        <p>Proficient in creating dynamic and high-performance interfaces, as well as handling their back-end functionalities.</p>
        <p>Passionate about innovation and enhancing user experience.
        </p>
      </div>
    </motion.div>
  )
}
