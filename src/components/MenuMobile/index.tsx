'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import { IconeMenu } from '@/components/IconeMenu'
import { navigation } from '@/contenu/navigation'
import styles from './menu-mobile.module.css'

/**
 * Logo `< JM />` devenu bouton de menu sous 52rem, et panneau qu'il ouvre.
 *
 * C'est une navigation, pas une modale : pas de piege de focus. Le panneau se
 * ferme par Echap (le focus revient au logo), par un clic sur un lien, par un
 * changement de route ou par un nouveau clic sur le logo. Ferme, il porte
 * `hidden` : il n'est ni visible ni focusable.
 *
 * L'etat ouvert est rattache a la route sur laquelle il a ete ouvert : changer
 * de route le referme sans effet de bord.
 */
export function MenuMobile() {
  const chemin = usePathname()
  const idPanneau = useId()
  const bouton = useRef<HTMLButtonElement>(null)
  const [ouvertSur, setOuvertSur] = useState<string | null | undefined>(undefined)
  const ouvert = ouvertSur !== undefined && ouvertSur === chemin

  useEffect(() => {
    if (!ouvert) return

    function surTouche(evenement: KeyboardEvent) {
      if (evenement.key !== 'Escape') return
      setOuvertSur(undefined)
      bouton.current?.focus()
    }

    document.addEventListener('keydown', surTouche)
    return () => document.removeEventListener('keydown', surTouche)
  }, [ouvert])

  return (
    <>
      <button
        ref={bouton}
        type="button"
        className={styles.marque}
        data-ouvert={ouvert || undefined}
        aria-expanded={ouvert}
        aria-controls={idPanneau}
        aria-label="JM, menu"
        onClick={() => setOuvertSur(ouvert ? undefined : chemin)}
      >
        <span className={styles.chevron}>&lt;</span>
        <span className={styles.initiales}>JM</span>
        <span className={`${styles.chevron} ${styles.fermant}`}>/&gt;</span>
        <IconeMenu ouvert={ouvert} />
      </button>

      <nav id={idPanneau} className={styles.panneau} aria-label="Menu mobile" hidden={!ouvert}>
        <ul className={styles.liste}>
          {navigation.map((entree) => {
            const actif = chemin === entree.href

            return (
              <li key={entree.href}>
                <Link
                  href={entree.href}
                  className={styles.lien}
                  data-actif={actif || undefined}
                  aria-current={actif ? 'page' : undefined}
                  onClick={() => setOuvertSur(undefined)}
                >
                  <span>{entree.libelle}</span>
                  <span className={styles.fichier} aria-hidden="true">
                    {entree.onglet}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
