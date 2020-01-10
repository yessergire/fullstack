const blogs = [{
  title: 'Mock blog 1',
  author: 'mock',
  url: 'http://localhost:3003/api/blogs/',
  likes: 1,
  user: {
    username: 'root',
    name: 'Superuser',
    id: '5c640423b3875d4ff79ddf88'
  },
  id: '5c64070deb9a9752b87f31ee'
}, {
  title: 'Mock blog 2',
  author: 'mock',
  url: 'http://localhost:3003/api/blogs/',
  likes: 1,
  user: {
    username: 'root',
    name: 'Superuser',
    id: '5c640423b3875d4ff79ddf88'
  },
  id: '5c640781eb9a9752b87f31f0'
}, {
  title: 'Mock blog 3',
  author: 'mock',
  url: 'http://localhost:3003/api/blogs/',
  likes: 1,
  user: {
    username: 'root',
    name: 'Superuser',
    id: '5c640423b3875d4ff79ddf88'
  },
  id: '5c64095d6e536f549a92ff3b'
}]

const getAll = () => {
  return Promise.resolve(blogs)
}

const setToken = newToken => {
  return newToken
}

export default {
  getAll,
  setToken
}