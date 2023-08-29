import axios from '../utils/apiClient'
const baseUrl = '/api/civs'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const getCiv = async (idnro) => {
  console.log("idnro: ", idnro)
  const res = await axios.get(baseUrl+'/'+idnro)
  return '1'
}

export default {getAll, getCiv}