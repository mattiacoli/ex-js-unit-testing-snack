function getInitial(fullname) {
  const nome = fullname.split(' ')[0]
  const cognome = fullname.split(' ')[1]
  const iniziali = nome.charAt(0).toUpperCase() + cognome.charAt(0).toUpperCase()
  return iniziali
}


module.exports = { getInitial }