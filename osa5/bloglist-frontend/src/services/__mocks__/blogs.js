const blogs = [{
  "title": "Go To Statement Considered Harmful",
  "author": "Edsger W. Dijkstra",
  "url": "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
  "likes": 5,
  "user": {
    "username": "root",
    "name": "Superuser",
    "id": "5e17c240e4571f2eaaee4ee6"
  },
  "id": "5e17c2a4e4571f2eaaee4ee7"
}, {
  "title": "Canonical string reduction",
  "author": "Edsger W. Dijkstra",
  "url": "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
  "likes": 12,
  "user": {
    "username": "root",
    "name": "Superuser",
    "id": "5e17c240e4571f2eaaee4ee6"
  },
  "id": "5e17c2cee4571f2eaaee4ee8"
}, {
  "title": "First class tests",
  "author": "Robert C. Martin",
  "url": "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html",
  "likes": 11,
  "user": {
    "username": "root",
    "name": "Superuser",
    "id": "5e17c240e4571f2eaaee4ee6"
  },
  "id": "5e17c2f3e4571f2eaaee4ee9"
}, {
  "title": "Type wars",
  "author": "Robert C. Martin",
  "url": "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
  "likes": 5,
  "user": {
    "username": "root",
    "name": "Superuser",
    "id": "5e17c240e4571f2eaaee4ee6"
  },
  "id": "5e17c30fe4571f2eaaee4eea"
}]

const getAll = () => Promise.resolve(blogs)
const setToken = newToken => newToken
export default {
  getAll,
  setToken
}
