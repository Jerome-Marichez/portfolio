// Import statique d'image sous Jest : le même objet que Next fournit (src, largeur,
// hauteur), sans lire le binaire. Ce n'est pas une doublure de module.
module.exports = { __esModule: true, default: { src: '/image-vide.png', width: 1, height: 1 } }
