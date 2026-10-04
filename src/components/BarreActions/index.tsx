import { Bouton } from '@/components/Bouton'
import { TitreSection } from '@/components/TitreSection'
import { contact } from '@/contenu/contact'
import { versTel } from '@/utils/lien'
import styles from './barre-actions.module.css'

interface IBarreActionsProps {
  /** `tete` sous le titre de page, `fin` en bas de page avec son titre. */
  readonly variante: 'tete' | 'fin'
}

/**
 * Les trois gestes d'un recruteur : prendre le CV, ecrire, appeler.
 *
 * Elle se pose en tete et en fin de page parce que la moitie des visiteurs ne
 * defile pas et qu'un cinquieme seulement va au bout : l'action doit etre la
 * sans dependre de la position de lecture. Un seul primaire par ecran, le CV.
 */
export function BarreActions({ variante }: IBarreActionsProps) {
  const actions = (
    <div className={variante === 'tete' ? `${styles.rangee} ${styles.tete}` : styles.rangee}>
      <Bouton href="/cv-jerome-marichez.pdf" ton="primaire" telechargement="cv-jerome-marichez.pdf">
        Télécharger le CV (PDF)
      </Bouton>
      <Bouton href={`mailto:${contact.email}`}>M&apos;écrire</Bouton>
      <Bouton href={versTel(contact.telephone)}>{contact.telephone}</Bouton>
    </div>
  )

  if (variante === 'tete') {
    return actions
  }

  return (
    <section className={`cadre ${styles.fin}`}>
      <TitreSection>Me joindre</TitreSection>
      {actions}
    </section>
  )
}
