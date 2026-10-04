import { EnSavoirPlus } from '@/components/EnSavoirPlus'
import { TitreSection } from '@/components/TitreSection'
import type { IExperience } from '@/interfaces/IExperience'
import styles from './experience-bloc.module.css'

interface IExperienceBlocProps {
  readonly experience: IExperience
}

const REALISATIONS_VISIBLES = 3

function libelleDuRepli(restantes: number): string {
  if (restantes === 0) return 'En savoir plus'
  if (restantes === 1) return "Voir l'autre réalisation"
  return `Voir les ${restantes} autres réalisations`
}

/**
 * Une expérience professionnelle, lue comme une entrée de journal : période,
 * poste, contexte, trois premières réalisations. Les suivantes, l'encadrement et
 * la stack sont repliés sous un `<details>` (« En savoir plus » quand il n'y a
 * rien d'autre à replier que l'encadrement et la stack).
 *
 * Le statut `independant` se voit à l'écran, en toutes lettres, juste sous le
 * nom de l'entreprise : Truffle Capital était un client d'une mission menée en
 * indépendant, jamais un employeur, et ce fait ne doit pas se déduire d'un
 * détail (CLAUDE.md, table des interdits).
 */
export function ExperienceBloc({ experience }: IExperienceBlocProps) {
  const estIndependant = experience.statut === 'independant'
  const visibles = experience.realisations.slice(0, REALISATIONS_VISIBLES)
  const reste = experience.realisations.slice(REALISATIONS_VISIBLES)
  const libelle = libelleDuRepli(reste.length)

  return (
    <article className={styles.experience}>
      <p className={styles.periode}>{experience.periode}</p>

      <TitreSection niveau={2} compact>
        {experience.entreprise}
      </TitreSection>

      <p className={styles.secteur}>{experience.secteur}</p>

      {estIndependant && (
        <p className={styles.statut}>
          Mission menée en indépendant : {experience.entreprise} était un client, pas un employeur.
        </p>
      )}

      <p className={styles.poste}>{experience.posteIntitule}</p>

      {experience.contexte.map((texte) => (
        <p className={styles.contexte} key={texte}>
          {texte}
        </p>
      ))}

      <ul className={styles.realisations}>
        {visibles.map((realisation) => (
          <li className={styles.realisation} key={realisation}>
            {realisation}
          </li>
        ))}
      </ul>

      <EnSavoirPlus libelle={libelle}>
        {reste.length > 0 && (
          <ul className={styles.realisations}>
            {reste.map((realisation) => (
              <li className={styles.realisation} key={realisation}>
                {realisation}
              </li>
            ))}
          </ul>
        )}

        {experience.encadrement !== null && (
          <p className={styles.encadrement}>
            <span className={styles.etiquette}>Encadrement</span>
            {experience.encadrement}
          </p>
        )}

        <ul className={styles.stack} aria-label={`Stack technique, ${experience.entreprise}`}>
          {experience.stackTechnique.map((techno) => (
            <li className={styles.techno} key={techno}>
              {techno}
            </li>
          ))}
        </ul>
      </EnSavoirPlus>
    </article>
  )
}
