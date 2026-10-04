import styles from './titre-machine.module.css'

interface ITitreMachineProps {
  readonly texte: string
  /** Duree totale de la frappe, en secondes. */
  readonly duree?: number
}

/**
 * Le titre qui s'ecrit, en composant serveur.
 *
 * Le portfolio d'origine construisait la chaine caractere par caractere dans un
 * `useState` : le titre n'existait donc ni pour un robot d'indexation, ni pour
 * un lecteur d'ecran, ni avant l'hydratation. Ici le `h1` est rendu entier cote
 * serveur, et seule sa **revelation** est animee, en CSS, avec un retard par
 * caractere. Rien a hydrater, et le referencement voit le titre complet.
 *
 * Le titre est expose d'un bloc a la synthese vocale ; les caracteres decoupes
 * sont masques, sinon ils seraient annonces un par un.
 *
 * **Le titre tient sur une seule ligne par construction**, et non par un reglage
 * empirique. Il portait un `clamp()` en `vw` sans rapport avec sa longueur, donc
 * il se cassait sur deux lignes sur un MacBook. Fira Code etant a chasse fixe, un
 * caractere vaut 0,6em : une chaine de N caracteres occupe donc N x 0,6em, et sa
 * taille se deduit de la largeur disponible. Le composant expose N au CSS, qui
 * fait le calcul. Changer le titre ne recasse plus la mise en page.
 */
export function TitreMachine({ texte, duree = 1.6 }: ITitreMachineProps) {
  const total = [...texte].length
  const pas = duree / total
  // Un retour a la ligne n'est permis qu'entre les mots (espacement WCAG 1.4.12) :
  // on regroupe les caracteres par mot, l'indice global reste celui du retard.
  let rang = 0
  const mots = texte.split(' ').map((mot, position, tous) => {
    const cellules = [...mot].concat(position < tous.length - 1 ? [' '] : [])
    const debut = rang
    rang += cellules.length
    return { debut, cellules }
  })

  return (
    <h1 className={styles.titre} style={{ '--caracteres': total } as React.CSSProperties}>
      <span className="hors-ecran">{texte}</span>

      <span aria-hidden="true" className={styles.frappe}>
        {mots.map(({ debut, cellules }, position) => (
          // Le titre est une chaine figee jamais reordonnee : le rang du premier
          // caractere identifie le mot.
          <span key={debut} className={styles.mot}>
            {cellules.map((caractere, decalage) => (
              <span
                // biome-ignore lint/suspicious/noArrayIndexKey: chaine figee jamais reordonnee, la position est l'identite.
                key={`${caractere}-${decalage}`}
                className={styles.cellule}
                style={{ animationDelay: `${((debut + decalage) * pas).toFixed(3)}s` }}
              >
                {caractere === ' ' ? '\u00A0' : caractere}
              </span>
            ))}
            {/* Le curseur suit le dernier mot dans le même bloc insécable : seul, il
                passerait à la ligne et resterait orphelin. */}
            {position === mots.length - 1 && (
              <span className={styles.curseur} style={{ animationDelay: `${duree.toFixed(3)}s` }} />
            )}
          </span>
        ))}
      </span>
    </h1>
  )
}
