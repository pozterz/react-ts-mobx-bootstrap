import axios from 'axios'
import userStore from '../stores/users'
import auth from '../services/auth'
import { env } from '../config'

export const login = ({ username, password }, callback = undefined) => {
  
  const api = axios.create({
		baseURL: env.getApiurl()
	})

	api.interceptors.request.use(config => {
		const token = auth.getToken()
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`
		}
		return config
  })

  userStore.logingin()

  return api
		.request({
			method: "POST",
			data: { username, password },
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
		// .then(data => {
    //   setTimeout(() => {
    //     userStore.setUser({
    //       name: 'POZTERZ',
    //       token: 'abc'
    //     })
    //   }, 4000)
    // })
    // .catch(err => {
    //   // handling error
    // })
}

export const logout = () => {
  userStore.resetUser()
}

export const setUser = (user) => {
  userStore.setUser(user)
}