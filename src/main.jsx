import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //Cette librairie permet de brancher React au dom et il 
//va utiliser la méthode createRoot et cette méthode va prendre un premier parametre 
// document.getElementById('root') pour préciser a quel element HTML on va brancher notre noeud React
//Ici c'est un element qui a l'Id root qu'on retrouve dans notre index.html
//Une fois qu'on a cette racine on va pouvoir utiliser la fonction render
//Cette fonction prend en parametre des noeuds reacts un peu comme le retour de nos fonctions et au milieu de tout ça 
//il nous rend notre application avec <App />
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* StrictMode : Cela sert au développement. Elle permet de nous afficher des erreurs en cas de problème. On l'aura 
    toujoutrs dans la phase de développement */}
    <App />
    {/* Avec <App /> on se rend compte que notre propre application n'est ni plus ni moins qu'un composant aussi. En gros 
    on peut chosir de brancher c-a-d remplacer <App /> par <Title /> 
    qui est le composant que nous avions créer dans App.Jsx */}
  </StrictMode>,
)
