import axios from 'axios'
// adios
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

export const getItems = () => {
  return axios.get(`${API_BASE_URL}/items`)
}

export const searchItems = (name) => {
  return axios.get(`${API_BASE_URL}/items/search`, { params: { name } })
}

export const createItem = (item) => {
  return axios.post(`${API_BASE_URL}/items`, item)
}

export const deleteItem = (id) => {
  return axios.delete(`${API_BASE_URL}/items/${id}`)
}
