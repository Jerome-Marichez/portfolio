import { AxeListe } from '@/components/AxeListe'
import { BarreActions } from '@/components/BarreActions'
import { Bouton } from '@/components/Bouton'
import { Mug } from '@/components/Mug'
import { TitreMachine } from '@/components/TitreMachine'
import { TitreSection } from '@/components/TitreSection'
import { accroches } from '@/contenu/accroches'
import { axes } from '@/contenu/axes'
import { profil } from '@/contenu/profil'
import styles from './accueil-view.module.css'

/**
 * L'accueil. Il a trente secondes pour empecher une elimination, puis il doit
 * donner envie de descendre.
 *
 * Le premier ecran ne contient donc rien d'ornemental : le nom, ce que je fais,
 * ou, depuis combien de temps, et les deux actions qu'un recruteur veut. Le mug
 * est la seule chose vivante, et c'est voulu : il situe la scene sans rien dire.
 */
export function AccueilView() {
  return (
    <>
      <section className={`cadre ${styles.hero}`}>
        <div className={styles.identite}>
          <TitreMachine texte="< Jérôme Marichez />" />

          {/* Meme calcul que le titre : l'intitule est en chasse fixe, donc sa
              largeur se deduit de sa longueur. Sans cela il se cassait apres
              « QA | », ce qui coupait la liste des axes au mauvais endroit. */}
          <p
            className={styles.metier}
            style={{ '--caracteres': [...profil.titre].length } as React.CSSProperties}
          >
            {profil.titre}
          </p>
        </div>

        <div className={styles.suite}>
          <p className={styles.reperes}>
            <span>{profil.anneesExperience} ans d&apos;expérience</span>
            <span className={styles.separateur} aria-hidden="true">
              ·
            </span>
            <span>{profil.localisation}</span>
          </p>

          <BarreActions variante="tete" />
        </div>

        <div className={styles.tasse}>
          <Mug />
        </div>
      </section>

      <section className={`cadre ${styles.bloc}`}>
        <TitreSection id="methode">{accroches.methode}</TitreSection>
        {profil.differenciationIaAugmentee.map((texte) => (
          <p className={styles.paragraphe} key={texte}>
            {texte}
          </p>
        ))}
      </section>

      <section className={`cadre ${styles.bloc}`}>
        <TitreSection id="axes">{accroches.axes}</TitreSection>
        {accroches.axesChapo.map((texte) => (
          <p className={styles.paragraphe} key={texte}>
            {texte}
          </p>
        ))}
        <div className={styles.axes}>
          <AxeListe axes={axes} />
        </div>
      </section>

      <section className={`cadre ${styles.bloc}`}>
        <TitreSection>{accroches.suite}</TitreSection>
        <div className={styles.actions}>
          <Bouton href="/projets/" ton="primaire">
            Les projets en détail
          </Bouton>
          <Bouton href="/parcours/">Voir le parcours</Bouton>
          <Bouton href="/competences/">Les compétences</Bouton>
          <Bouton href="/contact/">Me joindre</Bouton>
        </div>
      </section>
    </>
  )
}
