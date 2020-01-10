import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async newBlog => {
  const response = await axios.post(baseUrl, newBlog, { headers: { Authorization: token } })
  return response.data
}

const update = async blogToUpdate => {
  const response = await axios.put(`${ baseUrl }/${blogToUpdate.id}`,
    blogToUpdate, { headers: { Authorization: token } })
  return response.data
}

const remove = id => {
  const request = axios.delete(`${ baseUrl }/${id}`, { headers: { Authorization: token } })
  return request.then(response => response.data)
}

export default { getAll, create, update, remove, setToken }
