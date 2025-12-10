// import axios from 'axios'

// const API_URL = 'http://192.168.1.176:8080/items'

// export const getItems = () => {
//   return axios.get(API_URL)
// }

// export const searchItems = (name) => {
//   return axios.get(`${API_URL}/search`, { params: { name } })
// }

// export const createItem = (item) => {
//   return axios.post(API_URL, item)
// }

// export const deleteItem = (id) => {
//   return axios.delete(`${API_URL}/${id}`)
// }

import axios from 'axios'

// ใช้ environment variable หรือ fallback เป็น relative path
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