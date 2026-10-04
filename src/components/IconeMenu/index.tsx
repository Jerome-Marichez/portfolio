import styles from './icone-menu.module.css'

interface IconeMenuProps {
  ouvert: boolean
}

/**
 * Hamburger dessine en SVG : trois traits menu ferme, une croix menu ouvert.
 * Decoratif (`aria-hidden`) : le nom et l'etat sont portes par le bouton parent.
 */
export function IconeMenu({ ouvert }: IconeMenuProps) {
  return (
    <svg
      className={styles.icone}
      data-etat={ouvert ? 'croix' : 'traits'}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <line className={`${styles.trait} ${styles.haut}`} x1="4" y1="7" x2="20" y2="7" />
      <line className={`${styles.trait} ${styles.milieu}`} x1="4" y1="12" x2="20" y2="12" />
      <line className={`${styles.trait} ${styles.bas}`} x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}
