/*  Snack7
Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.

Creare un test che verifichi le seguenti descrizioni:

👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"


Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

 */

const posts = [
  { id: 1, title: "Introduzione a JavaScript", slug: "introduzione-javascript" },
  { id: 2, title: "Come usare React", slug: "come-usare-react" },
  { id: 3, title: "Node.js per principianti", slug: "nodejs-per-principianti" },
  { id: 4, title: "CSS moderno", slug: "css-moderno" }
];

const { findPostById } = require('../snackFunction')

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
  expect(findPostById(posts, 1)).toEqual({ id: 1, title: "Introduzione a JavaScript", slug: "introduzione-javascript" })
  expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Come usare React", slug: "come-usare-react" })
})

