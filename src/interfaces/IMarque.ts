/**
 * Une marque tierce citée dans un projet (l'entreprise ou l'un de ses produits) :
 * son nom, l'URL de son site vérifiée en HTTP 200, et son logo servi depuis
 * `public/marques/` avec ses dimensions intrinsèques (voir
 * `public/marques/LISEZMOI.md` pour la provenance de chaque fichier).
 */
export interface IMarque {
  nom: string
  url: string
  /**
   * Libellé accessible du lien quand la cible n'est pas le site de la marque
   * (une fiche d'application, par exemple). Absent : « Voir le site de <nom> ».
   */
  libelleLien?: string
  logo: {
    fichier: string
    largeur: number
    hauteur: number
  }
}
