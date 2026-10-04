import { Annotation } from '@/components/Annotation'
import { CertificationListe } from '@/components/CertificationListe'
import { FormationListe } from '@/components/FormationListe'
import { TitreSection } from '@/components/TitreSection'
import { accroches } from '@/contenu/accroches'
import { certifications } from '@/contenu/certifications'
import { formation } from '@/contenu/formation'
import { profil } from '@/contenu/profil'
import styles from './a-propos-view.module.css'

/**
 * À propos, en lecture : le paragraphe de profil, la méthode qui distingue la
 * pratique, la formation puis les certifications. Page de lecture, donc rien
 * n'y est animé.
 */
export function AProposView() {
  return (
    <section className="cadre">
      <h1 className={styles.titre}>À propos</h1>

      <div className={styles.note}>
        <Annotation>{accroches.heroAnnotation}</Annotation>
      </div>

      {profil.paragraphes.map((texte) => (
        <p className={styles.paragraphe} key={texte}>
          {texte}
        </p>
      ))}

      <TitreSection>{accroches.methode}</TitreSection>
      {profil.differenciationIaAugmentee.map((texte) => (
        <p className={styles.paragraphe} key={texte}>
          {texte}
        </p>
      ))}

      <TitreSection>{accroches.formation}</TitreSection>
      <FormationListe formations={formation} />

      <TitreSection>{accroches.certifications}</TitreSection>
      <CertificationListe certifications={certifications} />
    </section>
  )
}
