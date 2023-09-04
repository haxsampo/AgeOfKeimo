import axios from 'axios'

/* let BACKEND = ''

if (process.env.NODE_ENV === 'development') {
  console.log("DEV ENV")
  BACKEND = process.env.REACT_APP_BACKEND_URL_DEV
} */

const BACKEND = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_BACKEND_URL_DEV
  : ''

console.log("config node.env", process.env.NODE_ENV)

const apiClient = axios.create({
  baseURL: BACKEND
})

export default apiClient