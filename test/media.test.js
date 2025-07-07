/*  Snack4
  Creare un test che verifichi la seguente descrizione:

👉 "La funzione average calcola la media aritmetica di un array di numeri."
*/
const { average } = require('../snackFunction')

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  expect(average([1, 2, 3, 4])).toBe(2.5)
  expect(average([2, 4, 6])).toBe(4)
})