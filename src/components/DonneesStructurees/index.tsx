import { construireProfilePage, serialiserJsonLd } from '@/seo/donnees-structurees'

/**
 * Rend le JSON-LD de l'accueil. Compose serveur, aucun JavaScript client.
 * Place sur la page d'accueil et non dans le gabarit racine : un `ProfilePage`
 * decrit une page, pas les six.
 */
export function DonneesStructurees() {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD construit au build depuis src/contenu/, `<` echappe
      dangerouslySetInnerHTML={{ __html: serialiserJsonLd(construireProfilePage()) }}
    />
  )
}
