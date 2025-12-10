import axios from 'axios'

const API_URL = 'http://localhost:8080/items'

export const getItems = () => {
  return axios.get(API_URL)
}

export const searchItems = (name) => {
  return axios.get(`${API_URL}/search`, { params: { name } })
}

export const createItem = (item) => {
  return axios.post(API_URL, item)
}

export const deleteItem = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}
