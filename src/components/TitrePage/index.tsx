import styles from './titre-page.module.css'

interface ITitrePageProps {
  readonly children: React.ReactNode
}

/**
 * Le titre de page, le `h1` unique des six pages intérieures.
 *
 * Un seul style et un seul rythme vertical : le titre ne porte aucune marge
 * haute (c'est la section qui porte le `padding-block`), et un écart fixe le
 * sépare de ce qui suit. Un `TitreSection` rend un `h2` : une page sans `h1`
 * est cassée pour un lecteur d'écran comme pour un moteur.
 */
export function TitrePage({ children }: ITitrePageProps) {
  return <h1 className={styles.titre}>{children}</h1>
}
