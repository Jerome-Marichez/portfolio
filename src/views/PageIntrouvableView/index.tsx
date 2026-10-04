import { Bouton } from '@/components/Bouton'
import { TitrePage } from '@/components/TitrePage'
import styles from './page-introuvable-view.module.css'

/**
 * La 404 : un titre, une phrase, une sortie. Le visiteur qui arrive ici a suivi un
 * lien périmé ou fait une faute de frappe, il n'a besoin que d'un chemin vers
 * l'accueil.
 */
export function PageIntrouvableView() {
  return (
    <section className={`cadre ${styles.bloc}`}>
      <TitrePage>Page introuvable</TitrePage>
      <p className={styles.phrase}>Cette adresse ne mène à aucune page du site.</p>
      <Bouton href="/" ton="primaire">
        Retour à l&apos;accueil
      </Bouton>
    </section>
  )
}
