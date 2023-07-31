import { Button } from "./components";
import Link from "next/link";
import { linksData } from "./data/routes";
import { TypingTitle } from "./components";
import styles from "./page.module.scss"; 
/**
 * @returns The home page 
 */
export default function Home() {

  const title: string = `< i'm marichez jérôme, web developer >`;

  return (

    <main className={styles.home}>
      <h1 style={{ display: "none" }}>{title}</h1>
      <TypingTitle aria-label={"heading"} title={title} speed={3.5} />
      <div className={styles.home}><Link href={linksData[1].href}><Button height={52} width={220} text={"portfolio"} /></Link> </div>
    </main>
  
  )
}
