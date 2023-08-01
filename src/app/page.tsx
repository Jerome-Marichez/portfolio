'use client';
import { Button, TypingTitle } from "./components";
import Link from "next/link";
import { linksData } from "./data/routes";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";

/**
 * @returns The home page 
 */
export default function Home() {

  const title: string = `< i'm marichez jérôme, web developer >`;
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    setLoad(true);
  }, [])

  return (

    <main className={styles.home}>
      <h1 style={{ display: "none" }}>{title}</h1>
      <TypingTitle aria-label={"heading"} title={title} speed={3.5} />
      {load && <Link href={linksData[1].href}><Button height={52} width={220} text={"portfolio"} /></Link>}
    </main>

  )
}
