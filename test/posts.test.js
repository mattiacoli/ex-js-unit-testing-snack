/*  Snack7
Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.

Creare un test che verifichi le seguenti descrizioni:

👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"


Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

 */
const { findPostById, addPost, removePost } = require('../snackFunction')

let posts;

beforeEach(() => {
  posts = [
    { id: 1, title: "Introduzione a JavaScript", slug: "introduzione-javascript" },
    { id: 2, title: "Come usare React", slug: "come-usare-react" },
    { id: 3, title: "Node.js per principianti", slug: "nodejs-per-principianti" },
    { id: 4, title: "CSS moderno", slug: "css-moderno" }
  ];
})

describe("Manipolazione di array di oggetti", () => {
  test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 1)).toEqual({ id: 1, title: "Introduzione a JavaScript", slug: "introduzione-javascript" })
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Come usare React", slug: "come-usare-react" })
  })

})

/*  Snack 8
  Creare due test che verifichino le seguenti descrizioni:

  👉 "Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più."

  👉 "Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno."

 */


describe('Controllo lunghezza array', () => {

  test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
    addPost(posts, { id: 5, title: "Jest Unit Test", slug: "jest-unit-test" })
    expect(posts).toHaveLength(5)
  })
  test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
    removePost(posts, { id: 4, title: "CSS moderno", slug: "css-moderno" })
    expect(posts).toHaveLength(3)
  })
})

/* Snack 9
 Creare un test che verifichi la seguente descrizione:

👉 "Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore."

📌 Nota:

    Gli errori devono essere chiari e distinti, es. "Slug già esistente" e “Id già esistente”.
 */

test("Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.", () => {
  expect(() => {
    addPost(posts, { id: 1, title: "Jest Unit Test", slug: "jest-unit-test" })
  }).toThrow('Id già esistente')

  expect(() => {
    addPost(posts, { id: 5, title: "Css moderno", slug: "css-moderno" })
  }).toThrow('Slug già esistente')

})


