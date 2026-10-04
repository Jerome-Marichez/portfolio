import type { ReactNode } from 'react'
import styles from './en-savoir-plus.module.css'

interface IEnSavoirPlusProps {
  readonly libelle: string
  readonly children: ReactNode
}

/**
 * Divulgation progressive : un `<details>` natif, ferme par defaut.
 *
 * Le contenu replie reste dans le DOM : il est indexe, trouvable par Ctrl+F,
 * imprime et lisible sans JavaScript. Le `summary` se lit comme une action
 * (cible d'au moins 44 px) et son chevron, dessine en SVG, est decoratif.
 */
export function EnSavoirPlus({ libelle, children }: IEnSavoirPlusProps) {
  return (
    <details className={styles.divulgation}>
      <summary className={styles.resume}>
        <span>{libelle}</span>
        <svg
          className={styles.chevron}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </summary>
      <div className={styles.contenu}>{children}</div>
    </details>
  )
}
