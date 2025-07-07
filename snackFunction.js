function getInitial(fullname) {
  const nome = fullname.split(' ')[0]
  const cognome = fullname.split(' ')[1]
  const iniziali = nome.charAt(0).toUpperCase() + cognome.charAt(0).toUpperCase()
  return iniziali
}

function createSlug(string) {
  if (!string) {
    throw new Error("Errore! la stringa non puo`essere vuota")
  }
  const slug = string.toLowerCase().replaceAll(' ', '-')
  return slug
}

function average(arr) {
  const media = arr.reduce((acc, num) => acc + num, 0) / arr.length
  return media
}

function isPalindrome(string) {
  return string.toLowerCase() === string.toLowerCase().split('').reverse().join('')
}

function findPostById(arr, id) {
  const post = arr.find(p => p.id === id)
  return post
}

function addPost(posts, newPost) {
  if (posts.some(post => post.id === newPost.id)) {
    throw new Error('Id già esistente')
  } else if (posts.some(post => post.slug === newPost.slug)) {
    throw new Error('Slug già esistente')
  }
  return posts.push(newPost)
}

function removePost(posts, post) {
  posts.splice(posts.indexOf(post), 1)
}


module.exports = { getInitial, createSlug, average, isPalindrome, findPostById, addPost, removePost }