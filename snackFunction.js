function getInitial(fullname) {
  const nome = fullname.split(' ')[0]
  const cognome = fullname.split(' ')[1]
  const iniziali = nome.charAt(0).toUpperCase() + cognome.charAt(0).toUpperCase()
  return iniziali
}

function createSlug(string) {
  const slug = string.toLowerCase().replaceAll(' ', '-')
  return slug
}



module.exports = { getInitial, createSlug }