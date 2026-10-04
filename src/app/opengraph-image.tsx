import { ImageResponse } from 'next/og'
import { contact } from '@/contenu/contact'
import { profil } from '@/contenu/profil'

/**
 * Image de partage generee au build (statique, compatible `output: 'export'`).
 * Fond du site (#232020), meme intitule que l'ecran, lieu en pied.
 */
export const dynamic = 'force-static'
export const alt = `${profil.nom}, ${profil.titre}, ${contact.localisation}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function ImageOpenGraph() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 80,
        background: '#232020',
        color: '#f4efe9',
        fontFamily: 'monospace',
      }}
    >
      <div style={{ fontSize: 84, fontWeight: 700 }}>{`< ${profil.nom} />`}</div>
      <div style={{ fontSize: 40, marginTop: 36 }}>{profil.titre}</div>
      <div style={{ fontSize: 36, marginTop: 56, opacity: 0.75 }}>{contact.localisation}</div>
    </div>,
    size,
  )
}
