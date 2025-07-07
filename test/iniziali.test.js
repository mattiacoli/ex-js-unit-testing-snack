/* Snack1
  Creare un test che verifichi la seguente descrizione:

👉 "La funzione getInitials restituisce le iniziali di un nome completo."

*/

const { getInitial } = require("../snackFunction")

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitial("Mattia Coli")).toBe("MC")
  expect(getInitial("Gigi Buffon")).toBe("GB")
})

