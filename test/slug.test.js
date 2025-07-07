/* Snack2
Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug restituisce una stringa in lowercase."
*/
const { createSlug } = require("../snackFunction")

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
  expect(createSlug("Prodotto numero uno")).toBe("prodotto-numero-uno")
  expect(createSlug("Titolo articolo blog")).toBe("titolo-articolo-blog")
  expect(createSlug("Questo e un test")).toBe("questo-e-un-test")
})


/* Snack 6
Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."
*/

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
  expect(() => {
    createSlug('')
  }).toThrow()
})