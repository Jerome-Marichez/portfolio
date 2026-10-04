import { BarreActions } from '@/components/BarreActions'
import { ProjetFiche } from '@/components/ProjetFiche'
import { TitrePage } from '@/components/TitrePage'
import { projets } from '@/contenu/projets'
import styles from './projets-view.module.css'

/**
 * La page Projets : une dizaine de fiches Contexte / Enjeu / Mon role /
 * Resultat, ce que le recruteur lit en detail apres l'accueil.
 *
 * Aucune grille de cartes de meme taille : les fiches se suivent en liste,
 * separees par un filet, chacune portant son propre poids de lecture plutot
 * que d'etre reduite a une vignette parmi d'autres.
 */
export function ProjetsView() {
  return (
    <>
      <section className={`cadre ${styles.bloc}`}>
        <TitrePage>Les projets en détail</TitrePage>
        <BarreActions variante="tete" />
        <div className={styles.liste}>
          {projets.map((projet) => (
            <ProjetFiche key={projet.titre} projet={projet} />
          ))}
        </div>
      </section>
      <BarreActions variante="fin" />
    </>
  )
}
