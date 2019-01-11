import axios from 'axios'
import { env } from '../config'
import auth from './auth'

const fetch = (method = 'get', endpoint = '/', body = {}, headers = {}, apiUrl = env.getApiurl()) => {
  const url = `${apiUrl}/${endpoint}`
  const options = {}
  const data = body
  const queryName = method === 'GET' ? 'params' : 'data'

  const api = axios.create({
    baseURL: url
  })

  api.interceptors.request.use(config => {
    const token = auth.getToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  })

  return api.request({
    method,
    url,
    [queryName]: data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    },
    ...options
  })
}

export default fetch
