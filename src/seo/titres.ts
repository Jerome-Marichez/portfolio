import { profil } from '@/contenu/profil'

/**
 * Le titre de l'accueil dans les resultats de recherche. Distinct de `profil.titre`,
 * qui reste l'intitule LinkedIn affiche a l'ecran : ici on ajoute le lieu, parce
 * qu'une recherche locale (« ingenieur fullstack Lille ») le demande.
 * Les quatre axes restent a egalite, sans ordre ni hierarchie.
 */
export const titreAccueilSeo = `${profil.nom}, Ingénieur Full Stack à Lille | IA, QA, Data-Driven`
