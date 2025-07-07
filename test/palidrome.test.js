/* Snack 5
  Creare un test che verifichi la seguente descrizione:

👉 "La funzione isPalindrome verifica se una stringa è un palindromo."


📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

*/
const { isPalindrome } = require('../snackFunction')

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
  expect(isPalindrome("osso")).toBeTruly
  expect(isPalindrome("casa")).toBeFalsy
})