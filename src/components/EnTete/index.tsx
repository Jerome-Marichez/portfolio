'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuMobile } from '@/components/MenuMobile'
import { navigation } from '@/contenu/navigation'
import styles from './en-tete.module.css'

/**
 * L'en-tete est une barre d'onglets d'editeur, pas un menu de site.
 *
 * C'est la consequence directe du monde retenu : sur un poste de travail, on ne
 * navigue pas dans un menu, on change de fichier ouvert. Chaque route porte donc
 * un nom de fichier, et l'onglet actif est marque comme dans un editeur, par un
 * filet en haut et un fond releve.
 *
 * Sous 52rem la barre ne tient plus (sept onglets, environ 680 px) : le logo
 * `< JM />` devient un bouton qui ouvre un panneau de liens (`MenuMobile`). Au
 * dessus, le logo reste un lien vers l'accueil et la barre est inchangee.
 * Arbitrage de Jerome MARICHEZ, 2026-10-04, issue #191.
 */
export function EnTete() {
  const chemin = usePathname()

  return (
    <header className={styles.entete}>
      <div className={styles.barre}>
        <Link href="/" className={styles.marque} aria-label="JM, Jérôme Marichez, accueil">
          <span className={styles.chevron}>&lt;</span>
          <span className={styles.initiales}>JM</span>
          <span className={styles.chevron}>/&gt;</span>
        </Link>

        <nav className={styles.navigation} aria-label="Navigation principale">
          <ul className={styles.onglets}>
            {navigation.map((entree) => {
              const actif = chemin === entree.href

              return (
                <li key={entree.href}>
                  <Link
                    href={entree.href}
                    className={styles.onglet}
                    data-actif={actif || undefined}
                    aria-current={actif ? 'page' : undefined}
                  >
                    <span className={styles.libelle}>{entree.libelle}</span>
                    <span className={styles.fichier} aria-hidden="true">
                      {entree.onglet}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Apres la barre d'onglets dans le DOM : le panneau mobile, masque en
            desktop, ne doit pas preceder les liens visibles. Visuellement rien ne
            change, un seul des deux est affiche a chaque point de rupture. */}
        <MenuMobile />
      </div>
    </header>
  )
}
