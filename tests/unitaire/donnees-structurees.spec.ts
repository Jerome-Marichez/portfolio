/**
 * @jest-environment node
 *
 * Intention : verrouiller le JSON-LD de l'accueil (issue #193). Le graphe est un
 * ProfilePage dont l'entite principale est un Person ; chaque valeur doit venir de
 * `src/contenu/` (nom, email, telephone, reseaux), jamais d'une copie. La
 * serialisation destinee a une balise <script> ne doit jamais pouvoir la refermer.
 * Cas limites : telephone converti au format international, URL de reseaux
 * rendues absolues, `<` echappe. Niveau : unitaire. Pas de jeu de donnees dedie,
 * le contenu reel fait foi.
 * Test ecrit par l'assistant sur delegation de Jerome MARICHEZ en session,
 * 2026-10-04 (issue #193).
 */
import { contact } from '@/contenu/contact'
import { profil } from '@/contenu/profil'
import { construireProfilePage, serialiserJsonLd } from '@/seo/donnees-structurees'

const donnees = construireProfilePage()
const personne = donnees.mainEntity

describe('donnees structurees, ProfilePage', () => {
  it('declare le contexte schema.org et le type ProfilePage', () => {
    expect(donnees['@context']).toBe('https://schema.org')
    expect(donnees['@type']).toBe('ProfilePage')
    expect(personne['@type']).toBe('Person')
  })

  it('lit le nom et l intitule depuis le profil', () => {
    expect(personne.name).toBe(profil.nom)
    expect(personne.jobTitle).toContain('Ingénieur Full Stack')
  })

  it('situe la personne a Lille, Hauts-de-France', () => {
    expect(personne.address).toEqual({
      '@type': 'PostalAddress',
      addressLocality: 'Lille',
      addressRegion: 'Hauts-de-France',
      addressCountry: 'FR',
    })
  })

  it('reprend l email et le telephone de contact.ts', () => {
    expect(personne.email).toBe(contact.email)
    const chiffres = contact.telephone.replace(/\s/g, '').replace(/^0/, '')
    expect(personne.telephone).toBe(`+33${chiffres}`)
  })

  it('liste les reseaux de contact.ts dans sameAs', () => {
    expect(personne.sameAs).toContain(`https://${contact.github}`)
    expect(personne.sameAs).toContain(encodeURI(`https://${contact.linkedin}`))
  })

  it('ne revendique aucune technologie interdite', () => {
    const interdits =
      /graphql|nestjs|prisma|langchain|llamaindex|kubernetes|cucumber|gherkin|pytorch/i
    expect(personne.knowsAbout.join(' ')).not.toMatch(interdits)
    expect(personne.knowsAbout.length).toBeGreaterThan(0)
  })
})

describe('serialiserJsonLd', () => {
  it('ne contient jamais de fermeture de balise script', () => {
    const sortie = serialiserJsonLd({ nom: '</script><script>alert(1)</script>' })
    expect(sortie).not.toContain('</script')
    expect(sortie).not.toContain('<')
  })

  it('reste du JSON valide et fidele apres echappement', () => {
    const sortie = serialiserJsonLd(donnees)
    expect(JSON.parse(sortie)).toEqual(JSON.parse(JSON.stringify(donnees)))
  })
})
