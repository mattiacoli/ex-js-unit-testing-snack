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

function average(arr) {
  const media = arr.reduce((acc, num) => acc + num, 0) / arr.length
  return media
}



module.exports = { getInitial, createSlug, average }