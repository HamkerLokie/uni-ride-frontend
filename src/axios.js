import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000'
  // baseURL: 'https://attractive-shoe-tick.cyclic.app'
})

export default instance
